import React from 'react'
import Display from './components/Display/Display'
import SoundGroupSelector from './components/SoundGroupSelector/SoundGroupSelector'
import styles from './LateralPanel.module.css'

const LateralPanel = ({ display, handleSetSoundGroup, soundGroup }) => {
  return (
    <aside className={styles.lateralPanel}>
      <Display currentMessage={display} />
      <SoundGroupSelector
        handleSetSoundGroup={handleSetSoundGroup}
        soundGroup={soundGroup}
      />
    </aside>
  )
}

export default LateralPanel
