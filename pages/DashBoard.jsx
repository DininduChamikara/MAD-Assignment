import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
// import { Button, useTheme } from "react-native-paper";
import DialogAlert from "../components/DialogAlert/DialogAlert";
import PageWrapper from "../components/Layout/PageWrapper";
import MovieCard from "../components/MovieCard/MovieCard";
import SearchBarComponent from "../components/SearchBar/SearchBar";
import SnackBarComponent from "../components/SnackBar/SnackBar";
import DashboardCard from "../components/DashboardCard/DashboardCard";
import { useMovies } from "../contexts/MovieProvider";
import { auth } from "../core/config";
import moment from "moment";

const dashboardData = [
  {
    title: "Avatar",
    year: 2009,
    updatedDate: "30/01/2023",
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
    updatedDate: "04/02/2023",
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
    watched: false,
    wishlistAdded: false,
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    year: 2005,
    updatedDate: "01/02/2023",
    watched: true,
    wishlistAdded: false,
  },
];

// Find No. of Films
// const length = dashboardData.length;

// Find Data for No of Films Chart
// const date = [];
// const titleCount = [];

// const dataMap = new Map();

// dashboardData.forEach((data) => {
//   const { updatedDate, title } = data;
//   if (!dataMap.has(updatedDate)) {
//     dataMap.set(updatedDate, { count: 0, date: updatedDate });
//   }
//   dataMap.get(updatedDate).count++;
// });

// const dataArray = Array.from(dataMap.values());

// dataArray.forEach((data) => {
//   date.push(data.date);
//   titleCount.push(data.count);
// });

// Count No of Wishlist Added Films
// let wishlistAddedTrueCount = 0;
// for (let i = 0; i < dashboardData.length; i++) {
//   if (dashboardData[i].wishlistAdded === true) {
//     wishlistAddedTrueCount++;
//   }
// }

// Count No of Watched Films
let watchedCount = 0;
for (let i = 0; i < dashboardData.length; i++) {
  if (dashboardData[i].watched === true) {
    watchedCount++;
  }
}

const DashBoard = ({ navigation }) => {
  const { movies, refreshMovies } = useMovies();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filmCount, setFilmCount] = useState(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      refreshMovies();
    });
    return unsubscribe;
    // loadData();
  }, [navigation, auth.currentUser]);

  // Find No. of Films
  const length = movies.length;

  // Find Data for No of Films Chart
  const date = [];
  const titleCount = [];
  const dataMap = new Map();

  // convert date into month, date, year format
  movies.forEach((data) => {
    const { updatedDate, title } = data;
    const dateObj = moment(updatedDate, "MMMM Do, YYYY h:mmA");
    const month = dateObj.format("MMM");
    const date = dateObj.format("D");
    const year = dateObj.format("YYYY");
    const formattedDate = `${month},${date}th ${year}`;

    if (!dataMap.has(formattedDate)) {
      dataMap.set(formattedDate, { count: 0, date: formattedDate });
    }
    dataMap.get(formattedDate).count++;
  });

  const dataArray = Array.from(dataMap.values());

  dataArray.forEach((data) => {
    date.push(data.date);
    titleCount.push(data.count);
  });

  // Count No of Wishlist Added Films
  let wishlistAddedTrueCount = 0;
  let wishlistAddedFilms = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].wishlistAdded === true) {
      wishlistAddedFilms.push(movies[i].title);
      wishlistAddedTrueCount++;
    }
  }

  // Count No of Watched Films
  let watchedCount = 0;
  let watchedFilms = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].watched === true) {
      watchedFilms.push(movies[i].title);
      watchedCount++;
    }
  }

  return (
    <PageWrapper>
      <View
        style={{
          padding: 20,
          backgroundColor: "#f2f2f2",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Dashboard</Text>
      </View>
      <ScrollView style={{ width: "100%" }}>
        <View>
          <DashboardCard
            chart={true}
            navigation={navigation}
            date={date}
            titleCount={titleCount}
            title="No. of Films"
            chartTitle="No. of Films vs Updated Date"
            count={length}
          />

          {/* No of Wishlist Films Card */}
          <DashboardCard
            chart={false}
            navigation={navigation}
            title="No. of Wishlist Films"
            count={wishlistAddedTrueCount}
          />

          {/* No of Watched Films Card */}
          <DashboardCard
            chart={false}
            navigation={navigation}
            title="No. of Watched Films"
            count={watchedCount}
          />
        </View>
      </ScrollView>
      <DialogAlert />
      <SnackBarComponent />
    </PageWrapper>
  );
};

export default DashBoard;
