var initialValue = document.querySelector("#initial-value");
var quantity = document.querySelector("#quantity");
var currentValue = document.querySelector("#current-value");
var button = document.querySelector("#check-btn");
var result = document.querySelector("#output-box");

function calculateProfitOrLoss(initialPrice , qnt, currentPrice){
    if (initialPrice < currentPrice){
        var profit = (currentPrice - initialPrice) * qnt;
        var profitPercentage = (profit / initialPrice) * 100;
        var profitPercent = profitPercentage.toFixed(2);
        result.style.backgroundColor="#2dd4bf";
        result.style.display="block"

        result.innerText =("your profit is " + profit + " of " + profitPercent + "%")
    } else if ( initialPrice > currentPrice) {
        var loss = (initialPrice-currentPrice) * qnt;
        var lossPercentage = (loss / initialPrice) * 100;
        var lossPercent = lossPercentage.toFixed(2);
        result.style.backgroundColor="red";
        result.style.display="block"
        result.innerText =("your loss is " + loss + " of " + lossPercent + "%")
    } else {
        result.innerText = "NO PAIN NO GAIN and NO GAIN NO PAIN ;)";
    }
}

function clickHandler (){
    var initial = Number(initialValue.value);
    var qty = Number(quantity.value);
    var current = Number(currentValue.value);
    if (initial&&qty&&current){
        calculateProfitOrLoss(initial,qty,current);
    } else {
        alert(" ⚠ please enter the empty fields to calculate profit or loss")
        result.style.backgroundColor="white";
        result.style.display="block";
        result.innerText =("⚠ enter the above fields to calculate profit or loss")
    }
    
}
button.addEventListener("click",clickHandler);