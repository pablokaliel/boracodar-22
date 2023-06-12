import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

function TrocaTheme({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Switch
      onChange={toggleTheme}
      checked={title === "dark"}
      height={10}
      width={30}
      checkedIcon={false}
      uncheckedIcon={false}
      handleDiameter={20}
      offColor="#6c757d"
      onColor="#fff"
      offHandleColor="#e2d8d8"
      onHandleColor="#6c757d"
    />
  );
}

export default TrocaTheme;
