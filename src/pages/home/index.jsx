import React from "react";
import { Container, Swapper, Header, Divider, DivImg, Main, DivInfo, Info} from "./styles";

import { RxCaretRight, RxQuestionMarkCircled } from "react-icons/rx";
import { IoKeyOutline, IoAccessibilityOutline, IoCloseSharp} from "react-icons/io5";
import { MdOutlineDevices, MdManageAccounts } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import { GoSignOut } from "react-icons/go";
import { TfiUser } from "react-icons/tfi";
import { AiOutlineLoading } from "react-icons/ai";
import { ThemeProvider } from "styled-components";
import CustomFunction from "../../hooks/CustomFunction";

function Home() {
  const {
    modalItem,
    modalRef,
    cartVisible,
    isLoading,
    notificationIcon,
    fontSize,
    theme,
    handleOpenProfile,
    handleSignOut,
    toggleCartVisibility,
    handleMouseEnter,
    handleModalMouseEnter,
    handleModalMouseLeave,
    renderModalContent,
  } = CustomFunction();

  return (
    <ThemeProvider theme={theme}>
      <Container style={{ fontSize: `${fontSize}px` }}>
        {cartVisible ? (
          <Swapper>
            <Header>
              <button title="btn-function" onClick={toggleCartVisibility}>
                <IoCloseSharp size={20} />
              </button>
              <DivImg>
                <img
                  src="https://randomuser.me/api/portraits/men/3.jpg"
                  alt="imagem de perfil"
                />
              </DivImg>
              <div>
                <h1>The Coders</h1>
                <span>thecoders.coder@example.com</span>
              </div>
            </Header>

            <Divider />

            <Main>
              <DivInfo>
                <h1>Conta</h1>

                <Info
                  onMouseEnter={(event) =>
                    handleMouseEnter(
                      "DadosPessoais",
                      event.target.getBoundingClientRect()
                    )
                  }
                >
                  <div>
                    <TfiUser size={20} />
                    <span>Dados Pessoais</span>
                  </div>
                  <RxCaretRight size={20} />
                </Info>
                <Info
                  onMouseEnter={(event) =>
                    handleMouseEnter(
                      "Informacoes",
                      event.target.getBoundingClientRect()
                    )
                  }
                >
                  <div>
                    <IoKeyOutline size={20} />
                    <span>Informações de login</span>
                  </div>
                  <RxCaretRight size={20} />
                </Info>
              </DivInfo>

              <Divider />

              <DivInfo>
                <h1>preferências</h1>
                <Info
                  onMouseEnter={(event) =>
                    handleMouseEnter(
                      "notificacoes",
                      event.target.getBoundingClientRect()
                    )
                  }
                >
                  <div>
                    {notificationIcon}
                    <span>Notificações</span>
                  </div>
                  <RxCaretRight size={20} />
                </Info>
                <Info
                  onMouseEnter={(event) =>
                    handleMouseEnter(
                      "acessibilidade",
                      event.target.getBoundingClientRect()
                    )
                  }
                >
                  <div>
                    <IoAccessibilityOutline size={20} />
                    <span>Acessibilidade</span>
                  </div>
                  <RxCaretRight size={20} />
                </Info>
              </DivInfo>

              <Divider />

              <DivInfo>
                <h1>Privacidade</h1>
                <Info
                  onMouseEnter={(event) =>
                    handleMouseEnter(
                      "AparelhosConectados",
                      event.target.getBoundingClientRect()
                    )
                  }
                >
                  <div>
                    <MdOutlineDevices size={20} />
                    <span>Aparelhos Conectados</span>
                  </div>
                  <RxCaretRight size={20} />
                </Info>
                <Info
                  onMouseEnter={(event) =>
                    handleMouseEnter(
                      "ContasVinculadas",
                      event.target.getBoundingClientRect()
                    )
                  }
                >
                  <div>
                    <HiOutlineUsers size={20} />
                    <span>Contas Vinculadas</span>
                  </div>
                  <RxCaretRight size={20} />
                </Info>
              </DivInfo>

              <Divider />

              <DivInfo>
                <Info>
                  <div>
                    <RxQuestionMarkCircled size={20} />
                    <span>Central de Ajuda</span>
                  </div>
                </Info>

                <Info>
                  <button
                    title="btn-function"
                    className="sign-out"
                    onClick={handleSignOut}
                  >
                    {isLoading ? (
                      <div>
                        <AiOutlineLoading size={20} className="loading-icon" />
                        <span>Saindo...</span>
                      </div>
                    ) : (
                      <>
                        <GoSignOut size={20} style={{ color: "#AA2222" }} />
                        <span>Sair</span>
                      </>
                    )}
                  </button>
                </Info>
              </DivInfo>
            </Main>

            {modalItem && (
              <div
                className="modal"
                ref={modalRef}
                style={{
                  top:
                    modalItem.position.top +
                    -25 +
                    modalItem.position.height +
                    window.scrollY,
                }}
                onMouseEnter={handleModalMouseEnter}
                onMouseLeave={handleModalMouseLeave}
              >
                {renderModalContent()}
              </div>
            )}
          </Swapper>
        ) : (
          <div className="cart-open">
            <span>clique para abrir seu perfil:</span>
            <button
              title="btn-function"
              className="open"
              onClick={handleOpenProfile}
            >
              {isLoading ? (
                <div className="center">
                  <AiOutlineLoading size={20} className="loading-icon" />
                </div>
              ) : (
                <MdManageAccounts size={24} />
              )}
            </button>
          </div>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default Home;
