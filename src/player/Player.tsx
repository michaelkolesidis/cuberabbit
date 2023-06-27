import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useKeyboardControls } from "@react-three/drei";
import * as THREE from "three";
import useGame from "../stores/useGame";
import { BOARD_FACTOR } from "../utils/constants";

interface PlayerProps {
  positionX: number;
  positionY?: number;
  positionZ: number;
  squaresMap: number[][];
  obstaclesMap: number[][];
}

export default function Player({
  positionX,
  positionZ,
  squaresMap,
  obstaclesMap,
}: PlayerProps) {
  const setPlayerPositionX = useGame((state) => state.setPlayerPositionX);
  const setPlayerPositionZ = useGame((state) => state.setPlayerPositionZ);
  const addMove = useGame((state) => state.addMove);
  const phase = useGame((state) => state.phase);
  const end = useGame((state) => state.end);
  const start = useGame((state) => state.start);

  const rabbitModel = useGLTF("./models/r.exs");
  const rabbit = useRef<THREE.Mesh>(null);
  const [subscribeKeys] = useKeyboardControls();

  const initialPositionX = positionX * BOARD_FACTOR;
  const initialPositionZ = positionZ * BOARD_FACTOR;

  useEffect(() => {
    if (phase !== "ended") {
      const movePlayer = (dx: number, dz: number) => {
        console.log("MOVEPLAYER positionX: " + positionX);
        console.log("MOVEPLAYER positionZ: " + positionZ);

        let newPositionX, newPositionZ;

        if (rabbit.current) {
          newPositionX = rabbit.current.position.x / BOARD_FACTOR + dx;
          newPositionZ = rabbit.current.position.z / BOARD_FACTOR + dz;
        }

        console.log("MOVEPLAYER NEW positionX: " + newPositionX);
        console.log("MOVEPLAYER  NEW positionZ: " + newPositionZ);

        if (
          newPositionX !== undefined &&
          newPositionZ !== undefined &&
          newPositionX >= 0 &&
          newPositionX < squaresMap[0].length &&
          newPositionZ >= 0 &&
          newPositionZ < squaresMap.length &&
          squaresMap[newPositionZ][newPositionX] !== 0 &&
          obstaclesMap[newPositionZ][newPositionX] === 0
        ) {
          if (rabbit.current) {
            rabbit.current.position.x += dx * BOARD_FACTOR;
            rabbit.current.position.z += dz * BOARD_FACTOR;

            // Hopping
            rabbit.current.position.y += 0.5;
          }
        }
      };

      const unsubscribeKeys = subscribeKeys(
        (state) => state,
        (value) => {
          console.log(value);
          if (rabbit.current) {
            // Forward Move
            if (value.forward) {
              // Only move if no other key is being pressed at the same time
              if (value.backward || value.leftward || value.rightward) {
                return;
              }
              movePlayer(1, 0);
              rabbit.current.rotation.y = 0;
            }

            // Backward Move
            if (value.backward) {
              // Only move if no other key is being pressed at the same time
              if (value.forward || value.leftward || value.rightward) {
                return;
              }
              movePlayer(-1, 0);
              rabbit.current.rotation.y = Math.PI;
            }

            // Leftward Move
            if (value.leftward) {
              // Only move if no other key is being pressed at the same time
              if (value.forward || value.backward || value.rightward) {
                return;
              }
              movePlayer(0, -1);
              rabbit.current.rotation.y = Math.PI / 2;
            }

            // Rightward Move
            if (value.rightward) {
              // Only move if no other key is being pressed at the same time
              if (value.forward || value.backward || value.leftward) {
                return;
              }
              movePlayer(0, 1);
              rabbit.current.rotation.y = -Math.PI / 2;
            }
          }
        }
      );

      const unsubscribeAny = subscribeKeys(() => {
        start();
      });

      return () => {
        unsubscribeKeys();
        unsubscribeAny();
      };
    }
  }, [phase]);

  useEffect(() => {
    if (squaresMap[positionZ][positionX] === 0) {
      end("loss");
      setInterval(() => {
        if (rabbit.current) {
          rabbit.current.position.y -= 1;
          rabbit.current.rotation.x -= 0.5;
          rabbit.current.rotation.z -= 0.5;
        }
      }, 100);
    }
  }, [positionX, positionZ]);

  // Player always faces forward when the game ends
  useEffect(() => {
    if (phase === "ended") {
      setTimeout(() => {
        if (rabbit.current) {
          rabbit.current.rotation.y = 0;
        }
      }, 500);
    }
  }, [phase]);

  const prevPositionX = useRef(positionX);
  const prevPositionZ = useRef(positionZ);

  useFrame(() => {
    if (rabbit.current) {
      const { x, z } = rabbit.current.position;
      const newX = Math.round(x / BOARD_FACTOR);
      const newZ = Math.round(z / BOARD_FACTOR);

      if (newX !== prevPositionX.current) {
        setPlayerPositionX(newX);
        addMove();
        prevPositionX.current = newX;
        console.log("SET A NEW X: " + newX);
      }
      if (newZ !== prevPositionZ.current) {
        setPlayerPositionZ(newZ);
        addMove();
        prevPositionZ.current = newZ;
        console.log("SET A NEW Z: " + newZ);
      }
    }
  });

  return (
    <>
      <primitive
        ref={rabbit}
        // onClick={() => console.log("Clicked!")}
        // onPointerEnter={() => console.log("Pointer entered")}
        // onPointerLeave={() => console.log("Pointer left")}
        object={rabbitModel.scene}
        scale={1}
        position={[initialPositionX, 0, initialPositionZ]}
      />
    </>
  );
}
