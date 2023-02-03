import { useRoute } from "@react-navigation/native";
import * as React from "react";
import { View } from "react-native";
import { IconButton, Text, TextInput } from "react-native-paper";
import DialogAlert from "../components/DialogAlert/DialogAlert";
import PageWrapper from "../components/Layout/PageWrapper";

const AddMovie = ({ navigation }) => {
  const route = useRoute();
  // console.log(route.params)

  const clearParams = () => {
    navigation.setParams({ movieName: null, movieYear: null });
  };

  const [movieName, setMovieName] = React.useState("");
  const [movieYear, setMovieYear] = React.useState();

  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     // The screen is focused
  //     // Call any action
  //   });
  //   return unsubscribe;
  // }, [navigation]);

  React.useEffect(() => {
    if (route.params) {
      setMovieName(route.params.movieName);
      setMovieYear(route.params.movieYear);
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
            // After the save function
            setMovieName("")
            setMovieYear();
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
