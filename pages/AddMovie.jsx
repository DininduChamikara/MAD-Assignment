import { useRoute } from "@react-navigation/native";
import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import PageWrapper from "../components/Layout/PageWrapper";
import { Create, Update } from "../core/databaseCrud";
import ROUTES from "./ROUTES";

const AddMovie = ({ navigation }) => {
  const route = useRoute();

  const clearParams = () => {
    navigation.setParams({ id: "", movieName: "", movieYear: null });
  };

  const [movieName, setMovieName] = React.useState("");
  const [movieYear, setMovieYear] = React.useState();
  const [id, setId] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (route.params) {
      setMovieName(route.params.movieName);
      setMovieYear(route.params.movieYear);
      setId(route.params.id);
    }
  }, [route.params]);

  return (
    <PageWrapper>
      <View style={styles.container}>
        <Text
          style={{ fontSize: 30, fontWeight: "bold", marginTop: 15 }}
          variant="displayLarge"
        >
          {id === "" ? "Add New Movie" : "Edit Movie Details"}
        </Text>
        <Image source={require("../assets/Add.png")} style={styles.image} />

        <TextInput
          style={{ width: "100%", marginVertical: 5 }}
          label="Movie Name"
          value={movieName}
          onChangeText={(text) => setMovieName(text)}
          right={<TextInput.Icon icon="movie-open-star" />}
        />

        <TextInput
          style={{ width: "100%", marginVertical: 5 }}
          label="Year"
          value={movieYear}
          onChangeText={(text) => setMovieYear(text)}
          right={<TextInput.Icon icon="calendar" />}
          keyboardType="numeric"
        />
        <Button
          loading={isLoading}
          mode="contained"
          style={{
            width: "100%",
            marginVertical: 40,
            paddingVertical: 8,
          }}
          onPress={() => {
            setIsLoading(true);
            if (id === "") {
              Create(movieName, movieYear)
                .then(() => {
                  navigation.navigate(ROUTES.HOME);
                  setMovieName("");
                  setMovieYear();
                  setId("");
                })
                .finally(() => {
                  setIsLoading(false);
                });
            } else {
              Update(id, movieName, movieYear)
                .then(() => {
                  navigation.navigate(ROUTES.HOME);
                  setMovieName("");
                  setMovieYear();
                  setId("");
                })
                .finally(() => {
                  setIsLoading(false);
                });
            }
            clearParams();
          }}
        >
          Save Details
        </Button>
      </View>
    </PageWrapper>
  );
};

export default AddMovie;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    height: "100%",
    paddingTop: 30,
  },
  image: { width: 150, height: 150, marginVertical: 60 },
});
