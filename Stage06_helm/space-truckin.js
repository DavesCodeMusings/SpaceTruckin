/*
  If the width of the screen is greater than 768px, assume that this is a
  device with plenty of screen real estate and open up details elements by
  adding an attribut of 'open=true'.
*/
function openDetailsOnWideScreens() {
  let mediaQueryList = window.matchMedia('(min-width: 1200px)');
  if (mediaQueryList.matches) {
    let detailsElements = document.getElementsByTagName('details');
    for (let i=0; i<detailsElements.length; i++) {
      detailsElements[i].setAttribute('open', true);
    }
  }
}

/* Pull images into local cache for faster transitions. */
function preloadImages() {
  var starfieldImg = new Image('images/starfield.png');
  var earthImg = new Image('images/earth.png');
  var lunaImg = new Image('images/luna.png');
  var venusImg = new Image('images/venus.png');
  var marsImg = new Image('images/mars.png');
  var ceresImg = new Image('images/ceres.png');
  var jupiterImg = new Image('images/jupiter.png');
  var saturnImg = new Image('images/saturn.png');
}

/* Switch image on the view screen. */
function setImage(imageFileName) {
  let viewscreen = document.getElementById('viewscreen');
  viewscreen.src = 'images/' + imageFileName;
}
