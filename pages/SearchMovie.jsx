import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { ActivityIndicator, Searchbar, Text } from "react-native-paper";
import PageWrapper from "../components/Layout/PageWrapper";
import MovieCard from "../components/MovieCard";
import { API_LINK } from "../keys";
import ROUTES from "./ROUTES";

const windowWidth = Dimensions.get("window").width;

const SearchMovie = ({ navigation, route }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState(
    "divergent"
    // route.params.movieName || "divergent"
  );

  const fetchData = useCallback((query) => {
    setIsLoading(true);
    fetch(`${API_LINK}&s=${query}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search))
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  //effect will run only when focus screen, not for every key stroke to save api requests ):
  useFocusEffect(
    useCallback(() => {
      if (route.params) {
        setSearchText(route.params.movieName);
        fetchData(route.params.movieName);
      } else {
        fetchData(searchText);
      }
    }, [route])
  );

  const handleClick = () => fetchData(searchText);

  return (
    <PageWrapper>
      <View style={styles.container}>
        <Searchbar
          style={styles.search}
          value={searchText}
          onChangeText={(value) => setSearchText(value)}
          onSubmitEditing={handleClick}
        />
        {!movies && <Text style={styles.text}>No Results Found !</Text>}
        {isLoading ? (
          <ActivityIndicator
            animating
            color="red"
            size={40}
            style={styles.loader}
          />
        ) : (
          <FlatList
            data={movies}
            renderItem={({ item }) => (
              <MovieCard
                name={item.Title}
                photo={item.Poster}
                year={item.Year}
                onPress={() =>
                  navigation.navigate(ROUTES.SEARCH_MOVIE.DETAIL, {
                    imdbID: item.imdbID,
                  })
                }
              />
            )}
            keyExtractor={(item) => item.imdbID}
          />
        )}
      </View>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex: 1,
    justifyContent: "space-between",
  },
  search: {
    width: windowWidth - 10,
    margin: 12,
  },
  loader: {
    flex: 1,
  },
  text: {
    width: windowWidth - 10,
    padding: 10,
    flex: 1,
    fontSize: 20,
    textAlign: "center",
  },
});

export default SearchMovie;
