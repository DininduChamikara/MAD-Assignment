import { useState } from "react";
import { Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import PageWrapper from "../components/Layout/PageWrapper";
import Main from "../components/Main/Main";
import { RegisterUser } from "../core/auth";
import Login from "./Login";
import ROUTES from "./ROUTES";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <PageWrapper>
      <Text>Register Screen</Text>

      <TextInput
        style={{ width: "100%" }}
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={{ width: "100%" }}
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button
        onPress={() => {
          RegisterUser(email, password)
            .then((userCredential) => {
              navigation.navigate(Main);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        Register
      </Button>

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
