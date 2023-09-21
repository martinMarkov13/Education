import {requestFactory} from "./requester";

const baseUrl = "http://localhost:3030/data/games";

export const gameServiceFactory = (token) => {
  const request = requestFactory(token);

  async function getAll() {
    const result = await request.get(baseUrl);
    const games = Object.values(result);
    return games;
  }

  const create = async (gameData) => {
    const result = await request.post(baseUrl, gameData);
    return result;
  };

  const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`);
    return result;
  };

  const deleteGame = (gameId) => {
    request.delete(`${baseUrl}/${gameId}`)
  }
  
  const edit = (gameId, data) => request.put(`${baseUrl}/${gameId}`, data);

  return {
    getAll,
    getOne,
    create,
    edit,
        delete: deleteGame,
};
};
