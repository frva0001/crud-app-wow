"use strict";
window.addEventListener("load", start);

function start() {
  allPreFilterEvents();
  getCharacters();
}

async function getCharacters() {
  const response = await fetch(`${endpoint}/characters.json`);
  const data = await response.json();
  const characters = prepareData(data);
  console.log(characters);
  return characters;
}

// function showCharacter(character) {
//    const html = /* html */ `
//         <article class="character-grid-item">
//             <h3>${character.id}<h3>
//             <button class="btn-update-character">Update character</button>
//             <button class="btn-delete-character">Delete character</button>
//         </article>
//     `;

//    document.querySelector("#characters").insertAdjacentHTML("beforeend", html);
// }

function allPreFilterEvents() {
  //    const checkboxes = document.querySelectorAll("input[type='checkbox']");
  //    checkboxes.forEach((checkbox) => {
  //       checkbox.addEventListener("click", (event) => {
  //          if (event.target.checked) {
  //             checkboxes.forEach((otherCheckbox) => {
  //                if (otherCheckbox !== checkbox) {
  //                   otherCheckbox.checked = false;
  //                }
  //             });
  //          }
  //       });
  //    });
  preFilterLeveling();
  preFilterQuesting();
  preFilterMythicPlus1();
  preFilterMythicPlus2();
  preFilterMythicPlus3();
  preFilterMythicPlus4();
  preFilterRaid1();
  preFilterRaid2();
  preFilterRaid3();
  preFilterPVP1();
  preFilterPVP2();
  preFilterTransmogAndMounts();
}

function preFilterLeveling() {
  const checkbox = document.getElementById("filterLeveling");
  checkbox.addEventListener("change", async (event) => {
    if (event.target.checked) {
      console.log("Checkbox is checked");
      const leveledCharacters = await filterLeveling();
      showCharacters(leveledCharacters);
      uncheckAllOthers();
    } else {
      console.log("Checkbox is unchecked");
      const allCharacters = await getCharacters();
      showCharacters(allCharacters);
    }
  });
}

async function filterLeveling() {
  console.log("functionleveling");
  const response = await fetch(`${endpoint}/characters.json`);
  const data = await response.json();
  const characters = prepareData(data);

  const leveledCharacters = characters.filter(
    (character) => character.activities.leveling
  );
  console.log(leveledCharacters);
  return leveledCharacters;
}

function preFilterQuesting() {
  const checkbox = document.getElementById("filterQuesting");
  checkbox.addEventListener("change", async (event) => {
    if (event.target.checked) {
      uncheckAllOthers();
      console.log("Checkbox is checked");
      const questingCharacters = await filterQuesting();
      showCharacters(questingCharacters);
    } else {
      console.log("Checkbox is unchecked");
      const allCharacters = await getCharacters();
      showCharacters(allCharacters);
    }
  });
}

async function filterQuesting() {
  console.log("functionQuesting");
  const response = await fetch(`${endpoint}/characters.json`);
  const data = await response.json();
  const characters = prepareData(data);

  const questingCharacters = characters.filter(
    (character) => character.activities.questing
  );
  console.log(questingCharacters);
  return questingCharacters;
}

function showCharacters(characters) {
  clearCharacters();

  characters.forEach((character) => {
    showCharacter(character);
  });
}

function clearCharacters() {
  document.querySelector("#characters").innerHTML = "";
}

function preFilterMythicPlus1() {
  const checkbox = document.getElementById("filterMythicPlus1");
  checkbox.addEventListener("change", async (event) => {
    if (event.target.checked) {
      uncheckAllOthers();
      console.log("Checkbox is checked");
      const mythicPlus1Characters = await filterMythicPlus1();
      showCharacters(mythicPlus1Characters);
    } else {
      console.log("Checkbox is unchecked");
      const allCharacters = await getCharacters();
      showCharacters(allCharacters);
    }
  });
}

