import React from "react";
import { Link } from "react-router-dom";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  console.log(props);

  const deleteTodoHandler = (id) => {
    props.getTodoId(id);
  };

  const renderTodoList = props.todos.map((todo) => {
    return (
      <TodoCard
        todo={todo}
        clickHander={deleteTodoHandler}
        key={todo.id}
      />
    );
  });
  
  return (
    <div className="main">
      <h2 className="title">
        Todo List
        <Link to="/add">
          <button className="ui button butang right">Add Todo</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderTodoList}</div>
    </div>
  );
};

export default TodoList;