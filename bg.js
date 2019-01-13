$(document.body).css("background", "url('images/home.jpg')");

document.querySelector("#home").addEventListener("click", function(){
    whiteText();
    bg1();
});

document.querySelector("#myprojects").addEventListener("click", function(){
    whiteText()
    bg2()
});

document.querySelector("#aboutme").addEventListener("click", function(){
    whiteText()
    bg3()
});

document.querySelector("#contact").addEventListener("click", function(){
    blackText()
    bg4()
});

function whiteText(){
    $(document.body).fadeTo("fast", 1, function(){
        $(document.body).css("color", "white");
    });
}

function blackText(){
    $(document.body).fadeTo("slow", 1, function(){
        $(document.body).css("color", "black");
    });
}



function bg1(){
    $(document.body).fadeOut();
    $(document.body).fadeTo("fast", 1, function(){
        $(document.body).css("background", "url('images/home.jpg')");
    });
    $(document.body).fadeIn();   
}

function bg2(){
    $(document.body).fadeOut();
    $(document.body).fadeTo("fast", 1, function(){
        $(document.body).css("background", "url('images/myprojects.jpg')");
    });
    $(document.body).fadeIn();   
}

function bg3(){
    $(document.body).fadeOut();
    $(document.body).fadeTo("fast", 1, function(){
        $(document.body).css("background", "url('images/home.jpg')");
    });
    $(document.body).fadeIn();   
}

function bg4(){
    $(document.body).fadeOut();
    $(document.body).fadeTo("fast", 1, function(){
        $(document.body).css("background", "white");
    });
    $(document.body).fadeIn();   
}
