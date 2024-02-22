import Header from "@/components/header";
import PlayersI from "@/components/players";
import COLORS from "@/constants/Colors";
import { useState } from "react";
import { Text, View, ImageBackground, Image, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";

export default function Players() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <View>
      <View>
        <Header />
      </View>
      <ScrollView
        style={{
          marginBottom: 65,
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.blueman,
            width: "100%",
            height: 100,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: COLORS.white,
              padding: 5,
              marginLeft: 20,
              marginTop: 20,
              fontWeight: "600",
            }}
          >
            Players Centre
          </Text>
        </View>
        <View>
          <View
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Text
              style={{
                color: COLORS.blueman,
                fontWeight: "600",
                fontSize: 20,
              }}
            >
              All players
            </Text>
            <View style={{ width: "50%" }}>
              <Searchbar
                style={{
                  width: "100%",
                }}
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
              />
            </View>
          </View>
        </View>
        <View>
          <PlayersI />
        </View>
      </ScrollView>
    </View>
  );
}
