import React, { useState, useContext } from "react";

export const Button = ({
  buttonClick, 
  buttonClass, 
  buttonText, 
  buttonId, 
  buttonIcon, 
  buttonData
  }) => {
    return (
      <button
        data-id={buttonId}
        className={buttonClass}
        onClick={buttonClick}
        >
          {(buttonIcon)? (<i className={buttonIcon}></i>): (buttonText)}
      </button>
      )
}