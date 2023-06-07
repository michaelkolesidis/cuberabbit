import * as THREE from "three";
import { BOARD_FACTOR } from "../utils/constants";
import { SquareColor } from "../utils/enums";

interface Block {
  positionX: number;
  positionY?: number;
  positionZ: number;
  color?: SquareColor;
}

export default function Square({
  positionX,
  positionY,
  positionZ,
  color,
}: Block) {
  // Dimensions
  const blockDimensions = {
    x: BOARD_FACTOR * 0.95,
    y: 0.45,
    z: BOARD_FACTOR * 0.95,
  };

  // Position
  const blockPosition = new THREE.Vector3(
    positionX * BOARD_FACTOR,
    positionY,
    positionZ * BOARD_FACTOR
  );

  // SquareColor
  let blockColor;
  if (color === SquareColor.purple) {
    blockColor = "#4037e4";
  } else if (color === SquareColor.fuchsia) {
    blockColor = "#9b2456";
  } else if (color === SquareColor.gray) {
    blockColor = "#151523";
  }

  return (
    <>
      <mesh position={blockPosition}>
        <boxGeometry
          args={[blockDimensions.x, blockDimensions.y, blockDimensions.z]}
        />
        <meshStandardMaterial color={blockColor} />
      </mesh>
    </>
  );
}
