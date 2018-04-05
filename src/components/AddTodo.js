import React, { Component, createContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions
} from "react-native";
import { RootContext } from "../App";

const { height, width } = Dimensions.get("window");

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "入力してね" };
  }

  render() {
    return (
      <RootContext.Consumer>
        {context => (
          <View style={styles.container}>
            <TextInput
              style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
            <View style={styles.addTodo}>
              <Button
                title="add Todo"
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
  addTodo: {
    // backgroundColor: "red"
  }
});
