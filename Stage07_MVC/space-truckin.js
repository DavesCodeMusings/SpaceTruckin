/* General Purpose */

/*
  If the width of the screen is greater than 768px, assume that this is a
  device with plenty of screen real estate and open up details elements by
  adding an attribut of 'open=true'.
*/
function openDetailsOnWideScreens() {
  let mediaQueryList = window.matchMedia('(min-width: 768px)');
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

/* Modeling our universe */

/* The ship we're piloting */
var ship = {
  'name': '',
  'cargoCapacity': 50,
  'guns': 0,
  'shieldStrength': 100,
  'location': 1
}

/* Oh, the places you will go! */
const locations = {
  0: { 'portCode': '---', 'name': 'In Transit', 'image': 'starfield.png' },
  1: { 'portCode': 'ETH', 'name': 'Shreveport Space Elevator, Earth', 'image': 'earth.png' },
  2: { 'portCode': 'LUN', 'name': 'New Shanghai FTZ, Luna', 'image': 'luna.png' },
  3: { 'portCode': 'VEN', 'name': 'BNARMA Municipal Docks, Venus', 'image': 'venus.png' },
  4: { 'portCode': 'MRS', 'name': 'UAC Cargo Terminal, Mars', 'image': 'mars.png' },
  5: { 'portCode': 'CER', 'name': 'Ceres Station', 'image': 'ceres.png' },
  6: { 'portCode': 'GAN', 'name': 'Jupiter Outpost, Ganymede', 'image': 'jupiter.png' },
  7: { 'portCode': 'TTN', 'name': 'H. Boone Spaceport, Titan', 'image': 'saturn.png' }
};

/* Items that can be bought and sold */
const products = {
  1: { 'name': 'Consumer Goods', 'origin': 4, 'price': 2000 },
  2: { 'name': 'Foodstuffs', 'origin': 1, 'price': 3000 },
  3: { 'name': 'Ore & Minerals', 'origin': 5, 'price': 5000 },
  4: { 'name': 'Heavy Equipment', 'origin': 7, 'price': 8000 }
};

var finances = {
  'cash': 5000,
  'bank': 0,
  'debt': 0,
}

/* Controlling our universe */

/* Switch image on the view screen. */
function changeLocation(location) {
  let viewscreen = document.getElementById('viewscreen');
  viewscreen.src = 'images/' + locations[location].image;
}
