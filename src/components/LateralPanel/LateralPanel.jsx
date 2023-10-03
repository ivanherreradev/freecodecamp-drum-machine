import React from 'react'
import Display from './components/Display/Display'
import SoundGroupSelector from './components/SoundGroupSelector/SoundGroupSelector'
import styles from './LateralPanel.module.css'
import VolumeControl from './components/VolumeControl/VolumeControl'
import MuteToggle from './components/MuteToggle/MuteToggle'

const LateralPanel = ({
  display,
  soundGroup,
  volume,
  isMuted,
  handleSetSoundGroup,
  handleSetVolume,
  handleSetMute
}) => {
  return (
    <aside className={styles.lateralPanel}>
      <Display currentMessage={display} />
      <SoundGroupSelector
        soundGroup={soundGroup}
        handleSetSoundGroup={handleSetSoundGroup}
      />
      <VolumeControl volume={volume} handleSetVolume={handleSetVolume} />
      <MuteToggle isMuted={isMuted} handleSetMute={handleSetMute} />
    </aside>
  )
}

export default LateralPanel
