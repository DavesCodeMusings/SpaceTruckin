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