import { useState } from "react";
import styled from "styled-components";

import Player from "./Player";

const Game = ({ gameData, playersData }) => {
  const [data, setData] = useState(playersData);

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
  )
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


export default Game;
