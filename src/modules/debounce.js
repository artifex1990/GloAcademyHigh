const debounceModule = () => {
  const throttlingInput = document.getElementById('debounce');
  const out = document.getElementById('out');
  // eslint-disable-next-line func-names
  const debounce = (f, t) => function (args) {
    const previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && ((this.lastCall - previousCall) <= t)) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => f(args), t);
  };

  // eslint-disable-next-line no-return-assign
  throttlingInput.addEventListener('input', debounce((event) => out.textContent = event.target.value, 300));
};

export default debounceModule;
