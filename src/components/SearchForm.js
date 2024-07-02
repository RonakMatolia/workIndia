import React, { useState } from 'react';
import axios from '../services/api';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/diningplaces?name=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching dining places:', error);
    }
  };

  return (
    <div>
      <h2>Search Dining Places</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResults.length === 0 ? (
        <p>No dining places found.</p>
      ) : (
        <ul>
          {searchResults.map(place => (
            <li key={place.id}>
              <h3>{place.name}</h3>
              <p>Address: {place.address}</p>
              <p>Phone: {place.phone_no}</p>
              <p>Website: {place.website}</p>
              <p>Operational Hours: {place.operational_hours}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchForm;
