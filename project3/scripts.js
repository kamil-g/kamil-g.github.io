        


        // okno statow otwieranie i zamykanie
        document.querySelector("#stats").addEventListener("click", function(){
            document.querySelector(".statsWindow").style.display = "block";
        });

        document.querySelector(".statsWindowClose").addEventListener("click", function(){
            document.querySelector(".statsWindow").style.display = "none";
        });

               // okno areny otwieranie i zamykanie
        document.querySelector("#arena").addEventListener("click", function(){
            document.querySelector(".arenaWindow").style.display = "block";
        });

        document.querySelector(".arenaWindowClose").addEventListener("click", function(){
            document.querySelector(".arenaWindow").style.display = "none";
        });
        
               // okno rynku otwieranie i zamykanie
        document.querySelector("#itemshop").addEventListener("click", function(){
            document.querySelector(".itemshopWindow").style.display = "block";
        });

        document.querySelector(".itemshopWindowClose").addEventListener("click", function(){
            document.querySelector(".itemshopWindow").style.display = "none";
        });
        
        // okno ksiegi skilli otwieranie i zamykanie
        document.querySelector("#skillbook").addEventListener("click", function(){
            document.querySelector(".skillbookWindow").style.display = "block";
        });

        document.querySelector(".skillbookWindowClose").addEventListener("click", function(){
            document.querySelector(".skillbookWindow").style.display = "none";
        });

        //kategorie rynku otwieranie i zamykanie
                //k1
        document.querySelector("#category1").addEventListener("click", function(){
            document.querySelector(".category1Window").style.display = "block";
        });

        document.querySelector(".category1WindowClose").addEventListener("click", function(){
            document.querySelector(".category1Window").style.display = "none";
        });
                //k2
        document.querySelector("#category2").addEventListener("click", function(){
            document.querySelector(".category2Window").style.display = "block";
        });

        document.querySelector(".category2WindowClose").addEventListener("click", function(){
            document.querySelector(".category2Window").style.display = "none";
        });
                //k3
        document.querySelector("#category3").addEventListener("click", function(){
            document.querySelector(".category3Window").style.display = "block";
        });

        document.querySelector(".category3WindowClose").addEventListener("click", function(){
            document.querySelector(".category3Window").style.display = "none";
        });
                //k4
        document.querySelector("#category4").addEventListener("click", function(){
            document.querySelector(".category4Window").style.display = "block";
        });

        document.querySelector(".category4WindowClose").addEventListener("click", function(){
            document.querySelector(".category4Window").style.display = "none";
        });

        //wyjscie z okna walki
        
        document.querySelector(".escapeButton").addEventListener("click", function(){
            document.querySelector(".fightWindow").style.display = "none";
        });        
            
    
        //atrybuty
        

        var str = 5;
        var dex = 5;
        var iq = 5;
        var luck = 0;

        var skillpoints = 5;
        var spellpoints = 1;
        
        //staty gracza
        
        var gold = 10000;
        var exp = 0;
        var maxexp = 120;
        var level = 1;
        
        var currenthp = 100;
        var maxhp = 100;
        var currentmana = 4000;
        var maxmana = 40;
        
        var magic = 0;
        var attack = 10;
        var evasion = 0;
        var deff = 5;
        var crit = 0;
        
        //staty mobkow
        
        var ename = "x";
        var ecurrenthp = 100;
        var emaxhp = 100;
        var ecurrentmana = 40;
        var emaxmana = 40;
        
        
        var eattack = 0;
        var eevasion = 0;
        var edeff = 0;
        var ecrit = 0;
        var rewardexp = 0;
        var goldgain = 0;
        
        //przeliczniki
        
        var damage = attack - edeff;
        var magicdmg = magic - edeff;
        var edamage = eattack - deff;
        var hppercent = 100;
        var manapercent = 100;
        var critchance = 0;
        var evadechance = 0;

        // bonusy
        
        var bonusattack = 0;
        var bonushp = 0; 
        var bonusmana = 0;
        var bonusdeff = 0;
        var bonuscrit = 0;
        var bonusevasion = 0;
        var bonusmagic = 0;

        var bonusstr = 0;
        var bonusdex = 0;
        var bonusiq = 0;

        //potki

        var hppotqty = 0;
        var manapotqty = 0;

        //aktualizowanie zmiennych
        setInterval(function(){
            attack = -10 + (str*2)+ (bonusstr*2) + (dex*2)+ (bonusdex*2)  + bonusattack;
            evasion = -10 + (dex*2) + (bonusdex*2) + bonusevasion;
            crit = -10 + (dex*2) + (bonusdex*2) + bonuscrit;
            magic = (iq*2) + (bonusiq*2)  + bonusmagic;
            maxhp = 65 + (str*3)+ (bonusstr*3)  + (level*20) + bonushp;
            maxmana = 2300+ (iq*3)+ (bonusiq*3)  + (level*2) + bonusmana;
            deff = 5 + bonusdeff;
            magicdmg = magic - edeff;
            evadechance = evasion/level;
            critchance = crit/level;
        },1);

        //wyswietlanie hp i mana barow
              
        setInterval(function(){
            hppercent = Math.floor(currenthp/maxhp*100);
            document.querySelector(".hpprc").innerHTML =  "HP: (" + currenthp + "/" + maxhp + ")";   
            document.querySelector(".hp").style.width =  hppercent + "%";   
            manapercent = Math.floor(currentmana/maxmana*100);
            document.querySelector(".manaprc").innerHTML = "Mana: (" + currentmana + "/" + maxmana + ")"; 
            document.querySelector(".mana").style.width =  manapercent + "%";
        },1);

        
        //aktualizowanie statystyk w statsWindow
        
        setInterval(function(){
            document.querySelector(".hpStat").innerHTML =  currenthp + "/" + maxhp;
            document.querySelector(".manaStat").innerHTML =  currentmana + "/" + maxmana;
            document.querySelector(".lvlStat").innerHTML =  level;
            document.querySelector(".expStat").innerHTML =  exp + "/" + maxexp;
            document.querySelector(".atkStat").innerHTML =  attack;
            document.querySelector(".magicStat").innerHTML =  magic;
            document.querySelector(".critStat").innerHTML =  critchance;
            document.querySelector(".defStat").innerHTML =  deff;
            document.querySelector(".evStat").innerHTML =  evadechance; 
            document.querySelector(".skillpointStat").innerHTML =  skillpoints; 
            document.querySelector(".spellpointStat").innerHTML =  spellpoints; 
            
            //atrybuty
            document.querySelector(".str").innerHTML =  str + bonusstr; 
            document.querySelector(".dex").innerHTML =  dex + bonusdex; 
            document.querySelector(".iq").innerHTML =  iq + bonusiq; 
            
            if (edamage < 1){edamage = 1};
            if (damage < 1){damage = 1};
            //zloto nad eq
            document.querySelector(".goldStat").innerHTML = gold;
            //punkty nauki w ksiedze skilli
            document.querySelector(".spellpoints").innerHTML =  "Punkty nauki: " + spellpoints; 
        },1);


        //rozdawanie skillpointow

        document.querySelector("#addstr").addEventListener("click", function(){
            if (skillpoints >= 1){
                str++;
                skillpoints--;
            }else
                alert("Nie masz punktow umiejetnosci!")
        });

        document.querySelector("#adddex").addEventListener("click", function(){
            if (skillpoints >= 1){
                dex++;
                skillpoints--;
            }else
                alert("Nie masz punktow umiejetnosci!")
        });

        document.querySelector("#addiq").addEventListener("click", function(){
            if (skillpoints >= 1){
                iq++;
                skillpoints--;
            }else
                alert("Nie masz punktow umiejetnosci!")
        });

        
        //smierc

        setInterval(function(){
            if (currenthp <= 0){
                 document.querySelector(".death").style.display = "block";
                document.querySelector(".death").innerHTML = "<h1> Nie zyjesz.<br><br><br>Zabil cie: " + ename + "</h1>"
            }
        },1);

        //lvlup

        setInterval(function(){
            if (exp >= maxexp){
                exp = 0;
                maxexp = maxexp * 2;
                level++;
                skillpoints = skillpoints + 2;
                spellpoints = spellpoints + 1;
                currenthp = maxhp + 10;
                currentmana = maxmana + 2;
                alert("Level up!")
            }
        },1);
        
        //blokada hp i many

        setInterval(function(){
           if (currenthp > maxhp){
               currenthp = maxhp;
           }
        },1)

        setInterval(function(){
           if (currentmana > maxmana){
               currentmana = maxmana;
           }
        },1)
            

        //funkcja walki (tura)
        document.querySelector(".fightButton").addEventListener("click", function(){
            
            if (ecurrenthp > 0){
                
                document.querySelector(".escapeButton").style.display = "none";
                
                
                //twoj atak
                if (Math.random()*100 > critchance){
                     document.querySelector(".fightBox").innerHTML += "<br>Zadajesz " + damage + " obrazen<br>";
                     ecurrenthp = ecurrenthp - damage;
                     document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
                }else{
                    document.querySelector(".fightBox").innerHTML += "<br>Uderzasz krytycznie za " + damage*2 + " obrazen<br>";
                     ecurrenthp = ecurrenthp - damage*2;
                     document.querySelector(".enemyStats").innerHTML = "<br>" + ename + " HP: " + ecurrenthp;
                };
                
                //atak enemy
                    if (Math.random()*100 > evadechance){
                    document.querySelector(".fightBox").innerHTML += "<br>" + ename + " zadaje ci " + edamage + " obrazen<br>";
                    currenthp = currenthp - edamage;
                }else{
                    document.querySelector(".fightBox").innerHTML += "<br>" + ename + " nie trafia cie";
                }
            }else{
                document.querySelector(".escapeButton").style.display = "block";
                alert("Pokonałeś: " + ename + " | Otrzymujesz: " + goldgain + " sztuk zlota oraz " + rewardexp + " punktow doświadczenia.");
                exp = exp + rewardexp;
                gold = gold + goldgain;
                document.querySelector(".fightWindow").style.display = "none";
            }
        });


        // itemki w eq

        setInterval(function(){
           document.querySelector("#hppotqty").innerHTML = hppotqty; 
           document.querySelector("#manapotqty").innerHTML = manapotqty; 
        },1)


        //uzywanie potek
        
        document.querySelector("#potionhp").addEventListener("click", function(){
            if (hppotqty >= 1){
                currenthp = currenthp + (maxhp * 0.3) + 50;
                hppotqty--;
            }else{
                alert("Nie masz mikstur.");
            }
        });

        document.querySelector("#potionmana").addEventListener("click", function(){
            if (manapotqty >= 1){
                currentmana = currentmana + (maxmana * 0.3) + 20;
                manapotqty--;
            }else{
                alert("Nie masz mikstur.");
            }
        });
































                             