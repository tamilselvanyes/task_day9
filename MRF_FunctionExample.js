var request = new XMLHttpRequest();
request.open('GET' , 'https://restcountries.com/v3.1/all'); 
request.send();
request.onload = function (){
    var data = JSON.parse(request.response);

    // countries from Asia continent /region
    var asian_Countries = data.filter( item => item.region == "Asia" )
    var asian_Countries_name = asian_Countries.map((item)=> item.name.common)
    console.log("Asian Countries:")
    console.log(asian_Countries_name);

    //countries with a population of less than 2 lakhs
    var countries_lessthan_twoLakh_population = data.filter(item => item.population < 200000)
    var countries_lessthan_twoLakh_population_name = countries_lessthan_twoLakh_population.map(item => item.name.common)
    console.log("Countries with less than 2 lakhs population:")
    console.log(countries_lessthan_twoLakh_population_name);
 
    // name, capital, flag using forEach function
    data.forEach(item => {
        console.log(`${item.name.common}   ${item.capital}   ${item.flag}`)
    });

    //total population of countries using reduce function
    var totalpopulation;
    totalpopulation = data.reduce((acc, item) => acc + item.population, 0 )
    console.log("Total Population:   " +totalpopulation)

    //country which uses US Dollars as currency
    var owncurrencies_countries = data.filter (item =>  "currencies" in item )
    var countries_USD = owncurrencies_countries .filter (item =>  "USD" in item.currencies )
    console.log("Countries that use USD as currency:")
    console.log(countries_USD.map(item => item.name.common))


    

}
