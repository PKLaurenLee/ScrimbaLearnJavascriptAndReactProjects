const lengthLabel = document.getElementById("length-lbl")
const volumeLabel = document.getElementById("volume-lbl")
const massLabel = document.getElementById("mass-lbl")
const numberInput = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function () {
    convertMetrics(numberInput.value)
})

function convertMetrics(number) {
    num = round(number)

    lengthLabel.innerText = `${num} meters = ${round(num * 3.281)} feet | ${num} feet = ${round(num / 3.281)}`
    volumeLabel.innerText = `${num} liters = ${round(num * 0.264)} gallons | ${num} gallons = ${round(num / 0.264)}`
    massLabel.innerText = `${num} kilos = ${round(num * 2.204)} pound | ${num} pounds = ${round(num / 2.204)} kilos`
}

// Round number to given number of decimals maximum.
function round(number, decimals = 4) {
    return Number(number).toFixed(decimals).replace(/\.?0+$/, '')
}