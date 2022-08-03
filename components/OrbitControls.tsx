import React, { useEffect } from "react";
import { extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend ({OrbitControls})

const CameraController = () =>
{
    const { camera, gl } = useThree();

    useEffect (
        () => {
            const Controls = new OrbitControls(camera, gl.domElement)
            Controls.minDistance = 40
            Controls.maxDistance = 60
            return () => {
                    Controls.dispose();
                 };
            },
            [camera, gl]
    )
    return null;
}

export default CameraController;