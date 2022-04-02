import { useState } from "react";
import styled from "styled-components";
import Player from "./Player";

const App = () => {
  const [data, setData] = useState([
    {
      id: 0,
      name: 'alisson',
      position: 'GOL',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 1,
      name: 'daniel alves',
      position: 'LD',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 2,
      name: 'marquinhos',
      position: 'ZAG',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 3,
      name: 'eder militao',
      position: 'ZAG',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 4,
      name: 'alex telles',
      position: 'LE',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 5,
      name: 'fabinho',
      position: 'VOL',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 6,
      name: 'bruno guimaraes',
      position: 'VOL',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 7,
      name: 'antony',
      position: 'PD',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 8,
      name: 'lucas paqueta',
      position: 'MEI',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 9,
      name: 'phillipe coutinho',
      position: 'PE',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 10,
      name: 'richarlison',
      position: 'ATA',
      attemptsLeft: 5,
      hidden: true
    }
  ]);

  const gameData = {
    game: 'Brasil 4 x 0 Bolívia - Eliminatórias da Copa do Mundo Qatar 2022',
    date: '29/03/2022'
  };

  return (
    <>
    <Header>{gameData.game} - {gameData.date}</Header>
    <Container>
      <Field>
        {data.map((player) => 
          <div>
            <Player players={data} playerData={player} handleData={setData} />
          </div>
          )}
        </Field>
      </Container>
    </>
  );
};

const Header = styled.div`
  text-align: center;
  font-size: 20px;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #6C7A89;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Field = styled.div`
  background: #0F9D58;
  width: 50%;
`;

export default App;
