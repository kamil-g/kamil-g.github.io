

//kula ognia

    //w ksiedze skilli
    var skill1 = false;
    var skill1dmg = 0;
    setInterval(function(){skill1dmg = magicdmg;},1);
    setInterval(function(){document.querySelector("#skill1").innerHTML = "Kula ognia<br>Obrazenia: " + skill1dmg + "<br>Cena: 50<br>Mana: 10";},1);

    //w oknie walki
    document.querySelector("#skill1").addEventListener("click", function(){
        if (spellpoints >= 1 && skill1 == false){
            document.querySelector("#skill1Button").style.display = "block";
            document.querySelector("#skill1").style.backgroundColor = "rgb(60,100,60)";
            skill1 = true;
            gold = gold - 50;
            spellpoints = spellpoints - 1;
        }else{
            alert("Nie mozesz teraz nauczyc sie tej umiejetnosci.")
        }
    });

    //uzycie
    
            document.querySelector("#skill1Button").addEventListener("click", function(){
            
            if (ecurrenthp > 0){
                if (currentmana >= 10){
                
                    document.querySelector(".escapeButton").style.display = "none";
                    currentmana = currentmana - 10;

                    //twoj atak

                     document.querySelector(".fightBox").innerHTML += "<br>Kula ognia zadaje " + skill1dmg + " obrazen<br>";
                     ecurrenthp = ecurrenthp - skill1dmg;
                     document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;


                    //atak enemy

                    if (Math.random()*100 > evadechance){
                        document.querySelector(".fightBox").innerHTML += "<br>" + ename + " zadaje ci " + edamage + " obrazen<br>";
                        currenthp = currenthp - edamage;
                    }else{
                        document.querySelector(".fightBox").innerHTML += "<br>" + ename + " nie trafia cie";
                    }
                }else{
                    alert("Masz za malo many.");
                }
            }else{
                document.querySelector(".escapeButton").style.display = "block";
                alert("Pokonałeś: " + ename + " | Otrzymujesz: " + goldgain + " sztuk zlota oraz " + rewardexp + " punktow doświadczenia.");
                exp = exp + rewardexp;
                gold = gold + goldgain;
                document.querySelector(".fightWindow").style.display = "none";
            }
        });

//lodowe kolce

    //w ksiedze skilli
    var skill2 = false;
    var skill2dmg = 0;
    var skill2effectchance =  25;
    setInterval(function(){skill2dmg = magicdmg;},1);
    setInterval(function(){document.querySelector("#skill2").innerHTML = "Lodowe kolce<br>Obrazenia: " + skill2dmg + "<br>Cena: 100<br> 25% szans na zamrozenie przeciwnika<br>Mana: 15";},1);

    //w oknie walki
    document.querySelector("#skill2").addEventListener("click", function(){
        if (spellpoints >= 1 && skill2 == false){
            document.querySelector("#skill2Button").style.display = "block";
            document.querySelector("#skill2").style.backgroundColor = "rgb(60,100,60)";
            skill2 = true;
            gold = gold - 100;
            spellpoints = spellpoints - 1;
        }else{
            alert("Nie mozesz teraz nauczyc sie tej umiejetnosci.")
        }
    });

    //uzycie
    
            document.querySelector("#skill2Button").addEventListener("click", function(){
            
            if (ecurrenthp > 0){
                if (currentmana >= 15){
                    if (Math.random()*100 > skill2effectchance){

                        document.querySelector(".escapeButton").style.display = "none";
                        currentmana = currentmana - 15;

                        //twoj atak

                         document.querySelector(".fightBox").innerHTML += "<br>Lodowe kolce zadaja " + skill2dmg + " obrazen<br>";
                         ecurrenthp = ecurrenthp - skill2dmg;
                         document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;


                        //atak enemy

                        if (Math.random()*100 > evadechance){
                            document.querySelector(".fightBox").innerHTML += "<br>" + ename + " zadaje ci " + edamage + " obrazen<br>";
                            currenthp = currenthp - edamage;
                        }else{
                    document.querySelector(".fightBox").innerHTML += "<br>" + ename + " nie trafia cie";
                }
                    }else{
                        
                        document.querySelector(".escapeButton").style.display = "none";
                        currentmana = currentmana - 15;

                        //twoj atak

                         document.querySelector(".fightBox").innerHTML += "<br>Lodowe kolce zadaja " + skill2dmg + " obrazen oraz zamrazaja przeciwnika<br>";
                        if (skill2dmg > 1){
                            ecurrenthp = ecurrenthp - skill2dmg;
                            document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
                        }else{
                            ecurrenthp = ecurrenthp - 1;
                            document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
                        }

                        //atak enemy
                    }
                }else{
                    alert("Masz za malo many.");
                }
            }else{
                document.querySelector(".escapeButton").style.display = "block";
                alert("Pokonałeś: " + ename + " | Otrzymujesz: " + goldgain + " sztuk zlota oraz " + rewardexp + " punktow doświadczenia.");
                exp = exp + rewardexp;
                gold = gold + goldgain;
                document.querySelector(".fightWindow").style.display = "none";
            }
        });


