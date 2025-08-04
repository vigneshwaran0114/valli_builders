import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars } from '@react-three/drei';
import { Suspense } from 'react';
import ConstructionCrane from './ConstructionCrane';
import Building from './Building';
import ConstructionWorker from './ConstructionWorker';
import ConstructionEquipment from './ConstructionEquipment';
import ConstructionEnvironment from './ConstructionEnvironment';
import ConstructionEmployee from './ConstructionEmployee';

interface Scene3DProps {
  className?: string;
}

const Scene3D = ({ className }: Scene3DProps) => {
  // Employee data with random positions and activities
  const employees = [
    { position: [-2, 0, -1] as [number, number, number], activity: 'working' as const },
    { position: [3, 0, -3] as [number, number, number], activity: 'supervising' as const },
    { position: [1, 0, -6] as [number, number, number], activity: 'measuring' as const },
    { position: [-4, 0, -4] as [number, number, number], activity: 'walking' as const },
    { position: [6, 0, 1] as [number, number, number], activity: 'working' as const },
    { position: [-6, 0, 2] as [number, number, number], activity: 'supervising' as const },
    { position: [0, 0, 3] as [number, number, number], activity: 'measuring' as const },
    { position: [4, 0, 6] as [number, number, number], activity: 'walking' as const },
    { position: [-3, 0, 7] as [number, number, number], activity: 'working' as const },
    { position: [7, 0, -7] as [number, number, number], activity: 'supervising' as const },
    { position: [-7, 0, -6] as [number, number, number], activity: 'measuring' as const },
    { position: [2, 0, 8] as [number, number, number], activity: 'walking' as const },
  ];

  return (
    <div className={className}>
      <Canvas 
        camera={{ position: [15, 10, 15], fov: 60 }}
        shadows
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1.2} 
            color="#ffffff"
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={20}
            shadow-camera-bottom={-20}
          />
          <pointLight position={[-10, 10, -10]} intensity={0.5} color="#ffa500" />
          <pointLight position={[10, 5, -10]} intensity={0.3} color="#87ceeb" />
          
          {/* Environment */}
          <ConstructionEnvironment />
          
          {/* Main Construction Crane */}
          <ConstructionCrane />
          
          {/* Buildings Under Construction */}
          <Building 
            position={[-5, 0, -3]} 
            size={[4, 12, 3]} 
            constructionProgress={0.7} 
          />
          
          <Building 
            position={[5, 0, -5]} 
            size={[3, 8, 2.5]} 
            constructionProgress={0.4} 
          />
          
          <Building 
            position={[0, 0, -8]} 
            size={[5, 15, 4]} 
            constructionProgress={0.9} 
          />
          
          {/* Construction Workers (Red Helmets) */}
          <ConstructionWorker position={[-3, 0, -2]} isWorking={true} />
          <ConstructionWorker position={[4, 0, -4]} isWorking={true} />
          <ConstructionWorker position={[1, 0, -7]} isWorking={false} />
          <ConstructionWorker position={[-6, 0, -4]} isWorking={true} />
          
          {/* Construction Employees (Yellow Helmets) */}
          {employees.map((employee, index) => (
            <ConstructionEmployee
              key={index}
              position={employee.position}
              activity={employee.activity}
            />
          ))}
          
          {/* Construction Equipment */}
          <ConstructionEquipment position={[-8, 0, 2]} type="excavator" />
          <ConstructionEquipment position={[8, 0, 2]} type="bulldozer" />
          <ConstructionEquipment position={[-8, 0, -2]} type="cement-mixer" />
          <ConstructionEquipment position={[8, 0, -2]} type="dump-truck" />
          
          {/* Additional Construction Elements */}
          <group position={[0, 0, 5]}>
            {/* Steel Beams Stack */}
            {Array.from({ length: 5 }).map((_, i) => (
              <mesh key={i} position={[i * 0.3, 0.5, 0]}>
                <boxGeometry args={[0.2, 1, 0.2]} />
                <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
              </mesh>
            ))}
            
            {/* Concrete Blocks */}
            {Array.from({ length: 8 }).map((_, i) => (
              <mesh key={i + 5} position={[i * 0.4 - 1.5, 0.25, 1]}>
                <boxGeometry args={[0.3, 0.5, 0.3]} />
                <meshStandardMaterial color="#a0aec0" metalness={0.1} roughness={0.9} />
              </mesh>
            ))}
          </group>
          
          {/* Safety Equipment */}
          <group position={[3, 0, 8]}>
            {/* Safety Cones */}
            {Array.from({ length: 3 }).map((_, i) => (
              <mesh key={i} position={[i * 0.5, 0.25, 0]}>
                <coneGeometry args={[0.2, 0.5, 8]} />
                <meshStandardMaterial color="#f6ad55" metalness={0.1} roughness={0.9} />
              </mesh>
            ))}
            
            {/* Warning Tape */}
            <mesh position={[0, 0.1, 0]} rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[4, 0.05, 0.02]} />
              <meshStandardMaterial color="#e53e3e" metalness={0.1} roughness={0.9} />
            </mesh>
          </group>
          
          {/* Construction Tools */}
          <group position={[-3, 0, 8]}>
            {/* Tool Box */}
            <mesh position={[0, 0.3, 0]}>
              <boxGeometry args={[0.8, 0.6, 0.5]} />
              <meshStandardMaterial color="#2d3748" metalness={0.3} roughness={0.7} />
            </mesh>
            
            {/* Ladder */}
            <mesh position={[1, 1, 0]} rotation={[0, 0, Math.PI / 6]}>
              <boxGeometry args={[0.1, 3, 0.1]} />
              <meshStandardMaterial color="#2d3748" metalness={0.3} roughness={0.7} />
            </mesh>
            <mesh position={[1, 1, 0.2]} rotation={[0, 0, Math.PI / 6]}>
              <boxGeometry args={[0.1, 3, 0.1]} />
              <meshStandardMaterial color="#2d3748" metalness={0.3} roughness={0.7} />
            </mesh>
            
            {/* Rungs */}
            {Array.from({ length: 6 }).map((_, i) => (
              <mesh key={i} position={[1, i * 0.5, 0.1]} rotation={[0, 0, Math.PI / 6]}>
                <boxGeometry args={[0.3, 0.05, 0.05]} />
                <meshStandardMaterial color="#2d3748" metalness={0.3} roughness={0.7} />
              </mesh>
            ))}
          </group>
          
          {/* Atmospheric Effects */}
          <fog attach="fog" args={['#87CEEB', 10, 50]} />
          
          {/* Stars for night effect */}
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          {/* Environment Map */}
          <Environment preset="sunset" />
          
          {/* Camera Controls */}
          <OrbitControls 
            enablePan={true} 
            enableZoom={true}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minDistance={5}
            maxDistance={30}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;