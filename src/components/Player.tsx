import { useRef, useEffect } from "react";
// import { useFrame, useLoader } from "@react-three/fiber";
import { useGLTF, useKeyboardControls } from "@react-three/drei";
import * as THREE from "three";
import { BOARD_FACTOR } from "../utils/constants";


export default function Player() {
  const bunnyModel = useGLTF("./models/bunny.glb");
  const bunny = useRef<THREE.Mesh>(null);
  const [subscribeKeys, getKeys] = useKeyboardControls();

  useEffect(() => {
    const unsubscrubeKeys = subscribeKeys(
      (state) => state,
      (value) => {
        if (bunny.current) {
          if (value.forward) {
            bunny.current.position.x += BOARD_FACTOR;
          }
          if (value.backward) {
            bunny.current.position.x -= BOARD_FACTOR;
          }

          if (value.leftward) {
            bunny.current.position.z -= BOARD_FACTOR;
          }

          if (value.rightward) {
            bunny.current.position.z += BOARD_FACTOR;
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
        onClick={() => console.log("Clicked!")}
        onPointerEnter={() => console.log("Pointer entered")}
        onPointerLeave={() => console.log("Pointer left")}
        object={bunnyModel.scene}
        scale={1}
      />
    </>
  );
}
