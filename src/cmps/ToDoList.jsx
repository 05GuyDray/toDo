import React from "react";
import ToDo from "./ToDo";

class ToDoList extends React.Component {
  makeToDolist = () => {
    let data = this.props.data;
    let list = data.map((currToDo) => {
      return (
        <ToDo
          key={currToDo.id}
          isCompleted={currToDo.isCompleted}
          toDo={currToDo.toDo}
          id={currToDo.id}
          handleChange={this.props.handleChange}
          onDelete={this.props.onDelete}
        />
      );
    });

    return list;
  };

  render() {
    return (
      <div  className="container">
            {this.makeToDolist()}
      </div>
    );
  }
}
export default ToDoList;
