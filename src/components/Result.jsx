import React from 'react';
import './Result.css'

const Result = ({ result, unit }) => {
  return (
    <p>
      Result: {result} {unit}
    </p>
  );
};

export default Result;
