import React from 'react';
import './EventCard.css';

function EventCard({ event, onClick }) {
  return (
    <div className="event-card" onClick={onClick}>
      <h2>{event.name}</h2>
      <p>{event.date}</p>
      <p>{event.location}</p>
    </div>
  );
}

export default EventCard;

// const standartFunction = () => {
//     // here we go
// }