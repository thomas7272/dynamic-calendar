import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ date, events, addEvent, updateEvent, deleteEvent, onClose }) => {
  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const newEvent = {
      id: Date.now(),
      name,
      startTime,
      endTime,
      description,
      date: date.toISOString(),
    };
    addEvent(newEvent);
    onClose();
  };

  return (
    <div className="modal">
      <h3>Events on {date?.toDateString()}</h3>
      {events.map((event) => (
        <div key={event.id} className="event">
          <h4>{event.name}</h4>
          <p>
            {event.startTime} - {event.endTime}
          </p>
          <p>{event.description}</p>
          <button onClick={() => deleteEvent(event.id)}>Delete</button>
        </div>
      ))}
      <h4>Add Event</h4>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Event Name" />
      <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
      <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
      <button onClick={handleSubmit}>Add Event</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
