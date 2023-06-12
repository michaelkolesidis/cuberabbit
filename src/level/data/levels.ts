// import { generateRandomLevel } from "./utils";

export interface LevelData {
  name: string;
  squaresMap: number[][];
  collectiblesMap: number[][];
  collectibles: number;
  playerInitialPosition: number[];
}

// Squares Map Legend
// 0: No square
// 1: Purple square
// 2: Fuchsia square
// 3: Gray square
// 4: Yellow square

// Collectibles Map Legend
// 0: No collectibles
// 1: Yellow Gem
// 2: Green Gem

export const levels: LevelData[] = [
  {
    name: "Level 0",
    squaresMap: [
      [4, 1, 0],
      [0, 2, 3],
      [0, 1, 0],
    ],
    collectiblesMap: [
      [0, 0, 0],
      [0, 0, 2],
      [0, 1, 0],
    ],
    collectibles: 2,
    playerInitialPosition: [0, 0],
  },
  {
    name: "Level 1",
    squaresMap: [
      [4, 0, 1, 0, 3],
      [1, 1, 2, 0, 2],
      [1, 0, 1, 1, 1],
      [1, 3, 1, 0, 0],
      [1, 0, 1, 1, 2],
    ],
    collectiblesMap: [
      [0, 0, 1, 0, 2],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 1, 1],
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
