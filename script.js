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
        document.querySelector("#motto").innerHTML =  "<h1>Looking for a web developer? Here I am!</h1>" 
        document.querySelector("#bb1").innerHTML =  "Live View"
        document.querySelector("#bb2").innerHTML =  "Live View"
        document.querySelector("#bb3").innerHTML =  "Live View"
        document.querySelector("#bb4").innerHTML =  "Live View"
        document.querySelector("#bb5").innerHTML =  "Live View"
        document.querySelector("#bb0").innerHTML =  "Live View"
        document.querySelector("#showMore").innerHTML =  "Show more"
        document.querySelector("#technologies").innerHTML =  "Technologies and tools which I use on a daily basis:"
        document.querySelector("#description").innerHTML = "<p>Hello, my name is Kamil.</p><p>I live in south-eastern Poland. I love technology, creativity and self development.</p>"
        document.querySelector("#toAbout").innerHTML =  "About me"
        document.querySelector("#toProjects").innerHTML =  "My projects"
    }
    else if (language == "pl")
    {
        document.querySelector("#homeLink").innerHTML = "Strona główna"
        document.querySelector("#aboutLink").innerHTML = "O mnie"
        document.querySelector("#projectsLink").innerHTML = "Projekty"
        document.querySelector("#contactLink").innerHTML = "Kontakt"
        document.querySelector("#motto").innerHTML =  "<h1>Szukasz web developera? Jestem tutaj!</h1>"
        document.querySelector("#bb1").innerHTML =  "Otwórz stronę"
        document.querySelector("#bb2").innerHTML =  "Otwórz stronę"
        document.querySelector("#bb3").innerHTML =  "Otwórz stronę"
        document.querySelector("#bb4").innerHTML =  "Otwórz stronę"
        document.querySelector("#bb5").innerHTML =  "Otwórz stronę"
        document.querySelector("#bb0").innerHTML =  "Otwórz stronę"
        document.querySelector("#showMore").innerHTML =  "Pokaż więcej"
        document.querySelector("#technologies").innerHTML =  "Technologie i narzędzia z których korzystam:"
        document.querySelector("#description").innerHTML = "<p>Cześć, mam na imię Kamil</p><p>Mieszkam w południowo-wschodniej części Polski. Uwielbiam technologię, twórczość i rozwój.</p>"
        document.querySelector("#toAbout").innerHTML =  "O mnie"
        document.querySelector("#toProjects").innerHTML =  "Moje projekty"
    }
}

document.querySelector("#homeLink").addEventListener("click", function(){ navi("topnav") });
document.querySelector("#aboutLink").addEventListener("click", function(){ navi("#toAbout") });
document.querySelector("#projectsLink").addEventListener("click", function(){ navi("#toProjects") });
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

let totallyNecessaryVariable = 4;

document.querySelector("#logo-image").addEventListener("click", function(){
    totallyNecessaryFunction();
});

function totallyNecessaryFunction()
{
    if(totallyNecessaryVariable != 0)
    {
        totallyNecessaryVariable--;
    }
    else
    {
        document.querySelector("topnav").style.background = "linear-gradient(rgba(20, 10, 110, 0.9), rgba(40, 10, 80, 0.9)), url('graphics/smile.jpg') no-repeat center center fixed";
        document.querySelector("#motto").innerHTML =  "<h1>^^</h1>"
    }
}

 function info(item)
 {
     
 }

let menu = false;

 document.querySelector("#menu").addEventListener("click", function(){
    menu = !menu;
    if(menu)
    {
        document.querySelector("#links").style.display = "block";
        document.querySelector("#nav").style.background = "linear-gradient(to right, rgba(215, 215, 215, 1), rgba(240, 240, 240, 1), rgba(215, 215, 215, 1))";
        document.querySelector("#nav").style.color = "rgb(50,50,50)";
    }
        
    else
    {
        document.querySelector("#links").style.display = "none";
    }
 });

 //linear-gradient(to right, rgba(215, 215, 215, 1), rgba(240, 240, 240, 1), rgba(215, 215, 215, 1))