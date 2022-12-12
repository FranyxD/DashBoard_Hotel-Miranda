import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Schedule = () => {
    const [date, setDate] = useState(new Date());
    return (
        <Calendar onChange={setDate} value={date} />
    )
}

export default Schedule;
