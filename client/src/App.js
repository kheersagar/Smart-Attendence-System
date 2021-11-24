import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  return (
    <div className="App">
      <Button text="Log In" color="blue"/>
      <Input placeholder="Unique ID" />
    </div>
  );
}

export default App;
