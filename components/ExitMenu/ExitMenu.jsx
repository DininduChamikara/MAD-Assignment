import * as React from "react";
import { View } from "react-native";
import { Menu } from "react-native-paper";
import { LogoutUser } from "../../core/auth";
import Login from "../../pages/Login";

const ExitMenu = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        borderRadius: 5,
        height: 60,
        zIndex: 20,
        backgroundColor: "#fff",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <Menu.Item
        style={{ width: 150, fontWeight: "bold" }}
        leadingIcon="exit-to-app"
        onPress={() => {
          LogoutUser()
            .then(() => {
              navigation.navigate(Login);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
        title="Logout"
      />
    </View>
  );
};

export default ExitMenu;
