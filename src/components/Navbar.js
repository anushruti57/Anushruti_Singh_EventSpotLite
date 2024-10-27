import React from 'react';
import './Navbar.css';

function Navbar({ onSearch }) {
  const handleSearch = (e) => {
    onSearch(e.target.value); // Pass the search input to the parent component
  };

  return (
    <nav className="navbar">
      <h1>EventSpot Lite</h1>
      <input
        type="text"
        placeholder="Search events..."
        onChange={handleSearch} // Update search term on input change
      />
    </nav>
  );
}

export default Navbar;
