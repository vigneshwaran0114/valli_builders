import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder } from '@react-three/drei';
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
      <Box args={[2, 0.5, 2]} position={[0, 0.25, 0]}>
        <meshLambertMaterial color="#4a5568" />
      </Box>
      
      {/* Mast */}
      <Cylinder args={[0.1, 0.1, 8]} position={[0, 4, 0]}>
        <meshLambertMaterial color="#e53e3e" />
      </Cylinder>
      
      {/* Jib */}
      <Box args={[6, 0.1, 0.1]} position={[3, 7.5, 0]}>
        <meshLambertMaterial color="#3182ce" />
      </Box>
      
      {/* Counter jib */}
      <Box args={[2, 0.1, 0.1]} position={[-1, 7.5, 0]}>
        <meshLambertMaterial color="#3182ce" />
      </Box>
      
      {/* Hook */}
      <Cylinder args={[0.05, 0.05, 0.5]} position={[5, 6.5, 0]}>
        <meshLambertMaterial color="#d69e2e" />
      </Cylinder>
    </group>
  );
};

export default ConstructionCrane;