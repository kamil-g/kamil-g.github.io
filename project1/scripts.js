var money = 1;
var score = 0;
var moneyPassive = 1;
var moneyActive = 1;
var level=1;

function moneyClick(){
    money = money + moneyActive;
}
    
function waifu(a){
    if (money >= (a*100)){
        money = money - (a*100);
        moneyPassive = moneyPassive + a;
        moneyActive = moneyActive + a;
        score = score + (a*50)
    }
        else
            alert("Not enough money!");       
}

setInterval(function moneyPerSecond(){
    money = money + moneyPassive;      
    }, 1000);    


   setInterval(function moneyDisplay(){
        document.querySelector("#scoreright").innerHTML = "Money: " + money + "<p>Passive: " + moneyPassive + "<p>Active: " + moneyActive;
   }, 10);


setInterval(function scoreDisplay(){
        document.querySelector("#scoreleft").innerHTML = "Waifu Score: " + score;
   }, 10);


setInterval(function levelButtonColor(){
        if(score >= 100000){
    document.querySelector('#levelbutton').style.backgroundColor = "green";
    document.querySelector('#levelbutton').style.cursor = "pointer";}
    }, 10);


function levelUp(){
    if (score >= 100000){
        moneyPassive = moneyPassive + 5000;
        document.querySelector('#levelbutton').style.display = "none";}
    else{
        alert("You need 100 000 score to level up.");
    }
}