//Uzdrowienie

    //w ksiedze skilli
    var skill3 = false;
    var skill3dmg = 0;
    setInterval(function(){skill3dmg = magic*2;},1);
    setInterval(function(){document.querySelector("#skill3").innerHTML = "Uzdrowienie<br>Leczenie: " + skill3dmg + "<br>Cena: 100<br>Mana: 20";},1);

    //w oknie walki
    document.querySelector("#skill3").addEventListener("click", function(){
        if (spellpoints >= 1 && skill3 == false){
            document.querySelector("#skill3Button").style.display = "block";
            document.querySelector("#skill3").style.backgroundColor = "rgb(60,100,60)";
            skill3 = true;
            gold = gold - 100;
            spellpoints = spellpoints - 1;
        }else{
            alert("Nie mozesz teraz nauczyc sie tej umiejetnosci.")
        }
    });

    //uzycie
    
            document.querySelector("#skill3Button").addEventListener("click", function(){
            
            if (ecurrenthp > 0){
                if (currentmana >= 20){
                
                    document.querySelector(".escapeButton").style.display = "none";
                    currentmana = currentmana - 20;

                    //twoj atak

                     document.querySelector(".fightBox").innerHTML += "<br>Uzdrowienie o " + skill3dmg + " HP<br>";
                     currenthp = currenthp + skill3dmg;
                     document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;


                    //atak enemy

                    if (Math.random()*100 > evadechance){
                        document.querySelector(".fightBox").innerHTML += "<br>" + ename + " zadaje ci " + edamage + " obrazen<br>";
                        currenthp = currenthp - edamage;
                    }else{
                        document.querySelector(".fightBox").innerHTML += "<br>" + ename + " nie trafia cie";
                    }
                }else{
                    alert("Masz za malo many.");
                }
            }else{
                document.querySelector(".escapeButton").style.display = "block";
                alert("Pokonałeś: " + ename + " | Otrzymujesz: " + goldgain + " sztuk zlota oraz " + rewardexp + " punktow doświadczenia.");
                exp = exp + rewardexp;
                gold = gold + goldgain;
                document.querySelector(".fightWindow").style.display = "none";
            }
        });
    

//blyskawica

    //w ksiedze skilli
    var skill4 = false;
    var skill4dmg = 0;
    var skill4effectchance =  25;
    setInterval(function(){skill4dmg = magicdmg*1.25;},1);
    setInterval(function(){document.querySelector("#skill4").innerHTML = "Blyskawica<br>Obrazenia: " + skill4dmg + "<br>Cena: 200<br> 25% szans na obrazenia krytyczne<br>Mana: 20";},1);

    //w oknie walki
    document.querySelector("#skill4").addEventListener("click", function(){
        if (spellpoints >= 1 && skill4 == false){
            document.querySelector("#skill4Button").style.display = "block";
            document.querySelector("#skill4").style.backgroundColor = "rgb(60,100,60)";
            skill4 = true;
            gold = gold - 200;
            spellpoints = spellpoints - 1;
        }else{
            alert("Nie mozesz teraz nauczyc sie tej umiejetnosci.")
        }
    });

    //uzycie
    
            document.querySelector("#skill4Button").addEventListener("click", function(){
            
            if (ecurrenthp > 0){
                if (currentmana >= 20){
                    if (Math.random()*100 > skill4effectchance){

                        document.querySelector(".escapeButton").style.display = "none";
                        currentmana = currentmana - 15;

                        //twoj atak

                         document.querySelector(".fightBox").innerHTML += "<br>Blyskawica uderza za " + skill4dmg + " obrazen<br>";
                         ecurrenthp = ecurrenthp - skill4dmg;
                         document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;


                        //atak enemy

                        if (Math.random()*100 > evadechance){
                            document.querySelector(".fightBox").innerHTML += "<br>" + ename + " zadaje ci " + edamage + " obrazen<br>";
                            currenthp = currenthp - edamage;
                        }else{
                            document.querySelector(".fightBox").innerHTML += "<br>" + ename + " nie trafia cie";
                        }
                    }else{
                        
                        document.querySelector(".escapeButton").style.display = "none";
                        currentmana = currentmana - 15;

                        //twoj atak

                         document.querySelector(".fightBox").innerHTML += "<br>Blyskawica uderza krytycznie za " + skill4dmg * 2 + " obrazen<br>";
                        if (skill4dmg > 1){
                            ecurrenthp = ecurrenthp - skill4dmg * 2;
                            document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
                        }else{
                            ecurrenthp = ecurrenthp - 1;
                            document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
                        }

                        //atak enemy
                        document.querySelector(".fightBox").innerHTML += "<br>" + ename + " zadaje ci " + edamage + " obrazen<br>";
                        currenthp = currenthp - edamage;
                    }
                }else{
                    alert("Masz za malo many.");
                }
            }else{
                document.querySelector(".escapeButton").style.display = "block";
                alert("Pokonałeś: " + ename + " | Otrzymujesz: " + goldgain + " sztuk zlota oraz " + rewardexp + " punktow doświadczenia.");
                exp = exp + rewardexp;
                gold = gold + goldgain;
                document.querySelector(".fightWindow").style.display = "none";
            }
        });


