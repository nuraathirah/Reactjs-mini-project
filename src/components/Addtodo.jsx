import React from "react";
import { Link } from "react-router-dom";


class AddTodo extends React.Component {
  state = {
    content: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.content === "") {
      alert("Task cannot be blank!");
      return;
    }
    this.props.addTodoHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main2">
        <h2 style={{marginTop:"25px", color:"white"}}>Add Todo</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label style={{color:"white"}}>Todo</label>
            <input
              type="text"
              name="content"
              placeholder="Add your task"
              value={this.state.content}
              onChange={(e) => this.setState({ content: e.target.value })}
            />
          </div>
          <button className="ui button butang">Add</button>
          <Link to="/">
          <button className="ui button butang2">Cancel</button>
        </Link>
        </form>
      </div>
    );
  }
}

export default AddTodo;