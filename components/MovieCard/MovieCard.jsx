import * as React from "react";
import { View } from "react-native";
import { Avatar, Button, Card, IconButton, Text } from "react-native-paper";
import CardMenu from "../CardMenu/CardMenu";

const MovieCard = ({ cardData }) => {
  const [wishlistAdded, setWishlistAdded] = React.useState(
    cardData ? cardData.wishlistAdded : false
  );

  const [dropdownOpened, setDropdownOpened] = React.useState(false);

  return (
    <>
      <Card
        style={{ width: "100%", marginVertical: 5 }}
        onLongPress={() => {
          setDropdownOpened(true);
        }}
        onPress={() => {
          if(dropdownOpened){
            setDropdownOpened(false);
          }
        }}
      >
        <Card.Title
          title={cardData ? cardData.title : ""}
          subtitle={cardData ? cardData.year : ""}
          left={(props) => (
            <Avatar.Icon
              {...props}
              icon={
                cardData && cardData.watched
                  ? "checkbox-marked-circle-outline"
                  : "eye-circle-outline"
              }
            />
          )}
          right={(props) => (
            <IconButton
              {...props}
              icon={wishlistAdded ? "cards-heart" : "cards-heart-outline"}
              onPress={() => {
                setWishlistAdded(!wishlistAdded);
              }}
            />
          )}
        />
        <Card.Content>
          <Text style={{ textAlign: "center" }} variant="bodyMidum">
            Updated on : {cardData ? cardData.updatedDate : ""}
          </Text>
        </Card.Content>
      </Card>
      {dropdownOpened && <CardMenu setDropdownOpened={setDropdownOpened} />}
    </>
  );
};

export default MovieCard;
