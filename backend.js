async function fetchCapitalCity(country) {
   const url =
    `https://restcountries.com/v3.1/name/${country}`;
  
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function fetchBorders(country) {
  const url =
   `https://restcountries.com/v3.1/name/${country}?fullText=false`;
 
   const response = await fetch(url);
   const data = await response.json();
   return data;
}

let buttonId = document.getElementById("callApi");

buttonId.addEventListener("click", () => {
  fetchCapitalCity("South Africa").then(
    (rawdata) =>{
      const data = rawdata[0];
      // console.log(data);


      
      const capitalCity = data["capital"];
      const population = data["population"];
      const region = data["region"];
      const flag = data["flag"];
      const neighbour = data["borders"];


      let capitalCityId = document.getElementById("country-capital").innerText=capitalCity;
      let populationId = document.getElementById("country-population").innerText=population;
      let regionId = document.getElementById("country-region").innerText=region;
      let flagId = document.getElementById("country-flag").innerText = flag;
      let neighbourId = document.getElementById("country-neighbour");
    
      // console.log(neighbour);
      neighbour.forEach(element => {
        console.log(element);
        fetchBorders(element).then(
          (secondaryData) =>{
             const data = rawdata[0];
      // console.log(data);



      
      const countriesName = data["capital"];
     
      const flag = data["flag"];
       
          }
        )
      });

    }

  )
});



// All url https://restcountries.com/v3.1/{service}?fields={field},{field},{field}
// capital
// Population
// region
// Flag
// A list of neighbouring countries
