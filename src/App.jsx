import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CelsiusConverter from './components/CelsiusConverter';
import Result from './components/Result';

const App = () => {
  const [convertedResult, setConvertedResult] = useState(null);
  const [conversionUnit, setConversionUnit] = useState('');

  const handleConvertKelvin = (kelvin) => {
    setConvertedResult(kelvin);
    setConversionUnit('Kelvin');
  };

  const handleConvertFahrenheit = (fahrenheit) => {
    setConvertedResult(fahrenheit);
    setConversionUnit('Fahrenheit');
  };

  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <CelsiusConverter
          onConvertKelvin={handleConvertKelvin}
          onConvertFahrenheit={handleConvertFahrenheit}
        />
        {convertedResult && <Result result={convertedResult} unit={conversionUnit} />}
      </div>
      <hr />
      <div className='footer'>Made by Furkan</div>
    </div>
    
  );
};

export default App;
