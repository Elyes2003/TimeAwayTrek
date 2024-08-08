import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const MyCalendar = ({ highlightedRanges }) => {
    const isDateInRange = (date, range) => {
        const { start, end } = range;
        return date >= start && date <= end;
      };
    
      const tileClassName = ({ date, view }) => {
        if (view === 'month' && Array.isArray(highlightedRanges)) {
          for (let range of highlightedRanges) {
            if (isDateInRange(date, range)) {
              return range.status;
            }
          }
        }
        return '';
      };

  return (
    <div className='p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-gray-400'>
      <Calendar tileClassName={tileClassName} />
    </div>
  );
};

export default MyCalendar;
