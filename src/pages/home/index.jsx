import React, { useState, useRef } from "react";
import { Container, Swapper, Header, Divider, DivImg, Main, DivInfo, Info, DivSwitch} from "./styles";
import Switch from "react-switch";

import { RxCaretRight, RxBell, RxQuestionMarkCircled} from "react-icons/rx";
import { IoKeyOutline, IoAccessibilityOutline, IoCloseSharp} from "react-icons/io5";
import { MdBluetoothAudio, MdOutlineDevices, MdManageAccounts, MdOutlinePhotoCamera} from "react-icons/md";
import { HiOutlineUsers} from "react-icons/hi";
import { GoSignOut} from "react-icons/go";
import { VscDebugDisconnect} from "react-icons/vsc";
import { TfiUser} from "react-icons/tfi";
import { BiPhone, BiSitemap} from "react-icons/bi";
import { AiOutlineEdit, AiOutlineFontSize, AiOutlineLoading, AiOutlineSearch, AiOutlineSecurityScan} from "react-icons/ai";
import { BsBellSlash, BsAirplane} from "react-icons/bs";
import TrocaTheme from "../../components/toggletheme";

import light from "../../themes/light";
import dark from "../../themes/dark";
import usePersistedState from "../../utils/usePersistedState";
import { ThemeProvider } from "styled-components";

function Home() {

  const [modalItem, setModalItem] = useState(null);
  const modalRef = useRef(null);
  const [cartVisible, setCartVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [notificationIcon, setNotificationIcon] = useState( <BsBellSlash size={20} /> );
  const [fontSize, setFontSize] = useState(16);
  const [theme, setTheme] = usePersistedState("theme", dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  const handleFontClick = () => {
    setFontSize((prevSize) => (prevSize === 16 ? 19 : 16));
  };

  const handleChange = (checked) => {
    setChecked(checked);
    setNotificationIcon(
      checked ? <RxBell size={20} /> : <BsBellSlash size={20} />
    );
  };

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
            <div className="itenscenter">
              <button
                title="btn-function"
                className="item"
                onClick={() => handleItemClick("Editar Perfil")}
              >
                <AiOutlineEdit size={20} />
                <span>Editar Perfil</span>
              </button>
              <button
                title="btn-function"
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
            <div className="itenscenter">
              <button
                title="btn-function"
                className="item"
                onClick={() => handleItemClick("Seguranca")}
              >
                <AiOutlineSecurityScan size={20} />
                <span>Segurança</span>
              </button>
              <button
                title="btn-function"
                className="item"
                onClick={() => handleItemClick("Contato")}
              >
                <BiPhone size={20} />
                <span>Contato</span>
              </button>
            </div>
        );
      case "notificacoes":
        return (
            <div className="itenscenter">
              <DivSwitch>
                <button title="btn-function" className="item between">
                  <div className="flex">
                    {notificationIcon}
                    <span>Silenciar Notificações</span>
                  </div>
                  <Switch
                    height={10}
                    width={30}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    handleDiameter={20}
                    onColor="#e1e9f0"
                    onHandleColor="#6c757d"
                    offColor="#aaeeee"
                    offHandleColor="#87ade7"
                    onChange={handleChange}
                    checked={checked}
                  />
                </button>
              </DivSwitch>
              <button
                title="btn-function"
                className="item"
                onClick={() => handleItemClick("AtivarNotificacoes")}
              >
                <BsAirplane size={20} />
                <span>Modo Avião</span>
              </button>
            </div>
        );
      case "acessibilidade":
        return (
            <div className="itenscenter">
              <button
                title="btn-function"
                className="item"
                onClick={() => handleFontClick()}
              >
                <AiOutlineFontSize size={20} />
                <span>Fontes</span>
              </button>
              <button title="btn-function" className="item">
                <BiSitemap size={20} />
                <span>Temas</span>
                <TrocaTheme toggleTheme={toggleTheme} />
              </button>
            </div>
        );
      case "AparelhosConectados":
        return (
            <div className="itenscenter">
              <button
                title="btn-function"
                className="item"
                onClick={() => handleItemClick("DesconectarDispositivos")}
              >
                <VscDebugDisconnect size={20} />
                <span>Desconectar Dispositivos</span>
              </button>
              <button
                title="btn-function"
                className="item"
                onClick={() => handleItemClick("ConectarDispositivo")}
              >
                <MdBluetoothAudio size={20} />
                <span>Conectar Dispositivo</span>
              </button>
              <button
                title="btn-function"
                className="item"
                onClick={() => handleItemClick("EncontrarDispositivo")}
              >
                <AiOutlineSearch size={20} />
                <span>Encontrar Dispositivo</span>
              </button>
              <Divider />
              <h1 className="app">Aparelhos Conectados</h1>
              <div className="conectados">
                <span>Samsung Galaxy S20 FE 5G</span>
                <p>(aparelho atual)</p>
              </div>
              <div className="conectados">
                <span>Samsung Galaxy A03 Core</span>
                <p>(há 11 horas atrás)</p>
              </div>
            </div>
        );
      case "ContasVinculadas":
        return (
          <div className="itenscenter">
            <span>Nenhuma Conta Vinculada.</span>
          </div>
        );
      default:
        return null;
    }
  };

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
              onClick={toggleCartVisibility}
            >
              <MdManageAccounts size={24} />
            </button>
          </div>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default Home;
