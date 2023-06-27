import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useGame from "../../stores/useGame";
import { BOARD_FACTOR } from "../../utils/constants";
import { Color } from "../../utils/enums";

interface CollectibleProps {
  positionX: number;
  positionY?: number;
  positionZ: number;
  num?: number;
}

// Geometries
const gemGeometry = new THREE.IcosahedronGeometry();
const cubeGeometry = new THREE.BoxGeometry();

// Radius
const radius = BOARD_FACTOR * 0.22;

export default function Collectible({
  positionX,
  positionY,
  positionZ,
  num,
}: CollectibleProps) {
  const collectible = useRef<THREE.Mesh>(null);

  const playerPositionX = useGame((state) => state.playerPositionX);
  const playerPositionZ = useGame((state) => state.playerPositionZ);

  const prevPlayerPositionX = useRef(playerPositionX);
  const prevPlayerPositionZ = useRef(playerPositionZ);

  const collect = useGame((state) => state.collect);

  // Position
  const [collectiblePosition] = useState(
    new THREE.Vector3(
      positionX * BOARD_FACTOR,
      positionY,
      positionZ * BOARD_FACTOR
    )
  );

  // Collectible Type
  let collectibleGeometry;
  let collectibleColor;

  /* Gem */
  if (num === 1) {
    collectibleGeometry = gemGeometry;
    collectibleColor = Color.golden;
  } else if (num === 2) {
    collectibleGeometry = cubeGeometry;
    collectibleColor = Color.green;
  }

  const [isCollected, setIsCollected] = useState(false);
  const [speed] = useState(1);
  const [direction] = useState(Math.random() < 0.5 ? 1 : -1);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (collectible.current) {
      collectible.current.rotation.y = time * speed * direction;
    }

    if (
      playerPositionX === positionX &&
      playerPositionZ === positionZ &&
      (playerPositionX !== prevPlayerPositionX.current ||
        playerPositionZ !== prevPlayerPositionZ.current)
    ) {
      if (!isCollected) {
        setIsCollected(true);
        collect();
      }
    }

    prevPlayerPositionX.current = playerPositionX;
    prevPlayerPositionZ.current = playerPositionZ;
  });

  return (
    <>
      {!isCollected && (
        <mesh
          ref={collectible}
          position={collectiblePosition}
          geometry={collectibleGeometry}
          scale={radius}
        >
          <meshStandardMaterial flatShading color={collectibleColor} />
        </mesh>
      )}
    </>
  );
}
