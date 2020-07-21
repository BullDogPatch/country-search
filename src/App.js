import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CountryResults from './components/CountryResults';

/* 
 TODO
 - make each country in to it's own component,
 - figure out why getting 404 error,
 - maybe instead of filter on each letter typed, I should implement 
 getting the data on submit and display it to the screen,
*/

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getItems = async () => {
      const result = await axios.get(
        `https://restcountries.eu/rest/v2/name/${searchTerm}`,
      );

      setCountries(result.data);
    };
    getItems();
  }, [searchTerm]);

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <h1>Country Search</h1>
      <form>
        <label htmlFor="countrySearch">
          <span>Find Country</span>
        </label>{' '}
        <input
          id="countrySearch"
          onChange={handleOnChange}
          value={searchTerm}
          placeholder="Start Typing"
        />
      </form>
      <CountryResults countries={countries} />
    </div>
  );
}

export default App;
