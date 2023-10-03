import React from 'react'
import Toggle from '../../../Toggle/Toggle'

const MuteToggle = ({ isMuted, handleSetMute }) => {
  return (
    <div className="mute-toggle">
    <label>Mute</label>
    <Toggle
      id={'mute-toggle'}
      isChecked={isMuted}
      handleToggle={handleSetMute}
      style={{ background: isMuted && '#793FDF' }}
    />
  </div>
  )
}

export default MuteToggle
