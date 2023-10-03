import React from 'react'
import styles from './Display.module.css'

const Display = ({ currentMessage }) => {
  return (
    <p id="display" className={styles.display}>
      {currentMessage}
    </p>
  )
}

export default Display
