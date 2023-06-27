// import { generateRandomLevel } from "./utils";
import { Color } from "../../utils/enums";

export interface Square {
    position: number[];
    isSquare: boolean;
    color?: Color;
    hasCollectible?: boolean;
    collectible?: string;
    collectibleColor?: Color;
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
          { position: [0, 0], isSquare: true, color: Color.yellow, hasCollectible: false },
          { position: [0, 1], isSquare: true, color: Color.purple, hasCollectible: true, collectible: "gem", collectibleColor: Color.golden },
          { position: [0, 2], isSquare: false },
        ],
        [
          { position: [1, 0], isSquare: false },
          { position: [1, 1], isSquare: true, color: Color.fuchsia, hasCollectible: true, collectible: "gem", collectibleColor: Color.green },
          { position: [1, 2], isSquare: true, color: Color.gray, hasCollectible: false },
        ],
        [
          { position: [2, 0], isSquare: false },
          { position: [2, 1], isSquare: true, color: Color.purple, hasCollectible: false },
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
          { position: [0, 0], isSquare: true, color: Color.yellow, hasCollectible: false },
          { position: [0, 1], isSquare: false },
          { position: [0, 2], isSquare: true, color: Color.purple, hasCollectible: true, collectible: "gem", collectibleColor: Color.green },
          { position: [0, 3], isSquare: false },
          { position: [0, 4], isSquare: true, color: Color.gray, hasCollectible: true, collectible: "gem", collectibleColor: Color.green },
        ],
        [
          { position: [1, 0], isSquare: true, color: Color.purple, hasCollectible: true, collectible: "gem", collectibleColor: Color.golden },
          { position: [1, 1], isSquare: true, color: Color.purple, hasCollectible: true, collectible: "gem", collectibleColor: Color.green },
          { position: [1, 2], isSquare: true, color: Color.fuchsia, hasCollectible: true, collectible: "gem", collectibleColor: Color.golden },
          { position: [1, 3], isSquare: false },
          { position: [1, 4], isSquare: true, color: Color.fuchsia, hasCollectible: true, collectible: "gem", collectibleColor: Color.green },
        ],
        [
          { position: [2, 0], isSquare: true, color: Color.purple, hasCollectible: true, collectible: "gem", collectibleColor: Color.golden },
          { position: [2, 1], isSquare: false },
          { position: [2, 2], isSquare: true, color: Color.purple, hasCollectible: false },
          { position: [2, 3], isSquare: true, color: Color.purple, hasCollectible: true, collectible: "gem", collectibleColor: Color.golden },
          { position: [2, 4], isSquare: true, color: Color.purple, hasCollectible: true, collectible: "gem", collectibleColor: Color.golden },
        ],
        [
          { position: [3, 0], isSquare: true, color: Color.purple, hasCollectible: true, collectible: "gem", collectibleColor: Color.golden },
          { position: [3, 1], isSquare: true, color: Color.gray, hasCollectible: false },
          { position: [3, 2], isSquare: true, color: Color.purple, hasCollectible: true, collectible: "gem", collectibleColor: Color.golden },
          { position: [3, 3], isSquare: false },
          { position: [3, 4], isSquare: false },
        ],
        [
          { position: [4, 0], isSquare: true, color: Color.purple, hasCollectible: true, collectible: "gem", collectibleColor: Color.golden },
          { position: [4, 1], isSquare: false },
          { position: [4, 2], isSquare: true, color: Color.purple, hasCollectible: true, collectible: "gem", collectibleColor: Color.golden },
          { position: [4, 3], isSquare: true, color: Color.purple, hasCollectible: true, collectible: "gem", collectibleColor: Color.green },
          { position: [4, 4], isSquare: true, color: Color.fuchsia, hasCollectible: true, collectible: "gem", collectibleColor: Color.green },
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
  