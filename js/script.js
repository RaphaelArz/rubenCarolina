// Function to hide the overlay
// Ajoutez la classe no-scroll par défaut

document.body.classList.add("no-scroll")

function hideOverlay() {
  var overlay = document.getElementById('overlay');
  overlay.classList.add('hidden'); // Ajoute la classe hidden pour masquer l'overlay
  document.body.classList.remove("no-scroll"); // Retire la classe no-scroll pour permettre le défilement

}
