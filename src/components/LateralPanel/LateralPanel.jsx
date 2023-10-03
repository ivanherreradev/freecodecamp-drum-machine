import React from 'react'
import Display from './components/Display/Display'
import SoundGroupSelector from './components/SoundGroupSelector/SoundGroupSelector'
import styles from './LateralPanel.module.css'
import VolumeControl from './components/VolumeControl/VolumeControl'

const LateralPanel = ({
  display,
  soundGroup,
  volume,
  handleSetSoundGroup,
  handleSetVolume
}) => {
  return (
    <aside className={styles.lateralPanel}>
      <Display currentMessage={display} />
      <SoundGroupSelector
        soundGroup={soundGroup}
        handleSetSoundGroup={handleSetSoundGroup}
      />
      <VolumeControl volume={volume} handleSetVolume={handleSetVolume} />
    </aside>
  )
}

export default LateralPanel
