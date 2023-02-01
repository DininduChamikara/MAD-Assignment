import { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { ActivityIndicator, Searchbar, Text } from "react-native-paper";
import PageWrapper from "../components/Layout/PageWrapper";
import MovieCard from "../components/MovieCard";
import { API_LINK } from "../keys";

const windowWidth = Dimensions.get("window").width;

const SearchMovie = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("divergent");

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_LINK}&s=divergent`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search))
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleClick = () => {
    setIsLoading(true);
    fetch(`${API_LINK}&s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search))
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
  };

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
