import React, { createContext } from "react";
import { View, Text, Button } from "react-native";

const UndoRedo = props => (
  <View style={{ flexDirection: "row" }}>
    <Text>UndoRedo</Text>
    <Button title="Undo" onPress={console.log("undo")} />
    <Button title="Redo" />
  </View>
);

export default UndoRedo;
