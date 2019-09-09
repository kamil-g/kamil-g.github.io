document.querySelector("#pl").addEventListener("click", function(){ switchLanguage("pl") });
document.querySelector("#en").addEventListener("click", function(){ switchLanguage("en") });

switchLanguage("en");

function switchLanguage(lng)
{
    let language = "";

    language = lng;

    document.querySelector("#en").style.border = null;
    document.querySelector("#pl").style.border = null;
    document.querySelector("#" + language).style.border = "1px solid white";

    if (language == "en")
    {
        document.querySelector("#homeLink").innerHTML = "Home"
        document.querySelector("#aboutLink").innerHTML = "About me"
        document.querySelector("#projectsLink").innerHTML = "Projects"
        document.querySelector("#contactLink").innerHTML = "Contact"
        document.querySelector("#motto").innerHTML =  "<h1>Hello! My name is Kamil. I'm webdeveloper.</h1>" 
        document.querySelector("#bb1").innerHTML =  "Live View"
        document.querySelector("#bb2").innerHTML =  "Live View"
        document.querySelector("#bb3").innerHTML =  "Live View"
        document.querySelector("#bb4").innerHTML =  "Live View"
        document.querySelector("#bb5").innerHTML =  "Live View"
        document.querySelector("#bb0").innerHTML =  "Live View"
        document.querySelector("#showMore").innerHTML =  "Show more"
        //document.querySelector("#about").innerHTML = "Hello!"
    }
    else if (language == "pl")
    {
        document.querySelector("#homeLink").innerHTML = "Strona główna"
        document.querySelector("#aboutLink").innerHTML = "O mnie"
        document.querySelector("#projectsLink").innerHTML = "Projekty"
        document.querySelector("#contactLink").innerHTML = "Kontakt"
        document.querySelector("#motto").innerHTML =  "<h1>Cześć! Mam na imię Kamil. Jestem webdeveloperem.</h1>" 
        document.querySelector("#bb1").innerHTML =  "Otwórz stronę"
        document.querySelector("#bb2").innerHTML =  "Otwórz stronę"
        document.querySelector("#bb3").innerHTML =  "Otwórz stronę"
        document.querySelector("#bb4").innerHTML =  "Otwórz stronę"
        document.querySelector("#bb5").innerHTML =  "Otwórz stronę"
        document.querySelector("#bb0").innerHTML =  "Otwórz stronę"
        document.querySelector("#showMore").innerHTML =  "Pokaż więcej"
        //document.querySelector("#about").innerHTML = "Witam!"
    }
}

document.querySelector("#homeLink").addEventListener("click", function(){ navi("topnav") });
document.querySelector("#aboutLink").addEventListener("click", function(){ navi("#about") });
document.querySelector("#projectsLink").addEventListener("click", function(){ navi("#projects") });
document.querySelector("#contactLink").addEventListener("click", function(){ navi("#contact") });

function navi(x)
{
    document.querySelector(x).scrollIntoView();
}

let currentScrollY = window.scrollY;

window.onscroll = function(){

    currentScrollY = window.scrollY;
    
    if (currentScrollY > 0)
    {
        this.document.querySelector("#nav").style.background = "linear-gradient(to right, rgb(215, 215, 215), rgb(240, 240, 240), rgb(215, 215, 215)";
        this.document.querySelector("#nav").style.color = "rgb(30,30,30)";

    }
    else if (currentScrollY == 0)
    {
        this.document.querySelector("#nav").style.background = "none";
        this.document.querySelector("#nav").style.color = "rgb(215, 215, 215)";
    }
}

document.querySelector("#showMore").addEventListener("click", function(){
    document.querySelector("#b6").style.display = "flex";
    document.querySelector("#b7").style.display = "flex";
    document.querySelector("#b8").style.display = "flex";
    document.querySelector("#showMore").style.display = "none";
});

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }