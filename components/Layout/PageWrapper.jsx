import { StatusBar, StyleSheet, View } from "react-native";

const PageWrapper = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F7F7",
    display: "flex",
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default PageWrapper;
