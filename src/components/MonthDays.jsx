import React from 'react'
import moment from 'moment'
import styles from '../styles/monthDays.module.css'

function calculateNumberOfDays(month, dayFormat) {
    const momentWithMonth = moment().month(month);
    let days = [];

    for (let index = 1; index <= momentWithMonth.daysInMonth(); index++) {
        const dayOfWeek = momentWithMonth.set('date', index).format(dayFormat);
        days.push({ day: index, dayOfWeek });
    }
    console.log(days)
    return days;
}


export default function MonthDays({ dayOfMonth, dayFormat = 'dd' }) {
    return <div className={styles.daysContainer}>
        {
            calculateNumberOfDays(dayOfMonth, dayFormat).map(day => (
                <div key={day.day}>
                    {day.dayOfWeek}
                    <div>{day.day}</div>
                </div>
            ))
        }
    </div>
}