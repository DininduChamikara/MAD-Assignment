import * as React from "react";
// import { LineChart } from "react-native-chart-kit";
import { View } from "react-native";
import { Dimensions } from "react-native";
import LineChart from "react-native-chart-kit/dist/line-chart";
import { Avatar, Button, Card, IconButton, Text } from "react-native-paper";

import { SnackBarContext } from "../../contexts/SnackBarContext";
import ROUTES from "../../pages/ROUTES";
import CardMenu from "../CardMenu/CardMenu";

const MovieCard = ({
  chart,
  dashBoardData,
  count,
  titleCount,
  date,
  navigation,
  title,
  chartTitle,
  listData,
}) => {
  const [dropDown, setDropDown] = React.useState(false);

  //   const [dropdownOpened, setDropdownOpened] = React.useState(false);

  const lineChartData = {
    labels: date,
    datasets: [
      {
        data: titleCount,
        strokeWidth: 2,
      },
    ],
  };

  const screenWidth = Dimensions.get("window").width;

  const { setSnackbarVisible, setSnackbarMessage } =
    React.useContext(SnackBarContext);

  return (
    <>
      <Card
        style={{ width: "100%", margin: 5 }}
        onPress={() => {
          if (dropDown) {
            setDropDown(false);
          } else {
            setDropDown(true);
          }
        }}
      >
        <Card.Title
          title={title ? title : ""}
          right={(props) => (
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text
                style={{ fontSize: 40, fontWeight: "bold", paddingRight: 20 }}
              >
                {count ? count : ""}
              </Text>
              <IconButton
                {...props}
                icon={dropDown ? "chevron-up" : "chevron-down"}
                onPress={() => {
                  if (dropDown) {
                    setDropDown(false);
                  } else {
                    setDropDown(true);
                  }
                }}
              />
            </View>
          )}
        />
      </Card>
      {/* Chart */}
      {dropDown && chart ? (
        <Card style={{ width: "100%", margin: 5 }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 16 }}>{chartTitle ? chartTitle : ""}</Text>
          </View>
          <LineChart
            data={lineChartData}
            width={screenWidth - 16} // adjust the width of the chart
            height={220}
            withShadow={false}
            withDots={true}
            chartConfig={{
              backgroundColor: "transparent",
              backgroundGradientFrom: "#3E8FEE",
              backgroundGradientTo: "#00D4FF",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 10,
              },
              propsForDots: {
                r: "3",
                strokeWidth: "2",
                stroke: "#FFFFFF",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 10,
            }}
          />
        </Card>
      ) : null}
      {dropDown && !chart ? (
        <Card
          style={{ width: "100%", margin: 5 }}
          onPress={() => {
            if (dropDown) {
              setDropDown(false);
            } else {
              setDropDown(true);
            }
          }}
        >
          <View style={{ padding: 16, paddingLeft: 20, paddingRight: 30 }}>
            {listData.map((movie, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>
                  {index + 1}. {movie.title}
                </Text>
                <Text style={{ fontSize: 16 }}>{movie.year}</Text>
              </View>
            ))}
          </View>
        </Card>
      ) : null}
    </>
  );
};

export default MovieCard;
