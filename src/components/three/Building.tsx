import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface BuildingProps {
  position: [number, number, number];
  size: [number, number, number];
  constructionProgress: number; // 0 to 1
}

const Building = ({ position, size, constructionProgress }: BuildingProps) => {
  const buildingRef = useRef<THREE.Group>(null);
  const scaffoldRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (scaffoldRef.current) {
      // Scaffolding swaying slightly
      scaffoldRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.01;
    }
  });

  const [width, height, depth] = size;
  const currentHeight = height * constructionProgress;

  return (
    <group ref={buildingRef} position={position}>
      {/* Foundation */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[width + 0.5, 1, depth + 0.5]} />
        <meshStandardMaterial color="#4a5568" metalness={0.1} roughness={0.9} />
      </mesh>

      {/* Building Structure */}
      <mesh position={[0, currentHeight / 2 + 0.5, 0]}>
        <boxGeometry args={[width, currentHeight, depth]} />
        <meshStandardMaterial color="#718096" metalness={0.2} roughness={0.8} />
      </mesh>

      {/* Windows */}
      {Array.from({ length: Math.floor(currentHeight / 2) }).map((_, floor) => (
        <group key={floor} position={[0, floor * 2 + 2, 0]}>
          {/* Front Windows */}
          <mesh position={[0, 0, depth / 2 + 0.01]}>
            <boxGeometry args={[width - 0.2, 1, 0.02]} />
            <meshStandardMaterial color="#87ceeb" metalness={0.9} roughness={0.1} />
          </mesh>
          {/* Back Windows */}
          <mesh position={[0, 0, -depth / 2 - 0.01]}>
            <boxGeometry args={[width - 0.2, 1, 0.02]} />
            <meshStandardMaterial color="#87ceeb" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      ))}

      {/* Scaffolding */}
      <group ref={scaffoldRef} position={[0, currentHeight / 2 + 0.5, 0]}>
        {/* Vertical Poles */}
        <mesh position={[width / 2 + 0.5, 0, depth / 2 + 0.5]}>
          <cylinderGeometry args={[0.05, 0.05, currentHeight]} />
          <meshStandardMaterial color="#e53e3e" metalness={0.4} roughness={0.6} />
        </mesh>
        <mesh position={[width / 2 + 0.5, 0, -depth / 2 - 0.5]}>
          <cylinderGeometry args={[0.05, 0.05, currentHeight]} />
          <meshStandardMaterial color="#e53e3e" metalness={0.4} roughness={0.6} />
        </mesh>
        <mesh position={[-width / 2 - 0.5, 0, depth / 2 + 0.5]}>
          <cylinderGeometry args={[0.05, 0.05, currentHeight]} />
          <meshStandardMaterial color="#e53e3e" metalness={0.4} roughness={0.6} />
        </mesh>
        <mesh position={[-width / 2 - 0.5, 0, -depth / 2 - 0.5]}>
          <cylinderGeometry args={[0.05, 0.05, currentHeight]} />
          <meshStandardMaterial color="#e53e3e" metalness={0.4} roughness={0.6} />
        </mesh>

        {/* Horizontal Rails */}
        {Array.from({ length: Math.floor(currentHeight / 2) }).map((_, level) => (
          <group key={level} position={[0, level * 2, 0]}>
            {/* Front Rail */}
            <mesh position={[0, 0, depth / 2 + 0.5]}>
              <boxGeometry args={[width + 1, 0.05, 0.05]} />
              <meshStandardMaterial color="#e53e3e" metalness={0.4} roughness={0.6} />
            </mesh>
            {/* Back Rail */}
            <mesh position={[0, 0, -depth / 2 - 0.5]}>
              <boxGeometry args={[width + 1, 0.05, 0.05]} />
              <meshStandardMaterial color="#e53e3e" metalness={0.4} roughness={0.6} />
            </mesh>
            {/* Left Rail */}
            <mesh position={[-width / 2 - 0.5, 0, 0]}>
              <boxGeometry args={[0.05, 0.05, depth + 1]} />
              <meshStandardMaterial color="#e53e3e" metalness={0.4} roughness={0.6} />
            </mesh>
            {/* Right Rail */}
            <mesh position={[width / 2 + 0.5, 0, 0]}>
              <boxGeometry args={[0.05, 0.05, depth + 1]} />
              <meshStandardMaterial color="#e53e3e" metalness={0.4} roughness={0.6} />
            </mesh>
          </group>
        ))}
      </group>

      {/* Construction Materials */}
      <group position={[width / 2 + 1, 0.5, 0]}>
        {/* Steel Beams */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[0.2, 1, 0.2]} />
          <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[0.2, 1, 0.2]} />
          <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Concrete Blocks */}
        <mesh position={[0.5, 0.25, 0]}>
          <boxGeometry args={[0.4, 0.5, 0.4]} />
          <meshStandardMaterial color="#a0aec0" metalness={0.1} roughness={0.9} />
        </mesh>
        <mesh position={[0.5, 0.75, 0]}>
          <boxGeometry args={[0.4, 0.5, 0.4]} />
          <meshStandardMaterial color="#a0aec0" metalness={0.1} roughness={0.9} />
        </mesh>
      </group>

      {/* Safety Net */}
      <mesh position={[0, currentHeight + 1, 0]}>
        <boxGeometry args={[width + 2, 0.1, depth + 2]} />
        <meshStandardMaterial color="#38a169" metalness={0.1} roughness={0.9} transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

export default Building; 