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

/* Play a short bit of audio when the game first loads. */
function playIntroRiff() {
  var introRiff = new Audio('audio/Almost_Space_Truckin.ogg');
  introRiff.play();
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

/* Magnify effects of die roll with our old pal Fibonacci. */
const fibonacciBell = [1, 1, 2, 3, 5, 8, 13, 8, 5, 3, 2, 1, 1];

/* Modeling our universe */

/* The ship we're piloting */
var ship = {
  'name': 'SS Botany Bay',
  'cargoCapacity': 50,
  'cargoHold' : [20, 0, 0, 0],
  'guns': 2,
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
  { 'name': 'Consumer Goods', 'medianPrice': 500 },
  { 'name': 'Foodstuffs', 'medianPrice': 800 },
  { 'name': 'Ore & Minerals', 'medianPrice': 1300 },
  { 'name': 'Heavy Equipment', 'medianPrice': 2100 }
];

var currentProductPrices = [
  products[0].medianPrice,
  products[1].medianPrice,
  products[2].medianPrice,
  products[3].medianPrice
];

var finances = {
  'cash': 10,
  'bank': 0,
  'debt': 100000
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
  'There\'s a sale on breakfast burritos!',
  'Landing attempted on Europa. No telemetry since.',
  'Paul Atreides named Duke of Arrakis in landslide election.',
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
  'Doctors Voight and Kampff ask internet to help name new test.',
  'World leaders cautiously optimistic as Karen speaks to manager.',
  'Dysentery epidemic among passengers of SS Oregon Trail.'
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
  let newsHeadline = document.getElementById('news-headline');
  let todaysHeadline = headlines[0];  // 'Slow news day.'

  // Check for bargains (anything below median price) and report first one found.
  for(let i=0; i<products.length; i++) {
    if (currentProductPrices[i] < products[i].medianPrice) {
      todaysHeadline = `There's a sale on ${products[i].name}.`;
      break;
    }
  }

  // Roll the dice to see if there's a random headline to display, replacing
  // the bargain report headline (a one in six chance.)
  if (rollDie(6) == 1) {
    todaysHeadline = headlines[rollDie(headlines.length)];
  }

  // Display it.
  newsHeadline.innerHTML = todaysHeadline;
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

  // Check to see if player has reached one-million in the bank to win the game.
  if (finances.bank >= 1000000) {
    alert("Congratulations! You're a millionaire.");
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
  if (amount) {
    switch (transaction) {
      case 'deposit':
        if (finances.cash >= amount) {
          finances.cash -= amount;
          finances.bank += amount;
        }
        else {
          alert(`Don't have that much cash, Cap'n.`);
        }
        break;
      case 'withdrawl':
        if (finances.bank >= amount) {
          finances.bank -= amount;
          finances.cash += amount;
        }
        else {
          alert(`Not enough in the bank.`);
        }
        break;
      case 'payment':
        if (finances.debt >= amount) {
          if (finances.cash >= amount) {
            finances.cash -= amount;
            finances.debt -= amount;
          }
          else {
            alert(`Not enough cash for that, Cap'n.`);
          }
        }
        else {
          alert(`That's more than we owe, Cap'n`);
        }
        break;
      }
      updateFinances();
  }
  else {
    alert(`How much, or should I guess?`);
  }
}

function updateSelectedItem(name, value) {
  let choices = document.getElementsByName(name);
  for (let i=0; i<choices.length; i++) {
    if (choices[i].value == value) {
      choices[i].checked = true;
      choices[i].parentElement.parentElement.classList.add('highlight');
    }
    else {
      choices[i].checked = false;
      choices[i].parentElement.parentElement.classList.remove('highlight');
    }
  }
}

function updateCargo() {

  // Update prices on items in the cargo hold. 
  let cargoConsumerPrice = document.getElementById('cargo-consumer-price');
  let cargoFoodPrice = document.getElementById('cargo-food-price');
  let cargoOrePrice = document.getElementById('cargo-ore-price');
  let cargoHeavyPrice = document.getElementById('cargo-heavy-price');
  cargoConsumerPrice.innerHTML = currentProductPrices[0];
  cargoFoodPrice.innerHTML = currentProductPrices[1];
  cargoOrePrice.innerHTML = currentProductPrices[2];
  cargoHeavyPrice.innerHTML = currentProductPrices[3];

  // Update quantities for items in the cargo hold.
  let cargoConsumerQuantity = document.getElementById('cargo-consumer-quantity');
  let cargoFoodQuantity = document.getElementById('cargo-food-quantity');
  let cargoOreQuantity = document.getElementById('cargo-ore-quantity');
  let cargoHeavyQuantity = document.getElementById('cargo-heavy-quantity');
  cargoConsumerQuantity.innerHTML = ship.cargoHold[0];
  cargoFoodQuantity.innerHTML = ship.cargoHold[1];
  cargoOreQuantity.innerHTML = ship.cargoHold[2];
  cargoHeavyQuantity.innerHTML = ship.cargoHold[3];

  // Update total cargo capacity for the ship.
  let cargoSummary = document.getElementById('cargo-summary');
  let cargoTotal = 0;
  for (let i=0; i<ship.cargoHold.length; i++) {
    cargoTotal += ship.cargoHold[i];
  }
  cargoSummary.innerHTML = `${cargoTotal}/${ship.cargoCapacity} TEU`;
}

/* Buy Cargo */
function buyCargo(itemSelectorName, amount) {
  let cargoItems = document.getElementsByName(itemSelectorName);
  let cargoItemToBuy = 0;

  // Find out which cargo item is selected by looking for a 'checked' radio button.
  for (let i=0; i<cargoItems.length; i++) {
    if (cargoItems[i].checked) {
      cargoItemToBuy = i;
    }
  }

  // This only works if the player filled in the amount.
  if (amount) {

    // Add up how much cargo is currently in the hold.
    let cargoSpaceAvailable = ship.cargoCapacity;
    for (let i=0; i<ship.cargoHold.length; i++) {
      cargoSpaceAvailable -= ship.cargoHold[i];
    }

    // See if there's room for for the amount of cargo the player wants to buy.
    if (cargoSpaceAvailable >= amount) {
      let totalCost = currentProductPrices[cargoItemToBuy] * amount;
      if (totalCost <= finances.cash) {
        ship.cargoHold[cargoItemToBuy] += amount;
        finances.cash -= totalCost;
      }
      else {
        alert(`Sorry, Cap'n. ${finances.cash} just isn't enough to cover it.`);
      }
    }
    else {
      alert('Not enough room for that much cargo.');
    }
    updateCargo();
    updateFinances();
  }
  else {
    alert(`Hey, Cap'n, I'm not a mind reader here.\nHow many units of ${products[cargoItemToBuy].name} did you want?`);
  }
}

/* Sell Cargo */
function sellCargo(itemSelectorName, amount) {
  let cargoItems = document.getElementsByName(itemSelectorName);
  let cargoItemToSell = 0;

  // Find out which cargo item is selected by looking for a 'checked' radio button.
  for (let i=0; i<cargoItems.length; i++) {
    if (cargoItems[i].checked) {
      cargoItemToSell = i;
    }
  }

  // Just like buying, it only works if there's an amount given.
  if (amount) {

    // Make the transaction.
    if (amount <= ship.cargoHold[cargoItemToSell]) {
      let totalSale = currentProductPrices[cargoItemToSell] * amount;
      ship.cargoHold[cargoItemToSell] -= amount;
      finances.cash += totalSale;
    }
    else {
      alert(`No can do there, Cap'n.\nThere aren't ${amount} ${products[cargoItemToSell].name} in the cargo hold.`);
    }
  }
  else {
    alert(`Hey Cap'n, you want to tell me how much ${products[cargoItemToSell].name} we're selling, or you want I should guess?`);
  }
  // Update information on screen.
  updateCargo();
  updateFinances();
}

/* Calculate a price for each of the products players can buy. */
function calculateCargoPrices() {
  let numberOfProducts = products.length;
  for(i=0; i<numberOfProducts; i++) {
    let dieNumber = rollDie(6);
    let fibNumber = fibonacciBell[dieNumber];
    let basePrice = products[i].medianPrice / 2;
    currentProductPrices[i] = basePrice * fibNumber;
  }
  updateCargo();
}

/* Display the number of rail guns and the current shield percentage. */
function updateDefenses() {
  let railguns = document.getElementById('defenses-railguns');
  let shields = document.getElementById('defenses-shields');
  let summary = document.getElementById('defenses-summary');
  let condition = ['POOR', 'FAIR', 'GOOD'];
  railguns.innerHTML = ship.guns;
  shields.innerHTML = `${ship.shieldStrength}%`;
  summary.innerHTML = condition[ship.guns];

  // If the ship is toast, take away the ability to navigate.
  if (ship.shieldStrength <= 0) {
    summary.innerHTML = 'TOAST';
    alert(`It's been a pleasure serving with you, Cap'n. See you on the other side.`);
    clearTimeout(flightTime);
  }
}

/* Roll to see if there's any asteroid activity that could cause damage.
   The ammount of damage depends on rail gun and shield condition. The
   chance of encounter doubles around Ceres (in the asteroid belt.)
*/
function encounterAsteroid(heading) {
  let sidesOnDie = 20;
  if (locations[heading].portCode == 'CER') {
    sidesOnDie /= 2;
  }

  // Roll for a 1 in 20 (or 1 in 10) chance of an asteroid encounter.
  if (rollDie(sidesOnDie) == 1) {
    setImage('asteroids.png');
    if (ship.guns > 0) {
      alert(`Asteroids ahead, Cap'n!  Rail gun swinging into firing position.`);

      // Roll for 1 in 100 chance of an asteroid taking out one of the rail guns.
      if(rollDie(100) == 1) {
        alert("Arrgh, we lost a gun, Cap'n.");
        ship.guns--;
      }

      // Otherwise, roll to what got past the ships defenses. More operational
      // rail guns means less chance of getting hit.
      else {
        switch(ship.guns) {
          case 0:
            hitPercent = rollDie(50);
            break;
          case 1:
            hitPercent = rollDie(25);
            break;
          default:
            hitPercent = rollDie(10);
            break;
        }

        // Reduce shield strength, but not lower than zero.
        ship.shieldStrength = Math.max(ship.shieldStrength - hitPercent, 0);
        alert(`A couple got through, Cap'n. Shields are down to ${ship.shieldStrength}%`);
      }
    }
    updateDefenses();
  }
}

/*
  Roll the die to see if there's a solar storm and if so, return the
  new port number. Otherwise, return the original heading as if nothing
  ever happened.
*/
function encounterStorm(heading) {
  currentHeading = heading;
  if (rollDie(10) == 0) {
    heading = rollDie(6) + 1;
    if (heading != currentHeading) {
      alert(`A solar storm has blown us off course to ${locations[heading].name}.`)
    }
  }
  return heading;
}

// The player risks being robbed if carrying too much cash around. 
function encounterRobber(port) {
  if (finances.cash > 100000) {
    let sidesOnDie = 20;
    if (locations[port].portCode == 'MRS') {
      sidesOnDie /= 2;
    }
    if (rollDie(sidesOnDie) == 1) {
      alert(`Bad news, Cap'n. We've been robbed!`);
      let percentLost = rollDie(100);
      let cashLost = Math.round(finances.cash * percentLost / 100);
      alert(`We lost ${cashLost} in cash.`);
      finances.cash -= cashLost;
    }
  }
}

// Show or hide navigation buttons for state = block / state = none.
function toggleNavigation(state) {
  let navButtons = document.getElementById('helm-nav-buttons').children;
  for (let i=0; i<navButtons.length; i++) {
    if (state == 'on') {
      navButtons[i].removeAttribute('disabled');
    }
    else if (state == 'off') {
      navButtons[i].setAttribute('disabled', true);
    }
  }
}

function updateLocation(newLocation) {
  if (newLocation != ship.location) {
    let helmPortCode = document.getElementById('helm-port-code');
    let helmLocationName = document.getElementById('helm-location-name');
    toggleNavigation('off');

    // Show the in-flight starfield while traveling.
    ship.location = 0;
    setImage('starfield.png');
    helmPortCode.innerHTML = locations[ship.location].portCode;
    helmLocationName.innerHTML = locations[ship.location].name;
    encounterAsteroid(newLocation);

    // After a 'flight time' delay, update with new picture and info.
    // Keep the return code from setTimeout so we can cancel it if needed. 
    var flightTime = setTimeout(function () {
      newLocation = encounterStorm(newLocation);
      ship.location = newLocation;
      encounterRobber(ship.location);
      applyInterest();
      calculateCargoPrices();
      updateNews();
      setImage(locations[newLocation].image);
      helmPortCode.innerHTML = locations[newLocation].portCode;
      helmLocationName.innerHTML = locations[newLocation].name;
      toggleNavigation('on');
    }, 3000);
  }
}