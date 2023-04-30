"use strict";

function updateCharacterClicked(event) {
   console.log("test");
   event.preventDefault();
   const form = event.target;
   const id = form.getAttribute("data-id");
   updateCharacter(id);
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
