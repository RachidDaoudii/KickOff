import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MatchLiveItem from "./matchItem";
import { useFixturesQuery } from "@/redux/service/Match/MatchApi";
import { useEffect, useState } from "react";
export default function Matchs() {
  const { isLoading, data, isSuccess, isFetching, refetch } =
    useFixturesQuery("");
  const [matchs, setMatchs] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setMatchs(data.data);
    }
  }, [isFetching]);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <View>
      {matchs.map((league) => (
        <TouchableOpacity
          onPress={() => {
            console.log("item", league);
          }}
        >
          <MatchLiveItem match={league} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
