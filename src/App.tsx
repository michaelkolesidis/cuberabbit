import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, OrthographicCamera } from "@react-three/drei";
import useGame from "./stores/useGame";
import Interface from "./interface/Interface";
import Game from "./Game";

function App() {
  const initialPlayerPositionX = useGame(
    (state) => state.initialPlayerPositionX
  );
  const initialPlayerPositionZ = useGame(
    (state) => state.initialPlayerPositionZ
  );
  const playerPositionX = useGame((state) => state.playerPositionX);
  const playerPositionZ = useGame((state) => state.playerPositionZ);
  const moves = useGame((state) => state.moves);
  const collectibles = useGame((state) => state.collectibles);
  const collected = useGame((state) => state.collected);
  const phase = useGame((state) => state.phase);
  const end = useGame((state) => state.end);

  const [zoom, setZoom] = useState(30);

  useEffect(() => {
    if (
      collectibles === collected &&
      initialPlayerPositionX === playerPositionX &&
      initialPlayerPositionZ === playerPositionZ
    ) {
      end();
      console.log("ENDED!");
    }
  }, [collectibles, collected, playerPositionX, playerPositionZ]);

  // Zoom on rabbit when level is cleared.
  useEffect(() => {
    if (phase === "ended") {
      setTimeout(() => {
        setZoom(70);
      }, 1500);
    }
  }, [phase]);

  return (
    <>
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowDown", "KeyS"] },
          { name: "backward", keys: ["ArrowUp", "KeyW"] },
          { name: "leftward", keys: ["ArrowRight", "KeyD"] },
          { name: "rightward", keys: ["ArrowLeft", "KeyA"] },
        ]}
      >
        <Interface />
        <Canvas
        // camera={{ fov: 75, position: [20, 9, 11] }}
        >
          <OrthographicCamera
            makeDefault
            near={1}
            far={100}
            position={[50, 30, 40]}
            zoom={zoom}
          />
          <Game />
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
