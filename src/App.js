import logo from './logo.svg';
import './App.css';
import Datetime from "./components/datetime";
import Weatherdata from "./components/weatherdata";

function App() {
  return (
      <div className="App">
          <div className="top">
          <input type="text" name="text" placeholder="Search for your preferred city..." pattern="[A-Za-z\s]+"
                 title="Only letters and spaces are allowed"/>
          <button>Current Location</button>
          </div>
        <div className="block">
            <Datetime/>
            <Weatherdata />
        </div>

      </div>

  );
}

export default App;
