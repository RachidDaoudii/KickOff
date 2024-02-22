import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "@/constants/Colors";
import Button from "@/components/button";
import { Link, router } from "expo-router";

export default function Page() {
  setTimeout(() => {
    router.push("/one");
  }, 10);
  return (
    <ImageBackground
      source={require("@/assets/images/home.png")}
      style={{
        width: 500,
        height: 850,
        flex: 1,
      }}
      // colors={[COLORS.blue, COLORS.blueop]} style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <View>
          <View
            style={{
              paddingHorizontal: 22,
              position: "absolute",
              top: 400,
              width: "100%",
            }}
          >
            <Text style={styles.letGt}>Let's Get</Text>
            <Text
              style={{ fontSize: 46, fontWeight: "bold", color: COLORS.white }}
            >
              Started
            </Text>
            <View style={{ marginVertical: 22 }}>
              <Text
                style={{ fontSize: 16, color: COLORS.white, marginVertical: 4 }}
              >
                Connect with each other with ...
              </Text>
            </View>
            <Button
              title="Next"
              onPress={() => router.push("/one")}
              style={{ marginTop: 22, width: "80%" }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    width: 200,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },

  letGt: {
    fontSize: 50,
    fontWeight: "bold",
    color: COLORS.white,
  },
});
