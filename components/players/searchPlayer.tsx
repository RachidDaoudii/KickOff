import { View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import ServicePlayer from "@/service/servicePlayer";
import { useSearchQuery } from "@/redux/service/players/playerApi";
import { useEffect } from "react";
import { StatePlayer } from "@/redux/features/player/playerSlice";
import { useDispatch } from "react-redux";

export default function SearchPlayer() {
  const dispatch = useDispatch();
  const { searchQuery, setSearchQuery, setPlayer } = ServicePlayer();
  const { data, isSuccess } = useSearchQuery(searchQuery);

  useEffect(() => {
    if (isSuccess) {
      setPlayer(data.data);
      dispatch(StatePlayer(data.data));
    }
  }, [searchQuery, isSuccess]);

  return (
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
  );
}
