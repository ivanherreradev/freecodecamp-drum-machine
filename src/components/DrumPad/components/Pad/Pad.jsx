import React from 'react'

const Pad = ({ sound }) => {
  return (
    <div className="drum-pad" id={sound.id}>
      {sound.key}
      <audio className="clip" id={sound.key} src={sound.url} />
    </div>
  )
}

export default Pad
