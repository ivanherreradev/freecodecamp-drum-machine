import React from 'react'
import { playAudio } from '../../../../utils/helper/playAudio'

const Pad = ({ sound, handleSetDisplay }) => {
  return (
    <div className="drum-pad" id={sound.id} onClick={() => playAudio(sound, handleSetDisplay)}>
      {sound.key}
      <audio className="clip" id={sound.key} src={sound.url} />
    </div>
  )
}

export default Pad
