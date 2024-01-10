const animation = () => {
  const box = document.getElementById('box');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
  box.style.position = 'absolute';
  let count = 0;
  let idInterval;
  const animate = () => {
    // eslint-disable-next-line no-plusplus
    count++;
    idInterval = requestAnimationFrame(animate);

    box.style.left = `${count}px`;
  };

  start.addEventListener('click', animate);
  stop.addEventListener('click', () => cancelAnimationFrame(idInterval));
  reset.addEventListener('click', () => {
    count = 0;
    cancelAnimationFrame(idInterval);
    box.style.left = '0px';
  });
};

export default animation;
