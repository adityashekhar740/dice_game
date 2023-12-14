import { useState } from "react";
import styled from "styled-components"
import Number_selector from "./Number_selector";

const Roll_dice = ({diee,dice_change,dicereset}) => {
    
    
   
    
  return (
    <Container>
        <div  className="dice">
            {
                (dicereset===1)?<img src={`../public/dies/dice_${1}.png`} onClick={dice_change} alt="" />:<img src={`../public/dies/dice_${diee}.png`} onClick={dice_change} alt="" />
            }
        </div>
        <p>Click on Dice to roll</p>
        {/* <Ins setreset={setreset}/> */}
    </Container>
  )
}

export default Roll_dice

const Container=styled.div`
.dice{
    cursor: pointer;
}
display: flex;
flex-direction: column;
align-items: center;
margin-top: 20px;
    p{
        color: #000;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
    }
`