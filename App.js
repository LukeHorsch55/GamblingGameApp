import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useFonts } from "expo-font";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { Colors, KSTATE_PURPLE } from "./assets/Constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { firebaseInit } from "./FirebaseService";

const MainTab = createMaterialBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      initialRouteName="Play"
      screenOptions={{ headerShown: false }}
      shifting={true}
      inactiveColor={Colors.LightGray}
      activeColor={Colors.OrangeToPinkGradient1}
      barStyle={{
        backgroundColor: Colors.DarkGray,
        paddingTop: 15,
      }}
    >
      <MainTab.Screen
        name="Play"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="currency-usd"
              size={26}
              color={color}
            />
          ),
          tabBarLabel: <Text style={styles.tabLabel}>Play</Text>,
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={26} color={color} />
          ),
          tabBarLabel: <Text style={styles.tabLabel}>Profile</Text>,
        }}
      />
    </MainTab.Navigator>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    defaultFont: require("./assets/Montreal-Regular.ttf"),
    defaultBold: require("./assets/Montreal-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  firebaseInit();

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <MainTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontFamily: "defaultFont",
  },
});
