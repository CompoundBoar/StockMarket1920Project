function submitName() {
    let userName = document.getElementById("userName").value
document.getElementById("Hello").innerHTML = 
"Hello " + userName + "! Let's get started."
}
function show1920Stocks() {
    document.getElementById("stocks1920").style.display = "inline";
    document.getElementById("table1920").style.display = "table";
    document.getElementById("buy1920").style.display = "inline";
}
let nameButton = document.getElementById("nameButton");
nameButton.addEventListener('click', submitName, false);
nameButton.addEventListener('click', show1920Stocks, false);
//1920 stock purchases
function buyStock1920() {
    var kroger1920 = parseInt(document.getElementById("kroger1920").value);
    var radio1920 = parseInt(document.getElementById("radio1920").value);
    var mammoth1920 = parseInt(document.getElementById("mammoth1920").value);
    var durant1920 = parseInt(document.getElementById("durant1920").value);
    var midland1920 = parseInt(document.getElementById("midland1920").value);
    var union1920 = parseInt(document.getElementById("union1920").value);
    var teltone1920 = parseInt(document.getElementById("teltone1920").value);
    var total1920 = (kroger1920 * 100) + (radio1920 * 70) + (mammoth1920 * 120) 
    + (durant1920 * 50) + (midland1920 * 80) + (union1920 * 90) + (teltone1920 * 100);
document.getElementById("total1920").innerHTML = "Your total is: $" + total1920 
var cashRemaining1920 = 500 - total1920;
var netWorth1922 = cashRemaining1920 + (kroger1920 * 120) + (radio1920 * 85) + (mammoth1920 * 140) 
    + (durant1920 * 90) + (midland1920 * 70) + (union1920 * 80) + (teltone1920 * 120);

    // cash remaining and net worth message
document.getElementById("cashRemaining1920").innerHTML = "You have $" + cashRemaining1920 + 
" left to spend.";
document.getElementById("cash1922").innerHTML = "You have $" + cashRemaining1920 + 
" to spend. Your current net worth is $" + netWorth1922 + "."
// populate 1922 table
document.getElementById("kroger1920Picks").innerHTML = kroger1920;
document.getElementById("radio1920Picks").innerHTML = radio1920;
document.getElementById("mammoth1920Picks").innerHTML = mammoth1920;
document.getElementById("durant1920Picks").innerHTML = durant1920;
document.getElementById("midland1920Picks").innerHTML = midland1920;
document.getElementById("union1920Picks").innerHTML = union1920;
document.getElementById("teltone1920Picks").innerHTML = teltone1920;
document.getElementById("continue1920").style.display = "inline";

}