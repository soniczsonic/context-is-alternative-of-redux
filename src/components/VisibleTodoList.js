import React, { Component, createContext } from "react";
import { View, Text } from "react-native";
import { RootContext } from "../App";

export default class VisibleTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Useless Placeholder" };
  }

  list = () => <Text>okouue</Text>;

  renderItem = text => <Text>{text}</Text>;

  render() {
    return (
      <View>
        <RootContext.Consumer>
          {context =>
            context.listItem.map(x => {
              return <Text>{x}</Text>;
            })
          }
        </RootContext.Consumer>
        <Text>List</Text>
        {this.list()}
      </View>
    );
  }
}
