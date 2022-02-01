import React from "react";
import "./InputOption.css";

//bring in any Icon and style it the way i want to 
function InputOption({ Icon, title, color }) {
  return (
    <div className="inputOption">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;