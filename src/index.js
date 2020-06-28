import React from 'react'
import styles from './styles/styles.module.css'

export default function Datepicker(props) {
  const [showDatepicker, setState] = React.useState(false);

  return <div className={styles.mainContainer} onClick={() => setState(!showDatepicker)}>
    {showDatepicker ? <Div /> : null}
  </div >
}

function Div() {
  return <div className={styles.calendar}>Hello World!</div>
}