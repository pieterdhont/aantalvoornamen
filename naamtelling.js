"use strict"

const naamTellingen = {};

document.getElementById("voegToe").onclick = () => {
  const naamInvoer = document.getElementById("naamInvoer").value;
  updateNaamTelling(naamInvoer);
  toonTellingen();

};

function updateNaamTelling(naam) {
  naamTellingen[naam] ? naamTellingen[naam]++ : naamTellingen[naam] = 1;
}
 
function toonTellingen() {
  const lijstElement = document.getElementById("naamTellingenLijst");
  lijstElement.innerHTML = '';
  for (const naam in naamTellingen) {
  const lijstItem = document.createElement("li");
  lijstItem.innerText = `${naam}: ${naamTellingen[naam]}`;
  lijstElement.appendChild(lijstItem);
  }
}
 

// Nog een tweede versie, na wat opzoekwerk. Meer gecomprimeerd, maar minder leesbaar/modulair

// "use strict";

// const naamTellingen = {};

// document.getElementById('voegToeKnop').onclick = () => {
//   const naam = document.getElementById("naamInvoer").value;
//   naamTellingen[naam] = (naamTellingen[naam] || 0) + 1;
//   console.log(naamTellingen);
//   document.getElementById('naamTellingenLijst').innerHTML = Object.entries(naamTellingen)
//     .map(([naam, teller]) => `<li>${naam}: ${teller}</li>`)
//     .join('');
//   document.getElementById("naamInvoer").value = "";
// }; 



