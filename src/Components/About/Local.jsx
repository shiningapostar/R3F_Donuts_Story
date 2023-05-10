import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Local = () => {
    const local = useGLTF('/free_isometric_cafe/scene.gltf');

    return (
    <primitive 
    object={local.scene} 
    scale={4.5}
    position={[0, -2.8, 0]}
    rotation={[0, -5, 0.5]}
    /> 
    );
};

useGLTF.preload('/free_isometric_cafe/scene.gltf');

const LocalComponent = () => {
    return (
    <Canvas>
      <Suspense fallback={null}>
      <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.8} />
        <spotLight position={[-3,2,1]} intensity={0.5} penumbra={1} />
     <Local/>
      </Suspense>
    </Canvas>
    )
}
export default LocalComponent;