import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ConstructionEquipmentProps {
  position: [number, number, number];
  type: 'excavator' | 'bulldozer' | 'cement-mixer' | 'dump-truck';
}

const ConstructionEquipment = ({ position, type }: ConstructionEquipmentProps) => {
  const equipmentRef = useRef<THREE.Group>(null);
  const armRef = useRef<THREE.Group>(null);
  const wheelRef = useRef<THREE.Group>(null);
  const mixerRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (equipmentRef.current) {
      // Equipment slight movement
      equipmentRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
    
    if (armRef.current && type === 'excavator') {
      // Excavator arm movement
      armRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    }
    
    if (wheelRef.current) {
      // Wheel rotation
      wheelRef.current.rotation.x += 0.1;
    }
    
    if (mixerRef.current && type === 'cement-mixer') {
      // Cement mixer rotation
      mixerRef.current.rotation.y += 0.05;
    }
  });

  const renderExcavator = () => (
    <group ref={equipmentRef} position={position}>
      {/* Base */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 1, 1.5]} />
        <meshStandardMaterial color="#e53e3e" metalness={0.4} roughness={0.6} />
      </mesh>
      
      {/* Cabin */}
      <mesh position={[0.5, 1.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#3182ce" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Windows */}
      <mesh position={[0.5, 1.5, 0.51]}>
        <boxGeometry args={[0.8, 0.8, 0.02]} />
        <meshStandardMaterial color="#87ceeb" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Arm */}
      <group ref={armRef} position={[-0.5, 1.5, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 0.2, 0.2]} />
          <meshStandardMaterial color="#2d3748" metalness={0.6} roughness={0.4} />
        </mesh>
        
        {/* Bucket */}
        <mesh position={[-1.5, 0, 0]}>
          <boxGeometry args={[0.5, 0.3, 0.4]} />
          <meshStandardMaterial color="#2d3748" metalness={0.5} roughness={0.5} />
        </mesh>
      </group>
      
      {/* Tracks */}
      <mesh position={[0, 0, 0.8]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2]} />
        <meshStandardMaterial color="#2d3748" metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0, -0.8]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2]} />
        <meshStandardMaterial color="#2d3748" metalness={0.3} roughness={0.7} />
      </mesh>
    </group>
  );

  const renderBulldozer = () => (
    <group ref={equipmentRef} position={position}>
      {/* Base */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2.5, 1, 1.5]} />
        <meshStandardMaterial color="#f6ad55" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Cabin */}
      <mesh position={[0.5, 1.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#3182ce" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Blade */}
      <mesh position={[-1.5, 0.5, 0]}>
        <boxGeometry args={[0.1, 1, 1.8]} />
        <meshStandardMaterial color="#2d3748" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Tracks */}
      <mesh position={[0, 0, 0.8]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2]} />
        <meshStandardMaterial color="#2d3748" metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0, -0.8]}>
        <cylinderGeometry args={[0.4, 0.4, 0.2]} />
        <meshStandardMaterial color="#2d3748" metalness={0.3} roughness={0.7} />
      </mesh>
    </group>
  );

  const renderCementMixer = () => (
    <group ref={equipmentRef} position={position}>
      {/* Truck Base */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[3, 1, 1.5]} />
        <meshStandardMaterial color="#3182ce" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Cabin */}
      <mesh position={[1.5, 1.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#3182ce" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Mixer Drum */}
      <group ref={mixerRef} position={[-0.5, 1.5, 0]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 2]} />
          <meshStandardMaterial color="#e53e3e" metalness={0.4} roughness={0.6} />
        </mesh>
        
        {/* Drum Details */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.6, 0.6, 2]} />
          <meshStandardMaterial color="#e53e3e" metalness={0.4} roughness={0.6} />
        </mesh>
      </group>
      
      {/* Wheels */}
      <group ref={wheelRef} position={[0, 0, 0.8]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.2]} />
          <meshStandardMaterial color="#2d3748" metalness={0.3} roughness={0.7} />
        </mesh>
      </group>
      <group position={[0, 0, -0.8]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.2]} />
          <meshStandardMaterial color="#2d3748" metalness={0.3} roughness={0.7} />
        </mesh>
      </group>
    </group>
  );

  const renderDumpTruck = () => (
    <group ref={equipmentRef} position={position}>
      {/* Truck Base */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[3, 1, 1.5]} />
        <meshStandardMaterial color="#3182ce" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Cabin */}
      <mesh position={[1.5, 1.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#3182ce" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Dump Bed */}
      <mesh position={[-0.5, 1, 0]}>
        <boxGeometry args={[2, 0.8, 1.5]} />
        <meshStandardMaterial color="#f6ad55" metalness={0.2} roughness={0.8} />
      </mesh>
      
      {/* Wheels */}
      <group ref={wheelRef} position={[0, 0, 0.8]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.2]} />
          <meshStandardMaterial color="#2d3748" metalness={0.3} roughness={0.7} />
        </mesh>
      </group>
      <group position={[0, 0, -0.8]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.2]} />
          <meshStandardMaterial color="#2d3748" metalness={0.3} roughness={0.7} />
        </mesh>
      </group>
    </group>
  );

  switch (type) {
    case 'excavator':
      return renderExcavator();
    case 'bulldozer':
      return renderBulldozer();
    case 'cement-mixer':
      return renderCementMixer();
    case 'dump-truck':
      return renderDumpTruck();
    default:
      return renderExcavator();
  }
};

export default ConstructionEquipment; 