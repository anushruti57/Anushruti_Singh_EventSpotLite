import React from 'react';
import './Navbar.css';

function Navbar({ onSearch }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <nav className="navbar">
      <h1>EventSpot Lite</h1>
      <input
        type="text"
        placeholder="Search events..."
        onChange={handleSearch} 
      />
    </nav>
  );
}

export default Navbar;
