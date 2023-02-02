import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Snackbar } from "react-native-paper";

const SnackBarComponent = () => {
  const [visible, setVisible] = React.useState(true);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
        Hey there! I'm a Snackbar.
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    width: '100%',
  },
});

export default SnackBarComponent;
