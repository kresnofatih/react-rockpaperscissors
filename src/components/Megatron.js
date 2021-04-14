import React from 'react'
import styled from 'styled-components'
import rock from '../rock.png'
import paper from '../paper.png'
import versus from '../versus.png'

function Megatron() {
    return (
        <MegatronObject>
            <img src={rock} alt=""/>
            <img src={versus} alt=""/>
            <img src={paper} alt=""/>
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