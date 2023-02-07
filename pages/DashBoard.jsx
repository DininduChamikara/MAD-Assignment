import { Text } from "react-native";
import { Button } from "react-native-paper";
import PageWrapper from "../components/Layout/PageWrapper";
import { LogoutUser } from "../core/auth";
import Login from "./Login";

const DashBoard = ({ navigation }) => {
  return (
    <PageWrapper>
      <Text>DashBoard Screen</Text>
      <Button
        onPress={() => {
          LogoutUser()
            .then(() => {
              navigation.navigate(Login);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        Logout
      </Button>
    </PageWrapper>
  );
};

export default DashBoard;
