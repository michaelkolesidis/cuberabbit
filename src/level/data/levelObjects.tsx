// import { generateRandomLevel } from "./utils";
import { SquareColor, CollectibleColor } from "../../utils/enums";

export interface Square {
    position: number[];
    isSquare: boolean;
    color?: SquareColor;
    hasCollectible?: boolean;
    collectible?: string;
    collectibleColor?: CollectibleColor;
  }
  
  export interface LevelData {
    name: string;
    dimensions: number[];
    squares: Square[][];
    collectibles: number;
    playerInitialPosition: number[];
  }
  
  export const levels: LevelData[] = [
    {
      name: "Level 0",
      dimensions: [3, 3],
      squares: [
        [
          { position: [0, 0], isSquare: true, color: SquareColor.yellow, hasCollectible: false },
          { position: [0, 1], isSquare: true, color: SquareColor.purple, hasCollectible: true, collectible: "gem", collectibleColor: CollectibleColor.golden },
          { position: [0, 2], isSquare: false },
        ],
        [
          { position: [1, 0], isSquare: false },
          { position: [1, 1], isSquare: true, color: SquareColor.fuchsia, hasCollectible: true, collectible: "gem", collectibleColor: CollectibleColor.green },
          { position: [1, 2], isSquare: true, color: SquareColor.gray, hasCollectible: false },
        ],
        [
          { position: [2, 0], isSquare: false },
          { position: [2, 1], isSquare: true, color: SquareColor.purple, hasCollectible: false },
          { position: [2, 2], isSquare: false },
        ],
      ],
      collectibles: 2,
      playerInitialPosition: [0, 0],
    },
    {
      name: "Level 1",
      dimensions: [5, 5],
      squares: [
        [
          { position: [0, 0], isSquare: true, color: SquareColor.yellow, hasCollectible: false },
          { position: [0, 1], isSquare: false },
          { position: [0, 2], isSquare: true, color: SquareColor.purple, hasCollectible: true, collectible: "gem", collectibleColor: CollectibleColor.green },
          { position: [0, 3], isSquare: false },
          { position: [0, 4], isSquare: true, color: SquareColor.gray, hasCollectible: true, collectible: "gem", collectibleColor: CollectibleColor.green },
        ],
        [
          { position: [1, 0], isSquare: true, color: SquareColor.purple, hasCollectible: true, collectible: "gem", collectibleColor: CollectibleColor.golden },
          { position: [1, 1], isSquare: true, color: SquareColor.purple, hasCollectible: true, collectible: "gem", collectibleColor: CollectibleColor.green },
          { position: [1, 2], isSquare: true, color: SquareColor.fuchsia, hasCollectible: true, collectible: "gem", collectibleColor: CollectibleColor.golden },
          { position: [1, 3], isSquare: false },
          { position: [1, 4], isSquare: true, color: SquareColor.fuchsia, hasCollectible: true, collectible: "gem", collectibleColor: CollectibleColor.green },
        ],
        [
          { position: [2, 0], isSquare: true, color: SquareColor.purple, hasCollectible: true, collectible: "gem", collectibleColor: CollectibleColor.golden },
          { position: [2, 1], isSquare: false },
          { position: [2, 2], isSquare: true, color: SquareColor.purple, hasCollectible: false },
          { position: [2, 3], isSquare: true, color: SquareColor.purple, hasCollectible: true, collectible: "gem", collectibleColor: CollectibleColor.golden },
          { position: [2, 4], isSquare: true, color: SquareColor.purple, hasCollectible: true, collectible: "gem", collectibleColor: CollectibleColor.golden },
        ],
        [
          { position: [3, 0], isSquare: true, color: SquareColor.purple, hasCollectible: true, collectible: "gem", collectibleColor: CollectibleColor.golden },
          { position: [3, 1], isSquare: true, color: SquareColor.gray, hasCollectible: false },
          { position: [3, 2], isSquare: true, color: SquareColor.purple, hasCollectible: true, collectible: "gem", collectibleColor: CollectibleColor.golden },
          { position: [3, 3], isSquare: false },
          { position: [3, 4], isSquare: false },
        ],
        [
          { position: [4, 0], isSquare: true, color: SquareColor.purple, hasCollectible: true, collectible: "gem", collectibleColor: CollectibleColor.golden },
          { position: [4, 1], isSquare: false },
          { position: [4, 2], isSquare: true, color: SquareColor.purple, hasCollectible: true, collectible: "gem", collectibleColor: CollectibleColor.golden },
          { position: [4, 3], isSquare: true, color: SquareColor.purple, hasCollectible: true, collectible: "gem", collectibleColor: CollectibleColor.green },
          { position: [4, 4], isSquare: true, color: SquareColor.fuchsia, hasCollectible: true, collectible: "gem", collectibleColor: CollectibleColor.green },
        ],
      ],
      collectibles: 7,
      playerInitialPosition: [0, 0],
    },
    // {
    //   name: "Random Level",
    //   squaresMap: generateRandomLevel(10, 10),
    //   playerInitialPosition: [0, 0],
    // },
  ];
  