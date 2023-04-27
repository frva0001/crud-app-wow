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

function allPreFilterEvents() {
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
  const checkbox = document.getElementById("leveling");
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      console.log("Checkbox is checked");
      filterLeveling();
    } else {
      console.log("Checkbox is unchecked");
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
  const checkbox = document.getElementById("questing");
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      console.log("Checkbox is checked");
      filterQuesting();
    } else {
      console.log("Checkbox is unchecked");
    }
  });
}

async function filterQuesting() {
  console.log("functionleveling");
  const response = await fetch(`${endpoint}/characters.json`);
  const data = await response.json();
  const characters = prepareData(data);

  const questingCharacters = characters.filter(
    (character) => character.activities.questing
  );
  console.log(questingCharacters);
  return questingCharacters;
}

function preFilterMythicPlus1() {
  const checkbox = document.getElementById("mythicPlus1");
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      console.log("Checkbox is checked");
      filterMythicPlus1();
    } else {
      console.log("Checkbox is unchecked");
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
  const checkbox = document.getElementById("mythicPlus2");
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      console.log("Checkbox is checked");
      filterMythicPlus2();
    } else {
      console.log("Checkbox is unchecked");
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
  const checkbox = document.getElementById("mythicPlus3");
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      console.log("Checkbox is checked");
      filterMythicPlus3();
    } else {
      console.log("Checkbox is unchecked");
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
  const checkbox = document.getElementById("mythicPlus4");
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      console.log("Checkbox is checked");
      filterMythicPlus4();
    } else {
      console.log("Checkbox is unchecked");
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
  const checkbox = document.getElementById("raid1");
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      console.log("Checkbox is checked");
      filterRaid1();
    } else {
      console.log("Checkbox is unchecked");
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
  const checkbox = document.getElementById("raid2");
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      console.log("Checkbox is checked");
      filterRaid2();
    } else {
      console.log("Checkbox is unchecked");
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
  const checkbox = document.getElementById("raid3");
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      console.log("Checkbox is checked");
      filterRaid3();
    } else {
      console.log("Checkbox is unchecked");
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
  const checkbox = document.getElementById("pvp1");
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      console.log("Checkbox is checked");
      filterPVP1();
    } else {
      console.log("Checkbox is unchecked");
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
  const checkbox = document.getElementById("pvp2");
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      console.log("Checkbox is checked");
      filterPVP2();
    } else {
      console.log("Checkbox is unchecked");
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
  const checkbox = document.getElementById("transmogAndMounts");
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      console.log("Checkbox is checked");
      filterTransmogAndMounts();
    } else {
      console.log("Checkbox is unchecked");
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