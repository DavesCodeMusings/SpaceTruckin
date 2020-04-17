shipName = '';

ports = [
  'Shreveport Space Elevator, Earth',
  'New Shanghai FTZ, Luna',
  'BNARMA Municipal Docks, Venus',
  'UAC Cargo Terminal, Mars',
  'Ceres Station',
  'Sommolier Outpost, Ganymede',
  'People\'s Republic of Titan'
];

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function randomHeadline() {
  let frontPage = [
    'Landing attempted on Europa. No telemetry since.',
    'Paul Atreides appointed Duke of Arrakis.',
    'Jedi Council cancels tour citing artistic differences.',
    'Dr. Hans Zarkov creates revolutionary new rocket.',
    'Panem loses bid to host upcoming Summer Games.',
    'Sirius Cybernetics Corporation files for Chapter 11.',
    'Civil case filed against Dr. Wellington Yueh.',
    'Union Aerospace Company Mars contract expanded.',
    'Supercomputer HAL9000 records album, tours Japan.',
    'Object thought to be moon is actually space station.',
    'Starfleet admiral seeks Genesis device.',
    'Chicago CTA ridership up despite society\'s collapse.',
    'Remaining members of the Eagles thawed out for tour.',
    'Story of secret star system revealed by French robots.',
    'Marine expeditionary unit deployed to quell Phobos unrest.',
    'Hong Kong Cavaliers sell out Wembley Arena in 5 nanseconds.',
    'Major Motoko Kusanagi appointed head of security forces.',
    'FDA investigates Soylent Green after public outcry.',
    'Bootsy Collins elected Speaker of the House.',
    'Press secretary denies president attacked own image in mirror.',
    'Universe credits paleo diet as reason for slowing expansion.',
    'Apophis returns, quite unhappy with how things run in absense.'
  ];

  headline = 'Slow day at the news desk.';

  // Roll an imaginary die to decide if anything is newsworthy today.
  // Rolling a one will return a headline (a one in six chance.)
  // Dice have 1 - 6, our randomizer returns 0 - 5, same probability.
  if (randomNumber(5) == 1) {
    let index = randomNumber(frontPage.length);
    headline = frontPage[index];
  }
  document.write(headline);
}

function priceFluctuation() {
  let products = [
    'Consumer Goods',
    'Foodstuffs',
    'Ore & Minerals',
    'Heavy Equipment'
  ];

}

function registerShipName(element) {
  let shipsName = '';
  let children = element.childNodes;
  for (let i=1; i<children.length; i++) {
    if (children[i].id == "name-input") {
      shipsName = children[i].value;
    }
  }
  element.innerHTML = shipsName;
}

function revealHidden(element) {
  element.style.display = 'block';
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