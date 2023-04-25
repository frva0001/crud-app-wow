"use strict";

window.addEventListener("load", start);

function start() {
   document.querySelector("#completeForm").addEventListener("submit", addCharacter);
}

function addCharacter(event) {
   event.preventDefault();

   // const for all elements in the form

   const elements = document.querySelector("#completeForm").elements;

   function checkValue(object) {
      if (object.checked) {
         return object.value;
      } else {
         return "";
      }
   }

   const character = {
      characterName: elements.characterName.value,
      race: elements.race.value,
      side: elements.side.value,
      class: elements.class.value,
      spec: elements.spec.value,
      role: elements.role.value,
      itemLevel: elements.itemLevel.value,
      level: elements.level.value,
      activities: {
         leveling: checkValue(leveling),
         questing: checkValue(questing),
         mythicPlus1: checkValue(mythicPlus1),
         mythicPlus2: checkValue(mythicPlus2),
         mythicPlus3: checkValue(mythicPlus3),
         mythicPlus4: checkValue(mythicPlus4),
         raid1: checkValue(raid1),
         raid2: checkValue(raid2),
         raid3: checkValue(raid3),
         pvp1: checkValue(pvp1),
         pvp2: checkValue(pvp2),
         transmogsAndMounts: checkValue(transmogsAndMounts),
      },
      activities1: {
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

   console.log(character);
   console.log(character.activities.leveling);
   console.log(character.activities.questing);
}
