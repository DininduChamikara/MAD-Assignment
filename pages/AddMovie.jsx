import { useRoute } from "@react-navigation/native";
import * as React from "react";
import { View } from "react-native";
import { IconButton, Text, TextInput } from "react-native-paper";
import PageWrapper from "../components/Layout/PageWrapper";
import { Create, Update } from "../core/databaseCrud";
import Home from "./Home";

const AddMovie = ({ navigation }) => {
  const route = useRoute();
  // console.log(route.params)

  const clearParams = () => {
    navigation.setParams({ id: "", movieName: "", movieYear: null });
  };

  const [movieName, setMovieName] = React.useState("");
  const [movieYear, setMovieYear] = React.useState();
  const [id, setId] = React.useState("");

  React.useEffect(() => {
    if (route.params) {
      setMovieName(route.params.movieName);
      setMovieYear(route.params.movieYear);
      setId(route.params.id);
    }
  }, [route.params]);

  return (
    <PageWrapper>
      <View
        style={{
          paddingHorizontal: 5,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text variant="headlineMedium">{"Add/Edit Movie"}</Text>

        <IconButton
          icon="check-circle-outline"
          size={30}
          onPress={() => {
            if (id === "") {
              Create(movieName, movieYear).then(() => {
                navigation.navigate(Home);
                setMovieName("");
                setMovieYear();
                setId("");
              });
            } else {
              Update(id, movieName, movieYear).then(() => {
                navigation.navigate(Home);
                setMovieName("");
                setMovieYear();
                setId("");
              });
            }
            clearParams();
          }}
        />
      </View>

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
    </PageWrapper>
  );
};

export default AddMovie;
