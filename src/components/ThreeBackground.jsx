import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

const FloatingParticles = () => {
  const particles = useRef();

  useFrame(() => {
    if (particles.current) {
      particles.current.rotation.y += 0.0005; // Slow rotation
    }
  });

  return (
    <group ref={particles}>
      {[...Array(150)].map((_, i) => {
        const x = (Math.random() - 0.5) * 20;
        const y = (Math.random() - 0.5) * 10;
        const z = (Math.random() - 0.5) * 15;
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.1, 10, 10]} />
            <meshStandardMaterial color={"#00C3FF"} emissive={"#00C3FF"} emissiveIntensity={0.5} />
          </mesh>
        );
      })}
    </group>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-gradient-to-b from-[#024950] via-[#AFDD] to-[#0FA4AF]">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} />
        <Suspense fallback={null}>
          <FloatingParticles />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
