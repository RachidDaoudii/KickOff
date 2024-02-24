import COLORS from "@/constants/Colors";

import { useEffect, useState } from "react";
import { View, Text, Image, Modal, TouchableOpacity } from "react-native";
import PlayersItem from "./playerItem";
import Ionicons from "@expo/vector-icons/Ionicons";
import ServicePlayer from "@/service/servicePlayer";
import { useSelector } from "react-redux";
export default function Players() {
  const [modalVisible, setModalVisible] = useState(false);
  // const { players, setPlayer } = ServicePlayer();

  const { players } = useSelector((state: any) => state.players);

  useEffect(() => {
    console.log(players);
  }, []);

  function model() {
    return (
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            top: "10%",
            backgroundColor: COLORS.transparent,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: 100,
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
          <View style={{ height: 100 }}></View>
        </View>
      </Modal>
    );
  }

  return (
    <View>
      {players && players ? (
        players.map((item: any) => (
          <TouchableOpacity
            onPress={() => {
              console.log("item", item);
              setModalVisible(true);
            }}
          >
            <PlayersItem player={item} />
          </TouchableOpacity>
        ))
      ) : (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "95%",
            height: 50,
            backgroundColor: COLORS.blueman,
            marginRight: 10,
            marginLeft: 10,
            borderRadius: 20,
            marginTop: 30,
          }}
        >
          <Text style={{ fontSize: 20, color: COLORS.white }}>Not Found</Text>
        </View>
      )}
      <View>{model()}</View>
    </View>
  );
}
