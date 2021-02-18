import logo from './logo.svg';
import './App.css';
import SearchEngine from "./SearchEngine";
import TodaysWeather from "./TodaysWeather";


function App() {
  return (
    <div className="App">
      <SearchEngine />
      <h1 className="current-city">Washington D.C.</h1>
      <TodaysWeather />
    </div>
  );
}

export default App;
