// refreshing clock
setInterval(function(){
    
    
    // getting decimal hour
    let date = new Date(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();


    // formating decimal hour
    function formatingDecimal(dec){
        let decStr = dec.toString();
        if (decStr < 10){
            decStr = "0" + decStr;
            console.log(decStr);
            return decStr;
        }else{
            console.log(decStr);
            return decStr;
        }
    }


    // formated hour
    let formatedDecHour = formatingDecimal(hour),
        formatedDecMinute = formatingDecimal(minute),
        formatedDecSecond = formatingDecimal(second);


    // splitting decimal hour
    let hc0 = formatedDecHour.charAt(0),
        hc1 = formatedDecHour.charAt(1),
        mc0 = formatedDecMinute.charAt(0),
        mc1 = formatedDecMinute.charAt(1),
        sc0 = formatedDecSecond.charAt(0),
        sc1 = formatedDecSecond.charAt(1);


    // converting splitted hour to binary
    function converting(char){
        var y = parseInt(char,10);
        x = y.toString(2);
        console.log(x);
        return x;
    }


    // saving binary splitted hour
    let binHour0 = converting(hc0),
        binHour1 = converting(hc1),
        binMinute0 = converting(mc0),
        binMinute1 = converting(mc1),
        binSecond0 = converting(sc0),
        binSecond1 = converting(sc1);


    // formating binary hour
    function formatingBinary(bin){
        let x = bin.toString();
        let y = x.length;
        if (y == 0) {
            x = "0000" + x;
            console.log(x)
            return(x);
        }else if (y == 1){
            x = "000" + x;
            console.log(x)
            return(x);
        }else if(y == 2){
            x = "00" + x;
            console.log(x)
            return(x);
        }else if (y == 3){
            x = "0" + x;
            console.log(x)
            return(x);       
        }else{
            console.log(x);
            return(x);
        }
    }


    // saving formated binary hour
    let formatedBinHour0 = formatingBinary(binHour0);
    let formatedBinHour1 = formatingBinary(binHour1);
    let formatedBinMinute0 = formatingBinary(binMinute0);
    let formatedBinMinute1 = formatingBinary(binMinute1);
    let formatedBinSecond0 = formatingBinary(binSecond0);
    let formatedBinSecond1 = formatingBinary(binSecond1);


    // checking where is 0 and where is 1
    function binaryCharacterChecking(char, fbh){
        let x = fbh.charAt(char);
        console.log(x);
        return(x);
    }


    // hour p0
    let hour0Char0 = binaryCharacterChecking(0, formatedBinHour0); 
    let hour0Char1 = binaryCharacterChecking(1, formatedBinHour0); 
    let hour0Char2 = binaryCharacterChecking(2, formatedBinHour0); 
    let hour0Char3 = binaryCharacterChecking(3, formatedBinHour0); 
    // hour p1
    let hour1Char0 = binaryCharacterChecking(0, formatedBinHour1); 
    let hour1Char1 = binaryCharacterChecking(1, formatedBinHour1); 
    let hour1Char2 = binaryCharacterChecking(2, formatedBinHour1); 
    let hour1Char3 = binaryCharacterChecking(3, formatedBinHour1); 
    // minute p0
    let minute0Char0 = binaryCharacterChecking(0, formatedBinMinute0);
    let minute0Char1 = binaryCharacterChecking(1, formatedBinMinute0);
    let minute0Char2 = binaryCharacterChecking(2, formatedBinMinute0);
    let minute0Char3 = binaryCharacterChecking(3, formatedBinMinute0);
    // minute p0
    let minute1Char0 = binaryCharacterChecking(0, formatedBinMinute1);
    let minute1Char1 = binaryCharacterChecking(1, formatedBinMinute1);
    let minute1Char2 = binaryCharacterChecking(2, formatedBinMinute1);
    let minute1Char3 = binaryCharacterChecking(3, formatedBinMinute1);
    // second p0
    let second0Char0 = binaryCharacterChecking(0, formatedBinSecond0);
    let second0Char1 = binaryCharacterChecking(1, formatedBinSecond0);
    let second0Char2 = binaryCharacterChecking(2, formatedBinSecond0);
    let second0Char3 = binaryCharacterChecking(3, formatedBinSecond0);
    // second p1
    let second1Char0 = binaryCharacterChecking(0, formatedBinSecond1);
    let second1Char1 = binaryCharacterChecking(1, formatedBinSecond1);
    let second1Char2 = binaryCharacterChecking(2, formatedBinSecond1);
    let second1Char3 = binaryCharacterChecking(3, formatedBinSecond1);

    // led positions
    let h0c0 = document.querySelector("#h0c0");
    let h0c1 = document.querySelector("#h0c1");
    let h0c2 = document.querySelector("#h0c2");
    let h0c3 = document.querySelector("#h0c3");
    let h1c0 = document.querySelector("#h1c0");
    let h1c1 = document.querySelector("#h1c1");
    let h1c2 = document.querySelector("#h1c2");
    let h1c3 = document.querySelector("#h1c3");

    let s0c0 = document.querySelector("#s0c0");
    let s0c1 = document.querySelector("#s0c1");
    let s0c2 = document.querySelector("#s0c2");
    let s0c3 = document.querySelector("#s0c3");
    let s1c0 = document.querySelector("#s1c0");
    let s1c1 = document.querySelector("#s1c1");
    let s1c2 = document.querySelector("#s1c2");
    let s1c3 = document.querySelector("#s1c3");

    let m0c0 = document.querySelector("#m0c0");
    let m0c1 = document.querySelector("#m0c1");
    let m0c2 = document.querySelector("#m0c2");
    let m0c3 = document.querySelector("#m0c3");
    let m1c0 = document.querySelector("#m1c0");
    let m1c1 = document.querySelector("#m1c1");
    let m1c2 = document.querySelector("#m1c2");
    let m1c3 = document.querySelector("#m1c3");



    // led color
    function ledColor(led, char){
        if (char == "1"){
            led.style.backgroundColor = "rgb(35,255,35)";
        }else{
            led.style.backgroundColor = "black";
        }
    }

    // setting colors
        ledColor(h0c0, hour0Char0);
        ledColor(h0c1, hour0Char1);
        ledColor(h0c2, hour0Char2);
        ledColor(h0c3, hour0Char3);
        ledColor(h1c0, hour1Char0);
        ledColor(h1c1, hour1Char1);
        ledColor(h1c2, hour1Char2);
        ledColor(h1c3, hour1Char3);

        ledColor(m0c0, minute0Char0);
        ledColor(m0c1, minute0Char1);
        ledColor(m0c2, minute0Char2);
        ledColor(m0c3, minute0Char3);
        ledColor(m1c0, minute1Char0);
        ledColor(m1c1, minute1Char1);
        ledColor(m1c2, minute1Char2);
        ledColor(m1c3, minute1Char3);

        ledColor(s0c0, second0Char0);
        ledColor(s0c1, second0Char1);
        ledColor(s0c2, second0Char2);
        ledColor(s0c3, second0Char3);
        ledColor(s1c0, second1Char0);
        ledColor(s1c1, second1Char1);
        ledColor(s1c2, second1Char2);
        ledColor(s1c3, second1Char3);
    
},10);





















