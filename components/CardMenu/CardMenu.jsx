import * as React from "react";
import { View } from "react-native";
import { Menu } from "react-native-paper";

const CardMenu = ({ setDropdownOpened }) => (
  <View style={{ flex: 1, backgroundColor: "white" }}>
    <Menu.Item
      style={{ maxWidth: "100%" }}
      leadingIcon="checkbox-marked-circle-outline"
      onPress={() => {
        setDropdownOpened(false);
      }}
      title="Marked as watched"
    />
    <Menu.Item
      style={{ maxWidth: "100%" }}
      leadingIcon="delete-outline"
      onPress={() => {
        setDropdownOpened(false);
      }}
      title="Delete the movie record"
    />
  </View>
);

export default CardMenu;
