// Demander l'âge de l'utilisateur
var ageUtilisateur = prompt("???");

// Convertir l'entrée en nombre
var age = parseInt(???);

// Vérifier l'âge et afficher la boîte de dialogue appropriée
if (isNaN(age)) {
  alert("Veuillez entrer un âge valide.");
} else {
  if (??? < ??) {
    // Bloquer la navigation
    // Créer un élément div avec la classe "black-overlay"
    var overlayDiv = document.createElement("div");
    overlayDiv.classList.add("black-overlay");

    // Ajouter l'élément au corps du document
    document.body.appendChild(overlayDiv);

    // Afficher une boîte de dialogue informant l'utilisateur
    ???("Vous ne pouvez pas accéder au site en raison de votre âge.");
  } ??? {
    // L'utilisateur a 16 ans ou plus, autoriser l'accès au site web
    ???("Bienvenue sur Vortex Streaming !");
  }
}
