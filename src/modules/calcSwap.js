import getData from './getData';

const calcSwap = () => {
  const wallet = [];
  const urlCurrencies = 'https://exchangeratesapi.io/v1';
  const endpoint = 'latest';
  const accessKey = 'API_KEY';

  getData(`${urlCurrencies}/${endpoint}?access_key=${accessKey}`).then((data) => {
    wallet.push(data);
  });
  console.log(wallet);
};

export default calcSwap;
