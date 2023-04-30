"use strict";

console.log("hej0");

window.addEventListener("load", start);

// constant for our data

const endpoint = "https://wowdatabase-2b91f-default-rtdb.europe-west1.firebasedatabase.app";

function start() {
   showClassGrid();
   showCharacterGrid();

   // all click events gets added here eventually.
   document.querySelector("#btn-add-character").addEventListener("click", showAddCharacterDialog);
   document.querySelector("#form-add-character").addEventListener("submit", addCharacterClicked);
   document.querySelector("#form-update-character").addEventListener("submit", updateCharacterClicked);
}

// putting our data into an array (always necessary)

function prepareData(dataObject) {
   const array = [];
   for (const key in dataObject) {
      const object = dataObject[key];
      object.id = key;
      array.push(object);
   }
   return array;
}

async function showClassGrid() {
   wowClasses = await getClasses();
   showClasses(wowClasses);
}

async function showCharacterGrid() {
   characters = await getCharacters();
   showCharacters(characters);
}
