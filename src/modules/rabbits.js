const rabbits = () => {
  const maxRowsElements = 5;
  const minElements = 0;
  const maxElements = 24;
  const squareBody = document.querySelector('.square-body');
  const blockDefault = document.querySelector('.square-body').cloneNode(true);
  const resetBtn = document.querySelector('.btn-reset');
  let blocks = document.querySelectorAll('.block');

  const blockUpdate = () => {
    blocks = document.querySelectorAll('.block');
  };

  const moveTile = (e) => {
    // eslint-disable-next-line array-callback-return
    Array.from(blocks).find((el, index) => {
      if (e.target.closest('.block') === el) {
        const arrow = e.target.closest('.arrow');
        let secondIndex = index;

        if (!arrow) return;

        if (arrow.classList.contains('top') && index - maxRowsElements >= minElements) {
          secondIndex -= maxRowsElements;
          blocks[secondIndex].before(blocks[index]);

          if (!secondIndex || secondIndex < maxElements) {
            blocks[index - 1].after(blocks[secondIndex]);
          } else {
            blocks[index + 1].before(blocks[secondIndex]);
          }
        }

        if (arrow.classList.contains('bottom') && index + maxRowsElements <= maxElements) {
          secondIndex += maxRowsElements;
          blocks[index].before(blocks[secondIndex]);

          if (secondIndex < maxElements) {
            blocks[secondIndex + 1].before(blocks[index]);
          } else {
            blocks[secondIndex - 1].after(blocks[index]);
          }
        }

        if (arrow.classList.contains('left') && index - 1 >= minElements) {
          secondIndex -= 1;
          blocks[index].after(blocks[secondIndex]);
        }

        if (arrow.classList.contains('right') && index + 1 <= maxElements) {
          secondIndex += 1;
          blocks[index].before(blocks[secondIndex]);
        }

        blockUpdate();
      }
    });
  };
  const resetBlocks = () => {
    squareBody.innerHTML = blockDefault.innerHTML;
    blockUpdate();
  };

  resetBtn.addEventListener('click', resetBlocks);
  squareBody.addEventListener('click', (e) => moveTile(e));
};

export default rabbits;
