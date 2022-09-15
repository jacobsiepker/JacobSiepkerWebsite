import React from "react"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";


function Box(){
  return (
    <mesh>
      <boxBufferGeometry attach="geometry"/>
      <meshLambertMaterial attach="material" color="#27008a" />
    </mesh>
  );
}


export default function ModelGalleryFiber() {
  return(
    <div style={{width: "100EM", height: "50EM"}}>
      <Canvas>
        <color attach="background" args={['#123456']} />
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.2} />
        <spotLight
          position = {[10, 15, 10]} angle = {0.3}
          intensity = {1}  />
        <Box />
      </Canvas>
    </div>
  )

}
