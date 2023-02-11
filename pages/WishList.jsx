import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { ActivityIndicator, Text } from "react-native-paper";
import PageWrapper from "../components/Layout/PageWrapper";
import SearchBarComponent from "../components/SearchBar/SearchBar";
import SnackBarComponent from "../components/SnackBar/SnackBar";
import WishlistCard from "../components/WishlistCard/WishlistCard";
import { useMovies } from "../contexts/MovieProvider";
import { auth } from "../core/config";

const WishList = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { movies, refreshMovies, isLoading } = useMovies();

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
        {isLoading && (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <ActivityIndicator style={{ paddingVertical: 10 }} />
            <Text style={{ fontWeight: "bold" }}>
              Hang On..! We're getting latest data
            </Text>
          </View>
        )}
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
