import React from 'react'
import Display from './components/Display/Display'

const LateralPanel = ({ display }) => {
  return (
    <aside>
      <Display currentMessage={display}/>
    </aside>
  )
}

export default LateralPanel
