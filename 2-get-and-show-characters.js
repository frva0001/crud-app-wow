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
            <h3>Name: ${character.characterName}<h3>
            <h3>Class: ${character.class}<h3>
            <h3>Role: ${character.role}<h3>
            <h3>Spec: ${character.spec}<h3>
            <h3>Faction: ${character.faction}<h3>
            <h3>Race: ${character.race}<h3>
            <h3>Level: ${character.level}<h3>
            <h3>Ilvl: ${character.itemLevel}<h3>
            <h3>Country: ${character.country}<h3>
            ${isActive(character)}
            <h3>Battletag: ${character.battletag}<h3>
            <button class="btn-update-character">Update character</button>
            <button class="btn-delete-character">Delete character</button>
        </article>
    `;

  function isActive(character) {
    let html1 = "";
    if (character.activities.leveling) {
      html1 += `<p>Leveling and BFA Dungeons</p>`;
    }
    if (character.activities.questing) {
      html1 += `<p>Questing</p>`;
    }
    if (character.activities.mythicPlus1) {
      html1 += `<p>Mythic Plus Key 0-10</p>`;
    }
    if (character.activities.mythicPlus2) {
      html1 += `<p>Mythic Plus Key 10-15</p>`;
    }
    if (character.activities.mythicPlus3) {
      html1 += `<p>Mythic Plus Key 15-20</p>`;
    }
    if (character.activities.mythicPlus4) {
      html1 += `<p>Mythic Plus Key 20 and above</p>`;
    }
    if (character.activities.raid1) {
      html1 += `<p>Normal Vault of the Incarnates</p>`;
    }
    if (character.activities.raid2) {
      html1 += `<p>Heroic Vault of the Incarnates</p>`;
    }
    if (character.activities.raid3) {
      html1 += `<p>Mythic Vault of the Incarnates</p>`;
    }
    if (character.activities.pvp1) {
      html1 += `<p>Battelgrounds 10v10, 15v15</p>`;
    }
    if (character.activities.pvp2) {
      html1 += `<p>Arenas 2v2, 3v3</p>`;
    }
    if (character.activities.transmogsAndMounts) {
      html1 += `<p>Transmog hunting and Mount farming</p>`;
    }

    return html1;
  }
  document.querySelector("#characters").insertAdjacentHTML("beforeend", html);

  //event listeners to btns
  document
    .querySelector("#characters article:last-child .btn-update-character")
    .addEventListener("click", () => updateClicked(character));
  document
    .querySelector("#characters article:last-child .btn-delete-character")
    .addEventListener("click", () => deleteClicked(character));

  // function updateClicked() {
  //   console.log("test");
  //   const update = document.querySelector("#form-update-character");

  //   update.updateName.value = character.characterName;
  //   update.updateRace.value = character.race;
  //   update.updateFaction.value = character.title;
  //   update.updateClass.value = character.class;
  //   update.updateSpecialization.value = character.specialization;
  //   update.updateRole.value = character.role;
  //   update.updateItemLevel.value = character.itemLevel;
  //   update.updateLevel.value = character.level;
  //   update.updateCountry.value = character.country;
  //   update.updateBattletag.value = character.battletag;

  //   update.setAttribute("data-id", character.id);
  //   document.querySelector("#dialog-update-character").showModal();
  // }

  //  function deleteClicked() {
  //     const deletePost = document.querySelector("#form-delete-post");

  //     deletePost.setAttribute("data-id", character.id);
  //     document.querySelector("#dialog-delete-post").showModal();
  //  }
}

function showCharacters(allCharacters) {
  document.querySelector("#characters").innerHTML = "";

  for (const character of allCharacters) {
    showCharacter(character);
  }
}
