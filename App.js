import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import TabIcon from "./components/TabIcon";

import { SnackBarContext } from "./contexts/SnackBarContext";

import AddMovie from "./pages/AddMovie";
import DashBoard from "./pages/DashBoard";
import EditMovie from "./pages/EditMovie";
import Home from "./pages/Home";
import ROUTES from "./pages/ROUTES";
import SearchMovieNavigator from "./pages/SearchMovieNavigator";
import WishList from "./pages/WishList";
import theme from "./theme/theme";

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  const [snackbarVisible, setSnackbarVisible] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  return (
    <PaperProvider theme={theme}>
      <SnackBarContext.Provider value={{snackbarVisible, setSnackbarVisible, snackbarMessage, setSnackbarMessage}}>
       <NavigationContainer>
        <Tab.Navigator
          screenOptions={screenOptionsSetter}
          activeColor={"#2588F6"}
          barStyle={styles.container}
          shifting={true}
        >
          <Tab.Screen name={ROUTES.HOME} component={Home} />
          <Tab.Screen name={ROUTES.ADD_MOVIE} component={AddMovie} />
          {/* <Tab.Screen name={ROUTES.EDIT_MOVIE} component={EditMovie} /> */}
          <Tab.Screen
            name={ROUTES.SEARCH_MOVIE.MAIN}
            component={SearchMovieNavigator}
          />
          <Tab.Screen name={ROUTES.DASHBOARD} component={DashBoard} />
          <Tab.Screen name={ROUTES.WISHLIST} component={WishList} />
        </Tab.Navigator>
      </NavigationContainer>
      </SnackBarContext.Provider>
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
        return <TabIcon color={color} name="hearto" />;
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
