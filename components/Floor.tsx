import React from 'react'

const Floor = (props: any) => {
    return (
        <mesh {...props} recieveShadow={true}>
      <boxBufferGeometry args={[20,1,10]} />
      <meshPhysicalMaterial color='white' wireframe={true}/>
    </mesh>
    )
}

export default Floor;