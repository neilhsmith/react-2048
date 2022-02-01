import styled from "styled-components";

export const ScorePanel = () => {
  return (
    <Panel>
      <PanelTitle>Score</PanelTitle>
      <Score>42</Score>
    </Panel>
  );
};

export const ScoreBoard = () => {
  return (
    <Wrapper>
      <ScorePanel />
      <ScorePanel />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Panel = styled.div`
  background-color: var(--color-brown);
  text-align: center;
  padding: 1.2rem 2.8rem;
  margin-left: 1.2rem;
`;

const PanelTitle = styled.span`
  display: block;
  color: var(--color-yellow);
  font-size: 1.8rem;
  font-weight: 400;
`;

const Score = styled.span`
  display: block;
  color: var(--color-white);
  font-size: 2.6rem;
  font-weight: 600;
`;
