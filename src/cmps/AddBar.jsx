import React from "react";

class AddBar extends React.Component {
  state = { newToDo: "" };

  send = () => {
    this.props.onAdd(this.state.newToDo);
  };
  updateToDo = (event) => {
    const toDo = event.target.value;
    this.setState({ newToDo: toDo });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-7">
            <input
            className="form-control"
              type="text"
              placeholder="What do you need to do today"
              onChange={this.updateToDo}
            />
          </div>
          <div className="col-sm-1">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.send}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddBar;
