"use strict";

function wowClassClicked(wowClass) {
   if (wowClass.id === "deathKnight") {
      console.log("death knight clicked");
      showDeathKnight();
   } else if (wowClass.id === "demonHunter") {
      showDemonHunter(wowClass);
   } else if (wowClass.id === "druid") {
      showDruid(wowClass);
   } else if (wowClass.id === "evoker") {
      showEvoker(wowClass);
   } else if (wowClass.id === "hunter") {
      showHunter(wowClass);
   } else if (wowClass.id === "mage") {
      showMage(wowClass);
   } else if (wowClass.id === "monk") {
      showMonk(wowClass);
   } else if (wowClass.id === "paladin") {
      showPaladin(wowClass);
   } else if (wowClass.id === "priest") {
      showPriest(wowClass);
   } else if (wowClass.id === "rogue") {
      showRogue(wowClass);
   } else if (wowClass.id === "shaman") {
      showShaman(wowClass);
   } else if (wowClass.id === "warlock") {
      showWarlock(wowClass);
   } else if (wowClass.id === "warrior") {
      showWarrior(wowClass);
   } else {
      return false;
   }
}

function showDeathKnight(wowClass) {
   const myHTML = /*html*/ `
    <dialog id="deathKnightDialog">
        <h3>Dette er en ${wowClass.class}</h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
}

function showDemonHunter(wowClass) {
   const myHTML = /*html*/ `
    <dialog id="demonHunterDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
}

function showDruid(wowClass) {
   const myHTML = /*html*/ `
    <dialog id="druidtDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
}

function showEvoker(wowClass) {
   const myHTML = /*html*/ `
    <dialog id="evokerDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
}

function showHunter(wowClass) {
   const myHTML = /*html*/ `
    <dialog id="hunterDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
}

function showMage(wowClass) {
   const myHTML = /*html*/ `
    <dialog id="mageDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
}

function showMonk(wowClass) {
   const myHTML = /*html*/ `
    <dialog id="monkDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
}

function showPaladin(wowClass) {
   const myHTML = /*html*/ `
    <dialog id="paladinDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
}

function showPriest(wowClass) {
   const myHTML = /*html*/ `
    <dialog id="priestDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
}

function showRogue(wowClass) {
   const myHTML = /*html*/ `
    <dialog id="rogueDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
}

function showShaman(wowClass) {
   const myHTML = /*html*/ `
    <dialog id="shamanDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
}

function showWarlock(wowClass) {
   const myHTML = /*html*/ `
    <dialog id="warlockDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
}

function showWarrior(wowClass) {
   const myHTML = /*html*/ `
    <dialog id="warriorDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
}
