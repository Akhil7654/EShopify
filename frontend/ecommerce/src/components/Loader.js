import React from 'react'
import { reuleaux } from 'ldrs'

function Loader() {
    reuleaux.register()
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
<l-reuleaux
  size="50"
  stroke="7"
  stroke-length="0.15"
  bg-opacity="0.1"
  speed="1.2" 
  color="black" 
></l-reuleaux>
</div>
  )
}

export default Loader