import { useState, useEffect } from "react";
import styled from "styled-components";

import { ICells, ICell } from "app/types";
import {
  generateCells,
  shiftLeft,
  shiftRight,
  shiftUp,
  shiftDown,
  addCell,
} from "utils/game";

import { ScoreBoard } from "components/ScoreBoard";
import { Board } from "components/Board";

export const Game = () => {
  const [cells, setCells] = useState<ICells>(generateCells());

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    if (key === "ArrowLeft") {
      setCells(shiftLeft(cells));
    } else if (key === "ArrowRight") {
      setCells(shiftRight(cells));
    } else if (key === "ArrowUp") {
      setCells(shiftUp(cells));
    } else if (key === "ArrowDown") {
      setCells(shiftDown(cells));
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyDown);
    return () => {
      window.removeEventListener("keyup", handleKeyDown);
    };
  }, [cells]);

  return (
    <Wrapper>
      <Header>
        <Title>2048</Title>
        <ScoreBoard />
      </Header>
      <Board cells={cells} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: var(--color-brown);
  font-size: 8rem;
  font-weight: 600;
  margin: 0;
`;
