import { Tabs } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from "@/constants/Colors";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
export default function Page() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <Tabs
          sceneContainerStyle={{ backgroundColor: COLORS.white }}
          screenOptions={{
            tabBarActiveTintColor: COLORS.white,
            tabBarInactiveTintColor: COLORS.white,
            tabBarStyle: {
              borderTopColor: "transparent",
              backgroundColor: COLORS.blueman,
              height: 50,
            },
          }}
        >
          <Tabs.Screen
            name="one"
            options={{
              headerTitle: "News",
              tabBarLabel: "News",
              tabBarLabelStyle: { fontSize: 12 },
              tabBarIcon: () => (
                <Ionicons
                  name="newspaper"
                  color={COLORS.white}
                  style={{ fontWeight: "800" }}
                  size={27}
                />
              ),
              headerTitleAlign: "center",
              headerStyle: {
                height: 80,
              },
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                bottom: 20,
              },
              headerShown: false,
              headerLeft: () => (
                <Ionicons
                  name="reorder-four"
                  color={COLORS.white}
                  style={{ marginLeft: 15 }}
                  size={27}
                  onPress={() => {
                    // Handle left icon press event
                  }}
                />
              ),
              headerRight: () => (
                <Ionicons
                  name="heart"
                  color={COLORS.white}
                  style={{ marginRight: 15 }}
                  size={27}
                  onPress={() => {
                    // Handle right icon press event
                  }}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="matches"
            options={{
              headerTitle: "Match",
              tabBarLabel: "Match",
              tabBarLabelStyle: { fontSize: 12 },
              tabBarIcon: () => (
                <Ionicons
                  name="football"
                  color={COLORS.white}
                  style={{ fontWeight: "800" }}
                  size={27}
                />
              ),
              headerTitleAlign: "center",
              headerStyle: {
                height: 80,
              },
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                bottom: 20,
              },
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name="two"
            options={{
              headerTitle: "Leagues",
              tabBarLabel: "Leagues",
              tabBarLabelStyle: { fontSize: 12 },
              tabBarIcon: () => (
                <Ionicons
                  name="trophy"
                  color={COLORS.white}
                  style={{ fontWeight: "bold" }}
                  size={27}
                />
              ),
              headerTitleAlign: "center",
              headerStyle: {
                height: 80,
              },
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                bottom: 20,
              },
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name="players"
            options={{
              headerTitle: "List players",
              tabBarLabel: "List players",
              tabBarLabelStyle: { fontSize: 12 },
              tabBarIcon: () => (
                <Ionicons
                  name="trophy"
                  color={COLORS.white}
                  style={{ fontWeight: "bold" }}
                  size={27}
                />
              ),
              headerTitleAlign: "center",
              headerStyle: {
                height: 80,
              },
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                bottom: 20,
              },
              headerShown: false,
            }}
          />
        </Tabs>
      </React.StrictMode>
    </Provider>
  );
}
