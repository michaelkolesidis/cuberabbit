import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, OrthographicCamera } from "@react-three/drei";
import useGame from "../stores/useGame";
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
        <div className="interface">
          <p>CUBE RABBIT</p>
          <p>Collect all the items and return to initial position</p>
          <p>—————————</p>
          <p>PHASE : {phase.toUpperCase()}</p>
          <p>
            COLLECTED : {collected}/{collectibles}
          </p>
          <p>MOVES : {moves}</p>
          {phase === "ended" && <p>LEVEL CLEAR!</p>}
        </div>
        <Canvas
        // camera={{ fov: 75, position: [20, 9, 11] }}
        >
          <OrthographicCamera
            makeDefault
            near={1}
            far={100}
            position={[50, 30, 40]}
            zoom={30}
          />
          <Game />
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
