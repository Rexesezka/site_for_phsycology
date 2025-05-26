import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from 'react';

const MyCalendar = () => {
      const [date, setDate] = useState(new Date());

      const handleDateChange = (newDate) => {
          setDate(newDate);
      };

       return (
           <div>
               <Calendar onChange={handleDateChange} value={date} />
           </div>
       );

    };

   

export default MyCalendar