import React from 'react'
import styled from 'styled-components'
import rock from '../rock.png'
import paper from '../paper.png'
import scissors from '../scissors.png'
import versus from '../versus.png'

function Megatron({playerHand, computerHand}) {
    return (
        <MegatronObject>
            <img src={playerHand==='Rock' ? rock : (playerHand==='Paper' ? paper : scissors)} alt=""/>
            <img src={versus} alt=""/>
            <img src={computerHand==='Rock' ? rock : (computerHand==='Paper' ? paper : scissors)} alt=""/>
        </MegatronObject>
    )
}

export default Megatron

const MegatronObject = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin : 50px 20px;

    > img {
        height: 200px;
        border-radius: 50ch;
    }
`;