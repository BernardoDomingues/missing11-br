import { useState } from "react";
import styled from "styled-components";
import Player from "./Player";

const App = () => {
  const [data, setData] = useState([
    {
      id: 0,
      name: 'Alisson',
      position: 'GOL',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 1,
      name: 'Daniel Alves',
      position: 'LD',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 2,
      name: 'Marquinhos',
      position: 'ZAG',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 3,
      name: 'Éder Militão',
      position: 'ZAG',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 4,
      name: 'Alex Telles',
      position: 'LE',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 5,
      name: 'Fabinho',
      position: 'VOL',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 6,
      name: 'Bruno Guimarães',
      position: 'VOL',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 7,
      name: 'Antony',
      position: 'PD',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 8,
      name: 'Lucas Paquetá',
      position: 'MEI',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 9,
      name: 'Philipe Coutinho',
      position: 'PE',
      attemptsLeft: 5,
      hidden: true
    },
    {
      id: 10,
      name: 'Richarlison',
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
