import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-yellow: #faf8ef;
    --color-brown: #776e65;
    --color-brown-light: #bbada0;
    --color-white: #ffffff;
    --tile-bg-0: #cdc1b4;
    --tile-bg-2: #eee4da;
    --tile-color-2: #776e65;
    --tile-bg-4: #eee1c9;
    --tile-color-4: #776e65;
    --tile-bg-8: #f3b27a;
    --tile-color-8: #f9f6f2;
    --tile-bg-16: #f69664;
    --tile-color-16: #f9f6f2;
    --tile-bg-32: #f77c5f;
    --tile-color-32: #f9f6f2;
    --tile-bg-64: #f75f3b;
    --tile-color-64: #f9f6f2;
    --tile-bg-128: #edd073;
    --tile-color-128: #f9f6f2;
    --tile-bg-256: #edcc62;
    --tile-color-256: #f9f6f2;
    --tile-bg-512: #edc950;
    --tile-color-512: #f9f6f2;
    --tile-bg-1024: #edc53f;
    --tile-color-1024: #f9f6f2;
    --tile-bg-2048: #edc22e;
    --tile-color-2048: #f9f6f2;
  }

  html,
  body,
  #root {
    height: 100vh;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    margin: 0;
    background-color: var(--color-yellow);
  }
`;
