import React from 'react'
import Display from './components/Display/Display'
import SoundGroupSelector from './components/SoundGroupSelector/SoundGroupSelector'

const LateralPanel = ({ display, handleSetSoundGroup, soundGroup }) => {
  return (
    <aside>
      <Display currentMessage={display} />
      <SoundGroupSelector
        handleSetSoundGroup={handleSetSoundGroup}
        soundGroup={soundGroup}
      />
    </aside>
  )
}

export default LateralPanel
