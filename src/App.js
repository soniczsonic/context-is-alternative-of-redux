import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions
} from "react-native";
import AddTodo from "./components/AddTodo";
import VisibleTodoList from "./components/VisibleTodoList";

export const RootContext = React.createContext("rootStore");

const { width, height } = Dimensions.get("window");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      listItems: []
    };
  }

  render() {
    return (
      <RootContext.Provider
        value={{
          listItems: this.state.listItems,
          addTodo: todo => {
            const listItems = this.state.listItems;
            const newListItems = [...listItems, { text: todo }];
            this.setState({
              listItems: newListItems
            });
          }
        }}
        style={{ alignSelf: "center" }}
      >
        <Text style={styles.title}>今年こそビーチへ行くためのタスク</Text>
        <AddTodo />
        <View style={styles.row}>
          <Image source={require("./assets/images/backgroundBeach.jpeg")} />
          <ScrollView>
            <VisibleTodoList />
          </ScrollView>
        </View>
        <Text>
          state管理にreduxでなく、reactの機能であるcontextを使いました。
        </Text>
      </RootContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    paddingTop: 30
  },
  row: {
    flexDirection: "row"
  }
});
