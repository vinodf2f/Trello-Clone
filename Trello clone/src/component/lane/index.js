import React, { useState } from "react";
import { Cards } from "../Cards";
import { MainContext } from "../../Context/context";
import { useContext } from "react";

const renderLaneHeader = header => {
  return (
    <div
      style={{
        width: "100%",
        height: "40px",
        backgroundColor: "lightgray",
        overflow: "hidden",
        textAlign: "center",
        paddingTop: "6px",
        marginBottom: "10px",
        fontWeight: "bold",
        fontSize: "20px"
      }}
    >
      <p style={{}}>{header}</p>
    </div>
  );
};

const TodoInput = props => {
  const [taskInput, setTaskInput] = useState("");
  const context = useContext(MainContext);

  if (props.lane.header == "TODO") {
    return (
      <form
        style={{ marginBottom: "20px" }}
        onSubmit={e => {
          e.preventDefault();
          context.addTodo(taskInput);
        }}
      >
        <input
          type="text"
          value={taskInput}
          onChange={e => setTaskInput(e.target.value)}
          name="taskInput"
        />
        <button type="submit">Add New Task</button>
      </form>
    );
  } else return <> </>;
};
export const Lane = props => {
  const colors = ["red", "yellow", "blue", "skyblue", "gray"];

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        backgroundColor: "141414",
        boxShadow: `1px 1px 7px 1px ${colors[props.index]}`,

        maxWidth: "300px",
        minWidth: "300px",
        marginLeft: "50px",
        minHeight: "600px",
        marginBottom: "50px",
        borderRadius: "15px",
        overflow: "hidden"
      }}
    >
      {renderLaneHeader(props.lane.header)}
      <TodoInput {...props} />
      <Cards lane={props.lane} />
    </div>
  );
};
