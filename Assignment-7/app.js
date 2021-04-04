// weather object to get my key and base url
const Weather_api = {
    key: "d9508de96c8a2b29f542d90b8017d3c5",
    url: "https://api.openweathermap.org/data/2.5/weather?"
}

// getting the input box
const inputBox = document.getElementById('inp')

// added eventlistener of 'enter' press to display weather details
inputBox.addEventListener('keypress', (e) => {

        if (e.key == 'Enter') {
            console.log('enter hit')
            getWeatherReport(inputBox.value, )
            inputBox.value = ""
        }


    })
    // getting weather report
function getWeatherReport(city) {

    let flag = 0;
    fetch(`${Weather_api.url}q=${city}&appid=${Weather_api.key}`)
        .then(weather => {
            console.log(weather)
            return weather.json()
        })

    .then(data => {
            console.log(data)
            console.log("temp: " + data.main.temp + " min_temp: " + data.main.temp_min + " max_temp: " + data.main.temp_max + " view: " + data.weather[0].main)
            let city_name = document.getElementById('c_name')
            let ddate = document.getElementById('dt')
            let temperature = document.getElementById('temp')
            let type = document.getElementById('view')
            let var_tmp = document.getElementById('min_max')

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var yyyy = today.getFullYear();

            today = dd + '/' + mm + '/' + yyyy;
            console.log(today);

            // const deg = document.createElement('h1').innerHTML('&#8451')

            city_name.innerText = data.name

            ddate.innerText = today
            temperature.innerText = (data.main.temp - 273).toFixed(0) + "℃"
            type.innerText = data.weather[0].description
            var_tmp.innerText = (data.main.temp_min - 273).toFixed(2) + "℃" + "/" + (data.main.temp_max - 273).toFixed(2) + "℃"


        })
        .catch((e) => {

            let city_name = document.getElementById('c_name')
            let ddate = document.getElementById('dt')
            let temperature = document.getElementById('temp')
            let type = document.getElementById('view')
            let var_tmp = document.getElementById('min_max')

            city_name.innerText = "Enter valid city name"
            ddate.innerText = " "
            temperature.innerText = " "
            type.innerText = " "
            var_tmp.innerText = " "

        })


}