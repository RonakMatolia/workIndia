
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend API URL
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
    // Add any headers you need (e.g., authorization headers)
  },
});

export default instance;

const BASE_URL = 'http://localhost:5000'

export const fetchDiningPlaces = async () => {
  try {
    const response = await fetch(`${BASE_URL}/dining`);
    if (!response.ok) {
      throw new Error('Failed to fetch dining places');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching dining places:', error.message);
    return [];
  }
};

export const addDiningPlace = async (newDiningPlace) => {
  try {
    const response = await fetch(`${BASE_URL}/dining/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDiningPlace),
    });
    if (!response.ok) {
      throw new Error('Failed to add dining place');
    }
    return await response.json();
  } catch (error) {
    console.error('Error adding dining place:', error.message);
    return null;
  }
};

export const checkDiningPlaceAvailability = async (placeId, startTime, endTime) => {
  try {
    const response = await fetch(`${BASE_URL}/dining/availability?place_id=${placeId}&start_time=${startTime}&end_time=${endTime}`);
    if (!response.ok) {
      throw new Error('Failed to check dining place availability');
    }
    const result = await response.json();
    return result.available;
  } catch (error) {
    console.error('Error checking dining place availability:', error.message);
    return false;
  }
};

export const bookDiningPlace = async (bookingDetails) => {
  try {
    const response = await fetch(`${BASE_URL}/dining/book`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingDetails),
    });
    if (!response.ok) {
      throw new Error('Failed to book dining place');
    }
    return await response.json();
  } catch (error) {
    console.error('Error booking dining place:', error.message);
    return null;
  }
};
