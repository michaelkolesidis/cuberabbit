import { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import useGame from './stores/useGame';
import { levels } from './level/data/levels';
import Lights from './lights/Lights';
import Level from './level/Level';
import Player from './player/Player';

export default function Game() {
  const initialPlayerPositionX = useGame(
    (state) => state.initialPlayerPositionX
  );
  const initialPlayerPositionZ = useGame(
    (state) => state.initialPlayerPositionZ
  );
  const playerPositionX = useGame((state) => state.playerPositionX);
  const playerPositionZ = useGame((state) => state.playerPositionZ);
  const collectibles = useGame((state) => state.collectibles);
  const collected = useGame((state) => state.collected);
  const end = useGame((state) => state.end);

  useEffect(() => {
    console.log('STORED X: ' + playerPositionX);
    console.log('STORED Z: ' + playerPositionZ);
  }, [playerPositionX, playerPositionZ]);

  const [currentLevel] = useState(levels[1]);

  // Winning condition
  useEffect(() => {
    if (
      collectibles === collected &&
      initialPlayerPositionX === playerPositionX &&
      initialPlayerPositionZ === playerPositionZ
    ) {
      end('win');
      console.log('ENDED!');
    }
  }, [collectibles, collected, playerPositionX, playerPositionZ]);

  useFrame((state) => {
    state.camera.lookAt(0, -5, 0);

    state.camera.updateProjectionMatrix();
  });

  return (
    <>
      <color args={['#121215']} attach="background" />
      <Perf position="bottom-left" />
      <OrbitControls />
      <Lights />
      <Level level={currentLevel} />
      <Player
        positionX={playerPositionX}
        positionZ={playerPositionZ}
        squaresMap={currentLevel.squaresMap}
        obstaclesMap={currentLevel.obstaclesMap}
      />
    </>
  );
}

// const cameraTargetX = playerPositionX + 50;
// const cameraTargetY = 25;
// const cameraTargetZ = playerPositionZ + 40;
// const cameraLerpFactor = 0.1;

// Camera follows naive
// state.camera.lookAt(playerPositionX, -5, playerPositionZ);

// Camera follows player
// state.camera.position.x = playerPositionX + 50;
// state.camera.position.y = 25;
// state.camera.position.z = playerPositionZ + 40;

// Lerp camera position
// state.camera.position.x +=
//   (cameraTargetX - state.camera.position.x) * cameraLerpFactor;
// state.camera.position.y +=
//   (cameraTargetY - state.camera.position.y) * cameraLerpFactor;
// state.camera.position.z +=
//   (cameraTargetZ - state.camera.position.z) * cameraLerpFactor;
