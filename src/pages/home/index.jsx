import React, { useState, useRef } from "react";
import { Container, Swapper, Header, Divider, DivImg, Main, DivInfo, Info,} from "./styles";

import {RxCaretRight, RxBell, RxQuestionMarkCircled} from "react-icons/rx";
import {IoKeyOutline, IoAccessibilityOutline, IoCloseSharp} from "react-icons/io5";
import {MdBluetoothAudio, MdOutlineDevices, MdManageAccounts,MdOutlinePhotoCamera} from "react-icons/md";
import {HiOutlineUsers} from "react-icons/hi";
import {GoSignOut } from "react-icons/go";
import {VscDebugDisconnect} from "react-icons/vsc";
import {TfiUser } from "react-icons/tfi";
import {GrShieldSecurity } from "react-icons/gr";
import {BiPhone, BiSitemap } from "react-icons/bi";
import {AiOutlineEdit, AiOutlineFontSize, AiOutlineLoading, AiOutlineSearch} from "react-icons/ai";
import {BsBellSlash,BsAirplane} from "react-icons/bs";

function Home() {
  const [modalItem, setModalItem] = useState(null);
  const modalRef = useRef(null);
  const [cartVisible, setCartVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSignOut = () => {
    setLoading(true);
    // Simulating a delay of 2 seconds before closing the cart
    setTimeout(() => {
      setCartVisible(false);
      setLoading(false);
    }, 2000);
  };

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  const handleMouseEnter = (item, position) => {
    setModalItem({ item, position });
  };

  const handleModalMouseEnter = () => {
    clearTimeout();
  };

  const handleModalMouseLeave = () => {
    setModalItem(null);
  };

  const handleItemClick = (item) => {
    setModalItem(null);
  };

  const renderModalContent = () => {
    if (!modalItem) return null;

    switch (modalItem.item) {
      case "DadosPessoais":
        return (
          <div>
            <button
              className="item"
              onClick={() => handleItemClick("Editar Perfil")}
            >
              <AiOutlineEdit size={20} />
              <span>Editar Perfil</span>
            </button>
            <button
              className="item"
              onClick={() => handleItemClick("Trocar Foto")}
            >
              <MdOutlinePhotoCamera size={20} />
              <span>Trocar Foto</span>
            </button>
          </div>
        );
      case "Informacoes":
        return (
          <div>
            <button
              className="item"
              onClick={() => handleItemClick("Seguranca")}
            >
              <GrShieldSecurity size={20} />
              <span>Segurança</span>
            </button>
            <button className="item" onClick={() => handleItemClick("Contato")}>
              <BiPhone size={20} />
              <span>Contato</span>
            </button>
          </div>
        );
      case "notificacoes":
        return (
          <div>
            <button
              className="item"
              onClick={() => handleItemClick("SilenciarNotificacoes")}
            >
              <BsBellSlash size={20} />
              <span>Silenciar Notificações</span>
            </button>
            <button
              className="item"
              onClick={() => handleItemClick("AtivarNotificacoes")}
            >
              <BsAirplane size={20} />
              <span>Modo Avião</span>
            </button>
            <button
              className="item"
              onClick={() => handleItemClick("AtivarNotificacoes")}
            >
              <RxBell size={20} />
              <span>Ativar Notificações</span>
            </button>
          </div>
        );
      case "acessibilidade":
        return (
          <div>
            <button className="item" onClick={() => handleItemClick("Fontes")}>
              <AiOutlineFontSize size={20} />
              <span>Fontes</span>
            </button>
            <button className="item" onClick={() => handleItemClick("Temas")}>
              <BiSitemap size={20} />
              <span>Temas</span>
            </button>
          </div>
        );
      case "AparelhosConectados":
        return (
          <div>
            <button
              className="item"
              onClick={() => handleItemClick("DesconectarDispositivos")}
            >
              <VscDebugDisconnect size={20} />
              <span>Desconectar Dispositivos</span>
            </button>
            <button
              className="item"
              onClick={() => handleItemClick("ConectarDispositivo")}
            >
              <MdBluetoothAudio size={20} />
              <span>Conectar Dispositivo</span>
            </button>
            <button
              className="item"
              onClick={() => handleItemClick("EncontrarDispositivo")}
            >
              <AiOutlineSearch size={20} />
              <span>Encontrar Dispositivo</span>
            </button>
            <Divider/>
            <h1 className="app">Aparelhos Conectados</h1>
            <div className="conectados">
              <span>Samsung Galaxy S20 FE 5G</span><p>(aparelho atual)</p>
            </div>
            <div className="conectados">
              <span>Samsung Galaxy A03 Core</span><p>(há 11 horas atrás)</p>
            </div>
          </div>
        );
      case "ContasVinculadas":
        return <div>Nenhuma Conta Vinculada.</div>;
      default:
        return null;
    }
  };

  return (
    <Container>
      {cartVisible ? (
        <Swapper>
          <Header>
            <button onClick={toggleCartVisibility}>
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
                  <RxBell size={20} />
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
                <button className="sign-out" onClick={handleSignOut}>
                  {isLoading ? (
                    <div>
                      <AiOutlineLoading
                        size={20}
                        className="loading-icon"
                      />
                      <span>Saindo...</span>
                    </div>
                  ) : (
                    <>
                      <GoSignOut
                      size={20}
                        style={{ color: "#AA2222" }}
                      />
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
          <button className="open" onClick={toggleCartVisibility}>
            <MdManageAccounts size={24} />
          </button>
        </div>
      )}
    </Container>
  );
}

export default Home;
