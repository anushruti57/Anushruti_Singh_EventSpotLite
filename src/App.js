import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <Navbar onSearch={setSearchTerm} /> 
      <EventList searchTerm={searchTerm} /> 
    </div>
  );
}

export default App;
