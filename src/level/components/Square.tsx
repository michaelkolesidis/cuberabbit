import { useState } from "react";
// import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
// import useGame from "../../stores/useGame";
import { BOARD_FACTOR } from "../../utils/constants";
import { Color } from "../../utils/enums";

interface SquareProps {
  positionX: number;
  positionY?: number;
  positionZ: number;
  num: number;
  color?: Color;
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
  // const playerPositionX = useGame((state) => state.playerPositionX);
  // const playerPositionZ = useGame((state) => state.playerPositionZ);

  // Position
  const [squarePosition] = useState(new THREE.Vector3(
    positionX * BOARD_FACTOR,
    positionY,
    positionZ * BOARD_FACTOR
  ))

  // Square Color
  let squareColor;
  if (num === 1) {
    squareColor = Color.purple;
  } else if (num === 2) {
    squareColor = Color.fuchsia;
  } else if (num === 3) {
    squareColor = Color.gray;
  } else if (num === 4) {
    squareColor = Color.yellow;
  }

  // Is the player on the square?
  // const [isPlayerOn, setIsPlayerOn] = useState(false);

  // useFrame(() => {
  //   if (playerPositionX === positionX && playerPositionZ === positionZ) {
  //     setIsPlayerOn(true);
  //   } else {
  //     setIsPlayerOn(false);
  //   }
  // });

  return (
    <>
      <mesh
        position={squarePosition}
        geometry={squareGeometry}
        scale={[squareDimensions.x, squareDimensions.y, squareDimensions.z]}
      >
        <meshStandardMaterial color={squareColor} />
      </mesh>
    </>
  );
}
