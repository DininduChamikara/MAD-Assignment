import { StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const TabIcon = ({ name, color }) => (
  <AntDesign name={name} size={30} color={color} style={styles.iconStyle} />
);

const styles = StyleSheet.create({
  iconStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
});

export default TabIcon;
