// src/components/BookingForm.js

import React, { useState } from 'react';
import axios from '../services/api';

const BookingForm = () => {
  const [placeId, setPlaceId] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [message, setMessage] = useState('');

  const handleBooking = async () => {
    try {
      const response = await axios.post('/book', {
        place_id: placeId,
        start_time: startTime,
        end_time: endTime,
      });
      setMessage(response.data.status);
    } catch (error) {
      console.error('Error booking dining place:', error);
      setMessage('Failed to book. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Book a Dining Place</h2>
      <div style={styles.formGroup}>
        <label style={styles.label}>Place ID</label>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter Place ID"
          value={placeId}
          onChange={(e) => setPlaceId(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Start Time</label>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter Start Time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>End Time</label>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter End Time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
      <button style={styles.button} onClick={handleBooking}>Book</button>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '14px',
    color: '#333',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  inputFocus: {
    borderColor: '#007BFF',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '10px',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  message: {
    marginTop: '20px',
    textAlign: 'center',
    color: '#ff0000',
    fontSize: '14px',
    fontWeight: 'bold',
  },
};

export default BookingForm;
