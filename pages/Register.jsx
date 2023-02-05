import { Text } from "react-native";
import { Button } from "react-native-paper";
import PageWrapper from "../components/Layout/PageWrapper";
import Main from "../components/Main/Main";
import Login from "./Login";
import ROUTES from "./ROUTES";

const Register = ({ navigation }) => {
  return (
    <PageWrapper>
      <Text>Register Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate(Main);
        }}
      >
        Main
      </Button>
      <Button
        onPress={() => {
          navigation.navigate(Login);
        }}
      >
        Login
      </Button>
    </PageWrapper>
  );
};

export default Register;
