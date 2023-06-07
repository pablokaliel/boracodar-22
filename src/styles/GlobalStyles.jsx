import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background:#e1e9f0;
    --textColor:#38343D;
    --SubText:#797085;
    --email:#686071;
    --Card:#FDFCFE;
  }

  body {
    background: var(--background);
    color: var(--textColor);
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