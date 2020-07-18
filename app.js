const celsiusInput = document.querySelector("#celsius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

function roundNum (num){
  return Math.round(num*100)/100;
}
function celsiusToFahrenheitAndKelvin(){
  const cTemp = parseFloat(celsiusInput.value);
  const fTemp = (cTemp *(9/5))+32 ;
  const kTemp = cTemp + 273.15 ;
  fahrenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp) ;
};
function FahrenheitToCelsiusAndKelvin(){
  const fTemp = parseFloat(fahrenheitInput.value);
  const cTemp = (fTemp - 32) * (9/5);
  const kTemp = (fTemp + 459.67) * 5/9 ;
  celsiusInput.value = roundNum(cTemp) ;
  kelvinInput.value = roundNum(kTemp) ;

};
function KelvinToCelsiusAndFahrenheit(){
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp - 273.15 ;
  const fTemp = 9/5 *(kTemp - 273) + 32 ;
  celsiusInput.value = roundNum(cTemp);
  fahrenheitInput.value = roundNum(fTemp);
}
celsiusInput.addEventListener("input",celsiusToFahrenheitAndKelvin);
fahrenheitInput.addEventListener("input",FahrenheitToCelsiusAndKelvin);
kelvinInput.addEventListener("input",KelvinToCelsiusAndFahrenheit);

