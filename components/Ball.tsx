import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

const Ball = (props: any) => {
    const mesh = useRef();
    useFrame( ()=> (mesh.current.rotation.x += 0.01))
    useFrame( ()=> (mesh.current.rotation.y += 0.01))
    useFrame( ()=> (mesh.current.rotation.z += 0.01))

    return (
        <mesh ref={mesh} {...props} receiveShadow={true}>
            <sphereBufferGeometry args={[35, 12, 16]}/>
            <meshPhysicalMaterial color="white" wireframe={true}/>
        </mesh>
    )
}

export default Ball;