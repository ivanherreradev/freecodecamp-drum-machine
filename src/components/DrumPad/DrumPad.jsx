import React from 'react'
import Pad from './components/Pad/Pad'
import { firstSoundsGroup, secondSoundsGroup } from '../../utils/sounds/sounds'
import styles from './DrumPad.module.css'

const DrumPad = ({ soundGroup, handleSetDisplay }) => {
  const currentSoundGroup =
    soundGroup === 'first' ? firstSoundsGroup : secondSoundsGroup

  return (
    <section id="drum-pads" className={styles.drumPad}>
      {currentSoundGroup.map((sound) => (
        <Pad
          key={sound.key}
          sound={sound}
          handleSetDisplay={handleSetDisplay}
        />
      ))}
    </section>
  )
}

export default DrumPad
