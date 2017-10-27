// Functions File

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}