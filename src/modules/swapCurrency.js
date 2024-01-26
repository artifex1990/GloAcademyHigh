const swapCurrency = () => {
  const swapBtn = document.getElementById('swap');

  swapBtn.addEventListener('click', (e) => {
    const fromCurrencySelect = document.getElementById('from-currency');
    const toCurrencySelect = document.getElementById('to-currency');
    const tempIndexFrom = fromCurrencySelect.selectedIndex;
    const tempIndexTo = toCurrencySelect.selectedIndex;

    e.preventDefault();
    fromCurrencySelect.options[tempIndexFrom].selected = false;
    toCurrencySelect.options[tempIndexTo].selected = false;
    fromCurrencySelect.options[tempIndexTo].selected = true;
    toCurrencySelect.options[tempIndexFrom].selected = true;
  });
};

export default swapCurrency;
