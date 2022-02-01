import { ICells } from "app/types";

export const generateCells = (): ICells => {
  let cells: ICells = new Array(16).fill(undefined);

  cells = addCell(cells);
  cells = addCell(cells);

  return cells;
};

export const addCell = (cells: ICells): ICells => {
  const newCells = [...cells];
  const undefinedIndexes = newCells.reduce(
    (arr: number[], e, i) => (e === undefined && arr.push(i), arr),
    []
  );

  let randomIndex = getRandomFromSet(undefinedIndexes);
  newCells[randomIndex] = { id: Math.floor(Math.random() * 9999999), value: 2 };

  return newCells;
};

export const shiftLeft = (cells: ICells): ICells => {
  const newCells = [...cells];

  for (let columnIndex = 3; columnIndex <= 15; columnIndex += 4) {
    let index = columnIndex;

    for (
      let rowIndex = columnIndex - 1;
      rowIndex >= columnIndex - 3;
      rowIndex--
    ) {
      let column = newCells[index];
      let row = newCells[rowIndex];

      if (row === undefined) {
        newCells[index] = undefined;
        newCells[rowIndex] = column;
      } else if (row.value === column?.value) {
        newCells[index] = undefined;
        newCells[rowIndex]!.value += column.value;

        if (
          rowIndex < columnIndex - 3 &&
          newCells[rowIndex - 1] === newCells[rowIndex]
        )
          break;
      }

      index = rowIndex;
    }
  }

  return addCell(newCells);
};

export const shiftRight = (cells: ICells): ICells => {
  const newCells = [...cells];

  for (let columnIndex = 0; columnIndex <= 12; columnIndex += 4) {
    let index = columnIndex;

    for (
      let rowIndex = columnIndex + 1;
      rowIndex <= columnIndex + 3;
      rowIndex++
    ) {
      let column = newCells[index];
      let row = newCells[rowIndex];

      if (row === undefined) {
        newCells[index] = undefined;
        newCells[rowIndex] = column;
      } else if (row.value === column?.value) {
        newCells[index] = undefined;
        newCells[rowIndex]!.value += column.value;

        if (
          rowIndex < columnIndex + 3 &&
          newCells[rowIndex + 1] === newCells[rowIndex]
        )
          break;
      }

      index = rowIndex;
    }
  }

  return addCell(newCells);
};

export const shiftUp = (cells: ICells): ICells => {
  const newCells = [...cells];

  for (let rowIndex = 12; rowIndex < 16; rowIndex++) {
    let index = rowIndex;

    for (
      let columnIndex = rowIndex - 4;
      columnIndex >= rowIndex - 12;
      columnIndex -= 4
    ) {
      let row = newCells[index];
      let column = newCells[columnIndex];

      if (column === undefined) {
        newCells[index] = undefined;
        newCells[columnIndex] = row;
      } else if (column.value === row?.value) {
        newCells[index] = undefined;
        newCells[columnIndex]!.value += row.value;

        if (
          columnIndex > rowIndex - 12 &&
          newCells[columnIndex - 4] === newCells[columnIndex]
        )
          break;
      }

      index = columnIndex;
    }
  }

  return addCell(newCells);
};

export const shiftDown = (cells: ICells): ICells => {
  const newCells = [...cells];

  for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
    let index = rowIndex;

    for (
      let columnIndex = rowIndex + 4;
      columnIndex <= rowIndex + 12;
      columnIndex += 4
    ) {
      let row = newCells[index];
      let column = newCells[columnIndex];

      if (column === undefined) {
        newCells[index] = undefined;
        newCells[columnIndex] = row;
      } else if (column.value === row?.value) {
        newCells[index] = undefined;
        newCells[columnIndex]!.value += row.value;

        if (
          columnIndex < rowIndex + 12 &&
          newCells[columnIndex + 4] === newCells[columnIndex]
        )
          break;
      }

      index = columnIndex;
    }
  }

  return addCell(newCells);
};

const getRandomFromSet = (set: number[]): number => {
  var idx = Math.floor(Math.random() * set.length);
  return set[idx];
};
