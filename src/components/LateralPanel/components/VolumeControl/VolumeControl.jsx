import React from 'react'
import styles from './VolumeControl.module.css'

const VolumeControl = ({ volume, handleSetVolume }) => {
  const currentVolume = volume * 100

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value
    handleSetVolume(newVolume)
  }

  return (
    <div className={styles.volumeControl}>
      <label>Volume: {currentVolume}</label>
      <div className={styles.wrapper}>
        <i className="uil-volume-mute" id="icon" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  )
}

export default VolumeControl
