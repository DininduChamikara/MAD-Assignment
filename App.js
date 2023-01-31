import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import TabIcon from "./components/TabIcon";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";
import Home from "./pages/Home";
import ROUTES from "./pages/ROUTES";
import theme from "./theme/theme";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={screenOptionsSetter}
          activeColor={"blue"}
          barStyle={styles.container}
          shifting={true}
        >
          {/*Add new screens here*/}
          <Tab.Screen
            name={ROUTES.HOME}
            component={Home}
            options={{
              tabBarColor: "#fff",
            }}
          />
          <Tab.Screen name={ROUTES.ADD_MOVIE} component={AddMovie} />
          <Tab.Screen name={ROUTES.EDIT_MOVIE} component={EditMovie} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const screenOptionsSetter = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    switch (route.name) {
      case ROUTES.HOME:
        return <TabIcon color={color} name="home" />;
      case ROUTES.DASHBOARD:
        return <TabIcon color={color} name="dashboard" />;
      case ROUTES.ADD_MOVIE:
        return <TabIcon color={color} name="pluscircleo" />;
      case ROUTES.EDIT_MOVIE:
        return <TabIcon color={color} name="edit" />;
      case ROUTES.WISHLIST:
        return <TabIcon color={color} name="list" />;
      default:
        return <TabIcon color={color} name="search1" />;
    }
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 65,
    display: "flex",
    justifyContent: "center",
  },
});
