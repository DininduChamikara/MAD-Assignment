import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import PageWrapper from "../components/Layout/PageWrapper";
import SearchBarComponent from "../components/SearchBar/SearchBar";
import SnackBarComponent from "../components/SnackBar/SnackBar";
import WishlistCard from "../components/WishlistCard/WishlistCard";
import { useMovies } from "../contexts/MovieProvider";
import { auth } from "../core/config";

const WishList = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { movies, refreshMovies } = useMovies();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      refreshMovies();
    });
    return unsubscribe;
  }, [navigation, auth.currentUser]);

  return (
    <PageWrapper>
      <SearchBarComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ScrollView style={{ width: "100%" }}>
        {movies
          .filter((item) => item.wishlistAdded === true)
          .map((item, index) => (
            <View key={index}>
              <WishlistCard navigation={navigation} cardData={item} />
            </View>
          ))}
      </ScrollView>
      <SnackBarComponent />
    </PageWrapper>
  );
};

export default WishList;
