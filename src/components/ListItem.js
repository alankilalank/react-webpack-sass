import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complete: true
    };

    this.handleRenderComplete = this.handleRenderComplete.bind(this);
  }

  handleRenderComplete() {
    if (!this.state.complete) {
      return (
        <ul className="todo__list--wrapper">
          <li>
            <p>Not Available</p>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="todo__list--wrapper">
          <li className="todo__list">
            <input type="checkbox" id="list-5" checked />
            <label htmlFor="list-5">
              <div className="todo__checkbox" />
              Detail
            </label>
            <div className="todo__action">
              <span>Delete</span>
            </div>
          </li>

          <li className="todo__list">
            <input type="checkbox" id="list-6" checked />
            <label htmlFor="list-6">
              <div className="todo__checkbox" />
              Form
            </label>
            <div className="todo__action">
              <span>Delete</span>
            </div>
          </li>

          <li className="todo__list">
            <input type="checkbox" id="list-7" checked />
            <label htmlFor="list-7">
              <div className="todo__checkbox" />
              Terms & Condition
            </label>
            <div className="todo__action">
              <span>Delete</span>
            </div>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <ul className="todo__list--wrapper">
          <li className="todo__list">
            <input type="checkbox" id="list-1" />
            <label htmlFor="list-1">
              <div className="todo__checkbox" />
              Home
            </label>
            <div className="todo__action">
              <span>Edit</span> | <span>Delete</span>
            </div>
          </li>

          <li className="todo__list">
            <input type="checkbox" id="list-2" />
            <label htmlFor="list-2">
              <div className="todo__checkbox" />
              Search
            </label>
            <div className="todo__action">
              <span>Edit</span> | <span>Delete</span>
            </div>
          </li>

          <li className="todo__list">
            <input type="checkbox" id="list-3" />
            <label htmlFor="list-3">
              <div className="todo__checkbox" />
              Register
            </label>
            <div className="todo__action">
              <span>Edit</span> | <span>Delete</span>
            </div>
          </li>

          <li className="todo__list">
            <input type="checkbox" id="list-4" />
            <label htmlFor="list-4">
              <div className="todo__checkbox" />
              OTP
            </label>
            <div className="todo__action">
              <span>Edit</span> | <span>Delete</span>
            </div>
          </li>

          <li>
            <input
              className="todo__input"
              type="text"
              placeholder="Add your todo list here"
            />
          </li>
        </ul>

        <div className="todo__complete--wrapper">
          <p className="complete__title">Completed</p>

          {this.handleRenderComplete()}
        </div>
      </React.Fragment>
    );
  }
}

export default ListItem;
