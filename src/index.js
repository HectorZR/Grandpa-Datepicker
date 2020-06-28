import React from 'react'
import Calendar from './components/Calendar'
import styles from './styles/styles.module.css'
import moment from 'moment'

export default function Datepicker(props) {
  const [doesShowDatepicker, setState] = React.useState(false)

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
        {moment(new Date()).format('DD/MM/YYYY')}
      </div>
      <Calendar />
      {/* {doesShowDatepicker ? <Calendar /> : null} */}
    </div>
  )
}
