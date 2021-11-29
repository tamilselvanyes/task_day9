var request = new XMLHttpRequest();
request.open('GET' , 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'); 
request.send();
request.onload = function (){
    var data = JSON.parse(request.response);

    // countries from Asia continent /region
    var asian_Countries = data.filter( item => item.region == "Asia" )
    var asian_Countries_name = asian_Countries.map((item)=> item.name)
    console.log("Asian Countries:")
    console.log(asian_Countries_name);

    //countries with a population of less than 2 lakhs
    var countries_lessthan_twoLakh_population = data.filter(item => item.population < 200000)
    var countries_lessthan_twoLakh_population_name = countries_lessthan_twoLakh_population.map(item => item.name)
    console.log("Countries with less than 2 lakhs population:")
    console.log(countries_lessthan_twoLakh_population_name);
    

    // name, capital, flag using forEach function
    data.forEach(item => {
       console.log(`${item.name}   ${item.capital}   ${item.flag}`)
    });



    //total population of countries using reduce function
    var totalpopulation;
    totalpopulation = data.reduce((acc, item) => acc + item.population, 0 )
    console.log("Total Population:   " +totalpopulation)

        
    
    //country which uses US Dollars as currency
    var countries_USD = data .filter (item => {
        for(let i =0 ; i < item.currencies.length ; i++){
           if (item.currencies[i].code === "USD"){
            return item;
           }
        }
    })
    var USD_Countries_name = countries_USD.map((item)=> item.name)
    console.log("Countries that use USD as Currency:");
    console.log(USD_Countries_name)

}
