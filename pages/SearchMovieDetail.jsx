import { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { ActivityIndicator, Card, Chip } from "react-native-paper";
import PageWrapper from "../components/Layout/PageWrapper";
import { API_LINK } from "../keys";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SearchMovieDetail = ({ route, navigation }) => {
  const { imdbID } = route.params;
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_LINK}&i=${imdbID}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <PageWrapper>
        <ActivityIndicator />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <ScrollView>
        <View style={styles.container}>
          <Card style={styles.card}>
            <Card.Title title={movie?.Title} subtitle={movie?.Year} />
            <Card.Cover source={{ uri: movie?.Poster }} style={styles.image} />
            <Card.Content>
              <Text style={styles.title}>{movie?.Plot}</Text>
            </Card.Content>
            <ScrollView horizontal={true}>
              <View style={styles.chips}>
                <Chip icon="information">{movie?.Rated}</Chip>
                <Chip icon="update">{movie?.Released}</Chip>
                <Chip icon="timeline-check">{movie?.Runtime}</Chip>
                <Chip icon="format-list-numbered">{movie.imdbRating}</Chip>
              </View>
            </ScrollView>
          </Card>
        </View>
      </ScrollView>
    </PageWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    display: "flex",
    flex: 1,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
  },
  image: {
    height: windowHeight / 1.5,
  },
  card: {
    padding: 5,
  },
  chips: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 3,
  },
});

export default SearchMovieDetail;
