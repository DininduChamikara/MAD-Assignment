import { ScrollView, Text, View } from "react-native";
import PageWrapper from "../components/Layout/PageWrapper";
import SearchBarComponent from "../components/SearchBar/SearchBar";
import SnackBarComponent from "../components/SnackBar/SnackBar";
import WishlistCard from "../components/WishlistCard/WishlistCard";

const movieCardsData = [
  {
    title: "Avatar",
    year: 2009,
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
];

const WishList = ({ navigation }) => {
  return (
    <PageWrapper>
      <SearchBarComponent />
      <ScrollView style={{ width: "100%" }}>
        {movieCardsData.map((item, index) => (
          <View key={index}>
            <WishlistCard navigation={navigation} cardData={item} />
          </View>
        ))}
      </ScrollView>
      <SnackBarComponent/>
    </PageWrapper>
  );
};

export default WishList;
