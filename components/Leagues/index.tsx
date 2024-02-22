import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import LeagueItem from "./leagueItem";
import { useLeaguesQuery } from "@/redux/service/Leagues/leagueApi";

export default function Leagues() {
  const [leagues, setLeagues] = useState([]);
  const { isLoading, isSuccess, data, refetch } = useLeaguesQuery("");

  useEffect(() => {
    if (isSuccess) {
      setLeagues(data.data);
    }
  });

  useEffect(() => {
    refetch();
  }, []);

  return (
    <View
      style={{
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 5,
      }}
    >
      <FlatList
        data={leagues}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log("item", item);
            }}
          >
            <LeagueItem league={item} />
          </TouchableOpacity>
        )}
      />
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
