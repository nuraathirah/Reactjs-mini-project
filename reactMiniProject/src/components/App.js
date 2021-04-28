import React, { useState, useEffect }  from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import './App.css';
import Header from "./Header";
import TodoList from "./TodoList";
import AddTodo from "./Addtodo";
import EditTodo from "./EditTodo";


const accessToken = 'e7bf74b4eadacddb1cdcc13a61d1338f30db3b2a';
const apiUrl = 'https://api.todoist.com/rest/v1';

axios.interceptors.request.use(
  config => {
      config.headers.authorization = `Bearer ${accessToken}`;
      return config;
  },
  error => {
      return Promise.reject(error);
  }
);

function App() {

  const [todos, setTodos] = useState([]);

  //retrieveTodo
  const retrieveTodo = async () =>{
      const response = await axios.get(`${apiUrl}/tasks`);
      return response.data;
  }

  const addTodoHandler = async (todo) => {
      console.log(todo);
      const request = {
          ...todo
      }
      const response = await axios.post(`${apiUrl}/tasks`, request);
      setTodos([...todos, response.data]);
    };

    const updateTodoHandler = async (todo) => {
      const response = await axios.post(`${apiUrl}/tasks/${todo.id}`, todo);
      if ( response.status === 204){
        const allTodo = await retrieveTodo();
        if(allTodo) setTodos(allTodo);
      }
      // setTodos(
      //   todos.map((todo) => {
      //     return todo.id === id? { ...response.data } : todo;
      //   })
      // );
    };

  const removeTodoHandler = async (id) => {
      await axios.delete(`${apiUrl}/tasks/${id}`);
      const newTodoList = todos.filter((todo) => {
        return todo.id !== id;
      });

  setTodos(newTodoList);
  };

  useEffect(() => {
      const getAllTodo = async () => {
          const allTodo = await retrieveTodo();
          if(allTodo) setTodos(allTodo);
      };

      getAllTodo();
  
  },[]);

  return (
      <div className="ui container">
        <Router>
        <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <TodoList
                  {...props}
                  todos={todos}
                  getTodoId={removeTodoHandler}
                />
              )}
            />

              <Route
                  path="/add"
                  render={(props) => (
                  <AddTodo {...props} addTodoHandler={addTodoHandler} />
                  )}
              />

              <Route
                  path="/edit"
                  render={(props) => (
                  <EditTodo
                      {...props}
                      updateTodoHandler={updateTodoHandler}
                  />
                  )}
                />

          </Switch>
        </Router>
        
      </div>
    );
}

export default App;