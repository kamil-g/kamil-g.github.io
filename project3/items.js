


        //potki
    document.querySelector("#potion1").addEventListener("click", function(){
        if (gold >= 40){
            hppotqty++;
            gold = gold - 40;
        }else{
            alert("Nie masz wystarczajacej ilosci zlota.");
        }
    });

    document.querySelector("#potion2").addEventListener("click", function(){
        if (gold >= 40){
            manapotqty++;
            gold = gold - 40;
        }else{
            alert("Nie masz wystarczajacej ilosci zlota.");
        }
    });

                //bron

    var weapon = false;
    var shield = false;

    //kij
    var weapon1 = false;
    document.querySelector("#weapon1").addEventListener("click", function(){
        if (gold >= 100 && weapon1 == false && weapon == false){
            weapon1 = true;
            weapon = true;
            document.querySelector("#leftHand").style.backgroundImage = 'url("images/weapon1.png")';
            gold = gold - 100;
            //wlasciwosci 
            bonusattack = bonusattack + 5;
 
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#leftHand").addEventListener("click", function(){
        if (weapon1 == true){
            weapon1 = false;
            weapon = false;
            document.querySelector("#leftHand").style.backgroundImage = '';
            gold = gold + 50;
            bonusattack = bonusattack - 5;
        }
    });

    //mlotek
    var weapon2 = false;
    document.querySelector("#weapon2").addEventListener("click", function(){
        if (gold >= 250 && weapon2 == false && weapon == false ){
            weapon2 = true;
            weapon = true;
            document.querySelector("#leftHand").style.backgroundImage = 'url("images/weapon2.png")';
            gold = gold - 250;
            //wlasciwosci 
            bonusattack = bonusattack + 10;
 
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#leftHand").addEventListener("click", function(){
        if (weapon2 == true){
            weapon2 = false;
            weapon = false;
            document.querySelector("#leftHand").style.backgroundImage = '';
            gold = gold + 125;
            bonusattack = bonusattack - 10;
        }
    });

    //noz
    var weapon3 = false;
    document.querySelector("#weapon3").addEventListener("click", function(){
        if (gold >= 400 && weapon3 == false && weapon == false ){
            weapon3 = true;
            weapon = true;
            document.querySelector("#leftHand").style.backgroundImage = 'url("images/weapon3.png")';
            gold = gold - 400;
            //wlasciwosci 
            bonusattack = bonusattack + 12;
            
 
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#leftHand").addEventListener("click", function(){
        if (weapon3 == true){
            weapon3 = false;
            weapon = false;
            document.querySelector("#leftHand").style.backgroundImage = '';
            gold = gold + 200;
            bonusattack = bonusattack - 12;
        }
    });

    //topor
    var weapon4 = false;
    document.querySelector("#weapon4").addEventListener("click", function(){
        if (gold >= 600 && weapon4 == false && weapon == false ){
            weapon4 = true;
            weapon = true;
            document.querySelector("#leftHand").style.backgroundImage = 'url("images/weapon4.png")';
            gold = gold - 600;
            //wlasciwosci 
            bonusattack = bonusattack + 12;
            bonusstr = bonusstr + 2;
 
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#leftHand").addEventListener("click", function(){
        if (weapon4 == true){
            weapon4 = false;
            weapon = false;
            document.querySelector("#leftHand").style.backgroundImage = '';
            gold = gold + 300;
            bonusattack = bonusattack - 12;
            bonusstr = bonusstr - 2;
        }
    });

    //miecz
    var weapon5 = false;
    document.querySelector("#weapon5").addEventListener("click", function(){
        if (gold >= 800 && weapon5 == false && weapon == false ){
            weapon5 = true;
            weapon = true;
            document.querySelector("#leftHand").style.backgroundImage = 'url("images/weapon5.png")';
            gold = gold - 800;
            //wlasciwosci 
            bonusattack = bonusattack + 20;
 
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#leftHand").addEventListener("click", function(){
        if (weapon5 == true){
            weapon5 = false;
            weapon = false;
            document.querySelector("#leftHand").style.backgroundImage = '';
            gold = gold + 400;
            bonusattack = bonusattack - 20;
        }
    });

    //rozdzka
    var weapon6 = false;
    document.querySelector("#weapon6").addEventListener("click", function(){
        if (gold >= 300 && weapon6 == false && weapon == false ){
            weapon6 = true;
            weapon = true;
            document.querySelector("#leftHand").style.backgroundImage = 'url("images/weapon6.png")';
            gold = gold - 300;
            //wlasciwosci 
            bonusmagic = bonusmagic + 6;
            bonusmana = bonusmana + 25;
 
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });
    document.querySelector("#leftHand").addEventListener("click", function(){
        if (weapon6 == true){
            weapon6 = false;
            weapon = false;
            document.querySelector("#leftHand").style.backgroundImage = '';
            gold = gold + 150;
            bonusmagic = bonusmagic - 6;
            bonusmana = bonusmana - 25;
        }
    });

    //katana
    var weapon7 = false;
    document.querySelector("#weapon7").addEventListener("click", function(){
        if (gold >= 1000 && weapon7 == false && weapon == false ){
            weapon7 = true;
            weapon = true;
            document.querySelector("#leftHand").style.backgroundImage = 'url("images/weapon7.png")';
            gold = gold - 1000;
            //wlasciwosci 
            bonusattack = bonusattack + 12;
            bonusdex = bonusdex + 6;
 
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#leftHand").addEventListener("click", function(){
        if (weapon7 == true){
            weapon7 = false;
            weapon = false;
            document.querySelector("#leftHand").style.backgroundImage = '';
            gold = gold + 500;
            bonusattack = bonusattack - 12;
            bonusdex = bonusdex - 6;
        }
    });

    //kostur
    var weapon8 = false;
    document.querySelector("#weapon8").addEventListener("click", function(){
        if (gold >= 1000 && weapon8 == false && weapon == false ){
            weapon8 = true;
            weapon = true;
            document.querySelector("#leftHand").style.backgroundImage = 'url("images/weapon8.png")';
            gold = gold - 1000;
            //wlasciwosci 
            bonusmagic = bonusmagic + 5;
            bonusiq = bonusiq + 5;
            bonusmana = bonusmana + 60;
 
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#leftHand").addEventListener("click", function(){
        if (weapon8 == true){
            weapon8 = false;
            weapon = false;
            document.querySelector("#leftHand").style.backgroundImage = '';
            gold = gold + 500;
            bonusmagic = bonusmagic - 5;
            bonusiq = bonusiq - 5;
            bonusmana = bonusmana - 60;
        }
    });


                //tarcze

    //deska
    var shield1 = false;
    document.querySelector("#shield1").addEventListener("click", function(){
        if (gold >= 150 && shield1 == false && shield == false){
            shield1 = true;
            shield = true;
            document.querySelector("#rightHand").style.backgroundImage = 'url("images/shield1.png")';
            gold = gold - 150;
            //wlasciwosci 
            bonusdeff = bonusdeff + 5;
            bonushp = bonushp + 10;
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#rightHand").addEventListener("click", function(){
        if (shield1 == true){
            shield1 = false;
            shield = false;
            document.querySelector("#rightHand").style.backgroundImage = '';
            gold = gold + 75;
            bonusdeff = bonusdeff - 5;
            bonushp = bonushp - 10;
        }
    });

    //kunai
    var shield2 = false;
    document.querySelector("#shield2").addEventListener("click", function(){
        if (gold >= 250 && shield2 == false && shield == false){
            shield2 = true;
            shield = true;
            document.querySelector("#rightHand").style.backgroundImage = 'url("images/shield2.png")';
            gold = gold - 250;
            //wlasciwosci 
            bonuscrit = bonuscrit + 10;
            bonusattack = bonusattack + 4;
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#rightHand").addEventListener("click", function(){
        if (shield2 == true){
            shield2 = false;
            shield = false;
            document.querySelector("#rightHand").style.backgroundImage = '';
            gold = gold + 125;
            bonuscrit = bonuscrit - 10;
            bonusattack = bonusattack - 4;
        }
    });

    //szklana kula
    var shield3 = false;
    document.querySelector("#shield3").addEventListener("click", function(){
        if (gold >= 250 && shield3 == false && shield == false){
            shield3 = true;
            shield = true;
            document.querySelector("#rightHand").style.backgroundImage = 'url("images/shield3.png")';
            gold = gold - 250;
            //wlasciwosci 
            bonusmagic = bonusmagic + 4;
            bonusmana = bonusmana + 20;
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#rightHand").addEventListener("click", function(){
        if (shield3 == true){
            shield3 = false;
            shield = false;
            document.querySelector("#rightHand").style.backgroundImage = '';
            gold = gold + 125;
            bonusmagic = bonusmagic - 4;
            bonusmana = bonusmana - 20;
        }
    });

    //drewniana tarcza
    var shield4 = false;
    document.querySelector("#shield4").addEventListener("click", function(){
        if (gold >= 500 && shield4 == false && shield == false){
            shield4 = true;
            shield = true;
            document.querySelector("#rightHand").style.backgroundImage = 'url("images/shield4.png")';
            gold = gold - 500;
            //wlasciwosci 
            bonusdeff = bonusdeff + 7;
            bonushp = bonushp + 35;
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#rightHand").addEventListener("click", function(){
        if (shield4 == true){
            shield4 = false;
            shield = false;
            document.querySelector("#rightHand").style.backgroundImage = '';
            gold = gold + 250;
            bonusdeff = bonusdeff - 7;
            bonushp = bonushp - 35;
        }
    });

    //metalowa tarcza
    var shield5 = false;
    document.querySelector("#shield5").addEventListener("click", function(){
        if (gold >= 900 && shield5 == false && shield == false){
            shield5 = true;
            shield = true;
            document.querySelector("#rightHand").style.backgroundImage = 'url("images/shield5.png")';
            gold = gold - 900;
            //wlasciwosci 
            bonusdeff = bonusdeff + 10;
            bonushp = bonushp + 70;
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#rightHand").addEventListener("click", function(){
        if (shield5 == true){
            shield5 = false;
            shield = false;
            document.querySelector("#rightHand").style.backgroundImage = '';
            gold = gold + 450;
            bonusdeff = bonusdeff - 10;
            bonushp = bonushp - 70;
        }
    });

    //shuriken
    var shield6 = false;
    document.querySelector("#shield6").addEventListener("click", function(){
        if (gold >= 1000 && shield6 == false && shield == false){
            shield6 = true;
            shield = true;
            document.querySelector("#rightHand").style.backgroundImage = 'url("images/shield6.png")';
            gold = gold - 1000;
            //wlasciwosci 
            bonuscrit = bonuscrit + 15;
            bonusattack = bonusattack + 10;
            bonusdex = bonusdex + 5;
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#rightHand").addEventListener("click", function(){
        if (shield5 == true){
            shield5 = false;
            shield = false;
            document.querySelector("#rightHand").style.backgroundImage = '';
            gold = gold + 500;
            bonuscrit = bonuscrit - 15;
            bonusattack = bonusattack - 10;
            bonusdex = bonusdex - 5;
        }
    });


                //bizuteria

    var ring = false;
    var amulet = false;

    //pekniety pierscien

    var ring1 = false;
    document.querySelector("#ring1").addEventListener("click", function(){
        if (gold >= 80 && ring1 == false && ring == false){
            ring1 = true;
            ring = true;
            document.querySelector("#ring").style.backgroundImage = 'url("images/ring1.png")';
            gold = gold - 80;
            //wlasciwosci 
            bonushp = bonushp + 10;
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#ring").addEventListener("click", function(){
        if (ring1 == true){
            ring1 = false;
            ring = false;
            document.querySelector("#ring").style.backgroundImage = '';
            gold = gold + 40;
            bonushp = bonushp - 10;
        }
    });

    //sznurek

    var amulet1 = false;
    document.querySelector("#amulet1").addEventListener("click", function(){
        if (gold >= 100 && amulet1 == false && amulet == false){
            amulet1 = true;
            amulet = true;
            document.querySelector("#amulet").style.backgroundImage = 'url("images/amulet1.png")';
            gold = gold - 100;
            //wlasciwosci 
            bonusstr++;
            bonusdex++;
            bonusiq--;
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#amulet").addEventListener("click", function(){
        if (amulet1 == true){
            amulet1 = false;
            amulet = false;
            document.querySelector("#amulet").style.backgroundImage = '';
            gold = gold + 50;
            bonusstr = bonusstr - 1;
            bonusdex = bonusdex - 1;
            bonusiq = bonusiq + 1;
        }
    });

                //zbroje

    var armor = false;

    //ubranie wiesniaka

    var armor1 = false;
    document.querySelector("#armor1").addEventListener("click", function(){
        if (gold >= 300 && armor1 == false && armor == false){
            armor1 = true;
            armor = true;
            document.querySelector("#armor").style.backgroundImage = 'url("images/armor1.png")';
            gold = gold - 300;
            //wlasciwosci 
            bonusdeff = bonusdeff + 4;
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#armor").addEventListener("click", function(){
        if (armor1 == true){
            armor1 = false;
            armor = false;
            document.querySelector("#armor").style.backgroundImage = '';
            gold = gold + 150;
            bonusdeff = bonusdeff - 4;
        }
    });

    //ubranie robotnika

    var armor2 = false;
    document.querySelector("#armor2").addEventListener("click", function(){
        if (gold >= 500 && armor1 == false && armor == false){
            armor2 = true;
            armor = true;
            document.querySelector("#armor").style.backgroundImage = 'url("images/armor1.png")';
            gold = gold - 500;
            //wlasciwosci 
            bonusdeff = bonusdeff + 4;
            bonushp = bonushp + 10;
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#armor").addEventListener("click", function(){
        if (armor2 == true){
            armor2 = false;
            armor = false;
            document.querySelector("#armor").style.backgroundImage = '';
            gold = gold + 250;
            bonusdeff = bonusdeff - 4;
            bonushp = bonushp - 10;
        }
    });

    //stara szata

    var armor3 = false;
    document.querySelector("#armor3").addEventListener("click", function(){
        if (gold >= 700 && armor3 == false && armor == false){
            armor3 = true;
            armor = true;
            document.querySelector("#armor").style.backgroundImage = 'url("images/armor3.png")';
            gold = gold - 700;
            //wlasciwosci 
            bonusdeff = bonusdeff + 4;
            bonusiq = bonusiq + 5;
            bonusmana = bonusmana + 10;
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#armor").addEventListener("click", function(){
        if (armor3 == true){
            armor3 = false;
            armor = false;
            document.querySelector("#armor").style.backgroundImage = '';
            gold = gold + 350;
            bonusdeff = bonusdeff - 4;
            bonusiq = bonusiq -5;
            bonusmana = bonusmana - 10;
        }
    });

    //skorzany kaftan

    var armor4 = false;
    document.querySelector("#armor4").addEventListener("click", function(){
        if (gold >= 800 && armor4 == false && armor == false){
            armor4 = true;
            armor = true;
            document.querySelector("#armor").style.backgroundImage = 'url("images/armor4.png")';
            gold = gold - 800;
            //wlasciwosci 
            bonusdeff = bonusdeff + 8;
            bonusevasion = bonusevasion + 5;
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#armor").addEventListener("click", function(){
        if (armor4 == true){
            armor4 = false;
            armor = false;
            document.querySelector("#armor").style.backgroundImage = '';
            gold = gold + 400;
            bonusdeff = bonusdeff - 8;
            bonusevasion = bonusevasion - 5;
        }
    });

    //kolczuga

    var armor5 = false;
    document.querySelector("#armor5").addEventListener("click", function(){
        if (gold >= 1200 && armor5 == false && armor == false){
            armor5 = true;
            armor = true;
            document.querySelector("#armor").style.backgroundImage = 'url("images/armor5.png")';
            gold = gold - 1200;
            //wlasciwosci 
            bonusdeff = bonusdeff + 12;
            bonushp = bonushp + 20;
        }else{
            alert("Nie mozesz tego kupic.");
        }
    });

    document.querySelector("#armor").addEventListener("click", function(){
        if (armor5 == true){
            armor5 = false;
            armor = false;
            document.querySelector("#armor").style.backgroundImage = '';
            gold = gold + 600;
            bonusdeff = bonusdeff - 12;
            bonushp = bonushp - 20;
        }
    });






































