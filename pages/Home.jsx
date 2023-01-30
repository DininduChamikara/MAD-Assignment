import { StyleSheet, Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";
import ROUTES from "./ROUTES";

const Home = ({ navigation }) => {
  //to use default theme configured in theme.js
  const { spacing } = useTheme();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate(ROUTES.ADD_MOVIE)}
        style={{ padding: spacing.padding, margin: spacing.margin }}
      >
        Go to Add Movie
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate(ROUTES.EDIT_MOVIE)}
        style={{ padding: spacing.padding, margin: spacing.margin }}
      >
        Go to Edit Movie
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

export default Home;
