const converterButton = document.querySelector('.converter-button')
const inputValue = document.querySelector('.input-value')
const valueToConvert = document.querySelector('.value-to-convert')
const convertedValue = document.querySelector('.converted-value')
const selectCurrency = document.querySelector('.select-currency')
const selectCurrencyToConvert = document.querySelector('.select-currency-to-convert')
const logoCoin = document.querySelector('.logo-coin')
const logoCoin1 = document.querySelector('.logo-coin1')
const currencyConverted = document.querySelector('.currency-converted')
const currencyToConvert = document.querySelector('.currency-to-convert')


let result = 0

async function converter () {

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,EUR-USD,BRL-EUR").then(
        response => response.json())
        console.log (data)

        const dolarToday = data.USDBRL.high
        const euroToday = data.BRLEUR.high
        const euroToDolar = data.EURUSD.high
        const euroToReal = data.EURBRL.high

    if (selectCurrencyToConvert.value === "real" && selectCurrency.value === "euro") {
        result = inputValue.value * euroToday
        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue.value)
        convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(result)
    }
    if (selectCurrencyToConvert.value === "real" && selectCurrency.value === "dolar") {
        result = inputValue.value / dolarToday
        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue.value)
        convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(result)
    }
    if (selectCurrencyToConvert.value === "euro" && selectCurrency.value === "dolar") {
        result = inputValue.value * euroToDolar
        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue.value)
        convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(result)
    }
    if (selectCurrencyToConvert.value === "euro" && selectCurrency.value === "real") {
        result = inputValue.value * euroToReal
        valueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue.value)
        convertedValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(result)
    }
}

function changeCoin1() {
    if (selectCurrencyToConvert.value === "null") {
        logoCoin1.src = "./assets/generated.jpg"
        currencyToConvert.innerHTML = `Generate`
    }
    if (selectCurrencyToConvert.value === "real") {
        logoCoin1.src = "./assets/brasil 2.png"
        currencyToConvert.innerHTML = `Real Brasileiro`
    }
    if (selectCurrencyToConvert.value === "euro") {
        logoCoin1.src = "./assets/logo-euro.png"
        currencyToConvert.innerHTML = `Euro`
    }
}
function changeCoin() {
    if (selectCurrency.value === "null") {
        logoCoin.src = "./assets/generated.jpg"
        currencyConverted.innerHTML = `Generate`

    }
    if (selectCurrency.value === "euro") {
        logoCoin.src = "./assets/logo-euro.png"
        currencyConverted.innerHTML = `Euro`

    }
    if (selectCurrency.value === "dolar") {
        logoCoin.src = "./assets/estados-unidos1.png"
        currencyConverted.innerHTML = `Dólar Americano`
    }
    if (selectCurrency.value === "real") {
        logoCoin.src = "./assets/brasil 2.png"
        currencyConverted.innerHTML = `Real Brasileiro`
    }
    converter()
}


/* function changeCoin() {

    if(selectCurrency.value === "euro"){
        logoCoin.src = "./assets/logo-euro.png"
        currencyConverted.innerHTML = `Euro`
        function converter() {
            
        }

    }
    if(selectCurrency.value === "dolar") {
        logoCoin.src = "./assets/estados-unidos1.png"
        currencyConverted.innerHTML = `Dólar Americano`
    }
} */



/* result = inputValue.value / 4.98
    console.log(result)
    valueToConvert.innerHTML = `${inputValue.value}`
    convertedValue.innerHTML = `${result.toFixed(2)}` */


