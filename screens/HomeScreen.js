import { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import { Colors, KSTATE_PURPLE } from "../assets/Constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { firebaseInit, getAvailableGames } from "../FirebaseService";
import NewGameModal from "../Components/NewGameModal";

const HomeScreen = () => {
  const [availableGames, setAvailableGames] = useState();
  const [loading, setLoading] = useState(true);
  const [newGameModal, setNewGameModal] = useState(false);

  useEffect(() => {
    setup();
  }, []);

  const setup = async () => {
    const games = await getAvailableGames();
    setAvailableGames(games);
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.screenArea}>
      <NewGameModal
        visible={newGameModal}
        onClose={() => {
          setNewGameModal(false);
        }}
      />
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Available Games</Text>
        <View style={styles.newGameButton}>
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={26}
            color={Colors.OrangeToPinkGradient1}
            onPress={() => {
              setNewGameModal(true);
            }}
          />
        </View>
      </View>
      <View style={styles.gameListContainer}>
        {!loading ? (
          <ScrollView style={styles.scrollView}>
            {availableGames.map((game) => {
              return <View style={styles.gameContainer}></View>;
            })}
          </ScrollView>
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  screenArea: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: Colors.DarkGray,
    justifyContent: "space-between",
  },
  topBar: {
    flex: 0.08,
    zIndex: 1000,
    shadowColor: "#aaa",
    minWidth: "100%",
    shadowOffset: { height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    backgroundColor: Colors.DarkGray,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  gameListContainer: {
    flex: 1,
    backgroundColor: Colors.LightGray,
    display: "flex",
  },
  topBarText: {
    fontFamily: "defaultBold",
    fontSize: 18,
    color: Colors.OrangeToPinkGradient1,
  },
  newGameButton: {
    borderRadius: "50%",
    overflow: "hidden",
  },
  scrollView: {
    flex: 1,
  },
  gameContainer: {
    height: Dimensions.get("window").height * 0.1,
    backgroundColor: Colors.DarkGray,
    marginHorizontal: "4%",
    marginTop: "5%",
    borderRadius: "10%",
    zIndex: 1000,
    shadowColor: "#aaa",
    shadowOffset: { height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
});
