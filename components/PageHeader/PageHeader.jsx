import * as React from "react";
import { View } from "react-native";
import { Avatar, IconButton, Text } from "react-native-paper";

const PageHeader = ({ setExitMenuOpen, exitMenuOpen }) => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingRight: 1,
        marginVertical: 5,
      }}
    >
      <Avatar.Icon size={40} icon="movie-open-check" />
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Movies Collection
      </Text>
      <IconButton
        icon="dots-vertical"
        size={30}
        onPress={() => {
          setExitMenuOpen(!exitMenuOpen);
        }}
      />
    </View>
  );
};

export default PageHeader;
