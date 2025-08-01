import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import ConstructionCrane from './ConstructionCrane';

interface Scene3DProps {
  className?: string;
}

const Scene3D = ({ className }: Scene3DProps) => {
  return (
    <div className={className}>
      <Canvas camera={{ position: [8, 5, 8], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffa500" />
          
          <ConstructionCrane />
          
          <OrbitControls 
            enablePan={false} 
            enableZoom={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={1}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;