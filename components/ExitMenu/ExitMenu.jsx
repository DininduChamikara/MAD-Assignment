import * as React from "react";
import { View } from "react-native";
import { Menu } from "react-native-paper";
import { LogoutUser } from "../../core/auth";
import Login from "../../pages/Login";

const ExitMenu = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        zIndex: 20,
      }}
    >
      <Menu.Item
        style={{ width: 130 }}
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
