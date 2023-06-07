import { LevelData } from "./levels";
import { BOARD_HEIGHT } from "../../utils/constants";
import { SquareColor } from "../../utils/enums";
import Square from "./Square";

interface LevelProps {
  level: LevelData;
}

export default function Level({ level }: LevelProps) {
  const squaresMap = level.squaresMap;

  const getColorFromValue = (value: number) => {
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

  const Squares = squaresMap.flatMap((row, rowIndex) =>
    row.map(
      (value, columnIndex) =>
        value !== 0 && (
          <Square
            key={`${rowIndex}-${columnIndex}`}
            color={getColorFromValue(value)}
            positionX={columnIndex}
            positionY={BOARD_HEIGHT}
            positionZ={rowIndex}
          />
        )
    )
  );

  return <>{Squares}</>;
}

{
  /* <Square
  color={SquareColor.purple}
  positionX={0}
  positionY={BOARD_HEIGHT}
  positionZ={0}
/>

<Square
  color={SquareColor.purple}
  positionX={1}
  positionY={BOARD_HEIGHT}
  positionZ={0}
/>

<Square
  color={SquareColor.fuchsia}
  positionX={1}
  positionY={BOARD_HEIGHT}
  positionZ={1}
/>

<Square
  color={SquareColor.gray}
  positionX={2}
  positionY={BOARD_HEIGHT}
  positionZ={1}
/> */
}
