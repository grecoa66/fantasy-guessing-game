import axios from 'axios';

// Get all data from public github url
const playerData = async () => {
  const playerData = await axios.get(
    'https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json'
  );

  return toPlayersArray(playerData.data.players);
};

const toPlayersArray = rawPlayersArray => {
  const playersArray = rawPlayersArray.map(player => ({
    firstName: player.first_name,
    lastName: player.last_name,
    fppg: player.fppg,
    position: player.position,
    image: player.images.default.url
  }));

  console.log('PLAYERS OBJECT', playersArray);
  return playersArray;
};

export default playerData;
