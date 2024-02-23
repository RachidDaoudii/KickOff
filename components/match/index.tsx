import { View, Modal, TouchableOpacity } from "react-native";
import MatchItem from "./matchItem";
import { useFixturesQuery } from "@/redux/service/Match/MatchApi";
import { useEffect, useState } from "react";
import COLORS from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Matchs() {
  const { isLoading, data, isSuccess, isFetching, refetch } =
    useFixturesQuery("");
  const [matchs, setMatchs] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (isSuccess) {
      setMatchs(data.data);
    }
  }, [isFetching]);

  useEffect(() => {
    refetch();
  }, []);
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
      {matchs.map((league) => (
        <TouchableOpacity
          onPress={() => {
            console.log("ffff", league);
            setModalVisible(true);
          }}
        >
          <MatchItem match={league} favorite={true} />
        </TouchableOpacity>
      ))}
      <View>{model()}</View>
    </View>
  );
}
