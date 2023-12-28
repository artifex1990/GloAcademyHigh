const btn = document.getElementById('btn');
const e_btn = document.getElementById('e_btn');
const range = document.getElementById('range');
const span = document.getElementById('range-span');
const text = document.getElementById('text');
const square = document.getElementById('square');
const circle = document.getElementById('circle');

btn.addEventListener('click', () => {
    if (text.value.trim()) {
        square.style.backgroundColor = text.value.trim();
        text.value = '';
    }
});

e_btn.style.display = 'none';

range.addEventListener('input', (event) => {
    span.textContent = event.target.value;
    circle.style.width = `${event.target.value}%`;
    circle.style.height = `${event.target.value}%`;
});