// Demander l'âge de l'utilisateur
var ageUtilisateur = prompt("quel age avez vous ? ");

console.log(ageUtilisateur)

// Convertir l'entrée en nombre
var age = parseInt(ageUtilisateur);

// Vérifier l'âge et afficher la boîte de dialogue appropriée
if (isNaN(age)) {
  alert("Veuillez entrer un âge valide.");
} else {
  if (age < 16) {
    // Bloquer la navigation
    // Créer un élément div avec la classe "black-overlay"
    var overlayDiv = document.createElement("div");
    overlayDiv.classList.add("black-overlay");

    // Ajouter l'élément au corps du document
    document.body.appendChild(overlayDiv);

    // Afficher une boîte de dialogue informant l'utilisateur
    alert("Vous ne pouvez pas accéder au site en raison de votre âge.");
  } else {
    // L'utilisateur a 16 ans ou plus, autoriser l'accès au site web
    alert("Bienvenue sur Vortex Streaming !");
  }
}


// if (Condition) {
//   si condition true faire ceci
// } else {
//   si condition false faire cela
// }