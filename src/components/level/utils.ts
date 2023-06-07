// Doesn't work, find solution

export function generateRandomLevel(rows: number, columns: number): number[][] {
  // Create a two-dimensional array with all values initialized to 0
  const array: number[][] = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => 0)
  );

  // Set the corners to 1
  array[0][0] = 1;
  array[0][columns - 1] = 1;
  array[rows - 1][0] = 1;
  array[rows - 1][columns - 1] = 1;

  // Generate random paths to connect the corners
  const paths: [number, number][] = [
    [0, 0],
    [0, columns - 1],
    [rows - 1, 0],
    [rows - 1, columns - 1],
  ];

  while (paths.length > 1) {
    const currentIndex = Math.floor(Math.random() * paths.length);
    const currentPath = paths[currentIndex];
    paths.splice(currentIndex, 1);

    const [currentRow, currentColumn] = currentPath;
    const adjacentPaths: [number, number][] = [];

    if (currentRow > 0 && !array[currentRow - 1][currentColumn])
      adjacentPaths.push([currentRow - 1, currentColumn]);
    if (currentRow < rows - 1 && !array[currentRow + 1][currentColumn])
      adjacentPaths.push([currentRow + 1, currentColumn]);
    if (currentColumn > 0 && !array[currentRow][currentColumn - 1])
      adjacentPaths.push([currentRow, currentColumn - 1]);
    if (currentColumn < columns - 1 && !array[currentRow][currentColumn + 1])
      adjacentPaths.push([currentRow, currentColumn + 1]);

    if (adjacentPaths.length > 0) {
      const [nextRow, nextColumn] =
        adjacentPaths[Math.floor(Math.random() * adjacentPaths.length)];

      const randomNumber = Math.random();
      let value: number;
      if (randomNumber < 0.8) {
        value = 1; // 80% probability for 1
      } else if (randomNumber < 0.95) {
        value = 2; // 15% probability for 2
      } else {
        value = 3; // 5% probability for 3
      }

      array[nextRow][nextColumn] = value;
      array[Math.floor((currentRow + nextRow) / 2)][
        Math.floor((currentColumn + nextColumn) / 2)
      ] = value;

      paths.push([nextRow, nextColumn]);
    }
  }

  return array;
}
