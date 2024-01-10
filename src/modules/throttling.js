const throttlingModule = () => {
  const throttlingInput = document.getElementById('throttling');
  const out = document.getElementById('out');
  // eslint-disable-next-line func-names
  const throttling = (f, t) => function (args) {
    const previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall === undefined
      || (this.lastCall - previousCall) > t) {
      f(args);
    }
  };

  // eslint-disable-next-line no-return-assign
  throttlingInput.addEventListener('input', throttling((event) => out.textContent = event.target.value, 300));
};

export default throttlingModule;
