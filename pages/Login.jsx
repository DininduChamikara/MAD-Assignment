import { useState } from "react";
import { Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import PageWrapper from "../components/Layout/PageWrapper";
import Main from "../components/Main/Main";
import { LoginUser } from "../core/auth";
import Register from "./Register";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <PageWrapper>
      <Text>Login Screen</Text>

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
          LoginUser(email, password)
            .then((userCredential) => {
              navigation.navigate(Main);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        Login
      </Button>

      <Button
        onPress={() => {
          navigation.navigate(Register);
        }}
      >
        Register page
      </Button>
    </PageWrapper>
  );
};

export default Login;
