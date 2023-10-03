import React, { useState } from 'react'
import DrumPad from '../DrumPad/DrumPad'
import LateralPanel from '../LateralPanel/LateralPanel'
import styles from './DrumMachine.module.css'

const DrumMachine = () => {
  const [soundGroup, setSoundGroup] = useState('first')
  const [display, setDisplay] = useState('No play yet')

  const handleSetDisplay = (newDisplay) => {
    setDisplay(newDisplay)
  }

  return (
    <main id="drum-machine" className={styles.drumMachine}>
      <DrumPad soundGroup={soundGroup} handleSetDisplay={handleSetDisplay} />
      <LateralPanel display={display}/>
    </main>
  )
}

export default DrumMachine
