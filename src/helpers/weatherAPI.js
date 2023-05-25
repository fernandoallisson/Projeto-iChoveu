const TOKEN = import.meta.env.VITE_TOKEN;
const URLs = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=$`;

export const searchCities = async (term) => { // Aqui retorna uma cidade que for digitada no term
  try {
    if (!term) {
      window.alert('Nenhuma cidade encontrada');
      return [];
    }
    const response = await fetch(URLs + term);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getWeatherByCity = async (cityURL) => {
  const urls = (await searchCities(cityURL)).map(({ url }) => url);
  console.log(urls);
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${urls}`);
  const data = await response.json();
  return {
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
  };
};
