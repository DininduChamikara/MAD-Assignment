import * as React from "react";
import { View } from "react-native";
import { Avatar, Card, IconButton, Text } from "react-native-paper";
import { useMovies } from "../../contexts/MovieProvider";
import { SnackBarContext } from "../../contexts/SnackBarContext";
import { Update } from "../../core/databaseCrud";
import ROUTES from "../../pages/ROUTES";

const WishlistCard = ({ cardData, navigation }) => {
  const [wishlistAdded, setWishlistAdded] = React.useState(
    cardData ? cardData.wishlistAdded : false
  );

  const { setSnackbarVisible, setSnackbarMessage } =
    React.useContext(SnackBarContext);

  const { refreshMovies } = useMovies();

  return (
    <>
      <Card
        style={{
          width: "100%",
          marginVertical: 5,
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
                  if (cardData.wishlistAdded) {
                    Update(
                      cardData.id,
                      cardData.title,
                      cardData.year,
                      false
                    ).then(() => {
                      refreshMovies();
                      setSnackbarMessage("Removed from wishlist");
                      setSnackbarVisible(true);
                    });
                  } else {
                    Update(
                      cardData.id,
                      cardData.title,
                      cardData.year,
                      true
                    ).then(() => {
                      refreshMovies();
                      setSnackbarMessage("Added to wishlist");
                      setSnackbarVisible(true);
                    });
                  }
                  setWishlistAdded(!wishlistAdded);
                }}
              />
              <IconButton
                icon="book-search-outline"
                size={25}
                onPress={() => {
                  navigation.navigate(ROUTES.SEARCH_MOVIE.MAIN, {
                    params: { movieName: `${cardData ? cardData.title : ""}` },
                    screen: ROUTES.SEARCH_MOVIE.ALL,
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
