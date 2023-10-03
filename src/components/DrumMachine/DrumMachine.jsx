import React, { useState } from 'react'
import DrumPad from '../DrumPad/DrumPad'
import LateralPanel from '../LateralPanel/LateralPanel'
import styles from './DrumMachine.module.css'

const DrumMachine = () => {
  const [soundGroup, setSoundGroup] = useState('first')

  return (
    <main id="drum-machine" className={styles.drumMachine}>
      <DrumPad soundGroup={soundGroup}/>
      <LateralPanel />
    </main>
  )
}

export default DrumMachine
