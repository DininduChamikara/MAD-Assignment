import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Main from "./components/Main/Main";
import { auth } from "./core/config";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { SnackBarContext } from "./contexts/SnackBarContext";


const Stack = createNativeStackNavigator();

function App() {
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();

  // Handle user state change
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  React.useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}

export default () => {
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  return (
    <NavigationContainer>
       <SnackBarContext.Provider
          value={{
            snackbarVisible,
            setSnackbarVisible,
            snackbarMessage,
            setSnackbarMessage,
          }}
        ><App/></SnackBarContext.Provider>
      
    </NavigationContainer>

  );
}
