import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import Level from "./Level";
import Player from "./Player";

export default function Game() {
  return (
    <>
      <color args={["#121215"]} attach="background" />
      <OrbitControls />
      <Lights />
      <Level />
      <Player />
    </>
  );
}
