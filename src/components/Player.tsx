import { useRef, useEffect, useState } from "react";
// import { useFrame } from "@react-three/fiber";
import { useGLTF, useKeyboardControls } from "@react-three/drei";
import * as THREE from "three";
// import useGame from "../stores/useGame";
import { BOARD_FACTOR } from "../utils/constants";

interface PlayerProps {
  positionX: number;
  positionY?: number;
  positionZ: number;
}

export default function Player({ positionX, positionZ }: PlayerProps) {
  const bunnyModel = useGLTF("./models/b.exs");
  const bunny = useRef<THREE.Mesh>(null);
  const [subscribeKeys] = useKeyboardControls();

  const initialPositionX = positionX * BOARD_FACTOR;
  const initialPositionZ = positionZ * BOARD_FACTOR;

  useEffect(() => {
    const unsubscrubeKeys = subscribeKeys(
      (state) => state,
      (value) => {
        if (bunny.current) {
          if (value.forward) {
            bunny.current.position.x += BOARD_FACTOR;
            bunny.current.rotation.y = 0;
          }
          if (value.backward) {
            bunny.current.position.x -= BOARD_FACTOR;
            bunny.current.rotation.y = Math.PI;
          }

          if (value.leftward) {
            bunny.current.position.z -= BOARD_FACTOR;
            bunny.current.rotation.y = Math.PI / 2;
          }

          if (value.rightward) {
            bunny.current.position.z += BOARD_FACTOR;
            bunny.current.rotation.y = -Math.PI / 2;
          }
        }
      }
    );

    return () => {
      unsubscrubeKeys();
    };
  }, []);

  return (
    <>
      <primitive
        ref={bunny}
        // onClick={() => console.log("Clicked!")}
        // onPointerEnter={() => console.log("Pointer entered")}
        // onPointerLeave={() => console.log("Pointer left")}
        object={bunnyModel.scene}
        scale={1}
        position={[initialPositionX, 0, initialPositionZ]}
      />
    </>
  );
}
