import { useRef } from "react";
import * as THREE from "three";
import { BOARD_FACTOR } from "../../utils/constants";

interface ObstacleProps {
  positionX: number;
  positionY?: number;
  positionZ: number;
  num: number;
}

// Geometries
const treeGeometry = new THREE.ConeGeometry(1, 0.5, 50);

// Colors
const treeColor = "#02b704";

// Radius
const radius = BOARD_FACTOR * 0.22;

export default function Obstacle({
  positionX,
  positionY,
  positionZ,
  num,
}: ObstacleProps) {
  const obstacle = useRef<THREE.Mesh>(null);

  // Position
  const obstaclePosition = new THREE.Vector3(
    positionX * BOARD_FACTOR,
    positionY,
    positionZ * BOARD_FACTOR
  );

  // Obstacle Type
  let obstacleGeometry, obstacleColor;

  if (num === 1) {
    // Tree
    obstacleGeometry = treeGeometry;
    obstacleColor = treeColor;
  }

  return (
    <>
      <mesh
        ref={obstacle}
        position={obstaclePosition}
        geometry={obstacleGeometry}
        scale-x={radius * 1.6}
        scale-y={8}
        scale-z={radius * 1.6}
      >
        <meshStandardMaterial flatShading color={obstacleColor} />
      </mesh>
    </>
  );
}
