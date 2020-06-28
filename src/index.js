import React from 'react'
import Calendar from './components/Calendar'
import styles from './styles/styles.module.css'
import moment from 'moment'

export default function Datepicker(props) {
  const [doesShowDatepicker, setState] = React.useState(false);
  const [date, setDate] = React.useState('')

  console.log('render component')
  return (
    <div
    // className={styles.mainContainer}
    // onClick={() => setState(!doesShowDatepicker)}
    >
      <div
        className={styles.mainContainer}
        onClick={() => setState(!doesShowDatepicker)}
      >
        {date}
      </div>
      <Calendar date={date} setDate={setDate} />
      {/* {doesShowDatepicker ? <Calendar date={date} setDate={setDate} /> : null} */}
    </div>
  )
}