//tornado

    //w ksiedze skilli
    var skill5 = false;
    var skill5dmg = 0;
    setInterval(function(){skill5dmg = magicdmg*1.60;},1);
    setInterval(function(){document.querySelector("#skill5").innerHTML = "Tornado<br>Obrazenia: " + skill5dmg + "<br>Cena: 200<br>Powala przeciwnika<br>Mana: 40";},1);

    //w oknie walki
    document.querySelector("#skill5").addEventListener("click", function(){
        if (spellpoints >= 1 && skill5 == false){
            document.querySelector("#skill5Button").style.display = "block";
            document.querySelector("#skill5").style.backgroundColor = "rgb(60,100,60)";
            skill5 = true;
            gold = gold - 200;
            spellpoints = spellpoints - 1;
        }else{
            alert("Nie mozesz teraz nauczyc sie tej umiejetnosci.")
        }
    });

    //uzycie
    
            document.querySelector("#skill5Button").addEventListener("click", function(){
            
            if (ecurrenthp > 0){
                if (currentmana >= 40){
                
                    document.querySelector(".escapeButton").style.display = "none";
                    currentmana = currentmana - 40;

                    //twoj atak

                     document.querySelector(".fightBox").innerHTML += "<br>Tornado uderza przeciwnika za " + skill5dmg + " HP powalajac go na ziemie";
                     ecurrenthp = ecurrenthp - skill5dmg;
                     document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;

                }else{
                    alert("Masz za malo many.");
                }
            }else{
                document.querySelector(".escapeButton").style.display = "block";
                alert("Pokonałeś: " + ename + " | Otrzymujesz: " + goldgain + " sztuk zlota oraz " + rewardexp + " punktow doświadczenia.");
                exp = exp + rewardexp;
                gold = gold + goldgain;
                document.querySelector(".fightWindow").style.display = "none";
            }
        });

//zadza krwi

    //w ksiedze skilli
    var skill6 = false;
    var skill6dmg = 0;
    setInterval(function(){skill6dmg = magicdmg*1.25;},1);
    setInterval(function(){document.querySelector("#skill6").innerHTML = "Zadza krwi<br>Obrazenia: " + skill6dmg + "<br>Cena: 200<br>Wykrada HP przeciwnika<br>Mana: 25";},1);

    //w oknie walki
    document.querySelector("#skill6").addEventListener("click", function(){
        if (spellpoints >= 1 && skill6 == false){
            document.querySelector("#skill6Button").style.display = "block";
            document.querySelector("#skill6").style.backgroundColor = "rgb(60,100,60)";
            skill6 = true;
            gold = gold - 200;
            spellpoints = spellpoints - 1;
        }else{
            alert("Nie mozesz teraz nauczyc sie tej umiejetnosci.")
        }
    });

    //uzycie
    
            document.querySelector("#skill6Button").addEventListener("click", function(){
            
            if (ecurrenthp > 0){
                if (currentmana >= 25){
                
                    document.querySelector(".escapeButton").style.display = "none";
                    currentmana = currentmana - 25;

                    //twoj atak

                     document.querySelector(".fightBox").innerHTML += "<br>Wykradasz przeciwnikowi " + skill6dmg + " HP";
                     ecurrenthp = ecurrenthp - skill6dmg;
                     currenthp = currenthp + skill6dmg;
                     document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
                    
                    //atak enemy
                    if (Math.random()*100 > evadechance){
                        document.querySelector(".fightBox").innerHTML += "<br>" + ename + " zadaje ci " + edamage + " obrazen<br>";
                        currenthp = currenthp - edamage;
                    }else{
                        document.querySelector(".fightBox").innerHTML += "<br>" + ename + " nie trafia cie";
                    }

                }else{
                    alert("Masz za malo many.");
                }
            }else{
                document.querySelector(".escapeButton").style.display = "block";
                alert("Pokonałeś: " + ename + " | Otrzymujesz: " + goldgain + " sztuk zlota oraz " + rewardexp + " punktow doświadczenia.");
                exp = exp + rewardexp;
                gold = gold + goldgain;
                document.querySelector(".fightWindow").style.display = "none";
            }
        });


















