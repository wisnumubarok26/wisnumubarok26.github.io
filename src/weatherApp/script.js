const APIKEY ="b03f806aacb3df87518b85b14ec4bcf7";
let urlAPI = "https://api.openweathermap.org/data/2.5/weather?&units=matric&q=";
let searchBox = document.getElementById("search-box");
let searchBtn = document.getElementById("search-btn");
async function weatherApp(city){
    const response = await fetch(urlAPI +city+ "&appid="+ APIKEY);
    let data = await response.json();
    let suhu = data.main.temp-273.15;
    let convertSuhu = suhu.toString();
    let iconImg = data.weather[0].icon;
    console.log(suhu);

    document.getElementById("city").innerHTML=data.name;
    document.getElementById("descCuaca").innerHTML=data.weather[0].description;
    document.getElementById("suhu").innerHTML=convertSuhu.substring(0,2)+"°c";
    document.getElementById("humidity").innerHTML="Humidity : "+data.main.humidity;
    document.getElementById("wind").innerHTML="Wind :"+(data.wind.speed)*3.6+" km/h";
    document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+data.name+")";

    let icon = document.getElementById("icon");
    icon.classList.toggle("icon");
    icon.src = `https://openweathermap.org/img/wn/`+iconImg+"@2x.png";
    console.log(data.weather[0].icon)
    console.log(data);
}
searchBtn.onclick = function(){
    console.info(searchBox.value)
    weatherApp(searchBox.value);
}
searchBox.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weatherApp(searchBox.value);
    }
})
