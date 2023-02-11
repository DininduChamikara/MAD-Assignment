import { useState } from "react";
import { Text } from "react-native";
import * as React from "react";
import { Button } from "react-native-paper";
import PageWrapper from "../components/Layout/PageWrapper";
import Main from "../components/Main/Main";
import Login from "./Login";
import ROUTES from "./ROUTES";
import { IconButton, TextInput } from "react-native-paper";
import { View } from "react-native";
import { Image } from 'react-native';
import { RegisterUser } from "../core/auth";

const Register = ({ navigation }) => {

  const [email, setEmail] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [secureTextEntry, setSecureTextEntry] = useState(true);

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
        <Button 
        icon={{ source: 'arrow-left', direction: 'auto' }}
        onPress={() => {
          RegisterUser(email, password)
            .then((userCredential) => {
              navigation.navigate(Main);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      ></Button>
      </View>

      <View style={{ alignItems: 'center' }}>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginTop:15}} variant="displayLarge">{"My Movie Collection"}</Text>
        <Image source={require('../assets/movie.png')}  style={{ width: 150, height: 150 }}/>
      </View>

      <Text style={{fontSize: 24, fontWeight: 'semi-bold', marginBottom: 10}} variant="headlineMedium">{"Create New Account"}</Text>

    
      <TextInput
        style={{ width: "100%", marginVertical: 15 }}
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        
      />

      <TextInput
        style={{ width: "100%", marginVertical: 15 }}
        secureTextEntry={true}
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TextInput
        style={{ width: "100%", marginVertical: 15 }}
        label="Confirm Password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />

          <Button
            icon="plus"
            mode="contained"
            style={{ width: "100%", marginVertical: 15, paddingVertical:8}}
            onPress={() => console.log('Button Pressed')}>
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
    </PageWrapper>
  );
};

export default Register;