import React, { useEffect } from 'react'
import { playAudio } from '../../../../utils/helper/playAudio'
import styles from './Pad.module.css'

const Pad = ({ sound, handleSetDisplay }) => {
  const handleKeyDown = (event) => {
    if (event.keyCode === sound.keyCode) {
      playAudio(sound, handleSetDisplay)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [sound])

  return (
    <div
      className={`${styles.pad} drum-pad`}
      id={sound.id}
      onClick={() => playAudio(sound, handleSetDisplay)}
    >
      {sound.key}
      <audio className="clip" id={sound.key} src={sound.url} />
    </div>
  )
}

export default Pad
