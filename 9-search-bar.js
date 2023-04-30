window.addEventListener("load", start);

start();
{
  document
    .querySelector("#input-search")
    .addEventListener("keyup", inputSearchChanged);
  document
    .querySelector("#input-search")
    .addEventListener("search", inputSearchChanged);
}

function inputSearchChanged(event) {
  const value = event.target.value;
  const postsToShow = searchPosts(value);
  showPosts(postsToShow);
}

function searchPosts(searchValue) {
  searchValue = searchValue.toLowerCase();

  const results = posts.filter(checkTitle);

  function checkTitle(post) {
    const title = post.title.toLowerCase();
    return title.includes(searchValue);
  }

  return results;
}

const search = () => {
  const searchbox = document.getelementById("search_bar").value.toLowerCase();
  const storeItems = docuemnt.getelementById("characters");
  const product = document.querySelector(".character-grid-item");
  const pname = document.getElementsByTagName("h3");

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("h3")[0];

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
};

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
