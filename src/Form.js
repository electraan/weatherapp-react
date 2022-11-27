import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  let [city, setCity] = useState("");

  function showCity(event) {
    event.preventDefault();
    alert(`Searching for ${city}`);
  }

  function newCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Form">
      <form className="form-name" onSubmit={showCity}>
        <span>
          <input
            className="city"
            type="search"
            onChange={newCity}
            required
            placeholder="Enter city"
            autocomplete="off"
          ></input>
          <button type="submit"></button>
        </span>
      </form>
    </div>
  );
}
