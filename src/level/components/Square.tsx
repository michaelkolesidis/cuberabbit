// import { useState } from "react";
// import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
// import useGame from "../../stores/useGame";
import { BOARD_FACTOR } from "../../utils/constants";
import { SquareColor } from "../../utils/enums";

interface SquareProps {
  positionX: number;
  positionY?: number;
  positionZ: number;
  color?: SquareColor;
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
  color,
}: SquareProps) {
  // const playerPositionX = useGame((state) => state.playerPositionX);
  // const playerPositionZ = useGame((state) => state.playerPositionZ);

  // Position
  const squarePosition = new THREE.Vector3(
    positionX * BOARD_FACTOR,
    positionY,
    positionZ * BOARD_FACTOR
  );

  // Square Color
  let squareColor;
  if (color === SquareColor.purple) {
    squareColor = "#4037e4";
  } else if (color === SquareColor.fuchsia) {
    squareColor = "#9b2456";
  } else if (color === SquareColor.gray) {
    squareColor = "#151523";
  } else if (color === SquareColor.yellow) {
    squareColor = "#f98607";
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
