import React, { useState } from "react";

import WeatherSearch from "./WeatherSearch";
import WeatherTemperature from "./WeatherTemperature";

import "./App.css";

function App() {
  const [city, setCity] = useState("Perth"); // Estado para guardar a cidade
  function handleCityChange(newCity) {
    setCity(newCity); // Atualiza o estado com a nova cidade
  }

  return (
    <div className="App">
      <div className="App">
        <div className="App-contanier">
          <div id="weather" className="App-weather-contanier">
            <header className="App-header">
              <ul className="App-navigation-items">
                <li className="App-navigation-items">
                  <a
                    href="https://christobeltravel.com/where-to-go-lisbon-city-center/#Baixa%20District%20in%20Lisbon%20City%20Center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Lisbon
                  </a>
                </li>
                <li className="App-navigation-items">
                  <a
                    href="https://www.louvre.fr/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Paris
                  </a>
                </li>
                <li className="App-navigation-items">
                  <a
                    href="https://www.sydneyoperahouse.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sydney
                  </a>
                </li>
                <li className="App-navigation-items">
                  <a
                    href="https://www.getyourguide.com/pt-br/iguazu-falls-brazil-l541/?cmp=bing&ad_id=77721937599141&adgroup_id=1243548300740353&bid_match_type=bb&campaign_id=710117199&device=c&feed_item_id=&keyword=-l541%2F&loc_interest_ms=20&loc_physical_ms=121826&match_type=b&msclkid=cdcdb30bed7a13144ad7d504606fa94c&network=o&partner_id=CD951&target_id=dat-2329521542126944%3Aloc-9&utm_adgroup=lc%3D541%3Aiguazu+falls%2C+brazil%7Cfn%3Df1%7Cagt%3Ddsa&utm_campaign=dc%3D18%3Abr%7Clc%3D541%3Aiguazu+falls%2C+brazil%7Cct%3Dcore%7Cln%3D29%3Aen%7Ctc%3Dau&utm_keyword=-l541%2F&utm_medium=paid_search&utm_query=brazil+official+tourism+website&utm_source=bing&visitor-id=6Q4WMKO16SWVZE7K6J1995MYCQB2UUSN&locale_autoredirect_optout=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Brazil
                  </a>
                </li>
              </ul>

              <main>
                <WeatherSearch onCityChange={handleCityChange} />
                {city && <WeatherTemperature city={city} />}
              </main>
              <footer>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
