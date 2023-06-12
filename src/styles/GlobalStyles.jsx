import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root,
  html,
  body {
    width: 100%;
    height: 100%;
    font-family:"Heebo"
  }

  button {
    cursor:pointer;
  }
`;
