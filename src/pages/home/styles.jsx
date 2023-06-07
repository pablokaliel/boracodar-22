import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .cart-open {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }

  .open {
    width: 60px;
    height: 60px;
    border-radius: 100%;

    border: none;
    color: var(--textColor);
    background: var(--Card);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);

    transition: all 0.3s;

    &:hover {
      background: var(--buttonHover);
    }
  }

  div {
    .itenscenter {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .app {
      color: var(--SubText);
      font-size: 12px;
      margin-bottom: 12px;
    }

    .conectados {
      font-size: 15px;
      color: #000;
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 3px;
      p {
        font-size: 11px;
        color: var(--textColor);
      }
    }

    .item {
      padding: 8px;
      display: flex;
      gap: 6px;
      cursor: pointer;
      transition: all 0.2s;
      background: transparent;
      border: none;
      font-size: 15px;
      width: 100%;

      @media (max-width: 767px) {
        background-color: var(--Card);
        width: 100%;
      }

      &:hover {
        color: #000;
        font-size: 16px;
        background: var(--background);
        border-radius: 8px;
      }
    }
  }

  .modal {
    margin-left: 360px;
    padding: 16px;
    position: absolute;
    z-index: 10;

    background-color: var(--Card);
    border-radius: 8px;

    @media (max-width: 767px) {
      top: 0; // Posicionar o modal no topo
      left: 0; // Ajustar a posição do modal
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%; // Definir a largura do modal para preencher a tela
      min-height: 150px; // Definir a altura do modal para preencher a tela
      margin-left: 0;
      background-color: var(--background);
    }
  }
`;
export const Swapper = styled.div`
  width: 375px;
  padding: 24px 24px 16px 24px;

  background: var(--Card);
  border-radius: 12px;
`;

export const Divider = styled.div`
  height: 1px;
  margin: 16px 0px;
  background-color: #f4effa;
`;

export const Header = styled.header`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  position: relative;

  button {
    border: none;
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
  }

  div {
    h1 {
      font-size: 18px;
    }

    span {
      color: var(--email);
    }
  }
`;

export const DivImg = styled.div`
  width: 55px;
  height: 55px;

  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Main = styled.main``;

export const DivSwitch = styled.div`
  display: flex;
  align-items: center;
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
  .between {
    display: flex;
    justify-content: space-between;
  }
`;

export const DivInfo = styled.div`
  h1 {
    color: var(--SubText);
    font-size: 12px;
    margin-bottom: 12px;
  }
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;

  .loading-icon {
    margin-right: 5px;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: default;
  transition: all 0.2s;
  padding: 8px;

  &:hover {
    color: #000;
    font-size: 17px;
    background: var(--background);
    border-radius: 8px;
  }

  button {
    border: none;
    background-color: transparent;
  }

  .sign-out {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    color: #aa2222;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;
