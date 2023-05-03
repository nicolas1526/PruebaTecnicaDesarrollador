import React from 'react'
import styled from "styled-components";

import fondoSeries from '../../public/img/series.png'
import fondoMovie from '../../public/img/movies.png'

const Container = styled.div`
  
  
  div {
    display: flex !important;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 130px;
    height: 320px;
    button {
      border: none;
      background: transparent;
      img {
        width: 100%;
        height: 100%;
      }

      :hover {
        opacity: 0.7;
      }
    }
    p {
      padding: 0 6px;
      margin: 0px;
    }
  }
`;


const CardTitle = ({urlImg, title, type, onClick}) => {
  
  return (
    <Container>
        <div>
            <button onClick={() => onClick(type)}>
                {urlImg ? 
                    <img src={urlImg} alt="img2" /> : 
                    type === "series" ? 
                    <img src={fondoSeries} alt="img2" /> 
                    : <img src={fondoMovie} alt="img2" />
                }
                
            </button>
            <p>{title}</p>
        </div>
    </Container>
  )
}

export default CardTitle;