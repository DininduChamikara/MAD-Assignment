import { ScrollView, Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";
import PageWrapper from "../components/Layout/PageWrapper";
import MovieCard from "../components/MovieCard/MovieCard";
import SearchBarComponent from "../components/SearchBar/SearchBar";
import ROUTES from "./ROUTES";

const movieCardsData = [
  {
    title: "Avatar - The way of water",
    year: 2023,
    updatedDate: "31/01/2023",
    watched: true,
    wishlistAdded: true,
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    year: 2005,
    updatedDate: "01/02/2023",
    watched: false,
    wishlistAdded: false,
  },
  {
    title: "Avatar - The way of water",
    year: 2023,
    updatedDate: "31/01/2023",
    watched: true,
    wishlistAdded: true,
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    year: 2005,
    updatedDate: "01/02/2023",
    watched: false,
    wishlistAdded: false,
  },
  // {
  //   title: "Avatar - The way of water",
  //   year: 2023,
  //   updatedDate: "31/01/2023",
  //   watched: true,
  //   wishlistAdded: true,
  // },
  // {
  //   title: "Harry Potter and the Goblet of Fire",
  //   year: 2005,
  //   updatedDate: "01/02/2023",
  //   watched: false,
  //   wishlistAdded: false,
  // },
  // {
  //   title: "Avatar - The way of water",
  //   year: 2023,
  //   updatedDate: "31/01/2023",
  //   watched: true,
  //   wishlistAdded: true,
  // },
  // {
  //   title: "Harry Potter and the Goblet of Fire",
  //   year: 2005,
  //   updatedDate: "01/02/2023",
  //   watched: false,
  //   wishlistAdded: false,
  // },
];

const Home = ({ navigation }) => {
  //to use default theme configured in theme.js
  const { spacing } = useTheme();

  return (
    <PageWrapper>
      {/* <Text>Home</Text> */}
      <SearchBarComponent />

      <ScrollView style={{width:'100%'}}>
        {movieCardsData.map((item) => (
          <MovieCard cardData={item} />
        ))}
      </ScrollView>

      {/* <Button
        mode="outlined"
        onPress={() => navigation.navigate(ROUTES.ADD_MOVIE)}
        style={{ padding: spacing.padding, margin: spacing.margin }}
      >
        Go to Add Movie
      </Button> */}
    </PageWrapper>
  );
};

export default Home;
