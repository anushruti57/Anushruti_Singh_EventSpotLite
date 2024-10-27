// src/components/EventList.js
import React, { useState } from 'react';
import EventCard from './EventCard';
import EventModal from './EventModal';
import { eventsData } from '../data/eventsData';
import './EventList.css';

function EventList({ searchTerm }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  // Filter events based on the search term (case-insensitive)
  const filteredEvents = eventsData.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      {filteredEvents.map((event) => (
        <EventCard key={event.id} event={event} onClick={() => openModal(event)} />
      ))}
      {selectedEvent && <EventModal event={selectedEvent} onClose={closeModal} />}
    </div>
  );
}

export default EventList;
