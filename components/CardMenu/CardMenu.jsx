import * as React from "react";
import { View } from "react-native";
import { Menu } from "react-native-paper";
import { SnackBarContext } from "../../contexts/SnackBarContext";
import { Delete, Update } from "../../core/databaseCrud";

const DELETE_MESSAGE = "Movie is Deleted!";
const WATCHED_MESSAGE = "Movie marked as watched!";
const NOT_WATCHED_MESSAGE = "Movie removed from watched!";

const WATCHED_TITLE = "Remove from watched!";
const NOT_WATCHED_TITLE = "Marked as watched!";

const CardMenu = ({ setDropdownOpened, cardData }) => {
  const { setSnackbarVisible, setSnackbarMessage } =
    React.useContext(SnackBarContext);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Menu.Item
        style={{ maxWidth: "100%" }}
        leadingIcon="checkbox-marked-circle-outline"
        onPress={() => {
          if (cardData) {
            Update(
              cardData.id,
              cardData.title,
              cardData.year,
              cardData.wishlistAdded,
              !cardData.watched
            ).then(() => {
              if (cardData.watched) {
                setSnackbarMessage(NOT_WATCHED_MESSAGE);
                setDropdownOpened(false);
                setSnackbarVisible(true);
              } else {
                setSnackbarMessage(WATCHED_MESSAGE);
                setDropdownOpened(false);
                setSnackbarVisible(true);
              }
            });
          }
        }}
        title={cardData && cardData.watched ? WATCHED_TITLE : NOT_WATCHED_TITLE}
      />
      <Menu.Item
        style={{ maxWidth: "100%" }}
        leadingIcon="delete-outline"
        onPress={() => {
          Delete(cardData.id).then(() => {
            setSnackbarMessage(DELETE_MESSAGE);
            setDropdownOpened(false);
            setSnackbarVisible(true);
          });
        }}
        title="Delete the movie record"
      />
    </View>
  );
};

export default CardMenu;
