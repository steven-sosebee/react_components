import React, { useState, useContext } from "react";
import { useThemeContext } from "../../providers/theme/provider_theme";
import { useModalContext } from "../../providers/modal/provider_modal";

export const Button = ({ handleClick, styleClass, buttonText, buttonId, buttonIcon,buttonData }) => {
  const { theme, setTheme } = useThemeContext();
  const { modal, setModal } = useModalContext();
  return (
    <button data-id={buttonId} className={`${styleClass} ${theme}`} onClick={handleClick}>
      {(buttonIcon)? (<i className={buttonIcon}></i>): (buttonText)}
    </button>
  );
};
