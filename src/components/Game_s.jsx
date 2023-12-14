import React, { useState } from "react";
import Score from "./Score";
import styled from "styled-components";
import Roll_dice from "./Roll_dice";
import Instructions from "./Instructions";

const Game_s = () => {
  const [Gscore, setGscore] = useState(0);
  const [selectedNo, setSelectedNo] = useState(null);
  const [diee, setdiee] = useState(1);
  const [selected, setselected] = useState(1);
  const [reset, setreset] = useState(0);
  const [dicereset, setdicereset] = useState(0);
  const [cc, setCc] = useState(true);
  const [ins, setIns] = useState(0);
  const ToggleIns=()=>{
    setIns((prev)=>!prev);
    console.log(ins);
  }

  const dice_change = () => {
    if (selectedNo === null) {
      setselected(null);
    } else {
      var rand = Math.floor(Math.random() * 6) + 1;
      setdiee((prev) => rand);

      if (selectedNo === rand && cc === true) {
        setGscore((prev) => prev + rand);
      } else if (selectedNo !== rand && cc === true) {
        setGscore((prev) => prev - 2);
      }
      // setselectedNo(null);
      // console.log(selectedNo);
    }
    setCc(false);
  };
  const restart = () => {
    // setreset((prev)=>a);
    // if(reset===1){
    setGscore(0);
    setdicereset(1);
    setCc(false);
    setSelectedNo(null);
    // }
  };

  return (
    <>
      <Board>
        <Score
          selectedNo={selectedNo}
          setselectedNo={setSelectedNo}
          Gscore={Gscore}
          selected={selected}
          setselected={setselected}
          setCc={setCc}
          cc={cc}
        />
      </Board>
      <Main>
        <Roll_dice
          diee={diee}
          dice_change={dice_change}
          dicereset={dicereset}
        />
        <div>
          <Out_button onClick={() => restart()}>Reset</Out_button>
        </div>
        <A>
          <button onClick={()=>ToggleIns()}>
            How To Play
          </button>
          {/* <B show={ins===1}>Lorem ipsum dolor sit amet consectetur adipisicing </B> */}
          
        </A>
      </Main>
    </>
  );
};

export default Game_s;

const Board = styled.div`
  padding-top: 54px;
`;
const Main = styled.main`
  max-width: 1350px;
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 80px;
  
`;


const Out_button = styled.button`
margin-left: 562px;
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
  background-color: white;
  color: black;
  border: 1px black solid;
  &:hover {
    background: #000000;
    color: white;
    border: #000000 1px solid;
  }
`;
const A=styled.div`
  button{
 margin-left: 562px;
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
  }
`
const B=styled.div`

display: ${(props)=>(props.show)?'none':'block'}
`
