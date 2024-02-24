import COLORS from "@/constants/Colors";

import { useEffect, useState } from "react";
import { View, Text, Image, Modal, TouchableOpacity } from "react-native";
import PlayersItem from "./playerItem";
import Ionicons from "@expo/vector-icons/Ionicons";
import ServicePlayer from "@/service/servicePlayer";
import { useSelector } from "react-redux";
export default function Players() {
  const [modalVisible, setModalVisible] = useState(false);
  const [playerDetails, setPlayerDetails] = useState({});

  const { players } = useSelector((state: any) => state.players);

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
            height: "auto",
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
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "95%",
                height: "60%",
                borderColor: COLORS.white,
                borderWidth: 1,
                marginRight: 10,
                marginLeft: 10,
                borderRadius: 20,
                marginTop: 10,
              }}
            >
              <View>
                <Image
                  source={{
                    uri: playerDetails?.image_path,
                  }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                    marginTop: 30,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{ marginTop: 20, fontSize: 15, color: COLORS.white }}
                >
                  {playerDetails?.position?.name
                    ? playerDetails?.position?.name
                    : "Midfielder"}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    color: COLORS.white,
                  }}
                >
                  Full Name{" : "}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                    color: COLORS.white,
                  }}
                >
                  {playerDetails?.display_name}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <Text
                  style={{ marginTop: 20, fontSize: 15, color: COLORS.white }}
                >
                  Date of birth{" : "}
                </Text>
                <Text
                  style={{ marginTop: 20, fontSize: 15, color: COLORS.white }}
                >
                  {" "}
                  {playerDetails?.date_of_birth}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <Text
                  style={{ marginTop: 10, fontSize: 15, color: COLORS.white }}
                >
                  Gender{" : "}
                  {playerDetails?.gender}
                </Text>
                <Text
                  style={{ marginTop: 10, fontSize: 15, color: COLORS.white }}
                >
                  Weight{" : "}
                  {playerDetails?.weight}
                </Text>
                <Text
                  style={{ marginTop: 10, fontSize: 15, color: COLORS.white }}
                >
                  Height{" : "}
                  {playerDetails?.weight}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Text
                  style={{ marginTop: 10, fontSize: 15, color: COLORS.white }}
                >
                  nationality{" : "}
                </Text>
                <Image
                  source={{
                    uri: playerDetails?.nationality?.image_path,
                  }}
                  style={{
                    marginTop: 10,
                    width: 20,
                    height: 10,
                    top:7
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <View>
      {players && players ? (
        players.map((item: any) => (
          <TouchableOpacity
            onPress={async () => {
              setModalVisible(true);
              await setPlayerDetails(item);
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
