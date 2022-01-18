import React from 'react'

import PaperLetter from './PaperLetter'
import { useRef,useState } from 'react';

export default function FormField() {
    const [value, setvalue] = useState('i brush');
    const outputRef = useRef();

    const btnClicked = (letterRef,setclicked) =>{
        setclicked(true)
        console.log(letterRef.current.innerText);
    }




    return (
        <div> 
            <div className="resetIcon">
                <img src={resetIcon} alt="Reset icon for reset the game" className='resetToggle' />
            </div>
            <input type="text" 
                className='display_text'
                ref={outputRef}
                value={value}
                disabled
             />
            <div className="flex">
                <PaperLetter clickedBtn ={btnClicked}>teeth.</PaperLetter>
                <PaperLetter clickedBtn ={btnClicked} >brush</PaperLetter>
                <PaperLetter clickedBtn ={btnClicked}>my</PaperLetter>
                <PaperLetter clickedBtn ={btnClicked} >i</PaperLetter>
            </div>
        </div>
    )
}
