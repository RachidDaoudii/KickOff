import { useEffect, useState } from "react";
import {
  usePlayersQuery,
  useSearchQuery,
} from "@/redux/service/players/playerApi";
import { TouchableOpacity, View } from "react-native";

const ServicePlayer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [players, setPlayer] = useState([]);
  useEffect(() => {
    console.log(players);
  }, [players, setPlayer]);

  return {
    searchQuery,
    setSearchQuery,
    players,
    setPlayer,
  };
};

export default ServicePlayer;
