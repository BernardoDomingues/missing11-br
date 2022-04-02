import { useState } from "react";
import styled from "styled-components";

import Player from "./Player";

const Game = ({ gameData, playersData }) => {
  const [data, setData] = useState(playersData);

  return (
    <Container>
      <div>
        <Header>{gameData.game} - {gameData.date}</Header>
        <Field>
          {data.map((player) => 
            <div>
              <Player players={data} playerData={player} handleData={setData} shirtColor={gameData.shirtColor} />
            </div>
            )}
          </Field>
        </div>
    </Container>
  )
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #6C7A89;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Header = styled.div`
  text-align: center;
  font-size: 20px;
  color: #fff;
`;

const Field = styled.div`
  background: #0F9D58;
`;


export default Game;
