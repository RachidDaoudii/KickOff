import Header from "@/components/header";
import Icons from "@/components/icons";
import COLORS from "@/constants/Colors";
import { Link } from "expo-router";
import React from "react";
import {
  Dimensions,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";

export default function home() {
  const { width, height } = Dimensions.get("window");

  return (
    <View>
      <View>
        <Header />
      </View>

      <View
        style={{
          backgroundColor: COLORS.blueman,
          width: "100%",
          height: 200,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: "20%",
            width: "80%",
            left: "10%",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <ImageBackground
            source={require("@/assets/images/yy.png")}
            style={{
              opacity: 0.9,
              shadowColor: COLORS.dark,
              shadowOffset: {
                width: 100,
                height: 200,
              },
              shadowOpacity: 1,
              shadowRadius: 10,
              elevation: 10,
            }}
          >
            <Image
              style={{
                width: 260,
                height: 200,
                position: "relative",
                top: 40,
                left: "20%",
              }}
              source={require("@/assets/images/player.png")}
              resizeMode="cover"
            />
            <Image
              style={{
                width: 30,
                height: 40,
                position: "absolute",
                top: 80,
                left: "26%",
              }}
              source={require("@/assets/images/ball1.png")}
            />
            <View
              style={{
                position: "absolute",
                top: 20,
                left: "5%",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                LET'S GO!
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  width: 150,
                }}
              >
                You're competing in Season 1's Monhly Qualifier!
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            backgroundColor: COLORS.redop,
            position: "absolute",
            width: "100%",
            height: 630,
            top: 150,
            borderRadius: 20,
            zIndex: -1,
          }}
        >
          <View style={{ top: 120 }}>
            <Icons />
            <View>
              <View
                style={{
                  marginTop: 30,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Champions League
                </Text>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 17,
                    fontWeight:"500"
                  }}
                >
                  See All
                </Text>
              </View>
              <View style={styles.container}>
                <View style={styles.containerA}>
                  <View style={styles.containerB}>
                    <View style={styles.equipe}>
                      <Text style={{ fontSize: 17, fontWeight: "500" }}>
                        PSG
                      </Text>
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("@/assets/images/logo/psg.png")}
                      />
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: COLORS.redop,
                          fontSize: 16,
                          fontWeight: "700",
                        }}
                      >
                        07:30
                      </Text>
                      <Text
                        style={{
                          color: COLORS.dark,
                          fontSize: 16,
                          fontWeight: "700",
                        }}
                      >
                        31 OCT
                      </Text>
                    </View>
                    <View style={styles.equipe}>
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("@/assets/images/logo/mancity.png")}
                      />
                      <Text style={{ fontSize: 17, fontWeight: "500" }}>
                        Man city
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginTop: 10, marginBottom: 10 }}>
                    <Text>Emirates Stadium, London</Text>
                  </View>
                </View>
              </View>
              <View style={styles.container}>
                <View style={styles.containerA}>
                  <View style={styles.containerB}>
                    <View style={styles.equipe}>
                      <Text style={{ fontSize: 17, fontWeight: "500" }}>
                        PSG
                      </Text>
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("@/assets/images/logo/psg.png")}
                      />
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: COLORS.redop,
                          fontSize: 16,
                          fontWeight: "700",
                        }}
                      >
                        07:30
                      </Text>
                      <Text
                        style={{
                          color: COLORS.dark,
                          fontSize: 16,
                          fontWeight: "700",
                        }}
                      >
                        31 OCT
                      </Text>
                    </View>
                    <View style={styles.equipe}>
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("@/assets/images/logo/mancity.png")}
                      />
                      <Text style={{ fontSize: 17, fontWeight: "500" }}>
                        Man city
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginTop: 10, marginBottom: 10 }}>
                    <Text>Emirates Stadium, London</Text>
                  </View>
                </View>
              </View>
              <View style={styles.container}>
                <View style={styles.containerA}>
                  <View style={styles.containerB}>
                    <View style={styles.equipe}>
                      <Text style={{ fontSize: 17, fontWeight: "500" }}>
                        PSG
                      </Text>
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("@/assets/images/logo/psg.png")}
                      />
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: COLORS.redop,
                          fontSize: 16,
                          fontWeight: "700",
                        }}
                      >
                        07:30
                      </Text>
                      <Text
                        style={{
                          color: COLORS.dark,
                          fontSize: 16,
                          fontWeight: "700",
                        }}
                      >
                        31 OCT
                      </Text>
                    </View>
                    <View style={styles.equipe}>
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require("@/assets/images/logo/mancity.png")}
                      />
                      <Text style={{ fontSize: 17, fontWeight: "500" }}>
                        Man city
                      </Text>
                    </View>
                  </View>
                  <View style={{ marginTop: 10, marginBottom: 10 }}>
                    <Text>Emirates Stadium, London</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "95%",
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    opacity: 0.8,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 100,
      height: 200,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  containerA: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  containerB: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "50%",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  equipe: {
    display: "flex",
    flexDirection: "row",
    width: "40%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
