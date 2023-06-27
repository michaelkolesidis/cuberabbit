import { useState, useEffect } from "react";
import * as THREE from "three";
import useGame from "../../stores/useGame";
import { BOARD_FACTOR } from "../../utils/constants";
import { Color } from "../../utils/enums";

interface SquareProps {
  positionX: number;
  positionY: number;
  positionZ: number;
  num: number;
  removeSquare: (x: number, z: number) => void;
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
  removeSquare,
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
  let squareColor,
    movesLimit = Infinity;

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
  const [timesOn, setTimesOn] = useState(0);

  useEffect(() => {
    if (
      playerPositionX === positionX &&
      playerPositionZ === positionZ &&
      !isPlayerOn
    ) {
      setIsPlayerOn(true);

      setTimesOn((oldTimesOn) => oldTimesOn + 1);
      if (timesOn >= movesLimit) {
        removeSquare(positionX, positionZ);
      }
    } else if (playerPositionX !== positionX || playerPositionZ !== positionZ) {
      setIsPlayerOn(false);
    }
  }, [playerPositionX, playerPositionZ, positionX, positionZ, isPlayerOn]);

  return (
    <>
      {timesOn < movesLimit + 1 && (
        <mesh
          position={squarePosition}
          geometry={squareGeometry}
          scale={[squareDimensions.x, squareDimensions.y, squareDimensions.z]}
        >
          <meshStandardMaterial color={squareColor} />
        </mesh>
      )}
    </>
  );
}
