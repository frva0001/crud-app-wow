"use strict";
window.addEventListener("load", start);

function start() {
  allPreFilterEvents();
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

function filterLeveling(character) {
  if ((character.leveling = true)) {
    return true;
  } else {
    return false;
  }
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

function filterQuesting(character) {
  if (character.activities === "questing") {
    return true;
  } else {
    return false;
  }
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

function filterMythicPlus1(character) {
  if (character.activities === "mythicPlus1") {
    return true;
  } else {
    return false;
  }
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

function filterMythicPlus2(character) {
  if (character.activities === "mythicPlus2") {
    return true;
  } else {
    return false;
  }
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

function filterMythicPlus1(character) {
  if (character.activities === "mythicPlus3") {
    return true;
  } else {
    return false;
  }
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

function filterMythicPlus4(character) {
  if (character.activities === "mythicPlus4") {
    return true;
  } else {
    return false;
  }
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

function filterRaid1(character) {
  if (character.activities === "raid1") {
    return true;
  } else {
    return false;
  }
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

function filterRaid2(character) {
  if (character.activities === "raid2") {
    return true;
  } else {
    return false;
  }
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

function filterRaid3(character) {
  if (character.activities === "raid3") {
    return true;
  } else {
    return false;
  }
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

function filterPVP1(character) {
  if (character.activities === "pvp1") {
    return true;
  } else {
    return false;
  }
}

function preFilterPVP2() {
  const checkbox = document.getElementById("pvp2");
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      console.log("PVP2 Checkbox is checked");
      filterPVP2();
    } else {
      console.log("Checkbox is unchecked");
    }
  });
}

function filterPVP2(character) {
  if (character.activities === "pvp2") {
    return true;
  } else {
    return false;
  }
}

function preFilterTransmogAndMounts() {
  const checkbox = document.getElementById("transmogAndMounts");
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      console.log("transmogAndMounts Checkbox is checked");
      filterTransmogAndMounts();
    } else {
      console.log("Checkbox is unchecked");
    }
  });
}

function filterTransmogAndMounts(character) {
  if (character.activities === "transmogAndMounts") {
    return true;
  } else {
    return false;
  }
}
