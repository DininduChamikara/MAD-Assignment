import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";
import Home from "./pages/Home";
import ROUTES from "./pages/ROUTES";
import theme from "./theme/theme";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          {/*Add new screens here*/}
          <Stack.Screen name={ROUTES.HOME} component={Home} />
          <Stack.Screen name={ROUTES.ADD_MOVIE} component={AddMovie} />
          <Stack.Screen name={ROUTES.EDIT_MOVIE} component={EditMovie} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
