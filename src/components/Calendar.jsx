import React, { useState } from 'react';
import { getDaysInMonth, startOfMonth, addMonths, subMonths, format, isSameDay, isToday } from 'date-fns';
import DayCell from './DayCell';
import './Calendar.css';

const Calendar = ({ selectedDate, setSelectedDate, events, addEvent, updateEvent, deleteEvent }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDayOfMonth = startOfMonth(currentMonth).getDay();

  const handlePreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  return (
    <div className="calendar">
      <header className="calendar-header">
        <button onClick={handlePreviousMonth}>Previous</button>
        <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
        <button onClick={handleNextMonth}>Next</button>
      </header>
      <div className="calendar-grid">
        {[...Array(firstDayOfMonth + daysInMonth)].map((_, i) => {
          const day = i >= firstDayOfMonth ? new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i - firstDayOfMonth + 1) : null;
          return (
            <DayCell
              key={i}
              date={day}
              isToday={day && isToday(day)}
              isSelected={day && isSameDay(day, selectedDate)}
              onClick={() => day && setSelectedDate(day)}
              events={events.filter((event) => isSameDay(new Date(event.date), day))}
              addEvent={addEvent}
              updateEvent={updateEvent}
              deleteEvent={deleteEvent}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
