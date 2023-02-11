import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Snackbar } from "react-native-paper";
import { SnackBarContext } from "../../contexts/SnackBarContext";

const SnackBarComponent = () => {
  const {
    snackbarVisible,
    setSnackbarVisible,
    snackbarMessage,
    setSnackbarMessage,
  } = React.useContext(SnackBarContext);

  const onDismissSnackBar = () => {
    setSnackbarVisible(false);
    setSnackbarMessage("");
  };

  return (
    <View style={styles.container}>
      <Snackbar visible={snackbarVisible} onDismiss={onDismissSnackBar}>
        {snackbarMessage ? snackbarMessage : ""}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
  },
});

export default SnackBarComponent;
