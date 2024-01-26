const initFields = () => {
  const fromInput = document.getElementById('from');
  const toInput = document.getElementById('to');
  const eventsCheck = ['input', 'blur'];

  fromInput.value = 0;
  toInput.value = 0;

  eventsCheck.forEach((event) => {
    fromInput.addEventListener(event, (e) => {
      e.target.value = e.target.value.replace(/[,]/gi, '.');
      e.target.value = e.target.value.replace(/[^\d.]/gi, '');
    });
  });
};

export default initFields;
