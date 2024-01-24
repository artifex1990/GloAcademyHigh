import getData from './getData';

const switchCars = (url) => {
  const carsSelect = document.getElementById('cars');
  const cars = {};

  try {
    getData(url).then((data) => {
      if (!data.cars.length) {
        throw new Error('Файл не найден, либо пуст!');
      }

      data.cars.forEach((car) => {
        const option = document.createElement('option');
        // eslint-disable-next-line no-multi-assign
        option.value = option.textContent = car.brand;
        carsSelect.appendChild(option);
        cars[car.brand] = car;
      });
    });

    carsSelect.addEventListener('change', (e) => {
      try {
        const model = document.getElementById('model');
        const cost = document.getElementById('cost');

        if (e.target.value !== '') {
          const car = cars[e.target.value];
          model.textContent = `Тачка ${car.brand} ${car.model}`;
          cost.textContent = `Цена: ${car.price}$`;
        } else {
          model.textContent = 'Выбирите тачку!';
          cost.textContent = '';
        }
      } catch (error) {
        console.log(error.message);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default switchCars;
