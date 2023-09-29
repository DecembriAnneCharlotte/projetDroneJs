// // Coordonnée de départ
// let startLatitude = 43.3083278;
// let startLongitude = -0.3607801;

// // Coordonnée d'arrivé
// let stopLatitude = 43.3139968;
// let stopLongitude = -0.3747597;

// // Nombre d'iteration
// let iterations = 100;
// let currentIterations = 0;

// function incrementCoordinates() {

//     if (currentIterations >= iterations) {
//         console.log("Arrivé à destination : " + stopLatitude + ", " + stopLongitude);
//         return;
//     }

//     // Calcul des coordonnées intermédiaires
//     let progress = currentIterations / iterations;
//     let newLatitude = startLatitude + progress * (stopLatitude - startLatitude);
//     let newLongitude = startLatitude + progress * (stopLongitude - startLongitude);

//     console.log("Latitude" + newLatitude + " Longitude" + newLongitude);

//     currentIterations++;

//     // appel de la fonction pour continuer l'incrémentation en milliseconde
//     setTimeout(incrementCoordinates, 100);

// }
// incrementCoordinates();





// // Coordonnées GPS de départ
// var startLatitude = 43.3083278;
// var startLongitude = -0.3607801;

// // Coordonnées GPS de l'arrêt
// var stopLatitude = 43.3139968;
// var stopLongitude = -0.3747597;

// // Durée totale du mouvement en millisecondes
// var duration = 2500; 

// // Intervalle de mise à jour en millisecondes
// var updateInterval = 15; 


// // Temps écoulé
// var elapsedTime = 0;


// function updateCoordinates() {
//     // Calculez de l'arret de la fonction
//     var completionFactor = elapsedTime / duration;

//     // Calculez les nouvelles coordonnées intermédiaires
//     var newLatitude = startLatitude + completionFactor * (stopLatitude - startLatitude);
//     var newLongitude = startLongitude + completionFactor * (stopLongitude - startLongitude);

//     console.log("Latitude en temps réel : " + newLatitude + ", Longitude en temps réel : " + newLongitude);

//     elapsedTime += updateInterval;

//     // Vérifiez si nous avons atteint la fin du mouvement
//     if (elapsedTime >= duration) {
//    // Arrêtez la mise à jour
//         clearInterval(intervalId); 
//     }
// }

// var intervalId = setInterval(updateCoordinates, updateInterval);





// var startCoordinates = [43.3083278, -0.3607801];
// var endCoordinates = [43.3139968, -0.3747597];

// var currentCoordinates = startCoordinates;
// var targetCoordinates = endCoordinates;

// var step = 0.001; // vitesse 
// var interval = 10; // Intervalle en millisecondes entre les mises à jour
// var increment = 1; 

// // Fonction pour incrémenter les coordonnées
// function incrementCoordinates() {
//     // Incrémentation des coordonnées
//     currentCoordinates[0] += step * increment;
//     currentCoordinates[1] += step * increment;

//     console.log("Latitude : " + currentCoordinates[0] + ", Longitude : " + currentCoordinates[1]);

//     // Si nous avons atteint les coordonnées cibles, inversez la direction
//     if (currentCoordinates[0] >= endCoordinates[0] && currentCoordinates[1] >= endCoordinates[1]) {
//         targetCoordinates = startCoordinates;
//         increment = -1; 
//     } else if (currentCoordinates[0] <= startCoordinates[0] && currentCoordinates[1] <= startCoordinates[1]) {
//         targetCoordinates = endCoordinates;
// //         increment = 1; // Revenir à la direction initiale
//         clearInterval(intervalId);
//     }
// }

// var intervalId = setInterval(incrementCoordinates, interval);




// // Coordonnées de départ
// var startCoordinates = [43.3083278, -0.3607801];
// // Coordonnées d'arrêt
// var endCoordinates = [43.3139968, -0.3747597];

// // Nombre d'étapes intermédiaires
// var numSteps = 10; 

// // calculer les coordonnées intermédiaires
// function interpolateCoordinates(start, end, t) {
//     var lat1 = start[0];
//     var lon1 = start[1];
//     var lat2 = end[0];
//     var lon2 = end[1];
    
//     var newLat = lat1 + (lat2 - lat1) * t;
//     var newLon = lon1 + (lon2 - lon1) * t;
    
//     return [newLat, newLon];
// }

// // Créez un tableau pour stocker les coordonnées 
// var intermediateCoordinates = [];

// // Calculez les coordonnées 
// for (var i = 0; i <= numSteps; i++) {
//     var t = i / numSteps;
//     var coords = interpolateCoordinates(startCoordinates, endCoordinates, t);
//     intermediateCoordinates.push(coords);
// }

// for (var i = 0; i < intermediateCoordinates.length; i++) {
//     console.log("Étape " + i + ": " + intermediateCoordinates[i][0] + ", " + intermediateCoordinates[i][1]);
// }




// // Pointage vers l'élément qui affiche les données
// let dataContainer1 = document.getElementById("dataContainer");

// // Boucle pour afficher les coordonnées dans la console et dans l'élément HTML
// for (var i = 0; i < intermediateCoordinates.length; i++) {
//     // Affichage des coordonnées GPS dans la console
//     // console.log("Étape " + i + ": " + intermediateCoordinates[i][0] + ", " + intermediateCoordinates[i][1]);
    
//     // Créez un élément HTML pour chaque paire de coordonnées
//     let coordinateElement = document.createElement("div");
//     coordinateElement.innerHTML = `
//         <h5>Latitude = ${intermediateCoordinates[i][0]}</h5>
//         <h5>Longitude = ${intermediateCoordinates[i][1]}</h5>
//     `;
    
//     // Ajoutez l'élément HTML au conteneur de données
//     dataContainer1.appendChild(coordinateElement);
// }




// Création des données coordonnées 
// let dataDrone1 = {
//     latitude: 43.3083278,
//     longitude: -0.3607801
// };
// // Pointage vers l'élément qui affiche les données 
// let dataContainer1 = document.getElementById("dataContainer");
// // Affichage des coordonnées gps en html
// let html = `
//     <h1>Position de départ du drone numéro 1 :</h1>
//     <h5>Latitude = ${dataDrone1.latitude}</h5>
//     <h5>Longitude = ${dataDrone1.longitude}</h5>
// `;
// dataContainer1.innerHTML = html;