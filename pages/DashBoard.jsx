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
    title: "No. of Films",
    count: 15,
  },
  {
    title: "No. of Films in Wishlist",
  },
];

const DashBoard = ({ navigation }) => {
  // const { spacing } = useTheme();
  return (
    <PageWrapper>
      {/* <SearchBarComponent /> */}
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
        {dashboardData.map((item, index) => (
          <View key={index}>
            {/* <MovieCard navigation={navigation} cardData={item} /> */}
            <DashboardCard navigation={navigation} dashboardData={item} />
          </View>
        ))}
      </ScrollView>
      <DialogAlert />
      <SnackBarComponent />
    </PageWrapper>
  );
};

export default DashBoard;
