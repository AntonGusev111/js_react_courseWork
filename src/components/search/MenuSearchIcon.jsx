import React from 'react';
import { useState } from 'react';
import searchMenuIcon from '../../assets/searchIcon.png';
//import {Redirect} from "react-router-dom";  //Uncaught SyntaxError: The requested module '/node_modules/.vite/deps/react-router-dom.js?v=dda6d809' does not provide an export named 'Redirect'


export default function MenuSearchIcon() {
    const [inputState, setInputState] = useState(0);

    const handleChangeSearch =()=>{
        if(inputState==0){
            setInputState(inputState+1)
            const input = document.querySelector('.searchInputMenu').classList
            input.remove('invisible')   
        } else {
            const input = document.querySelector('.searchInputMenu').value
            
        }
        
    }

  return (
    <div>
        <input className='searchInputMenu invisible'></input>
        <img onClick={handleChangeSearch} className='searchIconMenu' src={searchMenuIcon} alt="" />
    </div>
  )
}
