import React, { Component } from "react";
import Header from './Header';
import Todos from "./Todos";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section-todo__container">
          <div className="section-todo">
            <Header />
            <Todos />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
