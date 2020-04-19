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
  0: { 'portCode': '', 'name': 'In Transit' },
  1: { 'portCode': 'ETH', 'name': 'Shreveport Space Elevator, Earth' },
  2: { 'portCode': 'LUN', 'name': 'New Shanghai FTZ, Luna' },
  3: { 'portCode': 'VEN', 'name': 'BNARMA Municipal Docks, Venus' },
  4: { 'portCode': 'MRS', 'name': 'UAC Cargo Terminal, Mars' },
  5: { 'portCode': 'CER', 'name': 'Ceres Station' },
  6: { 'portCode': 'GAN', 'name': 'Jupiter Outpost, Ganymede' },
  7: { 'portCode': 'TTN', 'name': 'H. Boone Spaceport, Titan' }
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

/* The Ship */
function registerShip(name) {
  ship.name = name;
}

function updateShipInfo() {
  document.getElementById('ship-name').innerHTML = ship.name;
}

function updateFinances() {
  document.getElementById('finances-cash').innerHTML = '$' + finances.cash;
  document.getElementById('finances-bank').innerHTML = '$' + finances.bank;
  document.getElementById('finances-debt').innerHTML = '$' + finances.debt;
}



/*
 *   Randomness for game play.
 */

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

/*
  Fibonacci and 2's power sequences will magnify the power of the die roll.
  To use, do: outcome = fibonacci[rollDie(n)]; where n is less than 12.
*/
const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
const twosPower = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]

/*
  Product prices fluxuate.  For example, food is grown easily on Earth
  and becomes more expensive farther away. Most consumer goods come from
  Mars, ore from Ceres, heavy equipment from Titan. Factor the distance
  from these centers of production into pricing. Add a bit of randomness
  on top of that and you get a more realistic feeling game.
*/
function calculatePricing(product, location) {
  let locationIncrease = Math.abs(location - products[product].location) * 0.1 * products[product].price;
  let marketFluctuation = rollfibonacciDie() ;
  let localPrice = products[product].price + locationIncrease;

  return localPrice;
}

function randomHeadline() {
  let frontPage = [
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

  headline = 'Slow day at the news desk.';

  // Roll an imaginary die to decide if anything is newsworthy today.
  // Rolling a one will return a headline (a one in six chance.)
  // Dice have 1 - 6, our randomizer returns 0 - 5, same probability.
  if (rollDie(6) == 1) {
    let index = rollDie(frontPage.length) - 1;
    headline = frontPage[index];
  }  
  document.write(headline);
}

function selectItem(name, value) {
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