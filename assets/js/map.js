// Générale : *******************************************************************************************************************************************


// Ensemble des coordonnées de départ et d'arrivé de tout les drone : 
// Drone1 :
var startCoordinatesAller1 = [43.3083278, -0.3607801];
var endCoordinatesAller1 = [43.3139968, -0.3747597];
var startCoordinatesRetour1 = [43.3139968, -0.3747597];
var endCoordinatesRetour1 = [43.3083278, -0.3607801];
// Drone2 : 
var startCoordinatesAller2 = [43.3085278, -0.3607801];
var endCoordinatesAller2 = [43.3025006, -0.3433449];
var startCoordinatesRetour2 = [43.3025006, -0.3433449];
var endCoordinatesRetour2 = [43.3083278, -0.3607801];
// Drone3 :
var startCoordinatesAller3 = [43.3084278, -0.3608801];
var endCoordinatesAller3 = [43.303722, -0.357453];
var startCoordinatesRetour3 = [43.303722, -0.357453];
var endCoordinatesRetour3 = [43.3084278, -0.3608801];
// Drone4 :
var startCoordinatesAller4 = [43.3084278, -0.3606801];
var endCoordinatesAller4 = [43.2994328, -0.3690295];
var startCoordinatesRetour4 = [43.2994328, -0.3690295];
var endCoordinatesRetour4 = [43.3084278, -0.3606801];


// Nombre d'étapes intermédiaires
var numSteps = 10; 

// calculer les coordonnées intermédiaires
function interpolateCoordinates(start, end, t) {
    var lat1 = start[0];
    var lon1 = start[1];
    var lat2 = end[0];
    var lon2 = end[1];
    
    var newLat = lat1 + (lat2 - lat1) * t;
    var newLon = lon1 + (lon2 - lon1) * t;
    
    return [newLat, newLon];
}

