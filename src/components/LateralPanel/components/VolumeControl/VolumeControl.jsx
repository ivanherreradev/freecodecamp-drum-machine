import React from 'react'

const VolumeControl = ({ volume, handleSetVolume }) => {
  const currentVolume = volume * 100

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value
    handleSetVolume(newVolume)
  }

  return (
    <div className="container">
      <label>Volume</label>
      <div className="wrapper">
        <i className="uil-volume-mute" id="icon"></i>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
        <span className="slide-value">{currentVolume}</span>
      </div>
    </div>
  )
}

export default VolumeControl
