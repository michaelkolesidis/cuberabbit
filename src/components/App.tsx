import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import Game from "./Game";

function App() {
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
        <Canvas camera={{ fov: 75, position: [20, 9, 11] }}>
          <Game />
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
