import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { useTheme } from "react-native-paper";
import DialogAlert from "../components/DialogAlert/DialogAlert";
import PageWrapper from "../components/Layout/PageWrapper";
import MovieCard from "../components/MovieCard/MovieCard";
import SearchBarComponent from "../components/SearchBar/SearchBar";
import SnackBarComponent from "../components/SnackBar/SnackBar";
import { SnackBarContext } from "../contexts/SnackBarContext";
import { auth, currentUser } from "../core/config";
import { Read } from "../core/databaseCrud";
// import dotenv from  'dotenv'

// const movieCardsData = [
//   {
//     title: "Avatar",
//     year: 2009,
//     updatedDate: "31/01/2023",
//     watched: true,
//     wishlistAdded: true,
//   },
//   {
//     title: "Harry Potter and the Goblet of Fire",
//     year: 2005,
//     updatedDate: "01/02/2023",
//     watched: false,
//     wishlistAdded: false,
//   },
//   {
//     title: "Avatar - The way of water",
//     year: 2023,
//     updatedDate: "31/01/2023",
//     watched: true,
//     wishlistAdded: true,
//   },
//   {
//     title: "Harry Potter and the Goblet of Fire",
//     year: 2005,
//     updatedDate: "01/02/2023",
//     watched: false,
//     wishlistAdded: false,
//   },
// ];

const Home = ({ navigation }) => {
  //to use default theme configured in theme.js
  const { spacing } = useTheme();

  const [movieData, setMovieData] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const { snackbarVisible } = React.useContext(SnackBarContext);

  const [searchQuery, setSearchQuery] = React.useState('');


  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // The screen is focused
      // Call any action
      const respose = Read(auth ? auth.currentUser.uid : "");
      respose
        .then((data) => {
          setMovieData(data ? data : []);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    return unsubscribe;
  }, [navigation, currentUser]);

  useEffect(() => {
    const filteredData = movieData.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredMovies(filteredData);
  }, [searchQuery, movieData])

  return (
    <PageWrapper>
      <SearchBarComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ScrollView style={{ width: "100%" }}>
        {filteredMovies.map((item, index) => (
          <View key={index}>
            <MovieCard navigation={navigation} cardData={item} />
          </View>
        ))}
      </ScrollView>
      <DialogAlert />
      <SnackBarComponent />
    </PageWrapper>
  );
};

export default Home;
