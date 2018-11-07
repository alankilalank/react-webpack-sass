import React, { Component } from 'react';
import List from './List';
import EmptyList from './EmptyList';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      todos: [
        {id: '3jmo5a7vgkd', name: 'Wash the car', complete: false},
        {id: 'l1uboxt4loo', name: 'Create API Gateway', complete: false},
        {id: 'qamu69q2sk', name: 'Learn React', complete: true}
      ]
    }
  }

  generateRandomId = () => {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value
    })
  }

  handleRemove = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
  }

  handleToggle = (id) => {
    const todos = this.state.todos.map((todo) => todo.id !== id ? todo : 
      Object.assign({}, todo, {complete: !todo.complete})
    );
    this.setState({ todos });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const todo = {
      id: this.generateRandomId(),
      name: this.state.item,
      complete: false
    };
    const todos = [todo, ...this.state.todos];
    this.setState({
      item: '',
      todos
    })
  }

  render() {
    const { todos } = this.state;
    const completeTodo = todos.filter((todo) => todo.complete === true);
    const uncompleteTodo = todos.filter((todo) => todo.complete !== true);
    return (
      <div className="todo__card">
        <form className="todo__input-group" onSubmit={this.handleSubmit}>
          <input
            name="item"
            value={this.state.item}
            className="todo__input"
            type="text"
            placeholder="Add Todo"
            onChange={this.handleChange}
          />
          <button type="submit" className="todo__button">
            Add Todo
          </button>
        </form>
        {uncompleteTodo.length === 0
          ? <EmptyList>There is no task available</EmptyList>
          : <List
              title="Todo List"
              todos={uncompleteTodo}
              onRemove={this.handleRemove}
              onToggle={this.handleToggle}
            />
        }
        {completeTodo.length === 0
          ? <EmptyList>There are no completed tasks</EmptyList>
          : <List
              title="Completed"
              todos={completeTodo}
              onRemove={this.handleRemove}
              onToggle={this.handleToggle}
            /> 
        }
      </div>
    );
  }
}
 
export default Todos;