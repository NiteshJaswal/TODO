import React, { useState } from "react";

import TodoLists from "./TodoLists";
import './App.css';

function App() {

const[inputList , setInputList  ] = useState(" ")

const[Items , setItems] = useState([]);

const itemEvent=(event) => {
  setInputList(event.target.value);
};
const listofItems=()=>{
  setItems((oldItems)=>{
     return [...oldItems, inputList]

  });
 setInputList("");
}
const deleteItems = (id) =>{
  console.log("deleted")
setItems((oldItems)=>{
  return oldItems.filter((arrElem , index)=>{
    return index !==id;
  });
});
 };

  return (
    <>
      <div className = "main-div">
        <div className="center_div">
           <br />
           <h1>TO-DO <i>List.... </i></h1>
           <br />
           <input type="text" placeholder = "Heyy!!1 What do you want to add" value={inputList} onChange={itemEvent} />
           <button onClick={listofItems}>
            +
           </button>

           <ol>{/*
            <li>{inputList}</li>
  */}
    { Items.map((itemvalue, index)=>{
     return <TodoLists
      key={index}
      id={index}
      text ={itemvalue}
      onSelect={deleteItems} />;
     })}
           </ol>

        </div>


      </div>
    </>
  );
}

export default App;
