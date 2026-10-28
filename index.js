const conVal = document.getElementById("conv-val");
const convertBtn = document.getElementById("convert-btn");
const lengthTxt = document.getElementById("length-txt")
const volTxt = document.getElementById("vol-txt")
const massTxt = document.getElementById("mass-txt")
let num = 0;

convertBtn.onclick = function () {
    num = Number(conVal.value)

    let feetVal = num * 3.281;
    let meterVal = num / 3.281;
    lengthTxt.textContent = `${num} meters = ${feetVal.toFixed(2)} feet | ${num} feet = ${meterVal.toFixed(2)} meters`

    let galVal = num * 0.264;
    let literVal = num / 0.264;
    volTxt.textContent = `${num} liters = ${galVal.toFixed(2)} gallons | ${num} gallons = ${literVal.toFixed(2)} liters`
    
    let poundVal = num * 2.204;
    let kiloVal = num / 2.204;
    massTxt.textContent = `${num} kilos = ${poundVal.toFixed(2)} pounds | ${num} pounds = ${kiloVal.toFixed(2)} kilos`
}