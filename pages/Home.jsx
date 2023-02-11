import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import DialogAlert from "../components/DialogAlert/DialogAlert";
import ExitMenu from "../components/ExitMenu/ExitMenu";
import PageWrapper from "../components/Layout/PageWrapper";
import MovieCard from "../components/MovieCard/MovieCard";
import PageHeader from "../components/PageHeader/PageHeader";
import SearchBarComponent from "../components/SearchBar/SearchBar";
import SnackBarComponent from "../components/SnackBar/SnackBar";
import { useMovies } from "../contexts/MovieProvider";
import { auth } from "../core/config";

const Home = ({ navigation }) => {
  const { movies, refreshMovies } = useMovies();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [exitMenuOpen, setExitMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      refreshMovies();
    });
    return unsubscribe;
  }, [navigation, auth.currentUser]);

  return (
    <>
      {exitMenuOpen && (
        <View style={{ position: "absolute", top: 100, right: 5 }}>
          <ExitMenu navigation={navigation} />
        </View>
      )}
      <PageWrapper>
        <PageHeader
          exitMenuOpen={exitMenuOpen}
          setExitMenuOpen={setExitMenuOpen}
        />
        <SearchBarComponent
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <ScrollView style={{ width: "100%" }}>
          {movies
            .filter((item) =>
              item.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((item, index) => (
              <View key={index}>
                <MovieCard navigation={navigation} cardData={item} />
              </View>
            ))}
        </ScrollView>
        <DialogAlert />
        <SnackBarComponent />
      </PageWrapper>
    </>
  );
};

export default Home;
