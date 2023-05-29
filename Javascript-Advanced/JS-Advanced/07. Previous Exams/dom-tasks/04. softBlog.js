function solve() {
  let creatorField = document.getElementById("creator");
  let titleField = document.getElementById("title");
  let categoryField = document.getElementById("category");
  let contentField = document.getElementById("content");
  let createButton = document.querySelector(".site-content button");
  createButton.addEventListener("click", createPost);
  let postsSection = document.querySelector(".site-content main section");

  let archiveSection = document.querySelector(".archive-section ol");
  let titles = [];
  function createPost(ev) {
    ev.preventDefault();
    let creator = creatorField.value;
    let title = titleField.value;
    let category = categoryField.value;
    let content = contentField.value;

    let article = document.createElement("article");
    let h1 = document.createElement("h1");
    h1.textContent = `${title}`;
    article.appendChild(h1);

    let categoryP = document.createElement("p");
    categoryP.textContent = `Category:`;
    let categoryStrong = document.createElement("strong");
    categoryStrong.textContent = `${category}`;
    categoryP.appendChild(categoryStrong);
    article.appendChild(categoryP);

    let creatorP = document.createElement("p");
    creatorP.textContent = `Creator:`;
    let creatorStrong = document.createElement("strong");
    creatorStrong.textContent = `${creator}`;
    creatorP.appendChild(creatorStrong);
    article.appendChild(creatorP);

    let contentP = document.createElement("p");
    contentP.textContent = `${content}`;
    article.appendChild(contentP);

    let buttonsDiv = document.createElement("div");
    buttonsDiv.setAttribute("class", "buttons");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("class", "btn delete");
    deleteButton.addEventListener("click", deleteArticle);
    let archiveButton = document.createElement("button");
    archiveButton.textContent = "Archive";
    archiveButton.setAttribute("class", "btn archive");
    archiveButton.addEventListener("click", archiveArticle);
    buttonsDiv.appendChild(deleteButton);
    buttonsDiv.appendChild(archiveButton);
    article.appendChild(buttonsDiv);
    postsSection.appendChild(article);

    creatorField.value = "";
    titleField.value = "";
    categoryField.value = "";
    contentField.value = "";

    function deleteArticle() {
      article.remove();
    }

    function archiveArticle(ev) {
      let html = "";
      titles.push(title);
      titles
        .sort((a, b) => a.localeCompare(b))
        .forEach((t) => (html += `<li>${t}</li>`));
      archiveSection.innerHTML = html;
      article.remove();
    }
  }
}
