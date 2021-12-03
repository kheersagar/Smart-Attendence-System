import './App.css';
import React, {useState, useEffect} from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

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
      <Button text="Log In" color="blue" onClick={Submit}/>
      <Input placeholder="Unique ID" />
    </div>
  );
}

export default App;
