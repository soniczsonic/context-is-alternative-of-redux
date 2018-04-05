import React, { Component, createContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootContext } from "../App";

export default class VisibleTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Useless Placeholder" };
  }

  list = () => <Text>okouue</Text>;

  renderItem = item => <Text style={styles.listItem}>{item.text}</Text>;

  render() {
    return (
      <View>
        <RootContext.Consumer>
          {context => context.listItems.map(item => this.renderItem(item))}
        </RootContext.Consumer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  listItem: {
    fontSize: 20
  }
});
