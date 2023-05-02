"use strict";
function updateClicked(character) {
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

function updateCharacterClicked(event) {
   console.log("test");
   event.preventDefault();
   const form = event.target;
   const id = form.getAttribute("data-id");
   console.log(event, "eventi g mtha gjendi");
   if (event.submitter.innerHTML === "Update Character") {
      updateCharacter(id);
   }
   document.querySelector("#dialog-update-character").close();
}

async function updateCharacter(id) {
   const elements = document.querySelector("#form-update-character").elements;

   const character = {
      characterName: elements.updateName.value,
      race: elements.updateRace.value,
      faction: elements.updateFaction.value,
      class: elements.updateClass.value,
      spec: elements.updateSpecialization.value,
      role: elements.updateRole.value,
      itemLevel: elements.updateItemLevel.value,
      level: elements.updateLevel.value,
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
      country: elements.updateCountry.value,
      battletag: elements.updateBattletag.value,
   };

   const json = JSON.stringify(character);
   const response = await fetch(`${endpoint}/characters/${id}.json`, {
      method: "PUT",
      body: json,
   });

   if (response.ok) {
      console.log("character updated!");
      showCharacterGrid();
   }
   console.log(character);
}
