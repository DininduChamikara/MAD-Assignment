import { Text } from "react-native";
import { Button, useTheme } from "react-native-paper";
import PageWrapper from "../components/Layout/PageWrapper";
import ROUTES from "./ROUTES";

const Home = ({ navigation }) => {
  //to use default theme configured in theme.js
  const { spacing } = useTheme();

  return (
    <PageWrapper>
      <Text>Home</Text>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate(ROUTES.ADD_MOVIE)}
        style={{ padding: spacing.padding, margin: spacing.margin }}
      >
        Go to Add Movie
      </Button>
    </PageWrapper>
  );
};

export default Home;
