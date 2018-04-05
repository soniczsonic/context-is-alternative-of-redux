import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootContext } from "../App";

export default class VisibleTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

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
  listItem: {
    fontSize: 20,
    padding: 2,
    letterSpacing: 1,
    alignItems: "center"
  }
});
