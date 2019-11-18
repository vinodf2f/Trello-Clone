import React from "react";
import { CardDesign } from "./card";

export let Cards = props => {
  return (
    <div style={{ maxHeight: "600px", overflowY: "scroll" }}>
      {props.lane.tasks.map((task, index) => (
        <CardDesign
          key={index}
          task={task}
          defaultSelected={props.lane.header}
        />
      ))}
    </div>
  );
};
