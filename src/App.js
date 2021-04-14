import './App.css';
import React from 'react'
import styled from 'styled-components'
import Header from './components/Header';
import ScoreBoard from './components/ScoreBoard';
import Megatron from './components/Megatron';
import Panel from './components/Panel';

function App() {
  const [playerScore, setPlayerScore] = React.useState(1)
  const [computerScore, setComputerScore] = React.useState(5)
  const resetScore = () =>{
    setComputerScore(0);
    setPlayerScore(0);
  }
  return (
    <AppContainer>
      <AppContents>
      <Header/>
      <ScoreBoard playerScore={playerScore} computerScore={computerScore} resetFunction={resetScore}/>
      <Megatron/>
      <Panel/>
      </AppContents>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  color: white;
  background-color: black;
  display: flex;
  justify-content: center;
`;

const AppContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;