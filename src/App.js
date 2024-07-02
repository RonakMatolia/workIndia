import React from 'react';
import './index.css';
import DiningPlaceList from './components/DiningPlaceList';
import SearchForm from './components/SearchForm';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="App">
      <h1>Explore Dining Places</h1>
      <SearchForm />
      <DiningPlaceList />
      <BookingForm />
    </div>
  );
}

export default App;
