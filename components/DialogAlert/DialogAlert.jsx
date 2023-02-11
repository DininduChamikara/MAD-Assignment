import * as React from "react";
import { View } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";

const DialogAlert = ({ visible, setVisible, setDropdownOpened, message }) => {
  //   const [visible, setVisible] = React.useState(true);

  const showDialog = () => setVisible(true);

  const hideDialog = () => {
    setVisible(false);
    setDropdownOpened(false);
  };

  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Alert</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">{message}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default DialogAlert;
