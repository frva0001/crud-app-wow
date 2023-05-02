// window.addEventListener("load", start);
// get search bar element
const searchInput = document.getElementById("searchInput");

//store name elements in array
const namesFromDOM = document.getElementsByClassName("character-grid-item");

//listen
searchInput.addEventListener("keyup", (event) => {
   const { value } = event.target;

   const searchQuery = value;

   for (const nameElement of namesFromDOM) {
      //store grid item text and convert to lowercase
      let name = nameElement.textContent.toLowerCase();
      //compare to search
      if (name.includes(searchQuery)) {
         nameElement.style.display = "block";
      } else {
         // NOT found
         nameElement.style.display = "none";
      }
   }
});

/*window.addEventListener("load", start);

// start();
// {
//   document
//     .querySelector("#input-search")
//     .addEventListener("keyup", inputSearchChanged);
//   document
//     .querySelector("#input-search")
//     .addEventListener("search", inputSearchChanged);
// }

// function inputSearchChanged(event) {
//   const value = event.target.value;
//   const postsToShow = searchPosts(value);
//   showPosts(postsToShow);
// }

// function searchPosts(searchValue) {
//   searchValue = searchValue.toLowerCase();

//   const results = posts.filter(checkTitle);

//   function checkTitle(post) {
//     const title = post.title.toLowerCase();
//     return title.includes(searchValue);
//   }

//   return results;
// }

function search() {
   const searchbox = document.getElementById("input-search").value.toLowerCase();
   const storeItems = document.getElementById("characters");
   const product = document.querySelector(".character-grid-item");
   const pname = document.getElementsByTagName("p");

   for (var i = 0; i < pname.length; i++) {
      let match = product[i].getElementsByTagName("p")[0];
const search = () => {
  const searchbox = document.getelementById("search_bar").value.toLowerCase();
  const storeItems = docuemnt.getelementById("characters");
  const product = document.querySelector(".character-grid-item");
  const pname = document.getElementsByTagName("p");

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("p")[0];

      if (match) {
         let textvalue = match.textContent || match.innerHTML;
         if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
            product[i].style.display = "";
            e;
         } else {
            product[i].style.display = "none";
         }
      }
   }
}

/*

"use strict";
window.addEventListener("load", start);

const endpoint =
  "https://wowdatabase-2b91f-default-rtdb.europe-west1.firebasedatabase.app";

const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  console.log(value);
});

async function getCharacters() {
  const response = await fetch(`${endpoint}/characters.json`);
  const data = await response.json();
  const characters = prepareData(data);
  console.log(characters);
  return characters;
}*/
