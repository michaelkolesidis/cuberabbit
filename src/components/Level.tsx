import { BOARD_HEIGHT } from "../utils/constants";
import { SquareColor } from "../utils/enums";
import Square from "./Square";

export default function Level() {
  return (
    <>
      <Square
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
      />
    </>
  );
}
