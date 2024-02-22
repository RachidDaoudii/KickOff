import COLORS from "@/constants/Colors";
import { usePlayersQuery } from "@/redux/service/players/playerApi";
import { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import PlayersItem from "./playerItem";

export default function Players() {
  const [players, setPlayer] = useState([]);
  const { data, isSuccess, isLoading, refetch } = usePlayersQuery("");
  useEffect(() => {
    if (isSuccess) {
      setPlayer(data.data);
    }
  }, [isSuccess]);

  useEffect(() => {
    refetch();
  }, [isSuccess]);
  console.log(players);

  return (
    <View>
      {players.map((item) => (
        <TouchableOpacity
          onPress={() => {
            console.log("item", item);
          }}
        >
          <PlayersItem player={item} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

// <TouchableOpacity
// onPress={() => {
//   console.log("item", item);
// }}
// >
// <PlayersItem player={item} />
// </TouchableOpacity>
