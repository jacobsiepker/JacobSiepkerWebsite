import './App.css';
import React from "react"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
// import { Mesh } from 'three';
// import { Canvas } from "react-three-fiber";
// import "./styles.css"
// import WelcomeScene from './threejs/welcome-scene';

function Box(){
  return (
    <mesh>
      <boxBufferGeometry attach="geometry"/>
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
}

// function Light(){
//   return (
//     <Light 
//   )
// }

export default function App() {
  return(
    <div style={{width: "100vw", height: "50vw"}}>
      <Canvas>
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


// function App() {
//   return (
//     // <div>
//       <WelcomeScene/>
//     // </div>
//   );
// }

// export default App;
