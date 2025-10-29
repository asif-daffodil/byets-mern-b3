const countryList = [
    {
        name: "Bangladesh",
        currency: "Taka",
        language: "Bengali",
        population: 18000000
    },
    {
        name: "India",
        currency: "Rupee",
        language: "Hindi",
        population: 1300000000 
    },
    {
        name: "Pakistan",
        currency: "Rupee",
        language: "Urdu",
        population: 250000000 
    }
];

countryList.forEach(cd => {
    console.log(`
        Country name : ${cd.name}
        Currency : ${cd.currency}
        Language : ${cd.language}
        Population : ${cd.population}
        `);
})

const res = countryList.find(d => d.population < 1000000000 && d.currency === "Rupee");
console.log(res);