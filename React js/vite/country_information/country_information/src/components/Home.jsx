// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setCountryName(e.target.value);
  };

  const fetchCountryData = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
      setCountryData(response.data[0]); // Get the first country in case of multiple results
      setError(''); // Clear any previous error
    } catch (error) {
      setCountryData(null);
      setError('Country not found. Please try another name.');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Country Information App</h1>
      <input
        type="text"
        value={countryName}
        onChange={handleInputChange}
        placeholder="Enter country name"
        style={{ padding: '10px', width: '250px', marginBottom: '20px' }}
      />
      <br />
      <button onClick={fetchCountryData} style={{ padding: '10px 20px' }}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {countryData && (
        <div style={{ marginTop: '20px', textAlign: 'left', maxWidth: '600px', margin: 'auto' }}>
          <h2>{countryData.name.common}</h2>
          <img src={countryData.flags.svg} alt={`${countryData.name.common} flag`} style={{ width: '100px' }} />
          <p><strong>Capital:</strong> {countryData.capital ? countryData.capital[0] : 'N/A'}</p>
          <p><strong>Region:</strong> {countryData.region}</p>
          <p><strong>Population:</strong> {countryData.population.toLocaleString()}</p>
          <p><strong>Area:</strong> {countryData.area.toLocaleString()} km²</p>
          <p><strong>Currency:</strong> {Object.keys(countryData.currencies).map(key => countryData.currencies[key].name).join(', ')}</p>
          <p><strong>Language(s):</strong> {Object.values(countryData.languages).join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
