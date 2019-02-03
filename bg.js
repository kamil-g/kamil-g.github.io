$(document.body).css("background", "url('images/home.jpg')");

document.querySelector("#home").addEventListener("click", function(){
    whiteText();
    bg("home");
});

document.querySelector("#myprojects").addEventListener("click", function(){
    whiteText()
    bg("myprojects")
});

document.querySelector("#aboutme").addEventListener("click", function(){
    whiteText()
    bg("home")
});

document.querySelector("#contact").addEventListener("click", function(){
    
    $(document.body).fadeOut();
    $(document.body).fadeTo("fast", 1, function(){
        $(document.body).css("background", "white");
        
    });
    blackText()
    $(document.body).fadeIn();   
    
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


function bg(x){
    $(document.body).fadeOut();
    $(document.body).fadeTo("fast", 1, function(){
        $(document.body).css("background", "url('images/" + x + ".jpg')");
    });
    $(document.body).fadeIn();   
}
