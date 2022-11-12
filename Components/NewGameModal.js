import { View, Text, Modal, StyleSheet, Button } from "react-native";
import React from "react";

const NewGameModal = (props) => {
  const CloseModal = props.onClose;

  return (
    <Modal
      onDismiss={CloseModal}
      onRequestClose={CloseModal}
      visible={props.visible}
      presentationStyle={"overFullScreen"}
      transparent={true}
    >
      {/* <View style={styles.screen} onTouchStart={CloseModal}> */}
      <View style={styles.modal}>
        <Text styles={styles.header}>New Game?</Text>
        <Button title="Press Here"></Button>
      </View>
      {/* </View> */}
    </Modal>
  );
};
export default NewGameModal;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
    zIndex: 0,
  },
  modal: {
    backgroundColor: "white",
    zIndex: 1000,
    width: "80%",
    marginHorizontal: "10%",
    marginTop: "30%",
    height: "30%",
    zIndex: 1000,
    borderRadius: "25%",
    shadowColor: "#aaa",
    shadowOffset: { height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "7.5%",
    position: "absolute",
  },
  header: {
    fontFamily: "defaultFont",
    fontSize: 18,
  },
});
