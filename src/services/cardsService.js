import httpService from './httpService';


const getCards = async () => {
  const { data } = await httpService.get('/cards');
  return data.slice(0, 8);
};

const cardsService = {
  getCards
};

export default cardsService;
