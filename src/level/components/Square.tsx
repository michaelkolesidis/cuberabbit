import { useState, useEffect } from "react";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import useGame from "../../stores/useGame";
import { BOARD_FACTOR } from "../../utils/constants";
import { Color } from "../../utils/enums";

interface SquareProps {
  positionX: number;
  positionY: number;
  positionZ: number;
  num: number;
}

// Geometry
const squareGeometry = new THREE.BoxGeometry();

// Dimensions
const squareDimensions = {
  x: BOARD_FACTOR * 0.95,
  y: 0.45,
  z: BOARD_FACTOR * 0.95,
};

export default function Square({
  positionX,
  positionY,
  positionZ,
  num,
}: SquareProps) {
  // Position
  const [squarePosition] = useState(
    new THREE.Vector3(
      positionX * BOARD_FACTOR,
      positionY,
      positionZ * BOARD_FACTOR
    )
  );

  // Square Type
  let squareColor;
  let movesLimit = Infinity;

  if (num === 1) {
    squareColor = Color.purple;
  } else if (num === 2) {
    squareColor = Color.fuchsia;
    movesLimit = 2;
  } else if (num === 3) {
    squareColor = Color.gray;
    movesLimit = 1;
  } else if (num === 4) {
    squareColor = Color.yellow;
  }

  // Is the player on the square?
  const playerPositionX = useGame((state) => state.playerPositionX);
  const playerPositionZ = useGame((state) => state.playerPositionZ);

  const [isPlayerOn, setIsPlayerOn] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (
      playerPositionX === positionX &&
      playerPositionZ === positionZ &&
      !isPlayerOn
    ) {
      setIsPlayerOn(true);

      // setTimeout(() => {
      //   setCounter((oldCounter) => oldCounter + 1);
      // }, 500);
    } else if (playerPositionX !== positionX || playerPositionZ !== positionZ) {
      setIsPlayerOn(false);
    }
  }, [playerPositionX, playerPositionZ, positionX, positionZ, isPlayerOn]);

  return (
    <>
      {/* {counter < movesLimit && ( */}
      <RigidBody type="fixed" restitution={0} friction={1000}>
        <mesh
          position={squarePosition}
          geometry={squareGeometry}
          scale={[squareDimensions.x, squareDimensions.y, squareDimensions.z]}
        >
          <meshStandardMaterial color={squareColor} />
        </mesh>
      </RigidBody>
      {/* )} */}
    </>
  );
}
