import React, { useState } from 'react';
import './CelsiusConverter.css';

const CelsiusConverter = ({ onConvertKelvin, onConvertFahrenheit }) => {
  const [celsius, setCelsius] = useState('');
  
  const handleConvertKelvin = () => {
    const kelvin = parseFloat(celsius) + 273.15;
    onConvertKelvin(kelvin);
  };

  const handleConvertFahrenheit = () => {
    const fahrenheit = (parseFloat(celsius) * 9/5) + 32;
    onConvertFahrenheit(fahrenheit);
  };

  return (
    <div>
      <label>
        Celsius Temperature:
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
        />
      </label>
      <button onClick={handleConvertKelvin}>Convert to Kelvin</button>
      <button onClick={handleConvertFahrenheit}>Convert to Fahrenheit</button>
    </div>
  );
};

export default CelsiusConverter;
