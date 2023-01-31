import { Dimensions, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MovieCard = ({ name, photo, year }) => {
  return (
    <Card style={styles.container}>
      <Card.Cover
        style={styles.photo}
        source={{
          uri: photo,
        }}
      />
      <Text style={styles.title}>
        {name} ({year})
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    elevation: 0,
    margin: 5,
    width: windowWidth - 5,
    height: windowHeight / 1.7,
    shadowColor: "#fff",
    backgroundColor: "#fff",
  },
  photo: {
    height: windowHeight / 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 2,
  },
});

export default MovieCard;
