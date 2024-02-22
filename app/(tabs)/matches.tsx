import Header from "@/components/header";
import COLORS from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import {
  Dimensions,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import Matchs from "@/components/match";

export default function Match() {
  return (
    <ImageBackground
      source={require("@/assets/images/image.jpg")}
      style={{
        height: 950,
      }}
    >
      <View>
        <Header />
      </View>
      <ScrollView
        style={{
          marginBottom: 60,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 20,
              color: COLORS.white,
            }}
          >
            Matchs
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 10,
            marginBottom: 110,
          }}
        >
          <Matchs />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
