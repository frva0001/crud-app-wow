"use strict";

document
  .querySelector("#characters article:last-child .btn-delete-character")
  .addEventListener("click", deleteClicked);

function deleteClicked() {
  document.querySelector("#dialog-delete-post-title").textContent =
    character.title;
  document
    .querySelector("#form-delete-post")
    .setAttribute("data-id", character.id);
  document.querySelector("#dialog-delete-post").showModal();
}

function deletePostClicked(event) {
  const id = event.target.getAttribute("data-id"); // event.target is the delete form
  deletePost(id); // call deletePost with id
}

async function deletePost(id) {
  const response = await fetch(`${endpoint}/characters/${id}.json`, {
    method: "DELETE",
  });
  if (response.ok) {
    console.log("post removed from firebase");
    showCharacterGrid();
  }
}
