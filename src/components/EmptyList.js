import React from 'react';

const EmptyList = ({ children }) => (
  <div className="todo__complete--wrapper">
    <p className="complete__title">
      {children}
    </p>
  </div>
);
export default EmptyList;