import COLORS from "@/constants/Colors";
import { usePlayersQuery } from "@/redux/service/players/playerApi";
import { useEffect, useState } from "react";
import { View, Text, Image, Modal, TouchableOpacity } from "react-native";
import PlayersItem from "./playerItem";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Players() {
  const [players, setPlayer] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const { data, isSuccess, isLoading, refetch } = usePlayersQuery("");
  useEffect(() => {
    if (isSuccess) {
      setPlayer(data.data);
    }
  }, [isSuccess]);

  useEffect(() => {
    refetch();
  }, [isSuccess]);
  function model() {
    return (
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            top: "10%",
            backgroundColor: COLORS.blueman,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: "50%",
          }}
        >
          <View style={{ padding: 5, margin: 5 }}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Ionicons
                size={30}
                color={COLORS.white}
                name="arrow-back-outline"
              ></Ionicons>
            </TouchableOpacity>
          </View>
          <View></View>
        </View>
      </Modal>
    );
  }

  return (
    <View>
      {players.map((item) => (
        <TouchableOpacity
          onPress={() => {
            console.log("item", item);
            setModalVisible(true);
          }}
        >
          <PlayersItem player={item} />
        </TouchableOpacity>
      ))}
      <View>{model()}</View>
    </View>
  );
}
