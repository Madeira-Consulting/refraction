"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, LensFl } from "react-three-fiber";
import { Box, Environment } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import {
    Bloom,
    DepthOfField,
    EffectComposer,
    Noise,
    GodRays,
    Glitch,
    ChromaticAberration,
    HueSaturation,
    BrightnessContrast,
} from "@react-three/postprocessing";
import { BlendFunction, KernelSize, Resizer } from "postprocessing";

function Starfield() {
    const ref = useRef();

    const [particleSystem, setParticleSystem] = useState(null);
    const [lensFlares, setLensFlares] = useState(null);

    useEffect(() => {
        const particleGeometry = new THREE.BufferGeometry();
        const particleMaterial = new THREE.PointsMaterial({
            size: 1,
            color: 0xffffff,
            transparent: true,
            opacity: 0.03,
            blending: THREE.AdditiveBlending,
        });
        const particleCount = 2000;
        const particlePositions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * 2000 - 1000;
            const y = Math.random() * 2000 - 1000;
            const z = Math.random() * 2000 - 1000;
            particlePositions[i * 3] = -x;
            particlePositions[i * 3 + 1] = -y;
            particlePositions[i * 3 + 2] = -z;
        }

        particleGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(particlePositions, 3)
        );
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        setParticleSystem(particles);

        // const lensFlareTexture = new THREE.TextureLoader().load(
        //     "/lensflare.png"
        // );
        // const lensFlareCount = 10;
        // const lensFlares = [];

        // for (let i = 0; i < lensFlareCount; i++) {
        //     const x = Math.random() * 2000 - 1000;
        //     const y = Math.random() * 2000 - 1000;
        //     const z = Math.random() * 2000 - 1000;
        //     // const lensFlare = new THREE.LensFlare(
        //     //     lensFlareTexture,
        //     //     500,
        //     //     0,
        //     //     THREE.AdditiveBlending,
        //     //     new THREE.Color(0xffffff)
        //     // );
        //     const lensFlare = new THREE.Sprite(
        //         new THREE.SpriteMaterial({
        //             map: lensFlareTexture,
        //             color: 0xffffff,
        //             fog: true,
        //         })
        //     );
        //     lensFlare.position.set(x, y, z);
        //     lensFlare.customUpdateCallback = () => {
        //         lensFlare.opacity = Math.random();
        //     };
        //     lensFlares.push(lensFlare);
        // }

        // setLensFlares(lensFlares);
    }, []);

    useFrame(() => {
        if (particleSystem) {
            particleSystem.rotation.x += 0.0005;
            particleSystem.rotation.y += 0.001;
        }
    });

    return (
        <group ref={ref}>
            {particleSystem && <primitive object={particleSystem} />}
            {lensFlares &&
                lensFlares.map((lensFlare, index) => (
                    <primitive key={index} object={lensFlare} />
                ))}
        </group>
    );
}

export default function LandingPage({ params }: any) {
    const texture = useLoader(
        THREE.TextureLoader,
        "./diamond-square-small.jpg"
    );

    return (
        <div className="flex flex-row justify-center h-screen bg-galaxy overflow-clip">
            <div className="h-screen w-screen flex flex-col ">
                <div className="h-screen absolute w-full">
                    <Canvas
                        className="z-10 absolute bg-transparent "
                        style={{ background: "transparent" }}
                        gl={{ alpha: true }}
                        camera={{ position: [0, 0, -10], fov: 75 }}
                    >
                        <EffectComposer>
                            <Bloom
                                luminanceThreshold={0}
                                luminanceSmoothing={0.9}
                                intensity={1}
                                kernelSize={KernelSize.LARGE} // blur kernel size
                                width={Resizer.AUTO_SIZE} // render width
                                height={Resizer.AUTO_SIZE} // render height
                            />
                            <Noise opacity={0.005} />
                            {/* <ChromaticAberration
                                blendFunction={BlendFunction.NORMAL} // blend mode
                                offset={[0.0, 0.001]} // color offset
                            /> */}

                            <DepthOfField
                                focusDistance={0}
                                focalLength={0.015}
                                bokehScale={2}
                                height={480}
                            />
                        </EffectComposer>
                        <ambientLight />

                        <Environment files="./galaxy.hdr" background={false} />
                        <pointLight
                            position={[0, 0, -1]}
                            intensity={500}
                            color="white"
                        />
                        <Starfield />
                        <GemScene texture={texture} />
                    </Canvas>
                </div>
                <div
                    style={{
                        fontFamily: "Migra",
                    }}
                    className="flex flex-col justify-center items-center h-screen z-50 pt-40"
                >
                    <h1 className="text-8xl font-medium text-galaxy2 text-center leading-tight tracking-wide">
                        Everyday
                        <br /> <span className="italic font-medium">
                            magic
                        </span>{" "}
                        for the
                        <br /> modern{" "}
                        <span className="italic font-medium">mystic</span>
                    </h1>
                </div>
            </div>
            2<div className="stars" style={{ filter: "blur(1px)" }}></div>
            <div className="stars2"></div>
            <div className="twinkling blur-sm"></div>
            <div className="godrays"></div>
            {/* <video
                autoPlay
                muted
                loop
                id="myVideo"
                className="object-cover w-full h-full -z-10 absolute"
            >
                <source src="/tml.mp4" type="video/mp4" />
            </video> */}
        </div>
    );
}

