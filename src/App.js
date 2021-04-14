import './App.css';
import styled from 'styled-components'
import Header from './components/Header';

function App() {
  return (
    <AppContainer>
      <AppContents>
      <Header/>
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
`;