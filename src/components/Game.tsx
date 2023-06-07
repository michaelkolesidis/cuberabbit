import { OrbitControls } from "@react-three/drei";
import useGame from "../stores/useGame";
import { levels } from "./level/levels";
import Lights from "./Lights";
import Level from "./level/Level";
import Player from "./Player";

export default function Game() {
  const { playerPositionX, playerPositionZ } = useGame();

  return (
    <>
      <color args={["#121215"]} attach="background" />
      <OrbitControls />
      <Lights />
      <Level level={levels[0]} />
      <Player positionX={playerPositionX} positionZ={playerPositionZ} />
    </>
  );
}
