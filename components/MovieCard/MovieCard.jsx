import * as React from "react";
import { View } from "react-native";
import { Avatar, Button, Card, IconButton, Text } from "react-native-paper";
import { SnackBarContext } from "../../contexts/SnackBarContext";
import ROUTES from "../../pages/ROUTES";
import CardMenu from "../CardMenu/CardMenu";

const MovieCard = ({ cardData, navigation }) => {
  const [wishlistAdded, setWishlistAdded] = React.useState(
    cardData ? cardData.wishlistAdded : false
  );

  const [dropdownOpened, setDropdownOpened] = React.useState(false);

  const { setSnackbarVisible, setSnackbarMessage } =
    React.useContext(SnackBarContext);

  return (
    <>
      <Card
        style={{ width: "100%", marginVertical: 5 }}
        onLongPress={() => {
          setDropdownOpened(true);
        }}
        onPress={() => {
          if (dropdownOpened) {
            setDropdownOpened(false);
          } else {
            navigation.navigate(ROUTES.ADD_MOVIE, {
              movieName: `${cardData ? cardData.title : ""}`,
              movieYear: `${cardData ? cardData.year : ""}`,
            });
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
            <View style={{ display: "flex", flexDirection: "row" }}>
              <IconButton
                {...props}
                icon={wishlistAdded ? "cards-heart" : "cards-heart-outline"}
                onPress={() => {
                  if (wishlistAdded) {
                    setSnackbarMessage("Removed from wishlist");
                    setSnackbarVisible(true);
                  } else {
                    setSnackbarMessage("Added to wishlist");
                    setSnackbarVisible(true);
                  }
                  setWishlistAdded(!wishlistAdded);
                }}
              />
              <IconButton
                icon="book-search-outline"
                size={25}
                onPress={() => {
                  navigation.navigate(ROUTES.SEARCH_MOVIE.ALL, {
                    movieName: `${cardData ? cardData.title : ""}`,
                  });
                }}
              />
            </View>
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
