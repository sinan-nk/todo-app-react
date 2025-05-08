import React from 'react';
import './Todo.css';

const Todo = () => {
  return (
    <>
      <h1 className="text-center">TODO APP</h1>
      <div className="Todo-container">
        <div className="input-container">
          <input type="text" placeholder="text here your todos.." className="input-field" />
          <button type="submit" className="submit-btn">ADD +</button>
        </div>

        <div className="list-container">
          <ul>
            <li>
              <div className="checkbox-field">
                <input type="checkbox" />
                <span>first todo</span>
              </div>
              <div className="delete-btn">
                <button>Delete</button>
              </div>
            </li>
          </ul>
        </div>

        <div className='clear-btn'>
          <button className='clear-all-btn'>clear all</button>
        </div>
      </div>
    </>
  );
};
export default Todo;
