import { Button } from "../button/button";
import React from "react";
import "../../styles/form.css";

export const Form = ({ formInputs, formButtons, formName, formClasses }) => {
  const handleValidations=(callback)=>{
    callback();
  }
  return (
    <form encType="multipart/form-data" id={formName} name={formName} className={formClasses}>
      <div className="form-main">
      <div className={`labels`}>
        {formInputs.map(label=>(
          <label key={`${formName}_${label.name}_label`} className={label.class} htmlFor={label.name}>
            {!label.label? label.name:label.label}
          </label>
        ))}
      </div>
      <div className={`inputs`}>
        {formInputs.map((item)=>{
          if(item.type==='select'){
            return <select key={`${formName}_${item.name}`} name={item.name} id={item.name} className={item.class}><option>High</option><option>Medium</option><option>Low</option></select>
        } else {
            return <input key={`${formName}_${item.name}`} name={item.name} id={item.name} className={item.class} type={item.type} placeholder={item.placeholder? item.placeholder:null} defaultValue={item.default? item.default:null}/>  
          }
        })}
        {/* {formInputs.map((item) => (
          <input key={`${formName}_${item.name}`} name={item.name} id={item.name} className={item.class} type={item.type} placeholder={item.placeholder? item.placeholder:null} defaultValue={item.default? item.default:null}/>
      ))} */}
      </div>
      </div>
      <div className={`buttons`}>
      {formButtons.map((button) => (
        <Button key={`${formName}_${button.button}`} buttonId={`${formName}_${button.button}`} buttonText={button.button} handleClick={button.function} styleClass={button.class} />
      ))}
      </div>
    </form>
  );

  // return (
  //   <form encType="multipart/form-data" id={formName} name={formName} className={formClasses}>
  //     {formInputs.map((item) => (
  //         <div key={`${formName}_${item.name}`}>
  //           <label
            
  //           className={item.class}
  //           htmlFor={item.name}
  //         >
  //           {!item.label? item.name: item.label}
  //         </label>
  //         <input name={item.name} id={item.name} className={item.class} type={item.type} defaultValue={item.default? item.default:null}/>
  //         </div>
  //     ))}
  //     {formButtons.map((button) => (
  //       <button
  //         key={`${formName}_${button.button}`}
  //         className={button.class}
  //         onClick={button.function}
  //       >
  //         {button.button}
  //       </button>
  //     ))}
  //   </form>
  // );
};
