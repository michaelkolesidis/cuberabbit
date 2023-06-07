export default function Level() {
  const blockDimensions = { xy: 4.75, z: 0.45 };
  const blockPositionZ = -1.225;

  return (
    <>
      <mesh position={[0, blockPositionZ, 0]}>
        <boxGeometry
          args={[blockDimensions.xy, blockDimensions.z, blockDimensions.xy]}
        />
        <meshStandardMaterial color="#4037e4" />
      </mesh>

      <mesh position={[5, blockPositionZ, 0]}>
        <boxGeometry
          args={[blockDimensions.xy, blockDimensions.z, blockDimensions.xy]}
        />
        <meshStandardMaterial color="#4037e4" />
      </mesh>

      <mesh position={[5, blockPositionZ, 5]}>
        <boxGeometry
          args={[blockDimensions.xy, blockDimensions.z, blockDimensions.xy]}
        />
        <meshStandardMaterial color="#9b2456" />
      </mesh>

      <mesh position={[10, blockPositionZ, 5]}>
        <boxGeometry
          args={[blockDimensions.xy, blockDimensions.z, blockDimensions.xy]}
        />
        <meshStandardMaterial color="#151523" />
      </mesh>
    </>
  );
}
