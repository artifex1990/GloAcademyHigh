'use strict';

const isNumber = (number) => !isNaN(parseInt(number)) && isFinite(number);

function guessTheNumber() {
    const randomNumber = Math.ceil(Math.random() * 100) + 1;
    let userAttemptsNumbers = 10;
    let userNumber;

    function checkNumber() {
        userNumber = prompt('Ваше число?');

        if (userNumber === null) {
            alert('Игра окончена!');

            return;
        }

        if (isNumber(userNumber)) {
            userNumber = parseInt(userNumber);
        } else {
            alert('Введите число!');
            checkNumber();

            return;
        }

        userAttemptsNumbers--;

        if (userNumber === randomNumber) {
            alert("Поздравляю, Вы угадали!!!");

            if (confirm('Хотели бы сыграть еще?')) {
                guessTheNumber();
            }

            return;
        }

        if (userAttemptsNumbers === 0) {
            if (confirm('Попытки закончились, хотите сыграть еще?')) {
                guessTheNumber();
            }

            return;
        }

        if (userNumber > randomNumber) {
            alert(`Введенное чиcло ${userNumber} больше загаданного, повторите ввод! Количество оставшихся попыток: ${userAttemptsNumbers}!`);
        } else {
            alert(`Введенное чиcло ${userNumber} меньше загаданного, повторите ввод! Количество оставшихся попыток: ${userAttemptsNumbers}!`);
        }
        
        checkNumber();
    }

    alert(`Угадай число от 1 до 100! Ваше количество попыток: ${userAttemptsNumbers}`);

    checkNumber();
}

guessTheNumber();
