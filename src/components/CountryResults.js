import React from 'react';

const CountryResults = ({ countries }) => {
  return (
    <ul>
      {countries.map((country) => (
        <p key={country.numericCode}>{country.name}</p>
      ))}
    </ul>
  );
};

export default CountryResults;
