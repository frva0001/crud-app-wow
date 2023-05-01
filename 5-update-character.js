export const Data =
  "https://wowdatabase-2b91f-default-rtdb.europe-west1.firebasedatabase.app";

async function getCharacters() {
  const response = await fetch(`${endpoint}/characters.json`);
  const data = await response.json();
  const characters = prepareData(data);
  console.log(characters);
  return characters;
}

/* ========== UPDATE ========== */

export async function updateCharacter(character) {
  try {
    const res = await fetch(Data + "/" + elements.id + ".json", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        characterName: elements.characterName.value,
        race: elements.race.value,
        faction: elements.faction.value,
        class: elements.class.value,
        spec: elements.specialization.value,
        role: elements.role.value,
        itemLevel: elements.itemLevel.value,
        level: elements.level.value,
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
        country: elements.country.value,
        battletag: elements.battletag.value,
      }),
    });
    if (res.ok) {
      console.log("Character updated!");
      document.querySelector("#form-update").parentElement.close();
      await updateCharacterGrid();
    }
  } catch (tings) {
    throw new Error(`Error at updateCharacter: ${things}`);
  }
}
/* ========== DELETE ========== */
export async function deleteCharacter(ID) {
  try {
    const res = await fetch(Data + "/" + ID + ".json", {
      method: "DELETE",
      headers: { "Content-Type": "APP/json" },
    });
    if (res.ok) {
      console.log("Character deleted!");
      await updateCharacterGrid();
    }
  } catch (things) {
    throw new Error(`Error at deleteCharacter: ${things}`);
  }
}

//update
