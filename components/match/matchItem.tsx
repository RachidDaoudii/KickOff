import COLORS from "@/constants/Colors";
import { Text, View, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  stateFavorites,
  stateDeleteFavorite,
} from "@/redux/features/favorite/favoriteSlice";
import { useDispatch } from "react-redux";
interface MatchItemProps {
  match: any;
  favorite: any;
}
export default function MatchItem({ match, favorite }: MatchItemProps) {
  const dispatch = useDispatch();
  const [active, setActive] = useState(!favorite);
  const [isdelete, setDelete] = useState(false);

  return (
    <View key={match?.id}>
      <View
        style={{
          padding: 5,
          margin: 5,
          width: 400,
          height: 100,
          marginTop: 10,
          overflow: "hidden",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: favorite == true ? COLORS.white : COLORS.blue,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ width: "55%" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
              marginLeft: 20,
            }}
          >
            <Image
              source={{ uri: match?.participants[0]?.image_path }}
              style={{ width: 30, height: 30, borderRadius: 20 }}
            />
            <Text
              style={{
                color: favorite == true ? COLORS.white : COLORS.dark,
                fontSize: 15,
                marginLeft: 20,
              }}
            >
              {match?.participants[0]?.name}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 5,
              marginLeft: 20,
            }}
          >
            <Image
              source={{ uri: match?.participants[1]?.image_path }}
              style={{ width: 30, height: 30, borderRadius: 20 }}
            />
            <Text
              style={{
                color: favorite == true ? COLORS.white : COLORS.dark,
                fontSize: 15,
                marginLeft: 20,
              }}
            >
              {match?.participants[1]?.name}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "1%",
            borderColor: favorite == true ? COLORS.white : COLORS.gray,
            borderEndWidth: 2,
            borderRadius: 10,
            height: "70%",
          }}
        ></View>

        <View style={{ width: "40%" }}>
          <View>
            {!active ? (
              <Ionicons
                name={favorite == true ? "heart-outline" : "heart"}
                color={COLORS.white}
                style={{ marginLeft: 130, color: COLORS.redop }}
                size={23}
                onPress={() => {
                  setActive(!active);
                  favorite == true
                    ? dispatch(stateFavorites(match))
                    : dispatch(stateDeleteFavorite(match));
                  console.log("add");
                }}
              />
            ) : (
              <Ionicons
                name="heart"
                color={COLORS.white}
                style={{ marginLeft: 130, color: COLORS.redop }}
                size={23}
                onPress={() => {
                  setActive(!active);
                  dispatch(stateDeleteFavorite(match));
                  console.log("delete");
                }}
              />
            )}
          </View>
          <Text
            style={{
              color: favorite == true ? COLORS.white : COLORS.dark,
              fontSize: 15,
              marginLeft: 10,
              textAlign: "center",
            }}
          >
            {match?.result_info}
          </Text>
          <Text
            style={{
              color: favorite == true ? COLORS.white : COLORS.dark,
              fontSize: 15,
              marginLeft: 10,
            }}
          >
            {match?.starting_at}
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
