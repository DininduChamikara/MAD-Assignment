import * as React from "react";
import { Avatar, Card, IconButton, Text } from "react-native-paper";

const MovieCard = ({cardData}) => {
  const [wishlistAdded, setWishlistAdded] = React.useState(cardData ? cardData.wishlistAdded : false);
  
  return (
    <Card style={{ width: "100%", marginVertical:5 }}>
      <Card.Title
        title={cardData ? cardData.title : ""}
        subtitle={cardData ? cardData.year : ""}
        left={(props) => <Avatar.Icon {...props} icon={cardData && cardData.watched ? "checkbox-marked-circle-outline" : "eye-circle-outline" } />}
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
        <Text style={{textAlign:'center'}} variant="bodyMidum">Updated on : {cardData ? cardData.updatedDate : ""}</Text>
      </Card.Content>
    </Card>
  );
};

export default MovieCard;
