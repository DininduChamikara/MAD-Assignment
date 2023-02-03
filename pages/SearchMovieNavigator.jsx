import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTES from "./ROUTES";
import SearchMovie from "./SearchMovie";
import SearchMovieDetail from "./SearchMovieDetail";

const Stack = createNativeStackNavigator();

const SearchMovieNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.SEARCH_MOVIE.ALL}
        component={SearchMovie}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={ROUTES.SEARCH_MOVIE.DETAIL}
        component={SearchMovieDetail}
      />
    </Stack.Navigator>
  );
};

export default SearchMovieNavigator;
