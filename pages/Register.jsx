import * as React from "react";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Button, HelperText, TextInput } from "react-native-paper";
import PageWrapper from "../components/Layout/PageWrapper";
import Main from "../components/Main/Main";
import SnackBarComponent from "../components/SnackBar/SnackBar";
import { SnackBarContext } from "../contexts/SnackBarContext";
import { RegisterUser } from "../core/auth";
import { validateEmail, validatePassword } from "../validations";
import Login from "./Login";

const Register = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setSnackbarVisible, setSnackbarMessage } =
    React.useContext(SnackBarContext);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);

  const [isConfirmPasswordTouched, setIsConfirmPasswordTouched] =
    useState(false);

  const isConfirmPasswordValid = confirmPassword === password;

  return (
    <ScrollView style={{ width: "100%" }}>
      <PageWrapper>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{ fontSize: 30, fontWeight: "bold", marginTop: 55 }}
            variant="displayLarge"
          >
            {"My Movie Collection"}
          </Text>
          <Image
            source={require("../assets/movie.png")}
            style={{ width: 150, height: 150 }}
          />
        </View>

        <Text
          style={{ fontSize: 24, fontWeight: "semi-bold", marginBottom: 10 }}
          variant="headlineMedium"
        >
          {"Create New Account"}
        </Text>

        <TextInput
          style={{ width: "100%", marginVertical: 15 }}
          label="Email"
          value={email}
          onBlur={() => setIsEmailTouched(true)}
          onChangeText={(text) => {
            setEmail(text);
            setIsEmailValid(validateEmail(text));
          }}
        />
        {!isEmailValid && isEmailTouched && (
          <HelperText type="error" visible>
            Enter Valid Email
          </HelperText>
        )}

        <TextInput
          style={{ width: "100%", marginVertical: 15 }}
          secureTextEntry={true}
          label="Password"
          value={password}
          onBlur={() => {
            setIsPasswordTouched(true);
          }}
          onChangeText={(text) => {
            setPassword(text);
            setIsPasswordValid(validatePassword(text));
          }}
        />
        {!isPasswordValid && isPasswordTouched && (
          <HelperText type="error" visible>
            Password should be minimum 4 charactors and maximum 12 charactors
          </HelperText>
        )}

        <TextInput
          style={{ width: "100%", marginVertical: 15 }}
          label="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onBlur={() => {
            setIsConfirmPasswordTouched(true);
          }}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        {!isConfirmPasswordValid && isConfirmPasswordTouched && (
          <HelperText type="error" visible>
            Passwords does not match
          </HelperText>
        )}

        <Button
          loading={isLoading}
          disabled={!isEmailValid && !isPasswordValid & !isConfirmPasswordValid}
          mode="contained"
          style={{ width: "100%", marginVertical: 15, paddingVertical: 8 }}
          onPress={() => {
            setIsLoading(true);
            RegisterUser(email, password)
              .then((userCredential) => {
                navigation.navigate(Main);
              })
              .catch((error) => {
                console.log(error);
                setSnackbarMessage("Register Failed Try Again!");
                setSnackbarVisible(true);
              })
              .finally(() => {
                setIsLoading(false);
              });
          }}
        >
          Create Account
        </Button>

        <Text variant="">{"Already have an account? "}</Text>
        <Button
          onPress={() => {
            navigation.navigate(Login);
          }}
        >
          Login here
        </Button>
        <SnackBarComponent />
      </PageWrapper>
    </ScrollView>
  );
};

export default Register;
