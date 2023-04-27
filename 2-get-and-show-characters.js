"use strict";

console.log("hej2");

let characters;

// fetch our character-data

async function getCharacters() {
   const response = await fetch(`${endpoint}/characters.json`);
   const data = await response.json();
   const characters = prepareData(data);
   return characters;
}

function showCharacter(character) {
   const html = /* html */ `
        <article class="character-grid-item">
            <h3>${character.id}<h3>
        </article>
    `;

   document.querySelector("#characters").insertAdjacentHTML("beforeend", html);
}

function showCharacters(allCharacters) {
   document.querySelector("#characters").innerHTML = "";

   for (const character of allCharacters) {
      showCharacter(character);
   }
}
