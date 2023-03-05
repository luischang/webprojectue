const axios = require('axios');

const lettersToSearch = 'pe';

// Realizar una solicitud HTTP a la API de REST Countries
axios.get(`https://restcountries.com/v2/all`)
  .then(response => {
    // Filtrar los resultados para incluir solo los países que contengan las dos letras
    const filteredResults = response.data.filter(country => {
      return country.name.toLowerCase().includes(lettersToSearch.toLowerCase());
    });

    // Imprimir los resultados en la consola
    console.log(`Países que contienen las letras "${lettersToSearch}":`);
    filteredResults.forEach(country => {
      console.log(country.name);
    });
  })
  .catch(error => console.error(error));
