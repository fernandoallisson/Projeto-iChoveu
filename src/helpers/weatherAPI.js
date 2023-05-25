// Remova os comentários a medida que for implementando as funções

const TOKEN = import.meta.env.VITE_TOKEN;
const URL = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=$`;

export const searchCities = async (term) => { // Aqui retorna uma cidade que for digitada no term
  try {
    const response = await fetch(URL + term);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getWeatherByCity = (/* cityURL */) => {
  //   seu código aqui
};
