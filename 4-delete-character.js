"use strict";
function deleteClicked(character) {
   const deletePost = document.querySelector("#form-delete-post");

   deletePost.setAttribute("data-id", character.id);
   document.querySelector("#dialog-delete-post").showModal();
}

function deletePostClicked(event) {
   const id = event.target.getAttribute("data-id"); // event.target is the delete form
   console.log(id, "id");

   if (event.submitter.innerHTML === "Yes") {
      deletePost(id); // call deletePost with id
   }

   document.querySelector("#dialog-delete-post").close();
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
