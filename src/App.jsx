import {useState} from 'react';
import './App.css'
import styled from 'styled-components';
// import Home from './components/Home';
import Game_s from './components/Game_s';
import Home from './components/Home';
function App() {
  const [isStrated,SetIsStarted]=useState(false);

  const togglegameplay=()=>{
    SetIsStarted((prev)=>!prev);
    
  }

  return (
    <div>
      {(isStrated)?<Game_s/>:<Home toggle={togglegameplay}/>}
    </div>
  )
}

  const Button= styled.button`
  background-color: black;
  padding: 10px;
  color: white;
  `;

export default App
