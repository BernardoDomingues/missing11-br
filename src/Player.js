import { useState } from "react";
import styled from "styled-components";

import Modal from "./Modal";

const Player = ({ players, playerData, handleData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputData, setInputData] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(playerData.attemptsLeft);

  const checkAttempt = () => {
    const newPlayerData = playerData;
    const newData = players;
    if (inputData.toLowerCase() === playerData.name) {
      newPlayerData.hidden = false;
      newData[playerData.id] = newPlayerData;
      handleData(newData);
      setIsModalOpen(false);
    } else {
      newPlayerData.attemptsLeft = playerData.attemptsLeft - 1;
      newData[playerData.id] = newPlayerData;
      handleData(newData);
      setAttemptsLeft(attemptsLeft - 1);
    }
  };

  const validadeButton = () => attemptsLeft < 1 || playerData.hidden === false ? true : false

  return (
    <>
    <Container disabled={validadeButton()} onClick={() => setIsModalOpen(true)}>{playerData.name.length}</Container>
    {playerData.hidden ? <HiddenPlayerName>{playerData.name}</HiddenPlayerName> : <PlayerName>{playerData.name}</PlayerName>}
    <PlayerPosition>{playerData.position}</PlayerPosition>
    <Modal visible={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <BodyModal>
        <div>
          Tentativas Restantes: {attemptsLeft}
        </div>
        <input type="text" onChange={(event) => setInputData(event.target.value)}/>
        <div>
          <button disabled={validadeButton()} onClick={() => checkAttempt()}>Enviar</button>
        </div>
      </BodyModal>
    </Modal>
    </>
  )
};

const Container = styled.button`
  height: 35px;
  width: 35px;
  border-radius: 20px;
  background: #54B942;
  border: #fff;
  color: #fff;
  margin: 15px;

  :hover {
    cursor: pointer;
  }

  :disabled {
    cursor: default;
  }
`;

const HiddenPlayerName = styled.span`
  -webkit-text-security: disc !important;
  color: #fff;
`;

const PlayerName = styled.a`
  text-transform: capitalize;
  color: #fff;
`;

const PlayerPosition = styled.span`
  margin-left: 10px;
  color: #fff;
`;

const BodyModal = styled.div`
  padding: 10px;
  text-align: center;
`

export default Player;
