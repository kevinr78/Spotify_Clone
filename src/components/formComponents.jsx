import React from "react";
import "./css/homepage.css";

function Input(props) {
  return (
    <div className="input-group">
      <p className="mb-0">
        <label>{props.label}</label>
      </p>
      <input
        type={props.type}
        required
        className="form-input"
        name
        placeholder={props.placeholder}
      />
    </div>
  );
}

function Button(props) {
  return (
    <button className="form-button " id={props.id}>
      {props.name}
    </button>
  );
}

export { Input, Button };
