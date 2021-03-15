import './App.css';
import WeatherSearchEngine from "./WeatherSearchEngine";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App container">
      
      <WeatherSearchEngine defaultCity="Washington, D.C."/>
      <p className="OpenSource">
            <a href="https://github.com/AshleyN37/weather-app-react" target="blank">Open-source code</a>, by Ashley Ness
    
        </p>
    </div>
  );
}

export default App;