async function filterMythicPlus1() {
  console.log("functionleveling");
  const response = await fetch(`${endpoint}/characters.json`);
  const data = await response.json();
  const characters = prepareData(data);

  const mythicPlus1Characters = characters.filter(
    (character) => character.activities.mythicPlus1
  );
  console.log(mythicPlus1Characters);
  return mythicPlus1Characters;
}

function preFilterMythicPlus2() {
  const checkbox = document.getElementById("filterMythicPlus2");
  checkbox.addEventListener("change", async (event) => {
    if (event.target.checked) {
      uncheckAllOthers();
      console.log("Checkbox is checked");
      const mythicPlus2Characters = await filterMythicPlus2();
      showCharacters(mythicPlus2Characters);
    } else {
      console.log("Checkbox is unchecked");
      const allCharacters = await getCharacters();
      showCharacters(allCharacters);
    }
  });
}

async function filterMythicPlus2() {
  console.log("functionleveling");
  const response = await fetch(`${endpoint}/characters.json`);
  const data = await response.json();
  const characters = prepareData(data);

  const mythicPlus2Characters = characters.filter(
    (character) => character.activities.mythicPlus2
  );
  console.log(mythicPlus2Characters);
  return mythicPlus2Characters;
}

function preFilterMythicPlus3() {
  const checkbox = document.getElementById("filterMythicPlus3");
  checkbox.addEventListener("change", async (event) => {
    if (event.target.checked) {
      uncheckAllOthers();
      console.log("Checkbox is checked");
      const mythicPlus3Characters = await filterMythicPlus3();
      showCharacters(mythicPlus3Characters);
    } else {
      console.log("Checkbox is unchecked");
      const allCharacters = await getCharacters();
      showCharacters(allCharacters);
    }
  });
}

async function filterMythicPlus3() {
  console.log("functionleveling");
  const response = await fetch(`${endpoint}/characters.json`);
  const data = await response.json();
  const characters = prepareData(data);

  const mythicPlus3Characters = characters.filter(
    (character) => character.activities.mythicPlus3
  );
  console.log(mythicPlus3Characters);
  return mythicPlus3Characters;
}

function preFilterMythicPlus4() {
  const checkbox = document.getElementById("filterMythicPlus4");
  checkbox.addEventListener("change", async (event) => {
    if (event.target.checked) {
      uncheckAllOthers();
      console.log("Checkbox is checked");
      const mythicPlus4Characters = await filterMythicPlus4();
      showCharacters(mythicPlus4Characters);
    } else {
      console.log("Checkbox is unchecked");
      const allCharacters = await getCharacters();
      showCharacters(allCharacters);
    }
  });
}

async function filterMythicPlus4() {
  console.log("functionleveling");
  const response = await fetch(`${endpoint}/characters.json`);
  const data = await response.json();
  const characters = prepareData(data);

  const mythicPlus4Characters = characters.filter(
    (character) => character.activities.mythicPlus4
  );
  console.log(mythicPlus4Characters);
  return mythicPlus4Characters;
}

function preFilterRaid1() {
  const checkbox = document.getElementById("filterRaid1");
  checkbox.addEventListener("change", async (event) => {
    if (event.target.checked) {
      uncheckAllOthers();
      console.log("Checkbox is checked");
      const raid1Characters = await filterRaid1();
      showCharacters(raid1Characters);
    } else {
      console.log("Checkbox is unchecked");
      const allCharacters = await getCharacters();
      showCharacters(allCharacters);
    }
  });
}

async function filterRaid1() {
  console.log("functionleveling");
  const response = await fetch(`${endpoint}/characters.json`);
  const data = await response.json();
  const characters = prepareData(data);

  const raid1Characters = characters.filter(
    (character) => character.activities.raid1
  );
  console.log(raid1Characters);
  return raid1Characters;
}

function preFilterRaid2() {
  const checkbox = document.getElementById("filterRaid2");
  checkbox.addEventListener("change", async (event) => {
    if (event.target.checked) {
      uncheckAllOthers();
      console.log("Checkbox is checked");
      const raid2Characters = await filterRaid2();
      showCharacters(raid2Characters);
    } else {
      console.log("Checkbox is unchecked");
      const allCharacters = await getCharacters();
      showCharacters(allCharacters);
    }
  });
}

