import React from 'react';

const List = (props) => {
  const { todos, onRemove, onToggle, title } = props;
  return (
    <div className="todo__complete--wrapper">
      <p className="complete__title">
        {title}
      </p>
      <ul className="todo__list--wrapper">
        {todos.map((todo) => (
          <li key={todo.id} className="todo__list">
            <input type="checkbox" id="list-5" checked={todo.complete} readOnly />
            <label onClick={() => onToggle(todo.id)} htmlFor="list-5" style={{ textDecoration: todo.complete ? 'line-through' : ''} }>
              <div className="todo__checkbox" />
              {todo.name}
            </label>
            <div className="todo__action">
              <span onClick={() => onRemove(todo.id)}>Delete</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default List;