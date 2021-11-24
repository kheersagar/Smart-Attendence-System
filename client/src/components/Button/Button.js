import React from 'react'
import "./Button.css";

function Button(props) {
  return (
    <div className="Button_main" >
      {props.text}
    </div>
  )
}

export default Button
