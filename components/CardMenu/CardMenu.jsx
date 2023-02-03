import * as React from "react";
import { View } from "react-native";
import { Menu } from "react-native-paper";
import DialogAlert from "../DialogAlert/DialogAlert";

const DELETE_MESSAGE = "Movie is Deleted!";
const WATCHED_MESSAGE = "The movie marked as watched!"

const CardMenu = ({ setDropdownOpened }) => {
  const [alertMessage, setAlertMessage] = React.useState("")
  const [visible, setVisible] = React.useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Menu.Item
        style={{ maxWidth: "100%" }}
        leadingIcon="checkbox-marked-circle-outline"
        onPress={() => {
          setAlertMessage(WATCHED_MESSAGE);
          setVisible(true);
          // setDropdownOpened(false);
        }}
        title="Marked as watched"
      />
      <Menu.Item
        style={{ maxWidth: "100%" }}
        leadingIcon="delete-outline"
        onPress={() => {
          // setDropdownOpened(false);
          setAlertMessage(DELETE_MESSAGE);
          setVisible(true);
        }}
        title="Delete the movie record"
      />
      <DialogAlert visible={visible} setVisible={setVisible} setDropdownOpened={setDropdownOpened} message={alertMessage} />
    </View>
  );
};

export default CardMenu;
