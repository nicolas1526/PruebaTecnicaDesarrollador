import React from 'react'
import styled from "styled-components";
import fondoSeries from '../../public/img/movies.png'

const Container = styled.div`
  .container-modal {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #dcdcdcb3;
    display: flex;
    justify-content: center;
    align-items: center;
    .container-body {
      overflow-y: scroll;
      width: 45%;
      height: 40%;
      border-radius: 2em;
      background-color: white;
      display: flex;
      flex-direction: column;
      button {
        margin: 3em;
        justify-self: end;
        align-self: flex-end;
      }
      div {
        padding: 0 3em;
        display: flex;
        flex-direction: column;
        img {
          align-self: center;
          height: 40%;
        }
        h1 {
          margin: 5px 0 5px 0;
          font-size: 1.5em;
        }
        h3 {
          font-size: 1em;
          margin: 0 0 5px 0;
        }
        p {
          margin: 0 0 5px 0;
          text-align: justify;
        }
      }
    }
  }
`;


const Modal = ({state,data,showModal}) => {
  
  return (
    <Container>
        {
            state ? <div className='container-modal'>
            <div className='container-body'>
                    <button onClick={showModal}>cerrar</button>
                    <div>
                        <img src={fondoSeries} alt="" />
                        <h1>{data.title}</h1>
                        <h3>Year release: {data.releaseYear}</h3>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>:
            <div></div>
        }
        
    </Container>
  )
}

export default Modal;