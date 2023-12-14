import React, { useState } from 'react';
import styled from 'styled-components';


const Number_selector = ({selectedNo,setSelectedNo,selected,setselected, setCc, cc}) => {
    
const N=[1,2,3,4,5,6];
// console.log(selectedNo);
if(selectedNo!=null){
  setselected(1);
}

  return (
    <Ddiv>
       <div className='nums'>
        { N.map((value,i)=>(
        <Box isSelected={selectedNo===value} ccProp={cc} key={i} 
        onClick={()=>{
        setSelectedNo(value);
        setCc(true)
        }
      }>{value}</Box>
        ))
        } 
       </div>
       
       <p> <span>{(selected===null)?' Select A Number First':''}</span>Select Number</p>
    </Ddiv>
  )
}

export default Number_selector;

const Ddiv=styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
.nums{
display: flex;
flex-direction: row ;
align-items: center;
gap: 24px;
}
p{
  color: #000;
font-family: Poppins;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-align: end;
span{
  margin-right: 131px;
  color: red;
}
}
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected && props.ccProp ? "black" : "white")};
  color: ${({isSelected,ccProp})=>(isSelected && ccProp )?"white":"black"};
  cursor: pointer;
`;