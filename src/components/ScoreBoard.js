import React from 'react'
import styled from 'styled-components'

function ScoreBoard({playerScore, computerScore, resetFunction}) {
    return (
        <ScoreBoardObject>
            <PlayerNames>You vs Computer</PlayerNames>
            <PlayerScores>{playerScore} - {computerScore}</PlayerScores>
            <label onClick={resetFunction}>Reset</label>
        </ScoreBoardObject>
    )
}

export default ScoreBoard

const ScoreBoardObject = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    background-color: var(--rps-lblue);
    margin: 10px 20px;
    align-items: center;
    padding: 10px 20px;

    > label {
        font-size: 20px;
        color: white;

        :hover {
            color: var(--rps-lyellow);
            cursor: pointer;
        }
    }
`;

const PlayerNames = styled.p`
    font-size: 20px;
    color: white;
`;

const PlayerScores = styled.p`
    font-size: 30px;
    font-weight: 800;
    color: white;
`;