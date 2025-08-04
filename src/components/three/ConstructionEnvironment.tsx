import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ConstructionEnvironment = () => {
  const cloudsRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (cloudsRef.current) {
      // Clouds moving slowly
      cloudsRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 2;
    }
    
    if (particlesRef.current) {
      // Dust particles floating
      particlesRef.current.rotation.y += 0.001;
    }
  });

  // Create dust particles
  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20; // x
    positions[i * 3 + 1] = Math.random() * 10; // y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
    
    colors[i * 3] = 0.8; // r
    colors[i * 3 + 1] = 0.8; // g
    colors[i * 3 + 2] = 0.8; // b
  }

  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  return (
    <>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#8B7355" metalness={0.1} roughness={0.9} />
      </mesh>

      {/* Ground Texture - Dirt and Gravel */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#654321" metalness={0.1} roughness={0.9} />
      </mesh>

      {/* Sky */}
      <mesh position={[0, 20, 0]}>
        <sphereGeometry args={[30, 32, 32]} />
        <meshBasicMaterial color="#87CEEB" side={THREE.BackSide} />
      </mesh>

      {/* Clouds */}
      <group ref={cloudsRef} position={[0, 15, 0]}>
        {Array.from({ length: 5 }).map((_, i) => (
          <mesh key={i} position={[i * 8 - 16, Math.random() * 3, Math.random() * 10 - 5]}>
            <sphereGeometry args={[2 + Math.random() * 2, 16, 16]} />
            <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.9} />
          </mesh>
        ))}
      </group>

      {/* Dust Particles */}
      <points ref={particlesRef} geometry={particleGeometry}>
        <pointsMaterial
          size={0.1}
          vertexColors
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {/* Construction Site Barriers */}
      <group position={[0, 0, 0]}>
        {/* Safety Barriers */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh key={i} position={[i * 2 - 8, 0.5, 8]}>
            <boxGeometry args={[1.5, 1, 0.1]} />
            <meshStandardMaterial color="#f6ad55" metalness={0.2} roughness={0.8} />
          </mesh>
        ))}
        
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh key={i + 8} position={[i * 2 - 8, 0.5, -8]}>
            <boxGeometry args={[1.5, 1, 0.1]} />
            <meshStandardMaterial color="#f6ad55" metalness={0.2} roughness={0.8} />
          </mesh>
        ))}
      </group>

      {/* Construction Materials Piles */}
      <group position={[-10, 0, 5]}>
        {/* Sand Pile */}
        <mesh position={[0, 0.5, 0]}>
          <coneGeometry args={[2, 2, 8]} />
          <meshStandardMaterial color="#f6e05e" metalness={0.1} roughness={0.9} />
        </mesh>
        
        {/* Gravel Pile */}
        <mesh position={[3, 0.3, 0]}>
          <coneGeometry args={[1.5, 1.5, 6]} />
          <meshStandardMaterial color="#a0aec0" metalness={0.1} roughness={0.9} />
        </mesh>
      </group>

      {/* Construction Site Office */}
      <group position={[8, 0, 8]}>
        {/* Office Container */}
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[3, 2, 2]} />
          <meshStandardMaterial color="#3182ce" metalness={0.3} roughness={0.7} />
        </mesh>
        
        {/* Windows */}
        <mesh position={[0, 1, 1.01]}>
          <boxGeometry args={[2, 1, 0.02]} />
          <meshStandardMaterial color="#87ceeb" metalness={0.9} roughness={0.1} />
        </mesh>
        
        {/* Door */}
        <mesh position={[0, 0.5, 1.01]}>
          <boxGeometry args={[0.8, 1, 0.02]} />
          <meshStandardMaterial color="#2d3748" metalness={0.2} roughness={0.8} />
        </mesh>
      </group>

      {/* Power Generator */}
      <group position={[8, 0, -8]}>
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1.5, 1, 1]} />
          <meshStandardMaterial color="#2d3748" metalness={0.6} roughness={0.4} />
        </mesh>
        
        {/* Exhaust Pipe */}
        <mesh position={[0, 1.5, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 1]} />
          <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Water Tank */}
      <group position={[-8, 0, -8]}>
        <mesh position={[0, 2, 0]}>
          <cylinderGeometry args={[1, 1, 4]} />
          <meshStandardMaterial color="#3182ce" metalness={0.4} roughness={0.6} />
        </mesh>
        
        {/* Stand */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 4]} />
          <meshStandardMaterial color="#2d3748" metalness={0.3} roughness={0.7} />
        </mesh>
      </group>

      {/* Construction Signs */}
      <group position={[0, 0, 12]}>
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[2, 1.5, 0.1]} />
          <meshStandardMaterial color="#e53e3e" metalness={0.2} roughness={0.8} />
        </mesh>
        
        {/* Sign Text */}
        <mesh position={[0, 1, 0.06]}>
          <boxGeometry args={[1.8, 1.3, 0.02]} />
          <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.9} />
        </mesh>
      </group>
    </>
  );
};

export default ConstructionEnvironment; 