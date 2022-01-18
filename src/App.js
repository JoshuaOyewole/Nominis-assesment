import './App.css';
import PaperLetter from './components/PaperLetter'
import icon1 from './assets/icono1.png'
import icon2 from './assets/icono2.png'
import soundIcon from './assets/soundBtn.png'
import resetIcon from './assets/reset.png'
import { useRef,useState } from 'react';


function App() {
  const [text, setText] = useState(' ');
  const [clickedWords, setClickedWords] = useState([]);
  const outputRef = useRef();
  const resetRef = useRef();
  const checkRef = useRef();

 
  const resetBtn = ()=>{
    // Reset the output field
    setText('');
    // Reset the button clasesses to inactive
    checkRef.current.childNodes.forEach(element => element.className = 'letter');
    
  }

  const handleInnerText = (innerTextValue) => {
    setText(text + " " + innerTextValue);
  }

  const setClickedWord = clickedWord => setClickedWords(prevState => [...prevState, clickedWord]);
 
  return (
    <div className="App">
      <div className="main">
        <div className="left_side">
          <header className='flex justify-spacebetween align-center'>
            <div className="flex col">
              <p className="story_title">Story Title</p>
              <p className="episode">Episode 1</p>
            </div>
            <div className="game_levels flex">
              <img src={icon1} alt="love icons unchecked" className="game_levels_icons" />
              <img src={icon2} alt="love icons checked" className="game_levels_icons" />
              <img src={icon2} alt="love icons checked" className="game_levels_icons" />
              <img src={icon2} alt="love icons checked" className="game_levels_icons" />
              <img src={icon2} alt="love icons checked" className="game_levels_icons" />
            </div>
          </header>
          <div className="instruction_section">
            <h2 className="primary_header">Let's practice</h2>
            <p className="instruction">Put the words in order to make <br /> a correct sentence.</p>
          </div>
        </div>
        <div className="right_side">
          <div className="soundIcon">
            <img src={soundIcon} alt="Sound icon for toggling sound ON or OFF" className='soundToggle' />
          </div>
          <div className="resetIcon" onClick={resetBtn}>
            <img src={resetIcon} alt="Reset icon for reset the game" className='resetToggle' ref={resetRef}/>
          </div>
          <input type="text" 
                value={text} 
                className='display_text'
                ref={outputRef}
                readOnly
           />
          <div className="flex flex-wrap wrap_buttons" ref={checkRef}>
          <PaperLetter 
            handleInnerText={handleInnerText}
            clickedWords ={clickedWords}
            setClickedWord={setClickedWord}
            >teeth.
          </PaperLetter>
          <PaperLetter 
            handleInnerText={handleInnerText}
            clickedWords ={clickedWords}
            setClickedWord={setClickedWord}
          >brush
          </PaperLetter>
          <PaperLetter 
            handleInnerText={handleInnerText}
            clickedWords ={clickedWords}
            setClickedWord={setClickedWord}
          >my
          </PaperLetter>
          <PaperLetter 
            handleInnerText={handleInnerText}
            clickedWords ={clickedWords}
            setClickedWord={setClickedWord}
          >i
          </PaperLetter>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
