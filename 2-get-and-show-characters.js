"use strict";

console.log("hej2");

let characters;
console.log(characters);
// fetch our character-data

async function getCharacters() {
  const response = await fetch(`${endpoint}/characters.json`);
  const data = await response.json();
  const characters = prepareData(data);
  console.log(characters);
  return characters;
}

//Når du opdaterer denne function, kan du så copy-paste den ind i filter.js?
function showCharacter(character) {
  const html = /* html */ `
        <article class="character-grid-item">
            <h3>${character.id}<h3>
            <p>${character.characterName}<h3>
            <button class="btn-update-character">Update character</button>
            <button class="btn-delete-character">Delete character</button>
        </article>
    `;

  document.querySelector("#characters").insertAdjacentHTML("beforeend", html);

  //event listeners to btns
  document
    .querySelector("#characters article:last-child .btn-update-character")
    .addEventListener("click", updateClicked);
  document
    .querySelector("#characters article:last-child .btn-delete-character")
    .addEventListener("click", deleteClicked);

  function updateClicked() {
    console.log("test");
    const update = document.querySelector("#form-update-character");

    update.updateName.value = character.characterName;
    update.updateRace.value = character.race;
    update.updateFaction.value = character.title;
    update.updateClass.value = character.class;
    update.updateSpecialization.value = character.specialization;
    update.updateRole.value = character.role;
    update.updateItemLevel.value = character.itemLevel;
    update.updateLevel.value = character.level;
    update.updateCountry.value = character.country;
    update.updateBattletag.value = character.battletag;

    update.setAttribute("data-id", character.id);
    document.querySelector("#dialog-update-character").showModal();
  }

  function deleteClicked() {
    const deletePost = document.querySelector("#form-delete-post");

    deletePost.setAttribute("data-id", character.id);
    document.querySelector("#dialog-delete-post").showModal();
  }
}

function showCharacters(allCharacters) {
  document.querySelector("#characters").innerHTML = "";

  for (const character of allCharacters) {
    showCharacter(character);
  }
}
