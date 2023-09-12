import { useEffect } from "react";

export const ListItem=({
    active,
    activeClass,
    element,
    classList,
    itemKey,
    data

})=>{
    const handleRender=()=>{
        if(active){
            classList.push(activeClass);
        }
    };
    useEffect(handleRender(),[active])
    
    return (
        <li 
        className={classList.join(' ')}
        key={itemKey}>
        {element}
        </li>
    )
}