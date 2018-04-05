import React, { createContext } from "react";
import { View, Text, Button } from "react-native";

const Filter = props => (
  <View style={{ flexDirection: "row" }}>
    <Text>Filter</Text>
    <Button title="All" />
    <Button title="Active" />
    <Button title="Completed" />
  </View>
);

export default Filter;
