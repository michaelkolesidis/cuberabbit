import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Player() {
  const bunnyModel = useGLTF("./models/bunny.glb");
  const bunny = useRef<THREE.Mesh>(null);

  document.addEventListener("keydown", (e) => {
    if (bunny.current) {
      try {
        if (e.code === "ArrowUp") {
          bunny.current.position.x -= 5;
        }
        if (e.code === "ArrowDown") {
          bunny.current.position.x += 5;
        }
        if (e.code === "ArrowRight") {
          bunny.current.position.z -= 5;
        }
        if (e.code === "ArrowLeft") {
          bunny.current.position.z += 5;
        }
      } catch (err) {
        console.log(err);
      }
    }
  });

  return (
    <>
      <primitive ref={bunny} object={bunnyModel.scene} />
    </>
  );
}
