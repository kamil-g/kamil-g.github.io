let monthlyCost = 0;
let yearlyCost = 0;
let oneTimeCost = 0;
let divideBy = 1;
let finalMonthlyCost = 0;

document.querySelector("#oneTime").addEventListener("click", function(){
    addItem("oneTime");
    calculateOneTime();
    clearInputs();
});

document.querySelector("#yearly").addEventListener("click", function(){
    addItem("yearly");
    calculateYearly();
    clearInputs();
});

document.querySelector("#monthly").addEventListener("click", function(){
    addItem("monthly");
    calculateMonthly();
    clearInputs();
});

document.querySelector("#calculate").addEventListener("click", function(){
    divide();
    calculateFinal();
    displayCost(); 
});


function addItem(type){
    let x = document.querySelector(".inp").value;
    let y = document.querySelector(".inp2").value;
    
    document.querySelector("#" + type + "Items").innerHTML += x + "    -    " + y.toString() + "<br>";
}

function calculateOneTime(){
    let y = document.querySelector(".inp2").value;
    oneTimeCost += parseInt(y);
}

function calculateYearly(){
    let y = document.querySelector(".inp2").value;
    yearlyCost += parseInt(y);
}

function calculateMonthly(){
    let y = document.querySelector(".inp2").value;
    monthlyCost += parseInt(y);
}

function clearInputs(){
    document.querySelector(".inp").value = '';
    document.querySelector(".inp2").value = '';
}
    
function calculateFinal(){
    finalMonthlyCost = monthlyCost + yearlyCost/12 + (oneTimeCost/12)/divideBy;
}

function displayCost(){ 
    document.querySelector("#calculated").innerHTML = "You must earn " + Math.floor(finalMonthlyCost) + " per month to live your dream live!<br>Your greatest expenses will be realized in " + divideBy + " year(s).";
}

function divide(){
    let x = document.querySelector(".inp3").value;
    if (x >= 1){
        divideBy = x;
    }else{
        divideBy = 1;
    }
}


















