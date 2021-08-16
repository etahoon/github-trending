import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding:0;
  }

  * {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    box-sizing: border-box;
  }
`;
