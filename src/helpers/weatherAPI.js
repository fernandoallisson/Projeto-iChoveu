const TOKEN = import.meta.env.VITE_TOKEN;
export const erroDetectado = () => {
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

export const getWeatherByCity = async (cityURL) => { // Aqui retorna algumas informações das cidades
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
  const data = await response.json();
  return {
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
  };
};
