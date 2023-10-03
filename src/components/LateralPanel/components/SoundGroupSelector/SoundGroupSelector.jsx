import React from 'react'
import Toggle from '../../../Toggle/Toggle'
import styles from './SoundGroupSelector.module.css'

const SoundGroupSelector = ({ handleSetSoundGroup, soundGroup }) => {
  return (
    <div className={styles.soundGroupSelector}>
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
