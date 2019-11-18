import React, { Component } from "react";

export const MainContext = React.createContext({});

// const localState = JSON.parse(localStorage.getItem("info"));
let ID = 0;
export class MainContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lanes: [
        {
          header: "TODO",
          tasks: []
        }
      ],
      options: ["TODO"]
    };
  }

  addNewLane = laneInput => {
    let { lanes, options } = this.state;
    let newLane = {
      header: laneInput,
      tasks: []
    };
    options.push(laneInput);
    lanes.push(newLane);
    this.setState({ lanes, options });
  };

  changeStatus = (preStatus, newStatus, rootTask) => {
    if (preStatus != newStatus) {
      const { lanes } = this.state;
      console.log(rootTask);

      lanes.map(lane => {
        if (lane.header == preStatus) {
          console.log("root id", rootTask.id);
          let newTasks = lane.tasks.filter(task => task.id != rootTask.id);
          console.log("hghh", newTasks);
          lane.tasks = newTasks;
        } else if (lane.header == newStatus) {
          lane.tasks.push(rootTask);
        }
      });

      this.setState({ lanes });
    }
    console.log(this.state);
  };

  addTodo = newTodo => {
    let lanes = this.state.lanes;

    lanes[0].tasks.push({ id: ID, text: newTodo });
    ID++;
    this.setState({ lanes });

    console.log(this.state);
  };
  render() {
    return (
      <MainContext.Provider
        value={{
          contextState: this.state,
          addNewLane: this.addNewLane,
          addTodo: this.addTodo,
          changeStatus: this.changeStatus
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}
