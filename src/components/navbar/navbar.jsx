import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color:white;
    .container-title{
        background: linear-gradient(to bottom, rgb(15,147,237), rgb(0,105,251));
        padding: 0 10em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .container-subtitle{
        background: rgb(65,65,65);
        padding: 0 10em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    button{
        color:white;
        font-size: 1em;
        padding:0.7em;
        border: none;
        background: rgb(65,65,65);
        margin-left: 1em;
    }
    .bnt-login{
        background: transparent;
    }
`;

const Navbar = ({title,onclick}) => {

   

  return (
    <Container>
        <div className='container-title'>
            <div>
                <button className='bnt-login' onClick={() => onclick("home")}>
                    <h1>DEMO Streaming</h1>
                </button>
            </div>
            <div>
                <button className='bnt-login'>Log in</button>
                <button>Start your free trial</button>
            </div>
        </div>
        <div className='container-subtitle'>
            <h2>Popular {title}</h2>
        </div>
    </Container>
  )
}

export default Navbar;