export interface IPosition {
  x: number;
  y: number;
}

export interface ICell {
  id: number;
  value: number;
}

export interface IBoard {
  cells: ICells;
}

export type ICells = (ICell | undefined)[];
