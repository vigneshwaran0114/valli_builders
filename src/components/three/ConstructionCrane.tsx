import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ConstructionCrane = () => {
  const craneRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (craneRef.current) {
      craneRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={craneRef} position={[0, -1, 0]}>
      {/* Base */}
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[2, 0.5, 2]} />
        <meshLambertMaterial color="#4a5568" />
      </mesh>
      
      {/* Mast */}
      <mesh position={[0, 4, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 8]} />
        <meshLambertMaterial color="#e53e3e" />
      </mesh>
      
      {/* Jib */}
      <mesh position={[3, 7.5, 0]}>
        <boxGeometry args={[6, 0.1, 0.1]} />
        <meshLambertMaterial color="#3182ce" />
      </mesh>
      
      {/* Counter jib */}
      <mesh position={[-1, 7.5, 0]}>
        <boxGeometry args={[2, 0.1, 0.1]} />
        <meshLambertMaterial color="#3182ce" />
      </mesh>
      
      {/* Hook */}
      <mesh position={[5, 6.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5]} />
        <meshLambertMaterial color="#d69e2e" />
      </mesh>
    </group>
  );
};

export default ConstructionCrane;