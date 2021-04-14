import './App.css';
import React, {useEffect} from 'react'
import styled from 'styled-components'
import Header from './components/Header';
import ScoreBoard from './components/ScoreBoard';
import Megatron from './components/Megatron';
import Panel from './components/Panel';

function App() {
  const [playerScore, setPlayerScore] = React.useState(0)
  const [computerScore, setComputerScore] = React.useState(0)
  const [playerHand, setPlayerHand] = React.useState('Rock')
  const [computerHand, setComputerHand] = React.useState('Rock')
  const [triggerCount, setTriggerCount] = React.useState(0)
  const resetScore = () =>{
    setPlayerHand('Rock');
    setComputerHand('Rock');
    setComputerScore(0);
    setPlayerScore(0);
  }
  const changePlayerHand = (hand) =>{
    setPlayerHand(hand);
    setTriggerCount(triggerCount+1);

    // random computer hand
    const randomNum = Math.random();
    if(randomNum<=0.33333){
      setComputerHand('Rock');
    } else if(randomNum>0.33333 && randomNum<=0.66667){
      setComputerHand('Paper');
    } else {
      setComputerHand('Scissors');
    }
    // change score
    
  }

  useEffect(()=>{
    if(playerHand==='Rock' && computerHand==='Paper'){
      setComputerScore(computerScore+1);
    } else if(playerHand==='Rock' && computerHand==='Scissors'){
      setPlayerScore(playerScore+1);
    } else if(playerHand==='Paper' && computerHand==='Rock'){
      setPlayerScore(playerScore+1);
    } else if(playerHand==='Paper' && computerHand==='Scissors'){
      setComputerScore(computerScore+1);
    } else if(playerHand==='Scissors' && computerHand==='Rock'){
      setComputerScore(computerScore+1);
    } else if(playerHand==='Scissors' && computerHand==='Paper'){
      setPlayerScore(playerScore+1);
    }
  },[triggerCount])
  return (
    <AppContainer>
      <AppContents>
      <Header/>
      <ScoreBoard playerScore={playerScore} computerScore={computerScore} resetFunction={resetScore}/>
      <Megatron playerHand={playerHand} computerHand={computerHand}/>
      <Panel changePlayerHand={changePlayerHand}/>
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