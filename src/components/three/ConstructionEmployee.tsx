import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ConstructionEmployeeProps {
  position: [number, number, number];
  activity: 'walking' | 'working' | 'supervising' | 'measuring';
}

const ConstructionEmployee = ({ position, activity }: ConstructionEmployeeProps) => {
  const employeeRef = useRef<THREE.Group>(null);
  const armRef = useRef<THREE.Group>(null);
  const legRef = useRef<THREE.Group>(null);
  const toolRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (employeeRef.current) {
      // Employee breathing motion
      employeeRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.02;
    }
    
    if (armRef.current && activity === 'working') {
      // Arm swinging motion for working
      armRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 3) * 0.3;
    }
    
    if (legRef.current && activity === 'walking') {
      // Leg movement for walking
      legRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 4) * 0.4;
    }
    
    if (toolRef.current && activity === 'measuring') {
      // Measuring tool movement
      toolRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  const renderTool = () => {
    switch (activity) {
      case 'working':
        return (
          <group position={[0.4, 1.1, 0]}>
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.3]} />
              <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, -0.15, 0]}>
              <boxGeometry args={[0.08, 0.05, 0.05]} />
              <meshStandardMaterial color="#2d3748" metalness={0.6} roughness={0.4} />
            </mesh>
          </group>
        );
      case 'supervising':
        return (
          <group position={[0.3, 1.2, 0]}>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.15, 0.1, 0.05]} />
              <meshStandardMaterial color="#2d3748" metalness={0.4} roughness={0.6} />
            </mesh>
            <mesh position={[0, 0, 0.03]}>
              <boxGeometry args={[0.1, 0.08, 0.02]} />
              <meshStandardMaterial color="#87ceeb" metalness={0.9} roughness={0.1} />
            </mesh>
          </group>
        );
      case 'measuring':
        return (
          <group ref={toolRef} position={[0.4, 1.1, 0]}>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.02, 0.02, 0.4]} />
              <meshStandardMaterial color="#e53e3e" metalness={0.6} roughness={0.4} />
            </mesh>
            <mesh position={[0, 0.2, 0]}>
              <boxGeometry args={[0.3, 0.02, 0.02]} />
              <meshStandardMaterial color="#e53e3e" metalness={0.6} roughness={0.4} />
            </mesh>
          </group>
        );
      default:
        return null;
    }
  };

  return (
    <group ref={employeeRef} position={position}>
      {/* Yellow Helmet */}
      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#f6e05e" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Helmet Visor */}
      <mesh position={[0, 1.8, 0.1]}>
        <boxGeometry args={[0.25, 0.1, 0.02]} />
        <meshStandardMaterial color="#2d3748" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.65, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#fbd38d" metalness={0.1} roughness={0.9} />
      </mesh>

      {/* Body */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.4, 0.8, 0.2]} />
        <meshStandardMaterial color="#3182ce" metalness={0.1} roughness={0.9} />
      </mesh>

      {/* Safety Vest */}
      <mesh position={[0, 1.2, 0.11]}>
        <boxGeometry args={[0.45, 0.8, 0.05]} />
        <meshStandardMaterial color="#f6ad55" metalness={0.1} roughness={0.9} />
      </mesh>

      {/* Arms */}
      <group ref={armRef} position={[0.25, 1.3, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.6]} />
          <meshStandardMaterial color="#fbd38d" metalness={0.1} roughness={0.9} />
        </mesh>
        {/* Gloves */}
        <mesh position={[0, -0.3, 0]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial color="#2d3748" metalness={0.1} roughness={0.9} />
        </mesh>
      </group>

      <group position={[-0.25, 1.3, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.6]} />
          <meshStandardMaterial color="#fbd38d" metalness={0.1} roughness={0.9} />
        </mesh>
        {/* Gloves */}
        <mesh position={[0, -0.3, 0]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial color="#2d3748" metalness={0.1} roughness={0.9} />
        </mesh>
      </group>

      {/* Legs */}
      <group ref={legRef} position={[0.1, 0.7, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.8]} />
          <meshStandardMaterial color="#2d3748" metalness={0.1} roughness={0.9} />
        </mesh>
        {/* Boots */}
        <mesh position={[0, -0.4, 0.05]}>
          <boxGeometry args={[0.12, 0.1, 0.2]} />
          <meshStandardMaterial color="#2d3748" metalness={0.2} roughness={0.8} />
        </mesh>
      </group>

      <group position={[-0.1, 0.7, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.8]} />
          <meshStandardMaterial color="#2d3748" metalness={0.1} roughness={0.9} />
        </mesh>
        {/* Boots */}
        <mesh position={[0, -0.4, 0.05]}>
          <boxGeometry args={[0.12, 0.1, 0.2]} />
          <meshStandardMaterial color="#2d3748" metalness={0.2} roughness={0.8} />
        </mesh>
      </group>

      {/* Tool Belt */}
      <mesh position={[0, 0.9, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.1]} />
        <meshStandardMaterial color="#2d3748" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Safety Equipment */}
      <group position={[0, 1.4, -0.15]}>
        {/* Walkie Talkie */}
        <mesh position={[0.1, 0, 0]}>
          <boxGeometry args={[0.08, 0.05, 0.03]} />
          <meshStandardMaterial color="#2d3748" metalness={0.4} roughness={0.6} />
        </mesh>
        {/* Safety Glasses */}
        <mesh position={[0, 0.05, 0.05]}>
          <boxGeometry args={[0.2, 0.05, 0.02]} />
          <meshStandardMaterial color="#2d3748" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>

      {/* Activity-specific tool */}
      {renderTool()}

      {/* Name Tag */}
      <mesh position={[0, 1.4, 0.15]}>
        <boxGeometry args={[0.3, 0.1, 0.02]} />
        <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.9} />
      </mesh>
    </group>
  );
};

export default ConstructionEmployee; 