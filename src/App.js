import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import AddTodo from "./components/AddTodo";
import UndoRedo from "./components/UndoRedo";
import VisibleTodoList from "./components/VisibleTodoList";
import Filter from "./components/Filter";

export const RootContext = React.createContext("rootStore");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Useless Placeholder",
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
            const newListItems = [{ text: todo }, ...listItems];
            this.setState({
              listItems: newListItems
            });
          }
        }}
        style={{ alignSelf: "center" }}
      >
        <AddTodo />
        <Filter />
        <UndoRedo />
        <ScrollView>
          <VisibleTodoList />
        </ScrollView>
      </RootContext.Provider>
    );
  }
}
