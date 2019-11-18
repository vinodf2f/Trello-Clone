import React, { useContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Lane } from "./component/lane";
import { Header } from "./component/header";
import { MainContext } from "./Context/context";

const AddLane = () => {
  const [laneInput, setlaneInput] = useState("");
  const context = useContext(MainContext);

  return (
    <form
      style={{ margin: "50px", borderRadius: "10px", border: "1px" }}
      onSubmit={e => {
        e.preventDefault();
        context.addNewLane(laneInput);
      }}
    >
      <input
        type="text"
        value={laneInput}
        onChange={e => setlaneInput(e.target.value)}
        name="laneInput"
      />
      <button type="submit">Add New Lane</button>
    </form>
  );
};
const App = () => {
  const context = useContext(MainContext);

  return (
    <div>
      <Header />
      <AddLane />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {context.contextState.lanes.map((lane, index) => (
          <Lane key={index} index={index} lane={lane} />
        ))}
      </div>
    </div>
  );
};

export default App;
