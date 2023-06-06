import { OrbitControls } from "@react-three/drei";
import Lights from "./LIghts";
import Player from "./Player";

export default function Game() {
  return (
    <>
      <color args={["#121215"]} attach="background" />
      <OrbitControls />
      <Lights />
      <Player />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh>
    </>
  );
}
