import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import ROUTES from "./ROUTES";

const AddMovie = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Add Movie Screen</Text>
      <Button onPress={() => navigation.navigate(ROUTES.HOME)} mode="outlined">
        Go to Home
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddMovie;
