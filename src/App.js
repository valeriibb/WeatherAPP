import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <input type="text" name="text" placeholder="Search for your preferred city..." pattern="[A-Za-z\s]+"
               title="Only letters and spaces are allowed"/>
        <button>Current Location</button>
      </div>

  );
}

export default App;
