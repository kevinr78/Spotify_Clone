import React from "react";
import "../css/login.css";

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
        name ={props.name}
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
}

function Button(props) {
  return (
    <button className="form-button " onClick={props.onPress} id={props.id}>
      {props.name}
    </button>
  );
}

export { Input, Button };
