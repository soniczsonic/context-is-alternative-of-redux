import React, { createContext } from "react";
import { View, Text, Button } from "react-native";

const Filter = props => (
  <View style={{ flexDirection: "row" }}>
    <Text>Filter</Text>
    <Button title="全て" />
    <Button title="未完了のタスク" />
    <Button title="完了したタスク" />
  </View>
);

export default Filter;
