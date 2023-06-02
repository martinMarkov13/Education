async function solution() {
  let main = document.getElementById("main");

  try {
    const response = await fetch(
      `http://localhost:3030/jsonstore/advanced/articles/list`
    );
    if (response.ok == false) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();

    data.forEach((art) => {
      let articleElement = document.createElement("div");
      articleElement.classList.add("accordion");
      articleElement.innerHTML = `<div class="head">
        <span>${art.title}</span>
        <button class="button" id="${art._id}">More</button>
      </div>
      <div class="extra"></div>`;

      main.appendChild(articleElement);
      articleElement.querySelector("button").addEventListener("click", reveal);
    });
  } catch (err) {
    console.log(err);
  }

  async function reveal(ev) {
    try {
      let currentTarget = ev.currentTarget;
      let parent = currentTarget.parentNode.parentNode;
      let extraDiv = parent.querySelector("div.extra");

      const res = await fetch(
        `http://localhost:3030/jsonstore/advanced/articles/details/${currentTarget.id}`
      );
      if (res.ok == false) {
        throw new Error(`Error obtaining article details`);
      }
      const articleData = await res.json();

      const contentP = document.createElement("p");
      contentP.textContent = articleData.content;
      extraDiv.appendChild(contentP);

      if (currentTarget.textContent == "More") {
        extraDiv.style.display = "block";
        ev.target.textContent = "Less";
      } else {
        extraDiv.innerHTML = "";
        extraDiv.style.display = "none";
        ev.target.textContent = "More";
      }
    } catch (error) {
      console.log(error);
    }
  }
}
solution();
