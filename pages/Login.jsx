import { Text } from "react-native";
import { Button } from "react-native-paper";
import PageWrapper from "../components/Layout/PageWrapper";
import Main from "../components/Main/Main";
import Register from "./Register";
import ROUTES from "./ROUTES";

const Login = ({ navigation }) => {
  return (
    <PageWrapper>
      <Text>Login Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate(Main);
        }}
      >
        Main
      </Button>
      <Button
        onPress={() => {
          navigation.navigate(Register);
        }}
      >
        Register
      </Button>
    </PageWrapper>
  );
};

export default Login;
