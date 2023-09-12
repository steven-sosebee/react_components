import { validateOperation } from "@apollo/client/link/utils";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import {Text} from "../../components/text/text";
import { useDnDContext } from "../../providers/dragging/drag-n-drop";
import Validate from "../../utils/validations";

export const List = ({listName, listItems,listClass, event, missingNote, listDrag, listDrop,returnList,returnSelection, multiSelect=false }) => {
  // const [dragging, setDragging] = useState(false);
  // const [node, setNode] = useState();
  const [active, setActive]=useState([]);
  const {handleDragEnd,handleDragStart,handleDragOver, handleDrop}=useDnDContext();
  const [list, setList]=useState();
  const setListState=(newList) =>{
    setList(newList)
  }
const activate=(key)=>{
  let selection;
  // console.log(selection);
  if ((active.indexOf(key))>-1){
    selection=active.filter(x=>x!==key);
  } else{
    selection= multiSelect?[...active, key]:key
  };

  // if(multiSelect){
    setActive(selection)
  // } else {
  //   setActive(key);
  // }
  if (returnSelection!==undefined) {returnSelection(selection);};
};

const addClass=(classList,newClass)=>{
  const newClasses=[...classList];
  newClasses.push(newClass);
  return newClasses.join(" ");
}
  useEffect(()=>{
    if(Array.isArray(listItems)){
    
      setListState(listItems);
    
    }

    console.log("list render...")
    // Array.isArray()
  },[listItems])

  if (!Array.isArray(list)){
    setList(listItems);

    return(
      <div>
        {missingNote}
      </div>
    )
  }

  // event callbacks to Drag and Drop context
  // element for storing drag information.
  // class ev {
  //   constructor(list,event, output){
  //     this.list=list;
  //     this.event=event;
  //     this.output=output
  //   }
  //   log(){
  //     console.log(this);
  //   }
  // };

  const addListItem=(item)=>{
    const newList = [...list]
    newList.push(item);
    setList(newList);
    if(returnList){returnList(newList)};
  };

  const removeListItem=(item)=>{
    const dropIndex = list.findIndex(
      (x) => x.key === item.key
    );
      const newList = [...list];
      newList.splice(dropIndex,1);
      setList(newList);
      if(returnList){returnList(newList)};
  };

  // fires on drag start to set source information
  const dragStart=(e)=>{
    handleDragStart(e,list,setList);
  };

  // destination list event fires to drop item
  const dragDrop=(e)=>{
    if (!listDrop){return}
    const dragged = handleDrop(e,listName);
    if (listName===dragged.destination && dragged.moveItem){
      addListItem(dragged.item);
    }
  };

  // source list event fires on drag end
  const dragEnd=(e)=>{
    const dragged = handleDragEnd(e);
    if (Validate.exists(dragged.destination) && dragged.moveItem){
      removeListItem(dragged.item);
    }
  };

    // allows onDrop to fire
  const dragOver=(e)=>{
    handleDragOver(e);
  }

  
  return (
    <ul
      id={listName}
      className={listClass}
      onDragEndCapture={dragEnd}
      onDragOver={dragOver}
      onDropCapture={dragDrop}
      onDragStartCapture={dragStart}
    >
      
      {list.map((x)=>
        
        <li className={(active.indexOf(x.key)>-1)? addClass(x.class,'active')  :Array.isArray(x.class)? x.class.join(' '): null} draggable={listDrag} id= {x.key} key={x.key}  onClick={()=>{activate(x.key)}}> 
        {x.element}
        </li>
      ) 
      }
      
    </ul>
  );
};

// (x.key===active)