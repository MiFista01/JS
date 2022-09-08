document.addEventListener("DOMContentLoaded",add)
function add(){
    document.getElementById("calculate").addEventListener("click",calculate)
}
function calculate(){
    document.getElementById("result").textContent = document.calculator.weight.value*document.calculator.height.value;
}