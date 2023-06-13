import React, { useState, useRef } from "react";
import Switch from "react-switch";

import { RxBell } from "react-icons/rx";
import { MdBluetoothAudio, MdOutlinePhotoCamera } from "react-icons/md";
import { VscDebugDisconnect } from "react-icons/vsc";
import { BiPhone, BiSitemap } from "react-icons/bi";
import { AiOutlineEdit, AiOutlineFontSize, AiOutlineSearch, AiOutlineSecurityScan } from "react-icons/ai";
import { BsBellSlash, BsAirplane } from "react-icons/bs";
import TrocaTheme from "../components/toggletheme";

import light from "../themes/light";
import dark from "../themes/dark";
import usePersistedState from "../utils/usePersistedState";

import { DivSwitch, Divider } from "../pages/home/styles";

function CustomFunction() {
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

  const handleOpenProfile = () => {
    setLoading(true);

    // simulando 1s para abrir o perfil
    setTimeout(() => {
      setLoading(false);
      setCartVisible(true);
    }, 1000);
  };

  const handleSignOut = () => {
    setLoading(true);
    // simulando 2s para sair e fechar o perfil
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

  return {
    modalItem,
    setModalItem,
    modalRef,
    cartVisible,
    setCartVisible,
    isLoading,
    setLoading,
    checked,
    setChecked,
    notificationIcon,
    setNotificationIcon,
    fontSize,
    setFontSize,
    theme,
    toggleTheme,
    handleFontClick,
    handleChange,
    handleOpenProfile,
    handleSignOut,
    toggleCartVisibility,
    handleMouseEnter,
    handleModalMouseEnter,
    handleModalMouseLeave,
    handleItemClick,
    renderModalContent,
  };
}

export default CustomFunction;
