import Game from "./Game";

const App = () => {
  const players = [
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
  ];

  const gameData = {
    game: 'Brasil 4 x 0 Bolívia - Eliminatórias da Copa do Mundo Qatar 2022',
    date: '29/03/2022'
  };

  return <Game gameData={gameData} playersData={players} />
};

export default App;
