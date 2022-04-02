import { useState } from "react";
import styled from "styled-components";
import Game from "./Game";

import { dailyChalange, chalangeGermany, chalangeMadrid, chalangeBarca } from "./games";

const App = () => {
  const [gameSelected, setGameSelected] = useState({gameData: 'default', players: []});

  return (
    gameSelected.gameData === 'default' ? 
    <Body>
      <Menu>
        <Title>Missing 11</Title>
        <button onClick={() => setGameSelected(dailyChalange)}>Desafio Diário</button>
        <br />
        <button onClick={() => setGameSelected(chalangeGermany)}>Desafio Alemanha</button>
        <br />
        <button onClick={() => setGameSelected(chalangeMadrid)}>Desafio R.Madrid</button>
        <br />
        <button onClick={() => setGameSelected(chalangeBarca)}>Desafio Barça</button>
      </Menu>
    </Body>
    :
    <Game gameData={gameSelected.gameData} playersData={gameSelected.players} />
  )
};

const Body = styled.div`
  background: #6C7A89;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Menu = styled.div`
  background: #fff;
  padding: 10px;
`;

const Title = styled.h1`
  text-transform: uppercase;
`;

export default App;
