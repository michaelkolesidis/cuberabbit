import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import useGame from "./stores/useGame";
import { levels } from "./level/data/levels";
import Lights from "./lights/Lights";
import Level from "./level/Level";
import Player from "./player/Player";
import { useEffect } from "react";

export default function Game() {
  const playerPositionX = useGame((state) => state.playerPositionX);
  const playerPositionZ = useGame((state) => state.playerPositionZ);

  useEffect(() => {
    console.log("STORED X: " + playerPositionX);
    console.log("STORED Z: " + playerPositionZ);
  }, [playerPositionX, playerPositionZ]);

  const currentLevel = levels[1];

  useFrame((state) => {
    state.camera.lookAt(0, -5, 0);
    // state.camera.lookAt(playerPositionX, -5, playerPositionZ);
    // state.camera.position.x = playerPositionX + 50;
    // state.camera.position.y = 25;
    // state.camera.position.z = playerPositionZ + 40;

    state.camera.updateProjectionMatrix();
  });

  return (
    <>
      <color args={["#121215"]} attach="background" />
      <Perf position="bottom-left" />
      <OrbitControls />
      <Lights />
      <Level level={currentLevel} />
      <Player
        positionX={playerPositionX}
        positionZ={playerPositionZ}
        squaresMap={currentLevel.squaresMap}
      />
    </>
  );
}
