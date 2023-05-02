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

function showClass(wowClass) {
   const html = /* html */ `
        <article class="class-grid-item">
            <h3>${wowClass.class}<h3>
        </article>
    `;

   document.querySelector("#classes").insertAdjacentHTML("beforeend", html);
   document.querySelector("#classes article:last-child").addEventListener("click", wowClassClicked);
   console.log("test");

   function wowClassClicked() {
      console.log("click");
   }
}

function showClasses(wowClasses) {
   document.querySelector("#classes").innerHTML = "";

   for (const wowClass of wowClasses) {
      showClass(wowClass);
   }
}

// function wowClassClicked(wowClass) {
//    console.log("click");
// }
