import React from 'react'
import DrumPad from '../DrumPad/DrumPad'
import LateralPanel from '../LateralPanel/LateralPanel'
import styles from './DrumMachine.module.css'

const DrumMachine = () => {
  return (
    <main id="drum-machine" className={styles.drumMachine}>
      <DrumPad />
      <LateralPanel />
    </main>
  )
}

export default DrumMachine
