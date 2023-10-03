import React, { useState } from 'react'
import DrumPad from '../DrumPad/DrumPad'
import LateralPanel from '../LateralPanel/LateralPanel'
import styles from './DrumMachine.module.css'

const DrumMachine = () => {
  const [soundGroup, setSoundGroup] = useState('first')
  const [display, setDisplay] = useState('No play yet')
  const [volume, setVolume] = useState(0.5)

  const handleSetDisplay = (newDisplay) => {
    setDisplay(newDisplay)
  }

  const handleSetSoundGroup = () => {
    soundGroup === 'first' ? setSoundGroup('second') : setSoundGroup('first')
  }

  const handleSetVolume = (newVolume) => {
    setVolume(newVolume)
  }

  return (
    <main id="drum-machine" className={styles.drumMachine}>
      <DrumPad
        soundGroup={soundGroup}
        volume={volume}
        handleSetDisplay={handleSetDisplay}
      />
      <LateralPanel
        display={display}
        soundGroup={soundGroup}
        volume={volume}
        handleSetSoundGroup={handleSetSoundGroup}
        handleSetVolume={handleSetVolume}
      />
    </main>
  )
}

export default DrumMachine
