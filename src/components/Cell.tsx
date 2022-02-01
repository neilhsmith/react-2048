import { ReactNode } from "react";
import styled from "styled-components";

import { IPosition } from "app/types";

interface CellProps extends IPosition {
  value?: number;
}

export const Cell = ({ value, x, y }: CellProps) => {
  const actualValue = value || 0;

  return (
    <Wrapper x={x} y={y}>
      <Inner value={actualValue}>{!!value && value}</Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 120px;
  height: 120px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 100ms ease-in-out;
  transition-property: transform;

  transform: ${({ x, y }: CellProps) =>
    `translate(${x * 120}px, ${y * 120}px);`};
`;

export const Inner = styled.span<{ value?: number }>`
  border-radius: 0.8rem;
  width: 92%;
  height: 92%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 700;
  background-color: ${({ value }) => `var(--tile-bg-${value})`};
  color: ${({ value }) => `var(--tile-color-${value})`};
`;
