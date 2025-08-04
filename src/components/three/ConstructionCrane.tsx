import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ConstructionCrane = () => {
  const craneRef = useRef<THREE.Group>(null);
  const hookRef = useRef<THREE.Group>(null);
  const jibRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (craneRef.current) {
      // Gentle swaying motion
      craneRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
    
    if (hookRef.current) {
      // Hook moving up and down
      hookRef.current.position.y = 6.5 + Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
    }
    
    if (jibRef.current) {
      // Jib slight rotation
      jibRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
    }
  });

  return (
    <group ref={craneRef} position={[0, -1, 0]}>
      {/* Base Platform */}
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[3, 0.5, 3]} />
        <meshStandardMaterial color="#2d3748" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Base Support Structure */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial color="#4a5568" metalness={0.2} roughness={0.8} />
      </mesh>
      
      {/* Mast */}
      <mesh position={[0, 6, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 10]} />
        <meshStandardMaterial color="#e53e3e" metalness={0.4} roughness={0.6} />
      </mesh>
      
      {/* Mast Support Beams */}
      <mesh position={[0, 6, 0]}>
        <boxGeometry args={[0.3, 10, 0.3]} />
        <meshStandardMaterial color="#c53030" metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh position={[0, 6, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.3, 10, 0.3]} />
        <meshStandardMaterial color="#c53030" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Jib Assembly */}
      <group ref={jibRef} position={[0, 10.5, 0]}>
        {/* Main Jib */}
        <mesh position={[4, 0, 0]}>
          <boxGeometry args={[8, 0.2, 0.2]} />
          <meshStandardMaterial color="#3182ce" metalness={0.5} roughness={0.5} />
        </mesh>
        
        {/* Jib Support Cables */}
        <mesh position={[4, -1, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 2]} />
          <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[4, -1, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 2]} />
          <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Counter Jib */}
        <mesh position={[-2, 0, 0]}>
          <boxGeometry args={[4, 0.2, 0.2]} />
          <meshStandardMaterial color="#3182ce" metalness={0.5} roughness={0.5} />
        </mesh>
        
        {/* Counterweight */}
        <mesh position={[-3.5, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#2d3748" metalness={0.6} roughness={0.4} />
        </mesh>
      </group>
      
      {/* Hook Assembly */}
      <group ref={hookRef} position={[6, 6.5, 0]}>
        {/* Hook Cable */}
        <mesh position={[0, 2, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 4]} />
          <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Hook */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[0.1, 0.02, 8, 16]} />
          <meshStandardMaterial color="#d69e2e" metalness={0.7} roughness={0.3} />
        </mesh>
        
        {/* Hook Chain */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 0.4]} />
          <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      
      {/* Control Cabin */}
      <mesh position={[0, 8, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#3182ce" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Windows */}
      <mesh position={[0, 8, 0.51]}>
        <boxGeometry args={[0.8, 0.8, 0.02]} />
        <meshStandardMaterial color="#87ceeb" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Safety Rails */}
      <mesh position={[0, 9.5, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 1]} />
        <meshStandardMaterial color="#e53e3e" metalness={0.4} roughness={0.6} />
      </mesh>
    </group>
  );
};

export default ConstructionCrane;