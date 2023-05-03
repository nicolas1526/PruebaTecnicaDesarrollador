import React from 'react'
import styled from "styled-components";
import CardTitle from '../card-title/cardtitle'
import { click } from '@testing-library/user-event/dist/click';

const Container = styled.div`
    min-height: 63vh;
    margin-top: 1em;
    margin-left: 3em;
    div{
        margin: 0px;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
    }

    @media screen and (min-width:40em) and (max-width:63.9em){
        div{
            margin: 0px;
            display: grid;
            justify-content: start;
            align-content: start;
            gap: 0.5em;
            grid-template-columns: repeat(4, 1fr);
        }   
    }

    @media screen and (min-width:64em){
        div{
            margin: 0px;
            display: grid;
            justify-content: start;
            align-content: start;
            gap: 0.5em;
            grid-template-columns: repeat(6, 1fr);
        }
    }
    
`;



const ContainerTitles = ({data,onclick}) => {

    function sendInfo(tema){
        onclick(tema)
    }

    const renderedItems = [];

    if(data && data.length!=0){
        data.forEach(item => {
            //renderedItems.push(<CardTitle urlImg={item.images["Poster Art"].url} title={item.title} type="series"></CardTitle>);
            renderedItems.push(<CardTitle onClick={() => sendInfo(item)} title={item.title} type="card"></CardTitle>);
        });
    }
    
    return (
        <Container>
            {
                data && data.length!=0 ? 
                <div>
                    {renderedItems}
                </div>:
                <div>
                    <CardTitle onClick={onclick} title="Popular Series" type="series"></CardTitle>
                    <CardTitle onClick={onclick} title="Popular Movies" type="movie"></CardTitle>
                </div>
            }
        </Container>
  )
}

export default ContainerTitles;