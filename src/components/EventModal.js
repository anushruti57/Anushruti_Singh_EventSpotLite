import React from 'react';
import './EventModal.css';

function EventModal({ event, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{event.name}</h2>
        
        <p>{event.date}</p>
        <p>{event.location}</p>
        <p>Event description goes here...</p>
      </div>
    </div>
  );
}

export default EventModal;
