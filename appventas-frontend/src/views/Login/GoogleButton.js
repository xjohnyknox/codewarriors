import React from "react";
import {createButton} from "react-social-login-buttons";
import svgIcon from "../../assets/images/googleLogo24x24.svg";
import {createSvgIcon} from "react-social-login-buttons";


function Icon({ width = 24, height = 24, color }) {
    return <img src={svgIcon} width={width} height={height} alt="" style={{backgroundColor: "white"}} />;
}

// Botón personalizado
const config = {
  text: "Inicia sesión con Google",
  icon: createSvgIcon(Icon),
  iconFormat: name => `fa fa-${name}`,
  style: { background: "#ffffff", color: "#000000", height: "80px", width: "300px", fontWeight: "Bold"},
  activeStyle: { background: "#4285F4", color: "#ffffff" },
  iconSize: "50px"
};
const CustomGoogle = createButton(config);
export default CustomGoogle;

