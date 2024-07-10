//TASK 1
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Task 1: Get all countries from Asia
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log("Countries in Asia:", asiaCountries.map(country => country.name.common));
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  //TASK 2
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Task 2: Get countries with population less than 200,000
    const countriesWithLowPopulation = data.filter(country => country.population < 200000);
    console.log("Countries with population less than 200,000:", countriesWithLowPopulation.map(country => country.name.common));
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  //TASK 3
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Task 3: Print name, capital, and flag of each country
    data.forEach(country => {
      const name = country.name.common;
      const capital = country.capital ? country.capital[0] : "N/A";
      const flag = country.flags ? country.flags.svg : "N/A";
      console.log(`Country: ${name}, Capital: ${capital}, Flag: ${flag}`);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  //TASK 4
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Task 4: Calculate total population of all countries
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total population of all countries:", totalPopulation.toLocaleString());
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  //TASK 5
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Task 5: Find country that uses US dollars as currency
    const countryWithUSD = data.find(country => {
      return country.currencies && country.currencies.USD;
    });
    if (countryWithUSD) {
      console.log("Country that uses US dollars as currency:", countryWithUSD.name.common);
    } else {
      console.log("No country found that uses US dollars as currency.");
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
