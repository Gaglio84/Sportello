let comuniJSON = [];
let nazioniJSON = [];
let comuniAsiloJSON = [];

// Fetch dei comuni
fetch('comuni.json')
  .then(response => response.json())
  .then(comuni => {
    comuniJSON = comuni;
    console.log('Dati comuni ricevuti:', comuni);
    populateComuni(comuni);
  })
  .catch(error => console.error('Errore nel caricamento dei comuni:', error));

// Fetch delle nazionalità
fetch('nazioni.json')
  .then(response => response.json())
  .then(nazioni => {
    nazioniJSON = nazioni;
    console.log('Dati nazionalità ricevuti:', nazioni);
    populateNazionalita(nazioni);
  })
  .catch(error => console.error('Errore nel caricamento delle nazionalità:', error));

// Fetch del file locale per i comuni di richiesta asilo
fetch("comuni_asilo.txt")
  .then(response => response.text())
  .then(txt => {
    const rows = txt.split("\n").map(row => row.split(","));
    //rows.shift(); // Rimuove l'intestazione
    comuniAsiloJSON = rows.map(row => ({ codice: row[0], nome: row[1] })).filter(comune => comune.nome);
    populateComuneAsilo(comuniAsiloJSON);
  })
  .catch(error => console.error("Errore nel caricamento del file comuni_asilo.txt:", error));

// Popola il dropdown dei comuni
function populateComuni(comuni) {
  const comuniSelect = document.getElementById('comuni');
  comuniSelect.innerHTML = '<option hidden>Seleziona un comune</option>';
  comuni.forEach(comune => {
    const option = document.createElement("option");
    option.value = comune.id;
    option.text = comune.nome;
    comuniSelect.appendChild(option);
  });
}

// Popola il dropdown delle nazionalità
function populateNazionalita(nazioni) {
  const nationalitySelect = document.getElementById("nazionalita");
  nationalitySelect.innerHTML = '<option value="" hidden>Seleziona una nazionalità</option>';
  Object.entries(nazioni).forEach(([nazione, info]) => {
    const option = document.createElement("option");
    option.value = info.code;
    option.text = nazione;
    nationalitySelect.appendChild(option);
  });
}

// Popola il dropdown dei comuni di richiesta asilo
function populateComuneAsilo(comuni) {
  const comuneSelect = document.getElementById("comuneAsilo");
  comuneSelect.innerHTML = '<option value="" hidden>Seleziona un comune di richiesta asilo</option>';
  comuni.forEach(comune => {
    const option = document.createElement("option");
    option.value = comune.codice;
    option.text = comune.nome;
    comuneSelect.appendChild(option);
  });
}
