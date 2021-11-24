import React from 'react'
import "./Input.css";

function Input(props) {
  return (
<div class="input-group">
  <input type="text" required />
  <label>{props.placeholder}</label>
</div>
  )
}

export default Input;
