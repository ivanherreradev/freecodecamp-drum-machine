import React from 'react'
import Toggle from '../../../Toggle/Toggle'

const SoundGroupSelector = ({ handleSetSoundGroup, soundGroup }) => {
  return (
    <div className="sound-group-selector">
      <label>Change Sound Group</label>
      <Toggle
        id={'sound-group'}
        isChecked={soundGroup === 'second'}
        handleToggle={handleSetSoundGroup}
        style={{ background: '#793FDF' }}
      />
    </div>
  )
}

export default SoundGroupSelector
