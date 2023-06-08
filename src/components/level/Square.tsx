import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useGame from "../../stores/useGame";
import { BOARD_FACTOR } from "../../utils/constants";
import { SquareColor } from "../../utils/enums";

interface SquareProps {
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
}: SquareProps) {
  const playerPositionX = useGame((state) => state.playerPositionX);
  const playerPositionZ = useGame((state) => state.playerPositionZ);

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
  const activeColor = "#f98607";

  const [isActive, setIsActive] = useState(false);

  useFrame(() => {
    if (playerPositionX === positionX && playerPositionZ === positionZ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });

  return (
    <>
      <mesh position={blockPosition}>
        <boxGeometry
          args={[blockDimensions.x, blockDimensions.y, blockDimensions.z]}
        />
        <meshStandardMaterial color={isActive ? activeColor : blockColor} />
      </mesh>
    </>
  );
}
