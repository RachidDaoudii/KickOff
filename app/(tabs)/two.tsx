import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image ,ImageBackground } from "react-native";
import Header from "@/components/header";
import COLORS from "@/constants/Colors";
import Leagues from "@/components/Leagues";
import MatchLive from "@/components/matchLive";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function two() {
  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <ImageBackground source={require("@/assets/images/image.jpg")}
      style={{
        height: 950,
      }}>

      <View>
        <Leagues />
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 5,
          marginLeft: 20,
        }}
      >
        <Text>
          <Ionicons
            name="ellipse"
            color={COLORS.redop}
            style={{ fontWeight: "800" }}
            size={15}
          />
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 10,
            color: COLORS.white,
          }}
        >
          Match Live
        </Text>
      </View>
      <View>
        <MatchLive />
      </View>
      <View 
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
      
      }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 20,
            color: COLORS.white,
          }}
        >
          Trending
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 20,
            color: COLORS.redop,
          }}
        >
          See all
        </Text>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
