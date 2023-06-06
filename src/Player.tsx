import { useGLTF } from "@react-three/drei";

export default function Player() {
  const bunny = useGLTF("./models/bunny.glb");

  return (
    <>
      <primitive
        object={bunny.scene}
        position={[0, 0, 0]}
        rotation-y={-Math.PI / 3.5}
      />
    </>
  );
}
