import React,{useEffect, useState} from 'react';
import './Todo.css';

const Todo = () => {

  const [todos,setTodos]= useState([]);
  const [inputValue,setInputValue] = useState('');

  const handleAddTodo = () =>{
    if (inputValue.trim() !==''){
      setTodos([...todos, {text : inputValue , completed : false}]);
      setInputValue('');
    }
  }
 console.log("todos",todos)

  const handleInputChange = (e) =>{
    setInputValue(e.target.value);
  }

  const handleToggleComplete = (index)=>{
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  }

  const handleDeleteTodo = (index)=>{
    const updatedTodos = todos.filter((_,i) => i !==index)
    setTodos(updatedTodos);

  }

  const clearAll =()=>{
    setTodos([]);
  }

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  },[])

  useEffect(()=>{
    setTimeout(()=>{
       localStorage.setItem('todos',JSON.stringify(todos));
    },100)

  },[todos])
  

  return (
    <>
      <h1 className="text-center">TODO APP</h1>
      <div className="Todo-container">
        <div className="input-container">
          <input type="text" placeholder="text here your todos.." className="input-field" value={inputValue}
  onChange={handleInputChange}/>
          <button type="submit" className="submit-btn" onClick={handleAddTodo}>ADD +</button>
        </div>

        <div className="list-container">
          {todos.length === 0 ? (
            <h2>Right now you dont have any todos..</h2>
          ):(
          <ul>
           {todos.map((todo, index) => (
              <li  key={index}>
                <div className="checkbox-field">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(index)}
                  />
                  <span
                    style={{
                      textDecoration: todo.completed ? 'line-through' : 'none',
                    }}>{todo.text}</span>
              </div>
              <div className="delete-btn">
               <button  onClick={() => handleDeleteTodo(index)}>Delete</button>
              </div>
            </li>
          ))}
          </ul>
          )}
        </div>

        <div className='clear-btn'>
          <button className='clear-all-btn' onClick={()=>{clearAll()}}> clear all</button>
        </div>
      </div>
    </>
  );
};
export default Todo;