const GemScene = (props) => {
    return (
        <group>
            <Gem />
        </group>
    );
};

const Jellyfish = (props) => {
    const outer = useLoader(GLTFLoader, "./jellyfish.glb");
    const meshRef = useRef();

    useEffect(() => {
        const mesh = meshRef.current;

        //  Set initial position
        mesh.position.z = Math.random() * 10 - 5;
        mesh.position.x = Math.random() * 10 - 5;
        mesh.position.y = -3;

        const animate = () => {
            //  Calculate new y position using a sine function
            mesh.position.y = Math.sin(mesh.rotation.y * 2) * 1.5;

            //  Increase rotation and position
            mesh.rotation.y += 0.001;
            mesh.position.y += 0.01;

            //  Wrap around when the jellyfish goes too high
            if (mesh.position.y > 5) {
                mesh.position.y = -3;
            }

            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, []);

    outer.scene.traverse((child) => {
        if (child.isMesh) {
            const materials = Array.isArray(child.material)
                ? child.material
                : [child.material];
            materials.forEach((material) => {
                //   material.envMap = texture
                material.envMapIntensity = 0.1;
                // material.color = new THREE.Color(0xffffffff);
                // material.blending = THREE.AdditiveBlending;
                material.roughness = 0; // adjust the roughness to get the desired effect
                material.metalness = 1; // adjust the metalness to get the desired effect
                //   material.transparent = true
                material.opacity = 0.8; // adjust the opacity to get the desired effect
                // material.transmission = 0.9; // adjust the transmission to get the desired effect
                material.refractionRatio = 0.5; // set the refractionRatio to 1.5 for glass material
            });
        }
    });

    outer.scene.children[0].children[0].children[0].material =
        new THREE.MeshStandardMaterial({
            envMapIntensity: 0.3,
            blending: THREE.AdditiveBlending,

            roughness: 0, // adjust the roughness to get the desired effect
            metalness: 1, // adjust the metalness to get the desired effect
            opacity: 0.8, // adjust the opacity to get the desired effect
            refractionRatio: 0.5, // set the refractionRatio to 1.5 for glass material
        });

    return (
        <group {...props}>
            <mesh ref={meshRef}>
                <primitive object={outer.scene} />
            </mesh>
            <mesh></mesh>
        </group>
    );
};

const Gem = (props) => {
    const outer = useLoader(GLTFLoader, "./gem.glb");
    const meshRef = useRef();

    useEffect(() => {
        const mesh = meshRef.current;

        // mesh.rotation.y = Math.PI + 100;
        // mesh.rotation.z = Math.PI / 3.2;
        // mesh.position.x = 0;
        // mesh.position.y = -0.4;
        // mesh.position.z = 3.5;

        mesh.position.z = 0;
        // mesh.position.z = 3.5;

        const animate = () => {
            mesh.rotation.y += 0.001;
            mesh.position.y = Math.sin(mesh.rotation.y * 1.25);

            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, []);

    // outer.scene.traverse((child) => {
    //     if (child.isMesh) {
    //         const materials = Array.isArray(child.material)
    //             ? child.material
    //             : [child.material];
    //         materials.forEach((material) => {
    //             //   material.envMap = texture
    //             material.envMapIntensity = 0.1;
    //             // material.color = new THREE.Color(0xffffffff);
    //             // material.blending = THREE.AdditiveBlending;
    //             material.roughness = 0; // adjust the roughness to get the desired effect
    //             material.metalness = 1; // adjust the metalness to get the desired effect
    //             //   material.transparent = true
    //             material.opacity = 0.8; // adjust the opacity to get the desired effect
    //             // material.transmission = 0.9; // adjust the transmission to get the desired effect
    //             material.refractionRatio = 0.5; // set the refractionRatio to 1.5 for glass material
    //         });
    //     }
    // });

    outer.scene.children[0].children[0].children[0].material =
        new THREE.MeshStandardMaterial({
            envMapIntensity: 0.3,
            blending: THREE.AdditiveBlending,

            roughness: 0, // adjust the roughness to get the desired effect
            metalness: 1, // adjust the metalness to get the desired effect
            opacity: 0.8, // adjust the opacity to get the desired effect
            refractionRatio: 0.5, // set the refractionRatio to 1.5 for glass material
        });

    return (
        <group {...props}>
            <mesh ref={meshRef}>
                <primitive object={outer.scene} />
            </mesh>
            <mesh></mesh>
        </group>
    );
};