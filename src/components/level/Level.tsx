import { useEffect } from "react";
import useGame from "../../stores/useGame";
import { LevelData } from "./levels";
import { BOARD_HEIGHT } from "../../utils/constants";
import { SquareColor, CollectibleColor } from "../../utils/enums";
import Square from "./Square";
import Collectible from "./Collectible";

interface LevelProps {
  level: LevelData;
}

export default function Level({ level }: LevelProps) {
  const setPlayerPositionX = useGame((state) => state.setPlayerPositionX);
  const setPlayerPositionZ = useGame((state) => state.setPlayerPositionZ);

  // Set
  useEffect(() => {
    setPlayerPositionX(level.playerInitialPosition[0]);
    setPlayerPositionZ(level.playerInitialPosition[1]);
  }, []);

  const getSquareColor = (value: number) => {
    switch (value) {
      case 1:
        return SquareColor.purple;
      case 2:
        return SquareColor.fuchsia;
      case 3:
        return SquareColor.gray;
      default:
        return SquareColor.purple;
    }
  };

  const getCollectibleColor = (value: number) => {
    switch (value) {
      case 1:
        return CollectibleColor.golden;
      case 2:
        return CollectibleColor.green;
      default:
        return CollectibleColor.golden;
    }
  };

  const squaresMap = level.squaresMap;

  const Squares = squaresMap.flatMap((row, rowIndex) =>
    row.map(
      (value, columnIndex) =>
        value !== 0 && (
          <Square
            key={`${rowIndex}-${columnIndex}`}
            color={getSquareColor(value)}
            positionX={columnIndex}
            positionY={BOARD_HEIGHT}
            positionZ={rowIndex}
          />
        )
    )
  );

  return (
    <>
      {Squares}
      <Collectible
        color={CollectibleColor.golden}
        positionX={1}
        positionY={0.2}
        positionZ={2}
      />
      <Collectible
        color={CollectibleColor.green}
        positionX={2}
        positionY={0.2}
        positionZ={1}
      />
    </>
  );
}
