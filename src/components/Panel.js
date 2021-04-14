import React from 'react'
import styled from 'styled-components'

function Panel({changePlayerHand}) {
    return (
        <PanelObject>
            <label onClick={()=>{changePlayerHand('Rock')}}>Rock</label>
            <label onClick={()=>{changePlayerHand('Paper')}}>Paper</label>
            <label onClick={()=>{changePlayerHand('Scissors')}}>Scissors</label>
        </PanelObject>
    )
}

export default Panel

const PanelObject = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 30px;

    > label {
        font-size: 30px;
        color: white;
        width: 100px;

        :hover {
            color: var(--rps-dyellow);
            cursor: pointer;
        }
    }
`;