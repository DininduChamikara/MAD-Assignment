import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import PageWrapper from "../components/Layout/PageWrapper";
import SearchBarComponent from "../components/SearchBar/SearchBar";
import SnackBarComponent from "../components/SnackBar/SnackBar";
import WishlistCard from "../components/WishlistCard/WishlistCard";
import { auth } from "../core/config";
import { Read } from "../core/databaseCrud";

const WishList = ({ navigation }) => {
  const [movieData, setMovieData] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      const respose = Read(auth ? auth.currentUser.uid : "");
      respose
        .then((data) => {
          const filteredWishlist = data.filter(item => item.wishlistAdded === true);
          setMovieData(filteredWishlist ? filteredWishlist : []);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    return unsubscribe;
  }, [navigation, auth.currentUser]);

  useEffect(() => {
    const filteredData = movieData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filteredData);
  }, [searchQuery, movieData]);

  return (
    <PageWrapper>
      <SearchBarComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ScrollView style={{ width: "100%" }}>
        {filteredMovies.map((item, index) => (
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
