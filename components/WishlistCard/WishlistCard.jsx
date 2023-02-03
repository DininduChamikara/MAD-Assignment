import * as React from "react";
import { View } from "react-native";
import { Avatar, Card, IconButton, Text } from "react-native-paper";
import { SnackBarContext } from "../../contexts/SnackBarContext";
import ROUTES from "../../pages/ROUTES";

const WishlistCard = ({ cardData, navigation }) => {
  const [wishlistAdded, setWishlistAdded] = React.useState(
    cardData ? cardData.wishlistAdded : false
  );

  const { setSnackbarVisible, setSnackbarMessage } =
    React.useContext(SnackBarContext);

  return (
    <>
      <Card
        style={{ width: "100%", marginVertical: 5 }}
        onPress={() => {
          navigation.navigate(ROUTES.ADD_MOVIE, {
            movieName: `${cardData ? cardData.title : ""}`,
            movieYear: `${cardData ? cardData.year : ""}`,
          });
        }}
      >
        <Card.Title
          title={cardData ? cardData.title : ""}
          subtitle={cardData ? cardData.year : ""}
          left={(props) => <Avatar.Icon {...props} icon="cards-heart" />}
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
                  navigation.navigate(ROUTES.SEARCH_MOVIE, {
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
    </>
  );
};

export default WishlistCard;
