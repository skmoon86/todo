function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = '5fdda56bce1c3d1334b3e412230fa577';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url)
        .then((reponse) => reponse.json())
        .then((data) => {
            const weather = document.querySelectorAll("#weather span");
            //const city = document.querySelector("#weather span:last-child");
            weather[1].innerText = data.weather[0].main;
            weather[2].innerText = data.name;
            

        });
}

function onGeoError() {
    alert("오류");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

