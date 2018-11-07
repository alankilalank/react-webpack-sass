import React, { Component } from "react";
import ListItem from "./ListItem";

class App extends Component {
  render() {
    return (
      <div className="section-todo__container">
        <div className="section-todo">
          <h1 className="todo__title">TODO LIST</h1>
          <p className="todo__desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            eius maiores saepe, quisquam ullam pariatur!
          </p>

          <div className="todo__card">
            <ListItem />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
