"use strict";

let wowClasses;

// fetch our class-data

async function getClasses() {
  const response = await fetch(`${endpoint}/classes.json`);
  const data = await response.json();
  const wowClasses = prepareData(data);
  return wowClasses;
}

function showClass(wowClass) {
  const html = `
        <article class="classes-item">
            <h3>${wowClass.class}<h3>
        </article>
    `;

  document.querySelector("#classes").insertAdjacentHTML("beforeend", html);
  document
    .querySelector("#classes article:last-child")
    .addEventListener("click", () => wowClassClicked(wowClass));
  console.log("test");
}

function showClasses(wowClasses) {
  document.querySelector("#classes").innerHTML = "";

  for (const wowClass of wowClasses) {
    showClass(wowClass);
  }
}
