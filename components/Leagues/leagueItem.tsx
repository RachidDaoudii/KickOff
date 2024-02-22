import COLORS from "@/constants/Colors";
import { Text, View, Image, StyleSheet } from "react-native";

export default function LeagueItem({ league }: any) {
  return (
    <View
      style={{
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        width: 100,
        height: 100,
        marginTop: 10,
        borderRadius: 10,
        borderColor: COLORS.white,
        borderWidth: 1,
      }}
    >
      <Image
        source={{ uri: league.image_path }}
        style={{ width: 60, height: 50 }}
      />
    </View>
  );
}
