const locale = (objectName, localeName = 'en') => {
  const localeDictionary = {
    en: {
      currency: {
        USD: 'American dollar`s',
        EUR: 'Euro',
        RUB: 'Russian ruble`s',
      },
    },
    ru: {
      currency: {
        USD: 'Американский доллар',
        EUR: 'Евро',
        RUB: 'Российский рубль',
      },
    },
  };

  return localeDictionary[localeName][objectName];
};

export default locale;
