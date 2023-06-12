import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import useGame from "../stores/useGame";
import { levels } from "./level/levels";
import Lights from "./Lights";
import Level from "./level/Level";
import Player from "./Player";
import { useEffect } from "react";

export default function Game() {
  const playerPositionX = useGame((state) => state.playerPositionX);
  const playerPositionZ = useGame((state) => state.playerPositionZ);

  useEffect(() => {
    console.log("STORED X: " + playerPositionX);
    console.log("STORED Z: " + playerPositionZ);
  }, [playerPositionX, playerPositionZ]);

  return (
    <>
      <color args={["#121215"]} attach="background" />
      <Perf position="bottom-left" />
      <OrbitControls />
      <Lights />
      <Level level={levels[1]} />
      <Player positionX={playerPositionX} positionZ={playerPositionZ} />
    </>
  );
}
