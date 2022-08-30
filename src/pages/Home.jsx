import React from "react";
import { nanoid } from "nanoid";
import AddBar from "../cmps/AddBar";
import FilterBtns from "../cmps/FilterBtns";
import ToDoList from "../cmps/ToDoList";


class Home extends React.Component {
  state = {
    toDoData: this.props.data,
    filterBy: "",
  };

  handleChangeIsComplete = (id) => {
    let state = this.state;
    const index = state.toDoData.findIndex((toDo) => {
      return toDo.id === id;
    });

    state.toDoData[index].isCompleted = !state.toDoData[index].isCompleted;
    this.setState(state);
  };

  onDeleteById = (id) => {
    const newData = this.state.toDoData.filter((toDo) => {
      return toDo.id !== id;
    });
    let state = this.state;
    state.toDoData = newData;
    this.setState(state);
  };

  OnFilter = (filterByValue) => {
    let state = this.state;
    state.filterBy = filterByValue;
    this.setState(state);
  };

  onAdd = (toDo) => {
    const id = nanoid();
    const newToDo = {
      toDo: toDo,
      isCompleted: false,
      id: id,
    };

    let state = this.state;
    state.toDoData.push(newToDo);
    this.setState(state);
  };

  dataToRender = () => {
    let dataToRender;
    let data = this.state.toDoData;

    switch (this.state.filterBy) {
      case "COMPLETED":
        dataToRender = data.filter((toDo) => {
          return toDo.isCompleted === true;
        });
        break;
      case "LEFT":
        dataToRender = data.filter((toDo) => {
          return toDo.isCompleted === false;
        });
        break;
      default:
        dataToRender = data;
    }
    return dataToRender;
  };

  render() {
    return (
      <div>
        <AddBar onAdd={this.onAdd} />
        <ToDoList
          handleChange={this.handleChangeIsComplete}
          onDelete={this.onDeleteById}
          data={this.dataToRender()}
        />
        <FilterBtns filterBy={this.OnFilter} />
      </div>
    );
  }
}

export default Home;
