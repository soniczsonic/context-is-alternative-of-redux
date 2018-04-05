import React, { Component, createContext } from "react";
import { View, Text, TextInput, Button } from "react-native";

import { RootContext } from "../App";

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Useless Placeholder" };
  }

  render() {
    return (
      <RootContext.Consumer>
        {context => (
          <View>
            <Text>AddTodo</Text>
            <TextInput
              style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
            <Button
              title="Add Todo"
              onPress={() => context.addTodo(this.state.text)}
            />
          </View>
        )}
      </RootContext.Consumer>
    );
  }
}
