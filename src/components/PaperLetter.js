import { useState,useRef } from 'react';



export default function PaperLetter(props) {
const [click, setClick] = useState(false);
const letterRef = useRef();


const btnClicked =()=>{
    //Change the className of the btn click to active
    setClick(true);
    //Get the value of the letter btns click
    const getValue = letterRef.current.innerText;
    // How to pass this value to my parent component inorder to update a state in the parent component is the major chanllege
    props.handleInnerText(getValue);
}

    return (
        <p className={click ? 'letter clicked': 'letter'} onClick={btnClicked} ref={letterRef} >{props.children}
        </p>
    )
}
