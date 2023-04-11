function initialize(){ // la funzione viene chiamata al caricamento della pagina
    let elementsArray = document.querySelectorAll(".link_button"); //recupera tutti i link presenti nella pagina  aventi classe "link_botton"

elementsArray.forEach(function(elem) { //Scorriamo l'array dei link e per ognuno di essi aggiungiamo un eventListener che indirizzi al sito
    elem.addEventListener("click", function() {
        let googleUrl = "https://www.google.com/maps/dir/?api=1&destination=";//link standard per google maps
        let routingLocation = elem.getAttribute('routing_location');//estraiamo dall'elemento il valore dell'attributo routing_location
        routingLocation = routingLocation.replace(" ", "+");
        routingLocation = routingLocation.replace("," , "%2C");
        googleUrl = googleUrl + routingLocation; //combiniamo i 2 link concatenandoli
        window.location.href= googleUrl; //reindirizziamo l'utente verso google maps
    });
});
}