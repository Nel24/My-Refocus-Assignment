
function celciusToKelvin (tempCelcius){
    let tempInKelvin = tempCelcius + 273.15;
    return tempInKelvin;
}

function fahrenheitTokelvin (tempFahrenheit) {
    let tempInKelvin = (tempFahrenheit- 32)*(5/9)+273.15;
    return tempInKelvin;
}



console.log(celciusToKelvin(45));     /* Given Celcius as argument*/
console.log(fahrenheitTokelvin(78));     /* Given Fahrenheit as argument*/

