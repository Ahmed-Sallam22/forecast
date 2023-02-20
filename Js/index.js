
async function search(country) {
    let MyHttps = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=031759ec0abb42c995675611232002&q=${country}&days=3`);
    if (MyHttps.ok) {
        let country = await MyHttps.json();
        ShowCountry(country.location, country.current),
        ShowExpectedForecast(country.forecast.forecastday)
    }
}
document.getElementById("search").addEventListener("input", country=>{
    search(country.target.value)
}
);
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function ShowCountry(country, MyHttps) {
    if (null != MyHttps) {
        var e = new Date(MyHttps.last_updated.replace(" ", "t"));
let main=`<div class=" main-card card p-3 col-lg-4 bg-transparent">
<div class="card-title ">
<p class="text-danger float-start ">${days[e.getDay()]}</p>
<p class="text-danger float-end" >${e.getDate() + monthNames[e.getMonth()]}</p>
<div class="CLERA"></div>
</div>    
<div class="card-body py-5 ">
<h3 class="text-white ">${country.name}</h3>
<h1 class="text-white text-center temp ">${MyHttps.temp_c}<sup>o</sup>C <img src="https:${MyHttps.condition.icon}" alt=""></h1>
<p class="">${MyHttps.condition.text}</p>
<div class="footer d-flex justify-content-between">
<span  class="card-logo  fw-bold"><i class="fa-solid fa-umbrella"></i>20%</span>
<span  class="card-logo fw-bold"><i class="fa-solid fa-wind"></i>18km/h</span>
<span  class="card-logo  fw-bold"><i class="fa-solid fa-compass"></i>East</span>
</div>
</div>

</div>`
        document.getElementById("forecast").innerHTML = main
    }
}
function ShowExpectedForecast(country) {
    let MyHttps = "";
    for (let e = 1; e < country.length; e++)
    MyHttps +=` <div class="card col-lg-4 bg-transparent">
<div class="card-body text-center">
<div class="card-title pb-5">
                    <p class="text-danger ">${days[new Date(country[e].date.replace(" ", "t")).getDay()]}</p>
                    </div>  
                    <img class="" src="https:${country[e].day.condition.icon}" alt="">
                        <h3 class="text-white  text-center">${country[e].day.maxtemp_c}<sup>o</sup>C</h3>
                    <h5 class="text-white  text-center">${country[e].day.mintemp_c}<sup>o</sup>C</h5>
                <p class="bottom">${country[e].day.condition.text}</p>
</div>
</div>`
    document.getElementById("forecast").innerHTML += MyHttps
}
search("tanta");

