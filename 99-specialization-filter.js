"use strict";

function choice() {
   const firstChoice = document.querySelector("#class");
   const secondChoice = document.querySelector("#specialization");
   const optionGroups = document.getElementsByTagName("optgroup");

   secondChoice.style.display = "none";
   secondChoice.value = "";

   for (let i = 0; i < optionGroups.length; i++) {
      optionGroups[i].style.display = "none";
   }

   if (firstChoice.value === "warrior") {
      optionGroups[0].style.display;
   } else if (firstChoice.value === "paladin") {
      document.querySelector("#optionsPaladin").style.display = "";
   } else if (firstChoice.value === "hunter") {
      document.querySelector("#optionsHunter").style.display = "";
   } else if (firstChoice.value === "rogue") {
      document.querySelector("#optionsRogue").style.display = "";
   } else if (firstChoice.value === "priest") {
      document.querySelector("#optionsPriest").style.display = "";
   } else if (firstChoice.value === "shaman") {
      document.querySelector("#optionsShaman").style.display = "";
   } else if (firstChoice.value === "mage") {
      document.querySelector("#optionsMage").style.display = "";
   } else if (firstChoice.value === "warlock") {
      document.querySelector("#optionsWarlock").style.display = "";
   } else if (firstChoice.value === "monk") {
      document.querySelector("#optionsMonk").style.display = "";
   } else if (firstChoice.value === "druid") {
      document.querySelector("#optionsDruid").style.display = "";
   } else if (firstChoice.value === "demonHunter") {
      document.querySelector("#optionsDemonHunter").style.display = "";
   } else if (firstChoice.value === "deathKnight") {
      document.querySelector("#optionsDeathKnight").style.display = "";
   } else if (firstChoice.value === "evoker") {
      document.querySelector("#optionsEvoker").style.display = "";
   } else {
      secondChoice.style.display = "";
   }
}
