import React, { useState } from "react";

import WeatherSearch from "./WeatherSearch";
import WeatherTemperature from "./WeatherTemperature";

import "./App.css";

function App() {
  let [city, setCity] = useState(""); // Estado para guardar a cidade
  function handleCityChange(newCity) {
    setCity(newCity); // Atualiza o estado com a nova cidade
  }

  return (
    <div className="App">
      <div className="App">
        <header className="App-header">
<<<<<<< Updated upstream
          <h1>Weather Application</h1>
=======
          <ul className="App-navigation-items">
            <li className="App-navigation-items">
              <a href="/">Lisbon</a>
            </li>
            <li className="App-navigation-items">
              <a href="/">Paris</a>
            </li>
            <li className="App-navigation-items">
              <a href="/">Sydney</a>
            </li>
            <li className="App-navigation-items">
              <a href="/">San Francisco</a>
            </li>
          </ul>

>>>>>>> Stashed changes
          <main>
            <WeatherSearch onCityChange={handleCityChange} />
            {city && <WeatherTemperature city={city} />}
          </main>
<<<<<<< Updated upstream
          <footer>
=======
          <footer className="App-footer">
>>>>>>> Stashed changes
            <p>
              <a
                className="App-link"
                href="https://github.com/mirielimacedo/my-app-weather"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open-source code
              </a>
              <small className="App-small">, by </small>
              <a
                className="App-link"
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mirieli Maria
              </a>
              <small className="App-small"> from </small>
              <a
                className="App-link"
                href="https://www.shecodes.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SheCodes
              </a>
            </p>
          </footer>
        </header>
        <main></main>
      </div>
    </div>
  );
}

export default App;
