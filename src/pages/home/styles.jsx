import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
    .center{
      display: flex;
      justify-content: center;
      align-items: center;
    }
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
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};

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
    color: ${(props) => props.theme.colors.textColor};
    background: ${(props) => props.theme.colors.card};
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);

    transition: all 0.3s;
  }

  div {
    .itenscenter {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 6px;

      button {
        color: ${(props) => props.theme.colors.textColor};
      }

      span {
        color: ${(props) => props.theme.colors.textColor};
      }
    }
    .app {
      color: ${(props) => props.theme.colors.subText};
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
        color: ${(props) => props.theme.colors.textColor};
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
        background: ${(props) => props.theme.colors.card};
        width: 100%;
      }

      &:hover {
        font-size: 16px;
        background: ${(props) => props.theme.colors.background};
        border-radius: 8px;
      }
    }
  }

  .modal {
    margin-left: 360px;
    padding: 16px;
    position: absolute;
    z-index: 10;

    background: ${(props) => props.theme.colors.card};
    border-radius: 8px;

    @media (max-width: 767px) {
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-height: 150px;
      margin-left: 0;
      background: ${(props) => props.theme.colors.background};
    }
  }
`;
export const Swapper = styled.div`
  padding: 24px 24px 16px 24px;

  background: ${(props) => props.theme.colors.card};
  border-radius: 12px;
`;

export const Divider = styled.div`
  height: 1px;
  margin: 16px 0px;
  background: ${(props) => props.theme.colors.background};
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
    color: ${(props) => props.theme.colors.textColor};
  }

  div {
    h1 {
      font-size: 18px;
      color: ${(props) => props.theme.colors.textColor};
    }

    span {
      color: ${(props) => props.theme.colors.email};
    }
  }
`;

export const DivImg = styled.div`
  width: 55px;
  height: 55px;
  flex-shrink: 0;

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
    color: ${(props) => props.theme.colors.subText};
    font-size: 12px;
    margin-bottom: 12px;
  }
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.colors.textColor};



  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: default;
  transition: all 0.2s;
  padding: 8px;

  &:hover {
    font-size: 17px;
    background: ${(props) => props.theme.colors.background};
    border-radius: 8px;
  }

  button {
    border: none;
    background-color: transparent;
  }

  .sign-out {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    color: #aa2222;
    width: 100%;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;