// Affichage de la Map avec les icons
var map = L.map('map').setView([43.3084278, -0.3607801], 15);
var iconofdrone = L.icon({
    iconUrl: '../assets/img/droneicon.png',
    iconSize:[40, 40],
    iconAnchor: [22, 94],
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Permet de faire apparaitre un popup au click qui affiche les coordonnées
var popup = L.popup();
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    
    map.on('click', onMapClick);


// Drone 1 : ********************************************************************************************************************************************************

// tableau calculs des coordonnées
var intermediateCoordinates1 = [];

// Calcule des coordonnées 
for (var i = 0; i <= numSteps; i++) {
    var t = i / numSteps;
    var coordsAl1 = interpolateCoordinates(startCoordinatesAller1, endCoordinatesAller1, t);
    intermediateCoordinates1.push(coordsAl1);
    var coordsRe1 = interpolateCoordinates(startCoordinatesRetour1, endCoordinatesRetour1, t);
    intermediateCoordinates1.push(coordsRe1);
}

// tableau coordonnées intermédiaires
var intermediateLatLngs1 = [];

// Convertion des coordonnées intermédiaires en format attendu par L.polyline
for (var i = 0; i < intermediateCoordinates1.length; i++) {
    var latAl = intermediateCoordinates1[i][0];
    var lngAl = intermediateCoordinates1[i][1];
    var latLngAl = [latAl, lngAl];
    intermediateLatLngs1.push(latLngAl);


// Dépplacement des drones [latitude,longitude]

    console.log(intermediateLatLngs1[i][0]);
    console.log(intermediateLatLngs1[i][1]);

}
console.log(intermediateLatLngs1);
var movedrone1 = L.polyline(intermediateLatLngs1),
    animatedMarker1 = L.animatedMarker(movedrone1.getLatLngs(), {
        icon: iconofdrone,    
        distance: 300,  // en meters
        interval: 2500, // en milliseconds
    
    });

map.addLayer(animatedMarker1);
// Arret au point d'arriver et retour
setTimeout(function(){
    animatedMarker1.stop();
}, 2500);
setTimeout(function(){
    animatedMarker1.start();
}, 5500);

// Pointage vers l'élément qui affiche les données
let dataContainer1 = document.getElementById("dataContainer");

// Boucle pour afficher les coordonnées dans la console et dans l'élément HTML
for (var i = 0; i < intermediateCoordinates1.length; i++) {
    
    // Créez un élément HTML pour chaque paire de coordonnées
    let coordinateElement = document.createElement("div");
    coordinateElement.innerHTML = `
        <h1>Coordonnées du drone1</h1>
        <h5>Latitude = ${intermediateLatLngs1[i][0]}</h5>
        <h5>Longitude = ${intermediateLatLngs1[i][1]}</h5><hr/>
    `;
    
    // Ajoutez l'élément HTML au conteneur de données
    dataContainer1.appendChild(coordinateElement);
}


// Drone 2 : ******************************************************************************************************************************************************

var intermediateCoordinates2 = [];

// Calculez les coordonnées 
for (var i = 0; i <= numSteps; i++) {
    var t = i / numSteps;
    var coordsAl2 = interpolateCoordinates(startCoordinatesAller2, endCoordinatesAller2, t);
    intermediateCoordinates2.push(coordsAl2);
    var coordsRe2 = interpolateCoordinates(startCoordinatesRetour2, endCoordinatesRetour2, t);
    intermediateCoordinates2.push(coordsRe2);
}


// tableau coordonnées intermédiaires
var intermediateLatLngs2 = [];

// Convertion des coordonnées intermédiaires en format attendu par L.polyline
for (var i = 0; i < intermediateCoordinates1.length; i++) {
    var latAl = intermediateCoordinates2[i][0];
    var lngAl = intermediateCoordinates2[i][1];
    var latLngAl = [latAl, lngAl];
    intermediateLatLngs2.push(latLngAl);


// Dépplacement des drones [latitude,longitude]
var movedrone2 = L.polyline(intermediateLatLngs2),
    animatedMarker2 = L.animatedMarker(movedrone2.getLatLngs(), {
        icon: iconofdrone,
        distance: 300,  // meters
        interval: 1600, // milliseconds
    });
    console.log(intermediateLatLngs2[i][0]);
    console.log(intermediateLatLngs2[i][1]);
}

map.addLayer(animatedMarker2);
setTimeout(function(){
    animatedMarker2.stop();
}, 1600);
setTimeout(function(){
    animatedMarker2.start();
}, 3500);

// Pointage vers l'élément qui affiche les données
let dataContainer2 = document.getElementById("dataContainer");

// Boucle pour afficher les coordonnées dans la console et dans l'élément HTML
for (var i = 0; i < intermediateCoordinates2.length; i++) {
    
    // Créez un élément HTML pour chaque paire de coordonnées
    let coordinateElement = document.createElement("div");
    coordinateElement.innerHTML = `
        <h1>Coordonnées du drone2</h1>
        <h5>Latitude = ${intermediateLatLngs2[i][0]}</h5>
        <h5>Longitude = ${intermediateLatLngs2[i][1]}</h5><hr/>
    `;
    
    // Ajoutez l'élément HTML au conteneur de données
    dataContainer2.appendChild(coordinateElement);
}


// Drone 3 : ******************************************************************************************************************************************************

var intermediateCoordinates3 = [];

// Calcule des coordonnées 
for (var i = 0; i <= numSteps; i++) {
    var t = i / numSteps;
    var coordsAl3 = interpolateCoordinates(startCoordinatesAller3, endCoordinatesAller3, t);
    intermediateCoordinates3.push(coordsAl3);
    var coordsRe3 = interpolateCoordinates(startCoordinatesRetour3, endCoordinatesRetour3, t);
    intermediateCoordinates3.push(coordsRe3);
}

var intermediateLatLngs3 = [];

// Convertion des coordonnées intermédiaires en format attendu par L.polyline
for (var i = 0; i < intermediateCoordinates3.length; i++) {
    var latAl = intermediateCoordinates3[i][0];
    var lngAl = intermediateCoordinates3[i][1];
    var latLngAl = [latAl, lngAl];
    intermediateLatLngs3.push(latLngAl);


// Dépplacement des drones [latitude,longitude]
var movedrone3 = L.polyline(intermediateLatLngs3),
    animatedMarker3 = L.animatedMarker(movedrone3.getLatLngs(), {
        icon: iconofdrone,
        distance: 300,  // meters
        interval: 900, // milliseconds
    });

    console.log(intermediateLatLngs3[i][0]);
    console.log(intermediateLatLngs3[i][1]);
}

map.addLayer(animatedMarker3);
setTimeout(function(){
    animatedMarker3.stop();
}, 900);
setTimeout(function(){
    animatedMarker3.start();
}, 2100);

// Pointage vers l'élément qui affiche les données
let dataContainer3 = document.getElementById("dataContainer");

// Boucle pour afficher les coordonnées dans la console et dans l'élément HTML
for (var i = 0; i < intermediateCoordinates3.length; i++) {
    
    // Créez un élément HTML pour chaque paire de coordonnées
    let coordinateElement = document.createElement("div");
    coordinateElement.innerHTML = `
        <h1>Coordonnées du drone3</h1>
        <h5>Latitude = ${intermediateLatLngs3[i][0]}</h5>
        <h5>Longitude = ${intermediateLatLngs3[i][1]}</h5><hr/>
    `;
    
    // Ajoutez l'élément HTML au conteneur de données
    dataContainer3.appendChild(coordinateElement);
}

// Drone 4 : ******************************************************************************************************************************************************

var intermediateCoordinates4 = [];

// Calcule des coordonnées 
for (var i = 0; i <= numSteps; i++) {
    var t = i / numSteps;
    var coordsAl4 = interpolateCoordinates(startCoordinatesAller4, endCoordinatesAller4, t);
    intermediateCoordinates4.push(coordsAl4);
    var coordsRe4 = interpolateCoordinates(startCoordinatesRetour4, endCoordinatesRetour4, t);
    intermediateCoordinates4.push(coordsRe4);
}

var intermediateLatLngs4 = [];

// Convertion des coordonnées intermédiaires en format attendu par L.polyline
for (var i = 0; i < intermediateCoordinates4.length; i++) {
    var latAl = intermediateCoordinates4[i][0];
    var lngAl = intermediateCoordinates4[i][1];
    var latLngAl = [latAl, lngAl];
    intermediateLatLngs4.push(latLngAl);


// Dépplacement des drones [latitude,longitude]
var movedrone4 = L.polyline(intermediateLatLngs4),
    animatedMarker4 = L.animatedMarker(movedrone4.getLatLngs(), {
        icon: iconofdrone,
        distance: 300,  // meters
        interval: 2000, // milliseconds
    });

    console.log(intermediateLatLngs3[i][0]);
    console.log(intermediateLatLngs3[i][1]);
}

map.addLayer(animatedMarker4);
    setTimeout(function(){
        animatedMarker4.stop();
    }, 2000);
    setTimeout(function(){
        animatedMarker4.start();
    }, 5000);

// Pointage vers l'élément qui affiche les données
let dataContainer4 = document.getElementById("dataContainer");

// Boucle pour afficher les coordonnées dans la console et dans l'élément HTML
for (var i = 0; i < intermediateCoordinates4.length; i++) {
    
    // Créez un élément HTML pour chaque paire de coordonnées
    let coordinateElement = document.createElement("div");
    coordinateElement.innerHTML = `
        <h1>Coordonnées du drone4</h1>
        <h5>Latitude = ${intermediateLatLngs4[i][0]}</h5>
        <h5>Longitude = ${intermediateLatLngs4[i][1]}</h5><hr/>
    `;
    
    // Ajoutez l'élément HTML au conteneur de données
    dataContainer4.appendChild(coordinateElement);
}

