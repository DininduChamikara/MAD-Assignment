import { StyleSheet, View } from "react-native";

const PageWrapper = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding:5,
    paddingTop:50,
    backgroundColor: "#F7F7F7",
  },
});

export default PageWrapper;
