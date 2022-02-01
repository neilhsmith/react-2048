import styled from "styled-components";

import { IBoard, ICell } from "app/types";

import { Cell } from "components/Cell";

interface BoardProps extends IBoard {}

export const Board = ({ cells }: BoardProps) => {
  const renderBackground = () => {
    let result = [];
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        result.push(<Cell key={`cell-${x}-${y}`} x={x} y={y} />);
      }
    }
    return result;
  };

  const renderCells = () => {
    let result = [];
    for (let i = 0; i < cells.length; i++) {
      if (cells[i] !== undefined) {
        const x = i % 4;
        const y = (i - x) / 4;
        result.push(
          <Cell key={cells[i]!.id} x={x} y={y} value={cells[i]!.value} />
        );
      }
    }
    return result;
  };

  return (
    <Wrapper>
      <RelativeBoard>
        <div>{renderBackground()}</div>
        <div>
          {renderCells()}
          {/* {cells.map((col, y) =>
            col.map(
              (row, x) =>
                cells[y][x]?.value && (
                  <Cell
                    key={cells[y][x]!.id}
                    x={x}
                    y={y}
                    value={cells[y][x]!.value}
                  />
                )
            )
          )} */}
        </div>
      </RelativeBoard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--color-brown-light);
  width: 480px;
  height: 480px;
  padding: 12px;
`;

const RelativeBoard = styled.div`
  position: relative;
`;
