/* General Purpose */

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

/* Modeling our universe */

/* The ship we're piloting */
var ship = {
  'name': '',
  'cargoCapacity': 50,
  'guns': 0,
  'shieldStrength': 100,
  'location': 1
};

/* Oh, the places you will go! */
const locations = [
  { 'portCode': '---', 'name': 'In Transit', 'image': 'starfield.png' },
  { 'portCode': 'ETH', 'name': 'Shreveport Space Elevator, Earth', 'image': 'earth.png' },
  { 'portCode': 'LUN', 'name': 'New Shanghai FTZ, Luna', 'image': 'luna.png' },
  { 'portCode': 'VEN', 'name': 'BNARMA Municipal Docks, Venus', 'image': 'venus.png' },
  { 'portCode': 'MRS', 'name': 'UAC Cargo Terminal, Mars', 'image': 'mars.png' },
  { 'portCode': 'CER', 'name': 'Ceres Station', 'image': 'ceres.png' },
  { 'portCode': 'GAN', 'name': 'Jupiter Outpost, Ganymede', 'image': 'jupiter.png' },
  { 'portCode': 'TTN', 'name': 'H. Boone Spaceport, Titan', 'image': 'saturn.png' }
];

/* Items that can be bought and sold */
const products = [
  { 'name': 'Consumer Goods', 'origin': 4, 'price': 2000 },
  { 'name': 'Foodstuffs', 'origin': 1, 'price': 3000 },
  { 'name': 'Ore & Minerals', 'origin': 5, 'price': 5000 },
  { 'name': 'Heavy Equipment', 'origin': 7, 'price': 8000 }
];

var finances = {
  'cash': 5000,
  'bank': 0,
  'debt': 0,
};

const calendar = [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC' ];

/* Controlling our universe */

/* Switch image on the view screen. */
function setImage(imageFileName) {
  let viewscreen = document.getElementById('viewscreen');
  viewscreen.src = 'images/' + imageFileName;
}
