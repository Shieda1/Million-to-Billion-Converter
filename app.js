// https://www.omnicalculator.com/conversion/million-to-billion

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const billionRadio = document.getElementById('billionRadio');
const millionRadio = document.getElementById('millionRadio');
const fullnumberRadio = document.getElementById('fullnumberRadio');

let billion;
let million = v;

// labels of the inpust
const variable = document.getElementById('variable');

billionRadio.addEventListener('click', function() {
  variable.textContent = 'Million';
  million = v;
  result.textContent = '';
});

millionRadio.addEventListener('click', function() {
  variable.textContent = 'Billion';
  billion = v;
  result.textContent = '';
});

fullnumberRadio.addEventListener('click', function() {
  variable.textContent = 'Million';
  million = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(billionRadio.checked)
    result.textContent = `Billion = ${computebillion().toFixed(2)}`;

  else if(millionRadio.checked)
    result.textContent = `Million = ${computemillion().toFixed(2)}`;

  else if(fullnumberRadio.checked)
    result.textContent = `Full number = ${computefullnumber().toFixed(2)}`;
})

// calculation

function computebillion() {
  return Number(million.value) / 1000;
}

function computemillion() {
  return Number(billion.value) * 1000;
}

function computefullnumber() {
  return Number(million.value) * 1000000;
}