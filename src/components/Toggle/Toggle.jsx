import React from 'react'
import styles from './Toggle.module.css'

const Toggle = ({ isChecked, handleToggle, style, id }) => {
  return (
    <>
      <input
        checked={isChecked}
        onChange={handleToggle}
        id={id}
        className={styles.toggleCheckbox}
        type="checkbox"
      />
      <label style={style} className={styles.toggleLabel} htmlFor={id}>
        <span className={styles.toggleButton} />
      </label>
    </>
  )
}

export default Toggle
