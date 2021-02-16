import httpService from './httpService';


const getScores = async () => {
  const { data } = await httpService.get('/scores');
  return data;
};

const scoresService = {
  getScores
};

export default scoresService;
