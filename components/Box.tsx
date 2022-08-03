import React from 'react'

const Box = (props: any) => {
    return (
        <mesh {...props} recieveShadow={true} castShadow={true}>
            <boxBufferGeometry />
            <meshPhysicalMaterial  color={"white"} wireframe={true}/>
        </mesh>
    )
}

export default Box;