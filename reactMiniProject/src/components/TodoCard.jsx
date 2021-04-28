import React from "react";
import { Link } from "react-router-dom";

const TodoCard = (props) => {
  const { id, content} = props.todo;
  return (
    <div className="item">
      <div className="content">
        <table>
          <tbody>
            <tr>
                <td style={{width:"430px"}}>
                    <div className="header">{content}</div>
                </td>
                <td>
                    <i className="trash alternate outline icon"
                    style={{ color: "red", marginLeft: "10px" }}
                    onClick={() => {
                      const confirmBox = window.confirm(
                        "Do you really want to delete this Task?"
                      )
                      if (confirmBox === true) {
                        props.clickHander(id)
                      }
                    }}>
                    </i>
                    <Link to={{ pathname: `/edit`, state: { todo: props.todo } }}>
                        <i
                        className="edit alternate outline icon"
                        style={{ color: "green"}}
                        ></i>
                    </Link>
                </td>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoCard;