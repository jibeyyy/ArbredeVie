var sidenav = document.getElementById("mySidenav"); // recuperation des id html
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav; // implementation des fonction
closeBtn.onclick = closeNav;


function openNav() {
    sidenav.classList.add("active"); //fonction add pour ouvrir 
}

function closeNav() {
    sidenav.classList.remove("active"); // fonction remove pour suprimer la div via l'id html
}
///////// ancre select Onglets ///////
function allerVersPage() {
    var selecteur = document.getElementById("selecteur");
    var selectedValue = selecteur.options[selecteur.selectedIndex].value;
    window.location.href = selectedValue;
}