async function filterRaid2() {
  console.log("functionleveling");
  const response = await fetch(`${endpoint}/characters.json`);
  const data = await response.json();
  const characters = prepareData(data);

  const raid2Characters = characters.filter(
    (character) => character.activities.raid2
  );
  console.log(raid2Characters);
  return raid2Characters;
}

function preFilterRaid3() {
  const checkbox = document.getElementById("filterRaid3");
  checkbox.addEventListener("change", async (event) => {
    if (event.target.checked) {
      uncheckAllOthers();
      console.log("Checkbox is checked");
      const raid3Characters = await filterRaid3();
      showCharacters(raid3Characters);
    } else {
      console.log("Checkbox is unchecked");
      const allCharacters = await getCharacters();
      showCharacters(allCharacters);
    }
  });
}

async function filterRaid3() {
  console.log("functionleveling");
  const response = await fetch(`${endpoint}/characters.json`);
  const data = await response.json();
  const characters = prepareData(data);

  const raid3Characters = characters.filter(
    (character) => character.activities.raid3
  );
  console.log(raid3Characters);
  return raid3Characters;
}

function preFilterPVP1() {
  const checkbox = document.getElementById("filterPvp1");
  checkbox.addEventListener("change", async (event) => {
    if (event.target.checked) {
      uncheckAllOthers();
      console.log("Checkbox is checked");
      const PVP1Characters = await filterPVP1();
      showCharacters(PVP1Characters);
    } else {
      console.log("Checkbox is unchecked");
      const allCharacters = await getCharacters();
      showCharacters(allCharacters);
    }
  });
}

async function filterPVP1() {
  console.log("functionleveling");
  const response = await fetch(`${endpoint}/characters.json`);
  const data = await response.json();
  const characters = prepareData(data);

  const pvp1Characters = characters.filter(
    (character) => character.activities.pvp1
  );
  console.log(pvp1Characters);
  return pvp1Characters;
}

function preFilterPVP2() {
  const checkbox = document.getElementById("filterPvp2");
  checkbox.addEventListener("change", async (event) => {
    if (event.target.checked) {
      uncheckAllOthers();
      console.log("Checkbox is checked");
      const PVP2Characters = await filterPVP2();
      showCharacters(PVP2Characters);
    } else {
      console.log("Checkbox is unchecked");
      const allCharacters = await getCharacters();
      showCharacters(allCharacters);
    }
  });
}
async function filterPVP2() {
  console.log("functionleveling");
  const response = await fetch(`${endpoint}/characters.json`);
  const data = await response.json();
  const characters = prepareData(data);

  const pvp2Characters = characters.filter(
    (character) => character.activities.pvp2
  );
  console.log(pvp2Characters);
  return pvp2Characters;
}

function preFilterTransmogAndMounts() {
  const checkbox = document.getElementById("filterTransmogAndMounts");
  checkbox.addEventListener("change", async (event) => {
    if (event.target.checked) {
      uncheckAllOthers();
      console.log("Checkbox is checked");
      const transmogAndMountsCharacters = await filterTransmogAndMounts();
      showCharacters(transmogAndMountsCharacters);
    } else {
      console.log("Checkbox is unchecked");
      const allCharacters = await getCharacters();
      showCharacters(allCharacters);
    }
  });
}

async function filterTransmogAndMounts() {
  console.log("functionleveling");
  const response = await fetch(`${endpoint}/characters.json`);
  const data = await response.json();
  const characters = prepareData(data);

  const transmogAndMountsCharacters = characters.filter(
    (character) => character.activities.transmogAndMounts
  );
  console.log(transmogAndMountsCharacters);
  return transmogAndMountsCharacters;
}

function uncheckAllOthers() {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => {
      if (modalOpen === false && event.target.checked) {
        checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== checkbox) {
            otherCheckbox.checked = false;
          }
        });
      }
    });
  });
}
