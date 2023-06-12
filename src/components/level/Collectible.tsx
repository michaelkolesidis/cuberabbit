import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useGame from "../../stores/useGame";
import { BOARD_FACTOR } from "../../utils/constants";
import { CollectibleColor } from "../../utils/enums";

interface CollectibleProps {
  positionX: number;
  positionY?: number;
  positionZ: number;
  color?: CollectibleColor;
}

export default function Collectible({
  positionX,
  positionY,
  positionZ,
  color,
}: CollectibleProps) {
  const collectible = useRef<THREE.Mesh>(null);

  const playerPositionX = useGame((state) => state.playerPositionX);
  const playerPositionZ = useGame((state) => state.playerPositionZ);

  const collect = useGame((state) => state.collect);

  // Position
  const collectiblePosition = new THREE.Vector3(
    positionX * BOARD_FACTOR,
    positionY,
    positionZ * BOARD_FACTOR
  );

  // Collectible Color
  let collectibleColor;
  if (color === CollectibleColor.golden) {
    collectibleColor = "#ff9208";
  } else if (color === CollectibleColor.green) {
    collectibleColor = "#02b704";
  }

  const [isCollected, setIsCollected] = useState(false);

  const speed = 1;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (collectible.current) {
      collectible.current.rotation.y = time * speed;
    }

    if (playerPositionX === positionX && playerPositionZ === positionZ) {
      if (!isCollected) {
        setIsCollected(true);
        collect();
      }
    }
  });

  return (
    <>
      {!isCollected && (
        <mesh ref={collectible} position={collectiblePosition}>
          <icosahedronGeometry args={[BOARD_FACTOR * 0.22, 0]} />
          <meshStandardMaterial flatShading color={collectibleColor} />
        </mesh>
      )}
    </>
  );
}
