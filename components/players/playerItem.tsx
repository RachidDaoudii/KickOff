import COLORS from "@/constants/Colors";
import { View, Text, Image } from "react-native";

export default function PlayersItem({ player }: any) {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "95%",
          height: 150,
          backgroundColor: COLORS.blueman,
          marginRight: 10,
          marginLeft: 10,
          borderRadius: 20,
          marginTop: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View>
            <Text style={{ marginTop: 20, fontSize: 15, color: COLORS.white }}>
              {player?.position?.name}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: player.image_path,
              }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 60,
                marginTop: 10,
              }}
            />
            <Image
              source={{
                uri: player.nationality.image_path,
              }}
              style={{
                width: 20,
                height: 10,
                bottom: 10,
                left: 20,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: COLORS.white,
              }}
            >
              {player.display_name}
            </Text>
          </View>
          <View>
            <Text style={{ marginTop: 20, fontSize: 15, color: COLORS.white }}>
              {player.date_of_birth}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "90%",
            borderWidth: 0.5,
            borderColor: COLORS.gray,
            borderRadius: 20,
            marginTop: 10,
          }}
        ></View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Text style={{ marginTop: 10, fontSize: 15, color: COLORS.white }}>
            Gender{" : "}
            {player.gender}
          </Text>
          <Text style={{ marginTop: 10, fontSize: 15, color: COLORS.white }}>
            Weight{" : "}
            {player.weight}
          </Text>
          <Text style={{ marginTop: 10, fontSize: 15, color: COLORS.white }}>
            Height{" : "}
            {player.weight}
          </Text>
        </View>
      </View>
    </View>
  );
}
