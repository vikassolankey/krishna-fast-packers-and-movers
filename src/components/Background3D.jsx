import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';

function FloatingShape({ position, color, speed, distort }) {
  const mesh = useRef(null);

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.001 * speed;
    mesh.current.rotation.y += 0.002 * speed;
  });

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={mesh} position={position} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={speed}
          roughness={0}
          metalness={1}
        />
      </Sphere>
    </Float>
  );
}

function Scene() {
  const shapes = useMemo(() => [
    { position: [-4, 2, -5], color: "#4338ca", speed: 1.5, distort: 0.4 },
    { position: [4, -2, -8], color: "#1e1b4b", speed: 1, distort: 0.6 },
    { position: [-2, -3, -10], color: "#312e81", speed: 2, distort: 0.3 },
    { position: [5, 3, -12], color: "#4f46e5", speed: 1.2, distort: 0.5 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      
      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} />
      ))}
      
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020617] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} style={{ pointerEvents: 'none' }}>
        <Scene />
      </Canvas>
    </div>
  );
}
