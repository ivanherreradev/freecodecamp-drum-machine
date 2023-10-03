import React from 'react'
import { firstSoundsGroup, secondSoundsGroup } from '../../utils/sounds/sounds'
import Pad from './components/Pad/Pad'

const DrumPad = ({ soundsGroup }) => {
  const currentSoundGroup =
    soundsGroup === 'first' ? firstSoundsGroup : secondSoundsGroup

  return (
    <section id="drum-pads">
      {currentSoundGroup.map((sound) => (
        <Pad key={sound.key} sound={sound} />
      ))}
    </section>
  )
}

export default DrumPad
