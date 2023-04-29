"use strict";

console.log("hej3");

displayData();

function showAddCharacterDialog() {
   document.querySelector("#dialog-add-character").showModal();
}

function addCharacterClicked(event) {
   event.preventDefault();

   const form = document.querySelector("#form-add-character");

   addCharacter();
   form.reset();
   document.querySelector("#dialog-add-character").close();
}

async function addCharacter() {
   const elements = document.querySelector("#form-add-character").elements;

   const character = {
      characterName: elements.characterName.value,
      race: elements.race.value,
      faction: elements.faction.value,
      class: elements.class.value,
      spec: elements.specialization.value,
      role: elements.role.value,
      itemLevel: elements.itemLevel.value,
      level: elements.level.value,
      activities: {
         leveling: elements.leveling.checked,
         questing: elements.questing.checked,
         mythicPlus1: elements.mythicPlus1.checked,
         mythicPlus2: elements.mythicPlus2.checked,
         mythicPlus3: elements.mythicPlus3.checked,
         mythicPlus4: elements.mythicPlus4.checked,
         raid1: elements.raid1.checked,
         raid2: elements.raid2.checked,
         raid3: elements.raid3.checked,
         pvp1: elements.pvp1.checked,
         pvp2: elements.pvp1.checked,
         transmogsAndMounts: elements.transmogsAndMounts.checked,
      },
      country: elements.country.value,
      battletag: elements.battletag.value,
   };

   const json = JSON.stringify(character);
   const response = await fetch(`${endpoint}/characters.json`, {
      method: "POST",
      body: json,
   });

   if (response.ok) {
      console.log("new character added!");
      showCharacterGrid();
   }
   console.log(character);
}
