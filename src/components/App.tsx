import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, OrthographicCamera } from "@react-three/drei";
import useGame from "../stores/useGame";
import Game from "./Game";

function App() {
  const moves = useGame((state) => state.moves);
  const collectibles = useGame((state) => state.collectibles);
  const collected = useGame((state) => state.collected);
  const phase = useGame((state) => state.phase);
  const end = useGame((state) => state.end);

  useEffect(() => {
    if (collectibles === collected) {
      end();
      console.log("ENDED!");
    }
  }, [collectibles, collected]);

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
          <p>PHASE : {phase.toUpperCase()}</p>
          <p>
            COLLECTED : {collected}/{collectibles}
          </p>
          <p>MOVES : {moves}</p>
          {phase === "ended" && <p>FINISHED!</p>}
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
