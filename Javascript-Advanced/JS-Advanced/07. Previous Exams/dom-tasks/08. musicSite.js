window.addEventListener("load", solve);

function solve() {
  let genreField = document.getElementById("genre");
  let songNameField = document.getElementById("name");
  let authorField = document.getElementById("author");
  let creationDateField = document.getElementById("date");
  let addButton = document.getElementById("add-btn");
  addButton.addEventListener("click", addSong);
  let hitsList = document.querySelector(".all-hits-container");
  let likesCounter = 0;
  let savedSongs = document.querySelector("#saved-hits .saved-container");

  function addSong(ev) {
    ev.preventDefault();
    let genre = genreField.value;
    let songName = songNameField.value;
    let author = authorField.value;
    let creationDate = creationDateField.value;

    if (genre == "" || songName == "" || author == "" || creationDate == "") {
      return;
    }

    let div = document.createElement("div");
    div.setAttribute("class", "hits-info");
    let img = document.createElement("img");
    img.src = "./static/img/img.png";
    let nameH2 = document.createElement("h2");
    nameH2.textContent = `Name: ${songName}`;
    let genreH2 = document.createElement("h2");
    genreH2.textContent = `Genre: ${genre}`;
    let authorH2 = document.createElement("h2");
    authorH2.textContent = `Author: ${author}`;
    let dateH3 = document.createElement("h3");
    dateH3.textContent = `Date: ${creationDate}`;
    let saveButton = document.createElement("button");
    saveButton.textContent = "Save song";
    saveButton.setAttribute("class", "save-btn");
    saveButton.addEventListener("click", saveSong);
    let likeButton = document.createElement("button");
    likeButton.textContent = "Like song";
    likeButton.setAttribute("class", "like-btn");
    likeButton.addEventListener("click", likedSong);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("class", "delete-btn");
    deleteButton.addEventListener("click", deleteSong);

    let likes = document.querySelector("#total-likes div p");

    div.appendChild(img);
    div.appendChild(genreH2);
    div.appendChild(nameH2);
    div.appendChild(authorH2);
    div.appendChild(dateH3);
    div.appendChild(saveButton);
    div.appendChild(likeButton);
    div.appendChild(deleteButton);
    hitsList.appendChild(div);

    genreField.value = "";
    songNameField.value = "";
    authorField.value = "";
    creationDateField.value = "";

    function likedSong() {
      likesCounter++;
      likes.textContent = `Total Likes: ${likesCounter}`;
      likeButton.disabled = true;
    }

    function saveSong() {
      savedSongs.appendChild(div);
      saveButton.remove();
      likeButton.remove();
    }

    function deleteSong() {
      div.remove();
    }
  }
}
