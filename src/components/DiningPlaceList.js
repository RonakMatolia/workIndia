import React, { useState, useEffect } from 'react';
import axios from '../services/api';

const DiningPlaceList = () => {
  const [diningPlaces, setDiningPlaces] = useState([]);

  useEffect(() => {
    const fetchDiningPlaces = async () => {
      try {
        const response = await axios.get('/diningplaces');
        setDiningPlaces(response.data);
      } catch (error) {
        console.error('Error fetching dining places:', error);
      }
    };

    fetchDiningPlaces();
  }, []);

  return (
    <div>
      <h2>Dining Places</h2>
      <ul>
        {diningPlaces.map(place => (
          <li key={place.id}>
            <h3>{place.name}</h3>
            <p>Address: {place.address}</p>
            <p>Phone: {place.phone_no}</p>
            <p>Website: {place.website}</p>
            <p>Operational Hours: {place.operational_hours}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiningPlaceList;
