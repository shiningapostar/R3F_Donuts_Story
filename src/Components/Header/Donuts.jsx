import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Donuts = () => {
    const donut = useGLTF('/donut_2.0/scene.gltf');

    return (
    <primitive 
    object={donut.scene} 
    scale={22.5}
    position={[0, -1.5, 0]}
    rotation={[-6, 3.8, 0]}
    /> 
    );
};

useGLTF.preload('/donut_2.0/scene.gltf');

const DonutComponent = () => {
    return (
    <Canvas>
      <Suspense fallback={null}>
      <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.8} />
        <spotLight position={[-3,2,1]} intensity={0.5} penumbra={1} />
     <Donuts/>
      </Suspense>
    </Canvas>
    )
}
export default DonutComponent;