let weather={
    apiKey : "1d05b87056683229ca0d6513342706a0",
    fetchWeather:function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&units=metric&appid=" + this.apiKey
        ).then((response) => response.json())
        .then( (data)=> this.displayWeather(data));
    },
    displayWeather : function(data){
         const {name} = data;
         const {temp,humidity,temp_max,temp_min} = data.main;
         const {icon,description} = data.weather[0];
         const {speed} = data.wind;
         console.log(name,temp,humidity,temp_min,temp_max,icon,description,speed);
         

        document.querySelector(".city").innerText= "Weather in "+name
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" +icon+ ".png"
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".description").innerText= description;
        document.querySelector(".humidity").innerText="Humidity : " +humidity+"%";
        document.querySelector(".temp_min").innerText="Min Temperature : "+temp_min;
        document.querySelector(".temp_max").innerText="Max Temperature : "+temp_max;
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/?"+name+"')"
    },
    search : function(){
        this.fetchWeather(document.querySelector("input.search-bar").value)
    }
};
document.querySelector(".search button").addEventListener("click",function(){
 weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(eve){
    if(eve.key == "Enter"){
        weather.search();
    }
})
weather.fetchWeather("New Delhi");