import './App.css';
import WeatherSearchEngine from "./WeatherSearchEngine";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
      <WeatherSearchEngine defaultCity="Washington, D.C."/>
      <p class="open-source">
            <a href="https://github.com/AshleyN37/weather-app-react" target="blank">Open-source code</a>, by Ashley Ness
    
        </p>
    </div>
  );
}

export default App;
