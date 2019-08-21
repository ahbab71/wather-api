
var btn = document.querySelector('.button');
var input = document.querySelector('.weatherinp');
var result = document.querySelector('.result');

var BASE = "http://api.apixu.com/v1";
var KEY = "fb962e0dfa7b4718ada61218192401";

btn.addEventListener('click',e=>{
    fetch(`${BASE}/current.json?key=${KEY}&q=sylhet`)
    .then(response=>response.json())
    .then(forecast=>{
        result.innerHTML = `The Weather in ${forecast.location.name}, ${forecast.location.country} is
        ${forecast.current.temp_c} Degree Celcius`
    })
});
