import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, Dimensions } from "react-native";
import { RootContext } from "../App";

const { width } = Dimensions.get("window");

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <RootContext.Consumer>
        {context => (
          <View style={styles.container}>
            <TextInput
              style={styles.TextInput}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
            <View style={styles.addButton}>
              <Button
                title="タスクを追加"
                onPress={() => context.addTodo(this.state.text)}
              />
            </View>
          </View>
        )}
      </RootContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 50,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  TextInput: {
    height: 40,
    width: width * 3 / 5,
    borderColor: "gray",
    borderWidth: 1
  },
  addButton: {
    height: 40,
    width: width / 5
  }
});
