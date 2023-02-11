import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
// import { Button, useTheme } from "react-native-paper";
import DialogAlert from "../components/DialogAlert/DialogAlert";
import PageWrapper from "../components/Layout/PageWrapper";
import MovieCard from "../components/MovieCard/MovieCard";
import SearchBarComponent from "../components/SearchBar/SearchBar";
import SnackBarComponent from "../components/SnackBar/SnackBar";
import DashboardCard from "../components/DashboardCard/DashboardCard";

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
const length = dashboardData.length;

// Find Data for No of Films Chart
const date = [];
const titleCount = [];

const dataMap = new Map();

dashboardData.forEach((data) => {
  const { updatedDate, title } = data;
  if (!dataMap.has(updatedDate)) {
    dataMap.set(updatedDate, { count: 0, date: updatedDate });
  }
  dataMap.get(updatedDate).count++;
});

const dataArray = Array.from(dataMap.values());

dataArray.forEach((data) => {
  date.push(data.date);
  titleCount.push(data.count);
});

// Count No of Wishlist Added Films
let wishlistAddedTrueCount = 0;
for (let i = 0; i < dashboardData.length; i++) {
  if (dashboardData[i].wishlistAdded === true) {
    wishlistAddedTrueCount++;
  }
}

// Count No of Watched Films
let watchedCount = 0;
for (let i = 0; i < dashboardData.length; i++) {
  if (dashboardData[i].watched === true) {
    watchedCount++;
  }
}

const DashBoard = ({ navigation }) => {
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
          {/* No of Films Card */}
          <DashboardCard
            chart={true}
            navigation={navigation}
            date={date}
            titleCount={titleCount}
            title="No. of Films"
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
