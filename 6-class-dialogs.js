"use strict";

function wowClassClicked(wowClass) {
  if (wowClass.id === "deathKnight") {
    showDeathKnight(wowClass);
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
  console.log(wowClass);
  const myHTML = /*html*/ `
    <dialog open id="deathKnightDialog">
        <h3><span>${wowClass.class}</span></h3>
        <p><span>Armor type: ${wowClass.armorType}, Resource: ${wowClass.Resource}</span></p>
        <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.blood.name}</span></h4>
        <p><span>${wowClass.specializations.blood.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.blood.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.blood.role} with the current tier-rank: ${wowClass.specializations.blood.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.blood.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.frost.name}</span></h4>
        <p><span>${wowClass.specializations.frost.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.frost.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.frost.role} with the current tier-rank: ${wowClass.specializations.frost.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.frost.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.unholy.name}</span></h4>
        <p><span>${wowClass.specializations.unholy.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.unholy.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.unholy.role} with the current tier-rank: ${wowClass.specializations.unholy.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.unholy.usableWeapons}</span></p>
        </article>
        <p><span>The Death Knight Class is available with the following classes: </br> ${wowClass.availableRaces}</span></p>
        <form method="dialog">
            <button id="class-close" class="btn__style" >Close</button>
        </form>
    </dialog>
    `;
  document
    .querySelector("#dialog-for-classes")
    .insertAdjacentHTML("beforeend", myHTML);
  document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showDemonHunter(wowClass) {
  const myHTML = /*html*/ `
    <dialog open id="demonHunterDialog">
        <h3><span>${wowClass.class}</span></h3>
        <p><span>Armor type: ${wowClass.armorType}, Resource: ${wowClass.resource}</span></p>
        <article id="grid-item-two-specs">
        <h4><span>${wowClass.specializations.havoc.name}</span></h4>
        <p><span>${wowClass.specializations.havoc.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.havoc.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.havoc.role} with the current tier-rank: ${wowClass.specializations.havoc.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.havoc.usableWeapons}</span></p>
        </article>
         <article id="grid-item-two-specs">
        <h4><span>${wowClass.specializations.vengeance.name}</span></h4>
        <p><span>${wowClass.specializations.vengeance.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.vengeance.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.vengeance.role} with the current tier-rank: ${wowClass.specializations.vengeance.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.vengeance.usableWeapons}</span></p>
        </article>
        <p><span>The Demon Hunter Class is available with the following classes: </br> ${wowClass.availableRaces}</span></p>
        <form method="dialog">
            <button id="class-close" class="btn__style" >Close</button>
        </form>
    </dialog>
    `;
  document
    .querySelector("#dialog-for-classes")
    .insertAdjacentHTML("beforeend", myHTML);
  document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showDruid(wowClass) {
  const myHTML = /*html*/ `
    <dialog open id="druidtDialog">
        <h3><span>${wowClass.class}</span></h3>
        <p><span>Armor type: ${wowClass.armorType}, Resource: ${wowClass.resource}</span></p>
        <article id="grid-item-four-specs">
        <h4><span>${wowClass.specializations.balance.name}</span></h4>
        <p><span>${wowClass.specializations.balance.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.balance.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.balance.role} with the current tier-rank: ${wowClass.specializations.balance.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.balance.usableWeapons}</span></p>
        </article>
         <article id="grid-item-four-specs">
        <h4><span>${wowClass.specializations.feral.name}</span></h4>
        <p><span>${wowClass.specializations.feral.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.feral.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.feral.role} with the current tier-rank: ${wowClass.specializations.feral.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.feral.usableWeapons}</span></p>
        </article>
         <article id="grid-item-four-specs">
        <h4><span>${wowClass.specializations.guardian.name}</span></h4>
        <p><span>${wowClass.specializations.guardian.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.guardian.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.guardian.role} with the current tier-rank: ${wowClass.specializations.guardian.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.guardian.usableWeapons}</span></p>
        </article>
         <article id="grid-item-four-specs">
        <h4><span>${wowClass.specializations.restoration.name}</span></h4>
        <p><span>${wowClass.specializations.restoration.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.restoration.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.restoration.role} with the current tier-rank: ${wowClass.specializations.restoration.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.restoration.usableWeapons}</span></p>
        </article>
        <p><span>The Druid Class is available with the following classes: </br> ${wowClass.availableRaces}</span></p>
        <form method="dialog">
                        <button id="class-close" class="btn__style" >Close</button>

        </form>
    </dialog>
    `;
  document
    .querySelector("#dialog-for-classes")
    .insertAdjacentHTML("beforeend", myHTML);
  document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showEvoker(wowClass) {
  const myHTML = /*html*/ `
    <dialog open id="evokerDialog">
        <h3><span>${wowClass.class}</span></h3>
        <p><span>Armor type: ${wowClass.armorType}, Resource: ${wowClass.resource}</span></p>
        <article id="grid-item-two-specs">
        <h4><span>${wowClass.specializations.Devastation.name}</span></h4>
        <p><span>${wowClass.specializations.Devastation.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.Devastation.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.Devastation.role} with the current tier-rank: ${wowClass.specializations.Devastation.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.Devastation.usableWeapons}</span></p>
        </article>
         <article id="grid-item-two-specs">
        <h4><span>${wowClass.specializations.Preservation.name}</span></h4>
        <p><span>${wowClass.specializations.Preservation.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.Preservation.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.Preservation.role} with the current tier-rank: ${wowClass.specializations.Preservation.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.Preservation.usableWeapons}</span></p>
        </article>
        <p><span>The Evoker Class is available with the following classes: </br> ${wowClass.availableRaces}</span></p>
        <form method="dialog">
            <button id="class-close" class="btn__style" >Close</button>
        </form>
    </dialog>
    `;
  document
    .querySelector("#dialog-for-classes")
    .insertAdjacentHTML("beforeend", myHTML);
  document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showHunter(wowClass) {
  const myHTML = /*html*/ `
    <dialog open id="hunterDialog">
        <h3><span>${wowClass.class}</span></h3>
        <p><span>Armor type: ${wowClass.armorType}, Resource: ${wowClass.resource}</span></p>
        <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.beastMastery.name}</span></h4>
        <p><span>${wowClass.specializations.beastMastery.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.beastMastery.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.beastMastery.role} with the current tier-rank: ${wowClass.specializations.beastMastery.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.beastMastery.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.marksmanship.name}</span></h4>
        <p><span>${wowClass.specializations.marksmanship.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.marksmanship.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.marksmanship.role} with the current tier-rank: ${wowClass.specializations.marksmanship.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.marksmanship.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.survival.name}</span></h4>
        <p><span>${wowClass.specializations.survival.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.survival.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.survival.role} with the current tier-rank: ${wowClass.specializations.survival.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.survival.usableWeapons}</span></p>
        </article>
        <p><span>The Hunter Class is available with the following classes: </br> ${wowClass.availableRaces}</span></p>
        <form method="dialog">
            <button id="class-close" class="btn__style" >Close</button>
        </form>
    </dialog>
    `;
  document
    .querySelector("#dialog-for-classes")
    .insertAdjacentHTML("beforeend", myHTML);
  document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showMage(wowClass) {
  const myHTML = /*html*/ `
    <dialog open id="mageDialog">
        <h3><span>${wowClass.class}</span></h3>
        <p><span>Armor type: ${wowClass.armorType}, Resource: ${wowClass.resource}</span></p>
        <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.arcane.name}</span></h4>
        <p><span>${wowClass.specializations.arcane.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.arcane.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.arcane.role} with the current tier-rank: ${wowClass.specializations.arcane.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.arcane.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.fire.name}</span></h4>
        <p><span>${wowClass.specializations.fire.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.fire.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.fire.role} with the current tier-rank: ${wowClass.specializations.fire.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.fire.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.frost.name}</span></h4>
        <p><span>${wowClass.specializations.frost.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.frost.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.frost.role} with the current tier-rank: ${wowClass.specializations.frost.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.frost.usableWeapons}</span></p>
        </article>
        <p><span>The Mage Class is available with the following classes: </br> ${wowClass.availableRaces}</span></p>
        <form method="dialog">
            <button id="class-close" class="btn__style" >Close</button>
        </form>
    </dialog>
    `;
  document
    .querySelector("#dialog-for-classes")
    .insertAdjacentHTML("beforeend", myHTML);
  document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showMonk(wowClass) {
  const myHTML = /*html*/ `
    <dialog open id="monkDialog">
        <h3><span>${wowClass.class}</span></h3>
        <p><span>Armor type: ${wowClass.armorType}, Resource: ${wowClass.resource}</span></p>
        <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.brewmaster.name}</span></h4>
        <p><span>${wowClass.specializations.brewmaster.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.brewmaster.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.brewmaster.role} with the current tier-rank: ${wowClass.specializations.brewmaster.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.brewmaster.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.mistweaver.name}</span></h4>
        <p><span>${wowClass.specializations.mistweaver.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.mistweaver.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.mistweaver.role} with the current tier-rank: ${wowClass.specializations.mistweaver.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.mistweaver.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.windwalker.name}</span></h4>
        <p><span>${wowClass.specializations.windwalker.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.windwalker.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.windwalker.role} with the current tier-rank: ${wowClass.specializations.windwalker.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.windwalker.usableWeapons}</span></p>
        </article>
        <p><span>The Monk Class is available with the following classes: </br> ${wowClass.availableRaces}</span></p>
        <form method="dialog">
            <button id="class-close" class="btn__style" >Close</button>
        </form>
    </dialog>
    `;
  document
    .querySelector("#dialog-for-classes")
    .insertAdjacentHTML("beforeend", myHTML);
  document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showPaladin(wowClass) {
  const myHTML = /*html*/ `
    <dialog open id="paladinDialog">
        <h3><span>${wowClass.class}</span></h3>
        <p><span>Armor type: ${wowClass.armorType}, Resource: ${wowClass.resource}</span></p>
        <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.Protection.name}</span></h4>
        <p><span>${wowClass.specializations.Protection.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.Protection.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.Protection.role} with the current tier-rank: ${wowClass.specializations.Protection.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.Protection.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.holy.name}</span></h4>
        <p><span>${wowClass.specializations.holy.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.holy.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.holy.role} with the current tier-rank: ${wowClass.specializations.holy.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.holy.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.retribution.name}</span></h4>
        <p><span>${wowClass.specializations.retribution.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.retribution.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.retribution.role} with the current tier-rank: ${wowClass.specializations.retribution.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.retribution.usableWeapons}</span></p>
        </article>
        <p><span>The Paladin Class is available with the following classes: </br> ${wowClass.availableRaces}</span></p>
        <form method="dialog">
            <button id="class-close" class="btn__style" >Close</button>
        </form>
    </dialog>
    `;
  document
    .querySelector("#dialog-for-classes")
    .insertAdjacentHTML("beforeend", myHTML);
  document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showPriest(wowClass) {
  const myHTML = /*html*/ `
    <dialog open id="priestDialog">
        <h3><span>${wowClass.class}</span></h3>
        <p><span>Armor type: ${wowClass.armorType}, Resource: ${wowClass.resource}</span></p>
        <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.discipline.name}</span></h4>
        <p><span>${wowClass.specializations.discipline.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.discipline.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.discipline.role} with the current tier-rank: ${wowClass.specializations.discipline.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.discipline.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.holy.name}</span></h4>
        <p><span>${wowClass.specializations.holy.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.holy.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.holy.role} with the current tier-rank: ${wowClass.specializations.holy.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.holy.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.shadow.name}</span></h4>
        <p><span>${wowClass.specializations.shadow.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.shadow.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.shadow.role} with the current tier-rank: ${wowClass.specializations.shadow.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.shadow.usableWeapons}</span></p>
        </article>
        <p><span>The Priest Class is available with the following classes: </br> ${wowClass.availableRaces}</span></p>
        <form method="dialog">
            <button id="class-close" class="btn__style" >Close</button>
        </form>
    </dialog>
    `;
  document
    .querySelector("#dialog-for-classes")
    .insertAdjacentHTML("beforeend", myHTML);
  document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showRogue(wowClass) {
  const myHTML = /*html*/ `
    <dialog open id="rogueDialog">
        <h3><span>${wowClass.class}</span></h3>
        <p><span>Armor type: ${wowClass.armorType}, Resource: ${wowClass.resource}</span></p>
        <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.assassination.name}</span></h4>
        <p><span>${wowClass.specializations.assassination.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.assassination.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.assassination.role} with the current tier-rank: ${wowClass.specializations.assassination.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.assassination.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.outlaw.name}</span></h4>
        <p><span>${wowClass.specializations.outlaw.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.outlaw.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.outlaw.role} with the current tier-rank: ${wowClass.specializations.outlaw.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.outlaw.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.subtlelty.name}</span></h4>
        <p><span>${wowClass.specializations.subtlelty.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.subtlelty.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.subtlelty.role} with the current tier-rank: ${wowClass.specializations.subtlelty.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.subtlelty.usableWeapons}</span></p>
        </article>
        <p><span>The Rogue Class is available with the following classes: </br> ${wowClass.availableRaces}</span></p>
        <form method="dialog">
            <button id="class-close" class="btn__style" >Close</button>
        </form>
    </dialog>
    `;
  document
    .querySelector("#dialog-for-classes")
    .insertAdjacentHTML("beforeend", myHTML);
  document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showShaman(wowClass) {
  const myHTML = /*html*/ `
    <dialog open id="shamanDialog">
        <h3><span>${wowClass.class}</span></h3>
        <p><span>Armor type: ${wowClass.armorType}, Resource: ${wowClass.resource}</span></p>
        <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.elemental.name}</span></h4>
        <p><span>${wowClass.specializations.elemental.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.elemental.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.elemental.role} with the current tier-rank: ${wowClass.specializations.elemental.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.elemental.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.enhancement.name}</span></h4>
        <p><span>${wowClass.specializations.enhancement.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.enhancement.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.enhancement.role} with the current tier-rank: ${wowClass.specializations.enhancement.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.enhancement.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.restoration.name}</span></h4>
        <p><span>${wowClass.specializations.restoration.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.restoration.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.restoration.role} with the current tier-rank: ${wowClass.specializations.restoration.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.restoration.usableWeapons}</span></p>
        </article>
        <p><span>The Shaman Class is available with the following classes: </br> ${wowClass.availableRaces}</span></p>
        <form method="dialog">
            <button id="class-close" class="btn__style" >Close</button>
        </form>
    </dialog>
    `;
  document
    .querySelector("#dialog-for-classes")
    .insertAdjacentHTML("beforeend", myHTML);
  document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showWarlock(wowClass) {
  const myHTML = /*html*/ `
    <dialog open id="warlockDialog">
        <h3><span>${wowClass.class}</span></h3>
        <p><span>Armor type: ${wowClass.armorType}, Resource: ${wowClass.resource}</span></p>
        <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.affliction.name}</span></h4>
        <p><span>${wowClass.specializations.affliction.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.affliction.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.affliction.role} with the current tier-rank: ${wowClass.specializations.affliction.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.affliction.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.demonology.name}</span></h4>
        <p><span>${wowClass.specializations.demonology.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.demonology.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.demonology.role} with the current tier-rank: ${wowClass.specializations.demonology.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.demonology.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.destuction.name}</span></h4>
        <p><span>${wowClass.specializations.destuction.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.destuction.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.destuction.role} with the current tier-rank: ${wowClass.specializations.destuction.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.destuction.usableWeapons}</span></p>
        </article>
        <p><span>The Warlock Class is available with the following classes: </br> ${wowClass.availableRaces}</span></p>
        <form method="dialog">
            <button id="class-close" class="btn__style" >Close</button>
        </form>
    </dialog>
    `;
  document
    .querySelector("#dialog-for-classes")
    .insertAdjacentHTML("beforeend", myHTML);
  document.querySelector("#dialog-for-classes").classList.remove("hidden");
}

function showWarrior(wowClass) {
  const myHTML = /*html*/ `
    <dialog open id="warriorDialog">
        <h3><span>${wowClass.class}</span></h3>
        <p><span>Armor type: ${wowClass.armorType}, Resource: ${wowClass.resource}</span></p>
        <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.arms.name}</span></h4>
        <p><span>${wowClass.specializations.arms.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.arms.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.arms.role} with the current tier-rank: ${wowClass.specializations.arms.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.arms.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.fury.name}</span></h4>
        <p><span>${wowClass.specializations.fury.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.fury.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.fury.role} with the current tier-rank: ${wowClass.specializations.fury.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.fury.usableWeapons}</span></p>
        </article>
         <article id="grid-item-three-specs">
        <h4><span>${wowClass.specializations.protection.name}</span></h4>
        <p><span>${wowClass.specializations.protection.description}</span></p>
        <p><span>Signature abilities: ${wowClass.specializations.protection.famousAbilities}</span></p>
        <p><span>This specialization is a ${wowClass.specializations.protection.role} with the current tier-rank: ${wowClass.specializations.protection.tierRanking}</span></p>
        <p><span>Usable Weapons: ${wowClass.specializations.protection.usableWeapons}</span></p>
        </article>
        <p><span>The Warrior Class is available with the following classes: </br> ${wowClass.availableRaces}</span></p>
        <form method="dialog">
            <button id="class-close" class="btn__style" >Close</button>
        </form>
    </dialog>
    `;
  document
    .querySelector("#dialog-for-classes")
    .insertAdjacentHTML("beforeend", myHTML);
  document.querySelector("#dialog-for-classes").classList.remove("hidden");
}
