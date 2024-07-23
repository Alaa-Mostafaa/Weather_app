/* Global variables */

var cityname=document.getElementById("location").value;


/* Get the day */
var arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var date=new Date();
var day=date.getDay();
/* End of ( Get the day ) */



/* Search (location) */

var searchInput=document.getElementById("location");
searchInput.addEventListener("input", function(){
  console.log(searchInput.value);
  getcurrent(searchInput.value)
})

/* End of Search (location) */


/*  Fetch the Data (APi) */

async function getcurrent(cityname){
    var country= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4f004be0292b47f2a86141247230508&q=${cityname}&days=7`);
    var country2= await country.json();
    console.log(country2)
    display(country2,cityname);

}
/*  End of Fetch the Data (APi) */





/* Display function */
function display(country2,cityname){


    document.getElementById("row").innerHTML=`
    <div class="col-lg-4">
    <div class="card border-0 rounded-0">
      <div class="card-header border-0">
        <div >
          <span style="color: gray;" >${arrayOfWeekdays[day]}</span>
          <span style="color: gray;" class="float-end">${country2.current.last_updated} </span>
        </div>
      </div>
      <div class="card-body">
        
    <div>
      <p style="color: #bfc1c8;" class="fs-5">${cityname}</p>
      <div style="color: white;font-size: 90px;">
        <span>${country2.current.temp_c}<sup>o</sup> C</span>
        <img src="https:${country2.current.condition.icon}" alt="sun" width="80" id="day1"/>
      </div>
      <p style="color: #009ad8;">${country2.current.condition.text}</p>
      <div class="icons pb-5" style="color: #bfc1c8;">
        <span>
          <img src="images/icon-umberella@2x.png" alt="umberella" width="21"/>
          20%
        </span>
        <span class="ps-4">
          <img src="images/icon-wind@2x.png" alt="wind" width="21"/>
          ${country2.current.wind_kph} km/h
        </span>
        <span class="ps-4">
          <img src="images/icon-compass@2x.png" alt="compass" width="21"/>
          ${country2.current.wind_dir}
        </span>
  
      </div>
    </div>
      </div>
    </div>
  </div>
  
  
  <div class="col-lg-4">
  <div class="card border-0 rounded-0" style="background-color: #262936;">
    <div class="card-header border-0" style="background-color: rgb(30, 32, 43);">
      <div class="text-center">
        <span style="color: gray;" >${arrayOfWeekdays[day+1]}</span>
      </div>
    </div>
    <div class="card-body">
      
  <div class="text-center pt-5 ">
    <img src="https:${country2.forecast.forecastday[1].day.condition.icon}" alt="sun" width="65" class="pb-4" />
    <div style="color: white;font-size: 30px;" class="pb-2">
      <span class="fw-bold">${country2.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup> C</span>
    </div>
    <span style="color: #bfc1c8;" >${country2.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></span>
  
    <p style="color: #009ad8;" class="pt-3 pb-4">${country2.forecast.forecastday[1].day.condition.text}</p>
   
  </div>
    </div>
  </div>
  </div>
  
  
  <div class="col-lg-4">
  <div class="card border-0 rounded-0">
    <div class="card-header border-0">
      <div class="text-center">
        <span style="color: gray;" >${arrayOfWeekdays[day+2]}</span>
      </div>
    </div>
    <div class="card-body">
      
  <div class="text-center pt-5 ">
    <img src="https:${country2.forecast.forecastday[2].day.condition.icon}" alt="sun" width="65" class="pb-4" />
    <div style="color: white;font-size: 30px;" class="pb-2">
      <span class="fw-bold">${country2.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup> C</span>
    </div>
    <span style="color: #bfc1c8;" >${country2.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></span>
  
    <p style="color: #009ad8;" class="pt-3 pb-4">${country2.forecast.forecastday[2].day.condition.text}</p>
   
  </div>
    </div>
  </div>
  </div>
    `
}
/* End of Display function */