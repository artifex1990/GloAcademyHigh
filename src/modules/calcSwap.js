import getData from './getData';

const calcSwap = (value, from = 'USD', to = 'RUB') => {
  const wallet = [];
  const urlCurrencies = 'https://openexchangerates.org/api';
  const endpoint = 'latest.json';
  const appId = '59a95d220be8475e8dfa868ee3d39097';

  getData(`${urlCurrencies}/${endpoint}?app_id=${appId}&base=${to}`)
    .then((data) => {
      wallet.push(data);
    });

  console.log(wallet);
};

export default calcSwap;
