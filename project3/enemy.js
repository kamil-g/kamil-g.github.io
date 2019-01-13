//wybor przeciwnika (baza wszystkich przeciwnikow)


        //szczur
        document.querySelector("#enemy1").addEventListener("click", function(){
            if (level >= 1){
                ename = "Szczur";
                emaxhp = 35;
                ecurrenthp = 35;
                eattack = 6;
                edeff = 1;
                ecrit = 0;
                eevasion = 0;
                goldgain = 5;
                rewardexp = 30;


                damage = attack - edeff;
                edamage = eattack - deff;

                document.querySelector(".fightWindow").style.display = "block";
                document.querySelector(".fightBox").innerHTML = "<br>Walczysz z " + ename +"<br>";
                document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
            }else{
                alert("Masz za niski level");
            }
        });

        //dziki pies
        document.querySelector("#enemy2").addEventListener("click", function(){
            if (level >= 1){
                ename = "Dziki pies";
                emaxhp = 60;
                ecurrenthp = 60;
                eattack = 11;
                edeff = 3;
                ecrit = 5;
                eevasion = 0;
                goldgain = 12;
                rewardexp = 50;


                damage = attack - edeff;
                edamage = eattack - deff;

                document.querySelector(".fightWindow").style.display = "block";
                document.querySelector(".fightBox").innerHTML = "<br>Walczysz z " + ename +"<br>";
                document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
            }else{
                alert("Masz za niski level");
            }
        });
            
        //Goblin
        document.querySelector("#enemy3").addEventListener("click", function(){
            if (level >= 2){
                ename = "Goblin";
                emaxhp = 100;
                ecurrenthp = 100;
                eattack = 15;
                edeff = 0;
                ecrit = 10;
                eevasion = 20;
                goldgain = 26;
                rewardexp = 100;


                damage = attack - edeff;
                edamage = eattack - deff;

                document.querySelector(".fightWindow").style.display = "block";
                document.querySelector(".fightBox").innerHTML = "<br>Walczysz z " + ename +"<br>";
                document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
            }else{
                alert("Masz za niski level");
            }
        });

        //zul
        document.querySelector("#enemy4").addEventListener("click", function(){
            if (level >= 2){
                ename = "Zul";
                emaxhp = 200;
                ecurrenthp = 200;
                eattack = 9;
                edeff = 15;
                ecrit = 15;
                eevasion = 0;
                goldgain = 2;
                rewardexp = 135;


                damage = attack - edeff;
                edamage = eattack - deff;

                document.querySelector(".fightWindow").style.display = "block";
                document.querySelector(".fightBox").innerHTML = "<br>Walczysz z " + ename +"<br>";
                document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
            }else{
                alert("Masz za niski level");
            }
        });

        //rabus
        document.querySelector("#enemy5").addEventListener("click", function(){
            if (level >= 3){
                ename = "Rabus";
                emaxhp = 140;
                ecurrenthp = 140;
                eattack = 30;
                edeff = 10;
                ecrit = 15;
                eevasion = 0;
                goldgain = 37;
                rewardexp = 180;


                damage = attack - edeff;
                edamage = eattack - deff;

                document.querySelector(".fightWindow").style.display = "block";
                document.querySelector(".fightBox").innerHTML = "<br>Walczysz z " + ename +"<br>";
                document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
            }else{
                alert("Masz za niski level");
            }
        });

        //bandyta
        document.querySelector("#enemy6").addEventListener("click", function(){
            if (level >= 3){
                ename = "Bandyta";
                emaxhp = 330;
                ecurrenthp = 330;
                eattack = 25;
                edeff = 20;
                ecrit = 15;
                eevasion = 0;
                goldgain = 52;
                rewardexp = 250;


                damage = attack - edeff;
                edamage = eattack - deff;

                document.querySelector(".fightWindow").style.display = "block";
                document.querySelector(".fightBox").innerHTML = "<br>Walczysz z " + ename +"<br>";
                document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
            }else{
                alert("Masz za niski level");
            }
        });

        //agresywny wiesniak
        document.querySelector("#enemy7").addEventListener("click", function(){
            if (level >= 3){
                ename = "Agresywny wiesniak";
                emaxhp = 135;
                ecurrenthp = 135;
                eattack = 45;
                edeff = 0;
                ecrit = 40;
                eevasion = 40;
                goldgain = 55;
                rewardexp = 250;


                damage = attack - edeff;
                edamage = eattack - deff;

                document.querySelector(".fightWindow").style.display = "block";
                document.querySelector(".fightBox").innerHTML = "<br>Walczysz z " + ename +"<br>";
                document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
            }else{
                alert("Masz za niski level");
            }
        });

        //szkielet
        document.querySelector("#enemy8").addEventListener("click", function(){
            if (level >= 4){
                ename = "Szkielet";
                emaxhp = 200;
                ecurrenthp = 200;
                eattack = 50;
                edeff = 0;
                ecrit = 20;
                eevasion = 10;
                goldgain = 80;
                rewardexp = 300;


                damage = attack - edeff;
                edamage = eattack - deff;

                document.querySelector(".fightWindow").style.display = "block";
                document.querySelector(".fightBox").innerHTML = "<br>Walczysz z " + ename +"<br>";
                document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
            }else{
                alert("Masz za niski level");
            }
        });


        //Ork
        document.querySelector("#enemy9").addEventListener("click", function(){
            if (level >= 5){
                ename = "Ork";
                emaxhp = 365;
                ecurrenthp = 365;
                eattack = 50;
                edeff = 15;
                ecrit = 0;
                eevasion = 0;
                goldgain = 100;
                rewardexp = 350;


                damage = attack - edeff;
                edamage = eattack - deff;

                document.querySelector(".fightWindow").style.display = "block";
                document.querySelector(".fightBox").innerHTML = "<br>Walczysz z " + ename +"<br>";
                document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
            }else{
                alert("Masz za niski level");
            }
        });

        //Ciezki ork
        document.querySelector("#enemy10").addEventListener("click", function(){
            if (level >= 5){
                ename = "Ork";
                emaxhp = 500;
                ecurrenthp = 500;
                eattack = 45;
                edeff = 20;
                ecrit = 0;
                eevasion = 0;
                goldgain = 109;
                rewardexp = 375;


                damage = attack - edeff;
                edamage = eattack - deff;

                document.querySelector(".fightWindow").style.display = "block";
                document.querySelector(".fightBox").innerHTML = "<br>Walczysz z " + ename +"<br>";
                document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
            }else{
                alert("Masz za niski level");
            }
        });

        //ork watazka
        document.querySelector("#enemy11").addEventListener("click", function(){
            if (level >= 7){
                ename = "Ork watazka";
                emaxhp = 540;
                ecurrenthp = 500;
                eattack = 75;
                edeff = 18;
                ecrit = 0;
                eevasion = 0;
                goldgain = 109;
                rewardexp = 480;


                damage = attack - edeff;
                edamage = eattack - deff;

                document.querySelector(".fightWindow").style.display = "block";
                document.querySelector(".fightBox").innerHTML = "<br>Walczysz z " + ename +"<br>";
                document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
            }else{
                alert("Masz za niski level");
            }
        });

        //poonury szkielet
        document.querySelector("#enemy12").addEventListener("click", function(){
            if (level >= 8){
                ename = "Ork watazka";
                emaxhp = 400;
                ecurrenthp = 500;
                eattack = 100;
                edeff = 15;
                ecrit = 0;
                eevasion = 0;
                goldgain = 80;
                rewardexp = 600;


                damage = attack - edeff;
                edamage = eattack - deff;

                document.querySelector(".fightWindow").style.display = "block";
                document.querySelector(".fightBox").innerHTML = "<br>Walczysz z " + ename +"<br>";
                document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
            }else{
                alert("Masz za niski level");
            }
        });







