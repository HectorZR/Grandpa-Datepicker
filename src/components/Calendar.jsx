import React from 'react';
import MonthDays from './MonthDays'
import styles from '../styles/calendar.module.css';
import moment from 'moment'

export default class Calendar extends React.Component {
    constructor() {
        super();
        const date = new Date()
        this.state = {
            month: date.getMonth(),
            year: date.getFullYear(),
            day: date.getDay(),
            date: date
        }
        this.renderMonths = this.renderMonths.bind(this);
        this.changeMonth = this.changeMonth.bind(this);
    }

    renderMonths(month) {
        return moment().month(month).format('MMMM');
    }

    changeMonth(monthChanger) {
        const { month, date } = this.state
        const { setDate } = this.props

        setDate(moment(date).month(month).format('DD/MM/YYYY'))
        this.setState({
            month: month + monthChanger
        })
    }

    render() {
        console.log('render Calendar', this.state)
        return <div className={styles.calendarContainer} >
            <button onClick={() => this.changeMonth(-1)}>Change month</button>
            {
                this.renderMonths(this.state.month)
            }
            <button onClick={() => this.changeMonth(1)}>Change month</button>

            <MonthDays dayOfMonth={this.state.month} />
        </div>
    }
}