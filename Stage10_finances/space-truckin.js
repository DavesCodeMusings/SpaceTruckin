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

/*
  rollDie returns a number between zero and sides - 1, so for a six-
  sided die, the possible outcomes are 0 - 5. To simulate two six-sided
  dice being tossed, do: outcome = rollDie(11) + 2; outcome will be
  between 2 and 12, just like a board game.  
*/ 
function rollDie(sides) {
  let max = sides -1;
  return Math.floor(Math.random() * max);
}

/* Modeling our universe */

/* The ship we're piloting */
var ship = {
  'name': 'SS Botany Bay',
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
  'bank': 1000,
  'debt': 9000
};

const financeRates = {
  'savings': 0.05,
  'loans': 0.10
};

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

var todaysDate = {
  'month': 0,
  'year': 2038
};

/* News headlines */
const headlines = [
  'Slow day at the news desk.',
  'Landing attempted on Europa. No telemetry since.',
  'Paul Atreides new Duke of Arrakis in landslide election.',
  'Jedi Council cancels tour citing artistic differences.',
  'Dr. Hans Zarkov creates revolutionary new rocket.',
  'Panem loses bid to host upcoming Summer Games.',
  'Sirius Cybernetics Corporation files for Chapter 11.',
  'Civil case filed against Dr. Wellington Yueh.',
  'Union Aerospace Company Mars contract expanded to include moons.',
  'Supercomputer HAL9000 records album, tours Japan.',
  'Leon releases new, tell-all book about his mother.',
  'Object once thought to be moon is actually space station.',
  'Starfleet admiral seeks Genesis device.',
  'Chicago CTA ridership steady despite society\'s collapse.',
  'Remaining members of the Eagles thawed out for tour.',
  'Story of secret star system revealed by French robots.',
  'Marine expeditionary unit deployed to quell Phobos unrest.',
  'Hong Kong Cavaliers sell out Wembley Arena in 5 nanseconds.',
  'Major Motoko Kusanagi appointed head of Tokyo security forces.',
  'FDA to investigate Soylent Green after public outcry.',
  'Bootsy Collins elected Speaker of House, bassist, Funk Congress.',
  'Press secretary denies president attacked own image in mirror.',
  'Universe credits paleo diet as reason for slowing expansion.',
  'Apophis returns, rather miffed at how things run in absense.',
  'Kessel Run speed record shattered.',
  'Doctors Voight and Kampff ask internet to help name new test.'
];


/* Controlling our universe */

/* Switch image on the view screen. */
function setImage(imageFileName) {
  let viewscreen = document.getElementById('viewscreen');
  viewscreen.src = 'images/' + imageFileName;
}

function updateNews() {
  todaysDate.month += 1;
  if (todaysDate.month == 12) {
    todaysDate.year += 1;
    todaysDate.month = 0;
  }
  let currentDate = document.getElementById('news-date');
  currentDate.innerHTML = months[todaysDate.month] + ' ' + todaysDate.year;

  // Choose a random headline... or not. (1 in 6 chance.)
  let newsHeadline = document.getElementById('news-headline');
  if (rollDie(6) == 1) {
    newsHeadline.innerHTML = headlines[rollDie(headlines.length)];
  }
  else {
    newsHeadline.innerHTML = headlines[0];
  }
}

function updateFinances() {
  let financesWallet = document.getElementById('finances-wallet');
  let financesCash = document.getElementById('finances-cash');
  let financesBank = document.getElementById('finances-bank');
  let financesDebt = document.getElementById('finances-debt');
  let financesTotal = document.getElementById('finances-total');
  let financesATM = document.getElementById('finances-atm');
  let total = finances.cash + finances.bank - finances.debt;

  // Write out amounts.
  financesWallet.innerHTML = Math.round(finances.cash);
  financesCash.innerHTML = Math.round(finances.cash);
  financesBank.innerHTML = Math.round(finances.bank);
  financesDebt.innerHTML = '(' + Math.round(finances.debt) + ')';
  if (total > 0) {
    financesTotal.innerHTML = Math.round(total);
  }
  else {
    financesTotal.innerHTML = '(' + Math.abs(Math.round(total)) + ')';
  }

  // Make ATM transactions available only on Earth.
  if (ship.location == 1) {
    financesATM.style.display = 'block';
  }
  else {
    financesATM.style.display = 'none';
  }
}

function applyInterest()
{
  // Update balances for a one-month period, so 1/12 for the annual rate. 
  finances.bank += finances.bank * financeRates.savings / 12;
  finances.debt += finances.debt * financeRates.loans / 12;
  updateFinances();
}

function useATM(transaction, amount) {
  switch (transaction) {
    case 'deposit':
      if (finances.cash >= amount) {
        finances.cash -= amount;
        finances.bank += amount;
      }
      break;
    case 'withdrawl':
      if (finances.bank >= amount) {
        finances.bank -= amount;
        finances.cash += amount;
      }
      break;
    case 'payment':
      if (finances.cash >= amount) {
        finances.cash -= amount;
        finances.debt -= amount;
      }
      break;
  }
  updateFinances();
}

function updateLocation(newLocation) {
  if (newLocation != ship.location) {
    let helmPortCode = document.getElementById('helm-port-code');
    let helmLocationName = document.getElementById('helm-location-name');

    // Show the in-flight starfield while traveling.
    ship.location = 0;
    setImage('starfield.png');
    helmPortCode.innerHTML = locations[ship.location].portCode;
    helmLocationName.innerHTML = locations[ship.location].name;

    // After a 'flight time' delay, update with new picture and info.
    setTimeout(function () {
      ship.location = newLocation;
      updateNews();
      applyInterest();
      setImage(locations[newLocation].image);
      helmPortCode.innerHTML = locations[newLocation].portCode;
      helmLocationName.innerHTML = locations[newLocation].name;
    }, 3000);
  }
}