import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, Text3D } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface ThreeDIconProps {
  type: 'react' | 'threejs' | 'javascript' | 'typescript' | 'node' | 'code';
}

const AnimatedMesh = ({ type }: { type: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  const getMeshByType = () => {
    switch (type) {
      case 'react':
        return (
          <Torus ref={meshRef} args={[1, 0.3, 16, 32]}>
            <meshStandardMaterial color="#61DAFB" emissive="#61DAFB" emissiveIntensity={0.2} />
          </Torus>
        );
      case 'threejs':
        return (
          <Box ref={meshRef} args={[1.5, 1.5, 1.5]}>
            <meshStandardMaterial color="#049EF4" emissive="#049EF4" emissiveIntensity={0.2} />
          </Box>
        );
      case 'javascript':
        return (
          <Sphere ref={meshRef} args={[1, 32, 32]}>
            <meshStandardMaterial color="#F7DF1E" emissive="#F7DF1E" emissiveIntensity={0.2} />
          </Sphere>
        );
      case 'typescript':
        return (
          <Box ref={meshRef} args={[1.2, 1.2, 0.2]}>
            <meshStandardMaterial color="#3178C6" emissive="#3178C6" emissiveIntensity={0.2} />
          </Box>
        );
      case 'node':
        return (
          <Sphere ref={meshRef} args={[1.1, 16, 16]}>
            <meshStandardMaterial color="#68A063" emissive="#68A063" emissiveIntensity={0.2} />
          </Sphere>
        );
      default:
        return (
          <Torus ref={meshRef} args={[0.8, 0.4, 8, 16]}>
            <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.2} />
          </Torus>
        );
    }
  };

  return getMeshByType();
};

const ThreeDIcon = ({ type }: ThreeDIconProps) => {
  return (
    <motion.div
      className="w-24 h-24 md:w-32 md:h-32"
      animate={{ 
        rotate: 360,
        scale: [1, 1.1, 1]
      }}
      transition={{
        rotate: { duration: 20, repeat: Infinity, ease: "linear" as any },
        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" as any }
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
        <AnimatedMesh type={type} />
      </Canvas>
    </motion.div>
  );
};

export default ThreeDIcon;