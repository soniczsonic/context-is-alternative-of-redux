import React, { Component } from "react";
import { View } from "react-native";
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
      listItem: []
    };
  }

  render() {
    return (
      <RootContext.Provider
        value={{
          text: this.state.text,
          listItem: this.state.listItem,
          addTodo: todo => {
            const listItem = this.state.listItem;
            const newListItem = [todo, ...listItem];
            this.setState({
              listItem: newListItem
            });
            console.log(this.state.listItem);
          }
        }}
      >
        <AddTodo />
        <VisibleTodoList />
        <Filter />
        <UndoRedo />
      </RootContext.Provider>
    );
  }
}
