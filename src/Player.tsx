import { useRef, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { useGLTF, useKeyboardControls } from "@react-three/drei";
import * as THREE from "three";

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
            bunny.current.position.x += 5;
          }
          if (value.backward) {
            bunny.current.position.x -= 5;
          }

          if (value.leftward) {
            bunny.current.position.z -= 5;
          }

          if (value.rightward) {
            bunny.current.position.z += 5;
          }
        }
      }
    );

    return () => {
      unsubscrubeKeys();
    }
  }, []);

  return (
    <>
      <primitive ref={bunny} object={bunnyModel.scene} />
    </>
  );
}
