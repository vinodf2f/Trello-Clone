import React from "react";

export const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#4b4b4b",
        textAlign: "center"
      }}
    >
      <p
        style={{
          color: "skyblue",
          padding: "10px",
          fontSize: "30px",
          fontWeight: "bold"
        }}
      >
        Trello clone UI
      </p>
    </div>
  );
};
