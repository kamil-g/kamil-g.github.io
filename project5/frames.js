let frame1 = document.querySelector("#frame1"),
    frame2 = document.querySelector("#frame2"),
    frame3 = document.querySelector("#frame3"),
    square1 = document.querySelector("#square1"),
    square2 = document.querySelector("#square2"),
    square3 = document.querySelector("#square3");
    
square1.addEventListener("mouseover", scaleAndRotateFrame1);
square2.addEventListener("mouseover", scaleAndRotateFrame2);
square3.addEventListener("mouseover", scaleAndRotateFrame3);

square1.addEventListener("mouseout", descaleAndDerotateFrame1);
square2.addEventListener("mouseout", descaleAndDerotateFrame2);
square3.addEventListener("mouseout", descaleAndDerotateFrame3);

function scaleAndRotateFrame1(){
    frame1.style.transform = "rotate(45deg)";
    square1.style.transform = "rotate(-45deg)";
    square1.style.transform += "scale(1.45)";
}

function scaleAndRotateFrame2(){
    frame2.style.transform = "rotate(45deg)";
    square2.style.transform = "rotate(-45deg)";
    square2.style.transform += "scale(1.45)";
}

function scaleAndRotateFrame3(){
    frame3.style.transform = "rotate(45deg)";
    square3.style.transform = "rotate(-45deg)";
    square3.style.transform += "scale(1.45)";
}

function descaleAndDerotateFrame1(){
    frame1.style.transform += "rotate(-45deg)";
    square1.style.transform = "rotate(-45deg)";
    square1.style.transform = "scale(1)";
}

function descaleAndDerotateFrame2(){
    frame2.style.transform += "rotate(-45deg)";
    square2.style.transform = "rotate(-45deg)";
    square2.style.transform = "scale(1)";
}

function descaleAndDerotateFrame3(){
    frame3.style.transform += "rotate(-45deg)";
    square3.style.transform = "rotate(-45deg)";
    square3.style.transform = "scale(1)";
}










