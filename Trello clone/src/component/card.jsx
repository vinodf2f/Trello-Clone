import React, { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import { MainContext } from "../Context/context";

export const CardDesign = props => {
  const context = useContext(MainContext);
  const [dropDownValue, setValue] = useState(props.defaultSelected);
  return (
    <>
      <Card border="light" style={{ width: "18rem", border: "2px solid red" }}>
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body>
          <Card.Title>Light Card Title</Card.Title>
          <Card.Text>{props.task.text}</Card.Text>
          <select
            value={dropDownValue}
            onChange={e => setValue(e.target.value)}
          >
            {context.contextState.options.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <button
            onClick={() =>
              context.changeStatus(
                props.defaultSelected,
                dropDownValue,
                props.task
              )
            }
          >
            move
          </button>
        </Card.Body>
      </Card>
      <br />
    </>
  );
};
