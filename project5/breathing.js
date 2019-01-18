let background = document.querySelector("main"),
    tt1 = document.querySelector("#tt1"),
    tt2 = document.querySelector("#tt2"),
    tt3 = document.querySelector("#tt3");

    setInterval(function(){
        
        let r = Math.random()*150,
            g = Math.random()*150,
            b = Math.random()*150;
        
        background.style.backgroundColor = "rgba(" + r + "," + g + "," + b + ",1)";
        tt1.style.color = "rgba(" + r + "," + g + "," + b + ",1)";
        tt2.style.color = "rgba(" + r + "," + g + "," + b + ",1)";
        tt3.style.color = "rgba(" + r + "," + g + "," + b + ",1)";
        
    },5000);
