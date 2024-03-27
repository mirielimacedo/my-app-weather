import './App.css';
import WeatherSearch from './WeatherSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <WeatherSearch/>
       
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
         <a className="App-link" href=" https://www.linkedin.com/feed/"
        target="_blank"
          rel="noopener noreferrer">  Mirieli Maria </a>
        <small className="App-small"> from </small>
         <a className="App-link" href="https://www.shecodes.io/"
         target="_blank"
          rel="noopener noreferrer">   SheCodes</a>
        </p>
        
       </footer>
       

      
       
      </header>
    </div>
  );
}

export default App;
