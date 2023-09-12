import React from "react";
import "./toggle.css";
export const Toggle = ({ isOn, handleToggle }) => {
  return (
    <div className="toggle">
      <label className="switch">
        <input type="checkbox" checked={isOn} onChange={handleToggle}></input>
        <span className="slider"></span>
      </label>
    </div>
  );
};
