import './App.css';
import React, {useState, useEffect} from 'react';
import "./index.css";
function App() {

  const [input, setInput] = useState("hello");

  async function Submit(){
    console.log("clicked");
    const res = await  fetch('http://localhost:8080/login', {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        input: input,
      })
    });
    // return res.json();
  }

  return (
    <div className="App">
    {/* class name Button_main is defined in index.css and can be used anywhere if we want same button styling */}
      <button className="Button_main" onClick={Submit}>Log In</button> 
      {/* class name input-group is defined in index.css and can be used anywhere if we want same input styling */}
      <div className="input-group">
        <input type="text" className="input_field" required />
        <label className="input_field_label" >asdas</label>
      </div>
    </div>
  );
}

export default App;
