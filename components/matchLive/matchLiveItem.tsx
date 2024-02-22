import COLORS from "@/constants/Colors";
import { Text, View, Image, ImageBackground, StyleSheet } from "react-native";

export default function MatchLiveItem({ match }: any) {
  return (
    <View>
      <View
        style={{
          padding: 5,
          alignItems: "center",
          justifyContent: "center",
          margin: 5,
          width: 350,
          height: 200,
          marginTop: 10,
          overflow: "hidden",
          borderColor:COLORS.white,
          borderWidth:1,
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
              UEFA champions league
            </Text>
            <Text style={{ color: COLORS.white, fontSize: 15 }}>Groupe A</Text>
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
                source={require("@/assets/images/logo/psg.png")}
                style={{ width: 90, height: 90, borderRadius: 20 }}
              />
              <Text style={{ color: COLORS.white, fontSize: 17 }}>PSG</Text>
            </View>
            <Text style={{ color: COLORS.white, fontSize: 25 }}>1-1</Text>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("@/assets/images/logo/mancity.png")}
                style={{ width: 90, height: 90, borderRadius: 20 }}
              />
              <Text style={{ color: COLORS.white, fontSize: 17 }}>
                Man City
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            top: 10,
            left: 60,
            transform: [{ translateX: -50 }],
            backgroundColor: COLORS.white,
            borderColor: COLORS.red,
            borderWidth: 1.5,
            borderRadius: 10,
            width: 40,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.red,
              fontSize: 15,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            75'
          </Text>
        </View>
      </View>
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
