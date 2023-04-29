"use strict";

console.log("hej1");

let wowClasses;

// fetch our class-data

async function getClasses() {
  const response = await fetch(`${endpoint}/classes.json`);
  const data = await response.json();
  const wowClasses = prepareData(data);
  return wowClasses;
}

export { getClasses };

function showClass(wowClass) {
  const html = /* html */ `
        <article class="class-grid-item">
            <h3>${wowClass.id}<h3>
        </article>
    `;

  document.querySelector("#classes").insertAdjacentHTML("beforeend", html);
}

function showClasses(wowClasses) {
  document.querySelector("#classes").innerHTML = "";

  for (const wowClass of wowClasses) {
    showClass(wowClass);
  }
}
