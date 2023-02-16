"use client";
import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { Box, Environment } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function LandingPage({ params }: any) {
  const texture = useLoader(THREE.TextureLoader, "./diamond-square-small.jpg");

  return (
    <div className="flex flex-row justify-center h-screen">
      <div className="h-48">
        <Canvas
          className="z-500 absolute bg-transparent"
          style={{ background: "transparent" }}
          gl={{ alpha: true }}
        >
          <ambientLight />
          <Environment files="./galaxy.hdr" background={false} />
          <pointLight position={[0, 0, 0]} intensity={500} color="white" />
          <GemScene texture={texture} />
        </Canvas>
      </div>
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="object-cover w-full h-full -z-10 absolute"
      >
        <source src="/tml.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

const GemScene = (props) => {
  const { texture } = props;

  return (
    <group>
      <RotatingBox texture={texture} />

      {/* <mesh position={[0, 0, -100]}>
          <planeBufferGeometry attach="geometry" args={[100, 100]} />
          <meshBasicMaterial attach="material" color="#ffffff" />
        </mesh>
        <pointLight color="#ffffff" intensity={5} distance={100} position={[0, 0, 10]} /> */}
    </group>
  );
};

const RotatingBox = (props) => {
  const { texture } = props;
  const gltf = useLoader(GLTFLoader, "./Gem.glb");
  const meshRef = useRef();

  useEffect(() => {
    const mesh = meshRef.current;

    mesh.rotation.y = Math.PI / 16;

    const animate = () => {
      mesh.rotation.y += 0.001;
      mesh.position.y = Math.sin(mesh.rotation.y * 1.25);

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  const geometry = gltf.scene.children[0].geometry;

  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];
      materials.forEach((material) => {
        //   material.envMap = texture
        material.envMapIntensity = 0.15;
        material.blending = THREE.AdditiveBlending;
        material.roughness = 0.1; // adjust the roughness to get the desired effect
        material.metalness = 0.995; // adjust the metalness to get the desired effect
        //   material.transparent = true
        //   material.opacity = 1 // adjust the opacity to get the desired effect
        //  material.transmission = 0.9// adjust the transmission to get the desired effect
        material.refractionRatio = 1.5; // set the refractionRatio to 1.5 for glass material
      });
    }
  });

  return (
    <group {...props}>
      <mesh ref={meshRef}>
        <primitive object={gltf.scene} />
      </mesh>
    </group>
  );
};
