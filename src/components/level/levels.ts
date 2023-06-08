// import { generateRandomLevel } from "./utils";

export interface LevelData {
  name: string;
  squaresMap: number[][];
  playerInitialPosition: number[];
}

export const levels: LevelData[] = [
  {
    name: "Level 0",
    squaresMap: [
      [1, 1, 0],
      [0, 2, 3],
      [0, 0, 0],
    ],
    playerInitialPosition: [0, 0],
  },
  {
    name: "Level 1",
    squaresMap: [
      [1, 0, 1, 0, 3],
      [1, 1, 1, 0, 2],
      [1, 0, 1, 2, 1],
      [1, 3, 1, 0, 0],
      [1, 0, 1, 1, 2],
    ],
    playerInitialPosition: [0, 0],
  },
  // {
  //   name: "Random Level",
  //   squaresMap: generateRandomLevel(10, 10),
  //   playerInitialPosition: [0, 0],
  // },
];
