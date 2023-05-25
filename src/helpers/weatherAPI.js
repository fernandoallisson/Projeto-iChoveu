const TOKEN = import.meta.env.VITE_TOKEN;
const erroDetectado = () => {
  window.alert('Nenhuma cidade encontrada');
  return [];
};
export const searchCities = async (term) => { // Aqui retorna uma cidade que for digitada no term
  const URLs = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`;
  if (!term) {
    return erroDetectado();
  }
  const response = await fetch(URLs);
  const data = await response.json();
  if (data.length <= 0) {
    return erroDetectado();
  }
  return data;
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

console.log(await getWeatherByCity('sao-paulo-sao-paulo-brazil'));
