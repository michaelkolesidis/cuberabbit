import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, OrthographicCamera } from "@react-three/drei";
import useGame from "./stores/useGame";
import checkFirstTimeVisit from "./utils/functions/checkFirstTimeVisit";
import Interface from "./interface/Interface";
import Game from "./Game";

function App() {
  const phase = useGame((state) => state.phase);
  const outcome = useGame((state) => state.outcome);

  // Camera zoom
  const [zoom, setZoom] = useState(30);

  // Check if he visitor is accessing the website for the first time
  useEffect(() => {
    checkFirstTimeVisit();
  }, []);

  // Zoom on rabbit when level is cleared.
  useEffect(() => {
    if (phase === "ended" && outcome === "win") {
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
        <Canvas>
          <OrthographicCamera
            makeDefault
            // near={1}
            // far={1000}
            position={[50, 25, 40]}
            zoom={zoom}
          />
          <Game />
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
