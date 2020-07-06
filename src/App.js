import React from 'react';
import './App.css';
import Forecast from './components/Forecast/Forecast';
import Logo from './components/Logo/Logo';


function App(props) {
  
    let today = new Date().toDateString();
   
   
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1>Weather App</h1>
      </header>
      <main>
        
        <Forecast />
      </main>
      <footer>
        <h2 className="Date">{today}</h2>
      </footer>
    </div>
  );
}

export default App;
