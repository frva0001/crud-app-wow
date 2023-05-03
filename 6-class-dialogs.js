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
      console.log("warrior clicked");
      showWarrior(wowClass);
   } else {
      return false;
   }
}

function showDeathKnight(wowClass) {
   const myHTML = /*html*/ `
    <dialog open id="deathKnightDialog">
        <h3>Dette er en deathknight</h3>
        <form method="dialog">
            <button id="class-close" >Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
   document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showDemonHunter(wowClass) {
   const myHTML = /*html*/ `
    <dialog open id="demonHunterDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
   document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showDruid(wowClass) {
   const myHTML = /*html*/ `
    <dialog open id="druidtDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
   document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showEvoker(wowClass) {
   const myHTML = /*html*/ `
    <dialog open id="evokerDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
   document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showHunter(wowClass) {
   const myHTML = /*html*/ `
    <dialog open id="hunterDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
   document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showMage(wowClass) {
   const myHTML = /*html*/ `
    <dialog open id="mageDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
   document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showMonk(wowClass) {
   const myHTML = /*html*/ `
    <dialog open id="monkDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
   document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showPaladin(wowClass) {
   const myHTML = /*html*/ `
    <dialog open id="paladinDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
   document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showPriest(wowClass) {
   const myHTML = /*html*/ `
    <dialog open id="priestDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
   document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showRogue(wowClass) {
   const myHTML = /*html*/ `
    <dialog open id="rogueDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
   document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showShaman(wowClass) {
   const myHTML = /*html*/ `
    <dialog open id="shamanDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
   document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showWarlock(wowClass) {
   const myHTML = /*html*/ `
    <dialog open id="warlockDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
   document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showWarrior(wowClass) {
   const myHTML = /*html*/ `
    <dialog open id="warriorDialog">
        <h3>Dette er en <span>${wowClass.class}</span></h3>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
    `;
   document.querySelector("#dialog-for-classes").insertAdjacentHTML("beforeend", myHTML);
   document.querySelector("#dialog-for-classes").classList.remove("hidden");
}
