import React, { useState } from 'react';
import Modal from './Modal';
import './DayCell.css';

const DayCell = ({ date, isToday, isSelected, onClick, events, addEvent, updateEvent, deleteEvent }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className={`day-cell ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`}
      onClick={() => {
        if (date) {
          onClick();
          setShowModal(true);
        }
      }}
    >
      {date && <span className="date-number">{date.getDate()}</span>}
      {events.map((event) => (
        <div key={event.id} className="event-item">
          {event.name}
        </div>
      ))}
      {showModal && (
        <Modal
          date={date}
          events={events}
          addEvent={addEvent}
          updateEvent={updateEvent}
          deleteEvent={deleteEvent}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default DayCell;
