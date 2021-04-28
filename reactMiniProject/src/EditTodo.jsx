import React from "react";
import { Link } from "react-router-dom";


class EditTodo extends React.Component {

    constructor(props) {
        super(props);
        const { id, content } = props.location.state.todo;
        this.state = {
          id,
          content,
        };
      }

  update = (e) => {
    e.preventDefault();
    if (this.state.content === "") {
      alert("Task cannot be blank!");
      return;
    }
    this.props.updateTodoHandler(this.state);
    this.setState({ content: ""});
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main2">
        <h2 style={{marginTop:"25px", color:"white"}}>Edit Todo</h2>
        <form className="ui form" onSubmit={this.update}>
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
          <button className="ui button butang">Update</button>
          <Link to="/">
          <button className="ui button butang2">Cancel</button>
        </Link>
        </form>
      </div>
    );
  }
}

export default EditTodo;