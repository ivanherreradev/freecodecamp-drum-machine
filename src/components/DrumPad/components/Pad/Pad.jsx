import React, { useEffect } from 'react'
import { playAudio } from '../../../../utils/helper/playAudio'
import styles from './Pad.module.css'

const Pad = ({ sound, volume, isMuted, handleSetDisplay }) => {
  const zeroVolume = 0

  const handleKeyDown = (event) => {
    if (event.keyCode === sound.keyCode) {
      if (!isMuted) {
        playAudio(sound, volume, handleSetDisplay)
      } else {
        playAudio(sound, zeroVolume, handleSetDisplay)
      }
    }
  }

  const handleClick = () => {
    if (!isMuted) {
      playAudio(sound, volume, handleSetDisplay)
    } else {
      playAudio(sound, zeroVolume, handleSetDisplay)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [sound, isMuted, volume])

  return (
    <div
      className={`${styles.pad} drum-pad`}
      id={sound.id}
      onClick={handleClick}
    >
      {sound.key}
      <audio className="clip" id={sound.key} src={sound.url} />
    </div>
  )
}

export default Pad
