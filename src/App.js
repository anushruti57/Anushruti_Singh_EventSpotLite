import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <Navbar onSearch={setSearchTerm} /> {/* Pass setSearchTerm as onSearch */}
      <EventList searchTerm={searchTerm} /> {/* Pass searchTerm to EventList */}
    </div>
  );
}

export default App;
