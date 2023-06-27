import { useEffect, useState } from "react";
import useGame from "../stores/useGame";
import { LevelData } from "./data/levels";
import { BOARD_HEIGHT } from "../utils/constants";
import Square from "./components/Square";
import Collectible from "./components/Collectible";
import Obstacle from "./components/Obstacle";

interface LevelProps {
  level: LevelData;
}

export default function Level({ level }: LevelProps) {
  const setInitialPlayerPositionX = useGame(
    (state) => state.setInitialPlayerPositionX
  );
  const setInitialPlayerPositionZ = useGame(
    (state) => state.setInitialPlayerPositionZ
  );
  const setPlayerPositionX = useGame((state) => state.setPlayerPositionX);
  const setPlayerPositionZ = useGame((state) => state.setPlayerPositionZ);
  const setCollectibles = useGame((state) => state.setCollectibles);

  // Setters
  useEffect(() => {
    setInitialPlayerPositionX(level.playerInitialPosition[0]);
    setInitialPlayerPositionZ(level.playerInitialPosition[1]);
    setPlayerPositionX(level.playerInitialPosition[0]);
    setPlayerPositionZ(level.playerInitialPosition[1]);
    setCollectibles(level.collectibles);
  }, []);

  // Squares
  const [squaresMap] = useState(level.squaresMap);

  const removeSquare = (x: number, z: number) => {
    squaresMap[z][x] = 0;
  };

  const Squares = squaresMap.flatMap((row, rowIndex) =>
    row.map(
      (value, columnIndex) =>
        value !== 0 && (
          <Square
            key={`${rowIndex}-${columnIndex}`}
            num={value}
            positionX={columnIndex}
            positionY={BOARD_HEIGHT}
            positionZ={rowIndex}
            removeSquare={removeSquare}
          />
        )
    )
  );

  // Collectibles
  const [collectiblesMap] = useState(level.collectiblesMap);
  const Collectibles = collectiblesMap.flatMap((row, rowIndex) =>
    row.map(
      (value, columnIndex) =>
        value !== 0 && (
          <Collectible
            key={`${rowIndex}-${columnIndex}`}
            num={value}
            positionX={columnIndex}
            positionY={0.2}
            positionZ={rowIndex}
          />
        )
    )
  );

  // Obstacles
  const [obstaclesMap] = useState(level.obstaclesMap);
  const Obstacles = obstaclesMap.flatMap((row, rowIndex) =>
    row.map(
      (value, columnIndex) =>
        value !== 0 && (
          <Obstacle
            key={`${rowIndex}-${columnIndex}`}
            num={value}
            positionX={columnIndex}
            positionY={1.0}
            positionZ={rowIndex}
          />
        )
    )
  );

  return (
    <>
      {Squares}
      {Collectibles}
      {Obstacles}
    </>
  );
}
