import styled from "styled-components";

import { GlobalStyle } from "styles/GlobalStyle";
import { Game } from "components/Game";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Game />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
