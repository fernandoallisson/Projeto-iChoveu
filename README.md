# :construction: Projeto iChoveu :construction:

Este projeto consiste em uma aplicação web para buscar informações meteorológicas de cidades. A aplicação utiliza a API WeatherAPI para obter dados sobre o clima, como temperatura atual, condições climáticas e previsão do tempo para os próximos sete dias.

Aqui está uma visão geral das principais funcionalidades e componentes do projeto:

## searchCities:
Esta função faz uma busca na API WeatherAPI para encontrar cidades com base em um termo fornecido pelo usuário. Se a busca for bem-sucedida, ela retorna uma lista de cidades encontradas. Caso contrário, exibe uma mensagem de erro.

## getWeatherByCity:
Esta função busca informações meteorológicas específicas de uma cidade fornecida, como temperatura atual, condições climáticas e ícone representativo do clima.

## createCityElement:
Esta função cria um elemento HTML que exibe as informações de uma cidade, incluindo nome, país, temperatura, condições climáticas e ícone do clima. Também adiciona um botão para visualizar a previsão do tempo para os próximos sete dias.

## handleSearch:
Esta função lida com o evento de envio do formulário de busca. Ela obtém o valor digitado pelo usuário, faz uma busca por cidades correspondentes e, para cada cidade encontrada, exibe suas informações meteorológicas e adiciona um botão para visualizar a previsão do tempo.

## createForecast e showForecast:
Essas funções lidam com a exibição da previsão do tempo para os próximos sete dias em um modal, caso o usuário escolha visualizar a previsão para uma cidade específica.

## Além disso...
Além disso, o projeto também possui funções auxiliares para manipulação de elementos HTML, limpeza de filhos de elementos e exibição de mensagens de erro.