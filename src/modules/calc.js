import getData from './getData';
import locale from './locale';

const calc = async () => {
  const fromCurrencySelect = document.getElementById('from-currency');
  const toCurrencySelect = document.getElementById('to-currency');
  const fromInput = document.getElementById('from');
  const toInput = document.getElementById('to');
  const fromDescription = document.querySelector('.from > .description');
  const toDescription = document.querySelector('.to > .description');
  const convertBtn = document.getElementById('convert');
  const urlCurrencies = 'https://api.freecurrencyapi.com/v1';
  const endpoint = 'latest';
  const appId = 'fca_live_vUfdCjwuGE6lLvH0viS6MHQEhTOOGxCYB0DMJHPH';

  const getRate = async () => {
    const baseCurrency = fromCurrencySelect.options[fromCurrencySelect.selectedIndex].value;
    const currencies = toCurrencySelect.options[toCurrencySelect.selectedIndex].value;
    const { data } = await getData(`${urlCurrencies}/${endpoint}?apikey=${appId}&base_currency=${baseCurrency}&currencies=${currencies}`).then((dataR) => dataR);

    return data[currencies];
  };

  const printTextForCurrency = (block, currency) => {
    // eslint-disable-next-line no-param-reassign
    block.textContent = `${locale('currency', 'ru')[currency]} (${currency})`;
    toInput.value = 0;
  };

  try {
    convertBtn.addEventListener('click', async (e) => {
      const rate = await getRate();

      e.preventDefault();
      toInput.value = +fromInput.value * rate;
      toInput.value = Math.ceil(+toInput.value * 100) / 100;
    });

    fromCurrencySelect.addEventListener('change', () => {
      const fromValue = fromCurrencySelect.options[fromCurrencySelect.selectedIndex].value;

      printTextForCurrency(fromDescription, fromValue);
    });

    toCurrencySelect.addEventListener('change', () => {
      const toValue = toCurrencySelect.options[toCurrencySelect.selectedIndex].value;

      printTextForCurrency(toDescription, toValue);
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default calc;
