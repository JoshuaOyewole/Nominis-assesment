import { useState,useRef } from 'react';

export default function PaperLetter(props) {
const letterRef = useRef();

const { children, clickedWords, setClickedWord } = props;

const btnClicked =()=>{
    //Change the className of the btn click to active
    setClickedWord(children);
    //Get the value of the letter btns click
    const getValue = letterRef.current.innerText;
    
    props.handleInnerText(getValue);
}

    return (
        <p className={clickedWords.includes(props.children) ? 'letter clicked': 'letter'} onClick={btnClicked} ref={letterRef} >{props.children}
        </p>
    )
}
