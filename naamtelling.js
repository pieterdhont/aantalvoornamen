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




