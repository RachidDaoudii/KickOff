import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
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
  const [matchDetails, setMatchDetails] = useState({
    name: "",
    participants: [
      {
        name: "",
        image_path: "",
        meta: {
          location: "",
        },
      },
    ],
    venue: {
      name: "",
      capacity: 0,
      image_path: "",
    },
  });
  useEffect(() => {
    if (isSuccess) {
      setMatchs(data.data);
    }
  }, [isFetching]);

  useEffect(() => {
    refetch();
  }, []);

  console.log(matchDetails);

  function model() {
    return (
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <ImageBackground
          source={require("@/assets/images/image.jpg")}
          style={{
            flex: 1,
            top: "10%",
            backgroundColor: COLORS.blueman,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: "100%",
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
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            <View
              style={{
                padding: 5,
                alignItems: "center",
                justifyContent: "center",
                margin: 5,
                width: "100%",
                height: 200,
                marginTop: 10,
                overflow: "hidden",
                borderColor: COLORS.white,
                borderWidth: 1,
                borderRadius: 10,
              }}
            >
              <View style={styles.container}>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <Text style={{ color: COLORS.white, fontSize: 15 }}>
                    {matchDetails.name}
                  </Text>
                  <Text style={{ color: COLORS.white, fontSize: 15 }}>
                    Groupe A
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    padding: 10,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{ uri: matchDetails.participants[0]?.image_path }}
                      style={{ width: 90, height: 90, borderRadius: 20 }}
                    />
                    <Text style={{ color: COLORS.white, fontSize: 17 }}>
                      {matchDetails.participants[0]?.name}
                    </Text>
                  </View>
                  <Text style={{ color: COLORS.white, fontSize: 25 }}>
                    {matchDetails?.leg}
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{ uri: matchDetails.participants[1]?.image_path }}
                      style={{ width: 90, height: 90, borderRadius: 20 }}
                    />
                    <Text style={{ color: COLORS.white, fontSize: 17 }}>
                      {matchDetails.participants[1]?.name}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                borderColor: COLORS.white,
                borderWidth: 1,
                width: "100%",
                borderRadius: 20,
                padding: 15,
                marginTop: 20,
              }}
            >
              {matchDetails.participants.map((i, a) => (
                <View key={i.id}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <Text
                      style={{
                        color: COLORS.white,
                        fontSize: 15,
                        textAlign: "center",
                      }}
                    >
                      Team{++a}
                    </Text>
                    <Text style={{ color: COLORS.white, fontSize: 15 }}>
                      {i.name}
                    </Text>
                    <Text style={{ color: COLORS.white, fontSize: 15 }}>
                      {i.meta.location}
                    </Text>
                  </View>
                </View>
              ))}
              <View>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 15,
                    left: 110,
                    marginTop: 20,
                  }}
                >
                  Capacity stade : {matchDetails.venue?.capacity}
                </Text>
                <View>
                  <Image
                    style={{
                      width: "100%",
                      height: 200,
                      borderRadius: 30,
                      marginTop: 20,
                    }}
                    source={{ uri: matchDetails.venue.image_path }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </Modal>
    );
  }

  return (
    <View>
      {matchs.map((match) => (
        <TouchableOpacity
          key={match?.id}
          onPress={async () => {
            await setMatchDetails(match);
            setModalVisible(true);
          }}
        >
          <MatchItem match={match} favorite={true} />
        </TouchableOpacity>
      ))}
      <View>{model()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    width: 350,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  container: {
    borderRadius: 10,
    overflow: "hidden",
  },
});
