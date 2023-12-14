import React from 'react'
import styled from 'styled-components'
import Number_selector from './Number_selector'

const Score = ({selectedNo,setselectedNo,Gscore,selected,setselected, setCc, cc}) => {

  return (
    <>
    <Container>
      <T_Score>
        <div><h1>{Gscore}</h1></div>
        <p>Total Score</p>
      </T_Score>
    <Number_selector selectedNo={selectedNo} setSelectedNo={setselectedNo} selected={selected} setselected={setselected} setCc={setCc} cc={cc}/>
    </Container>
    </>
  )
}

export default Score
const Container=styled.div`
display: flex;
justify-content: space-between;
max-width: 1350px;
margin: 0 auto;


`;
const T_Score = styled.div`

max-width: 200px;
text-align: center;
    h1{
        font-size: 100px;
        line-height: 110px;

    }
    p{
        font-size: 24px;
        font-weight: 500;
    }
`;