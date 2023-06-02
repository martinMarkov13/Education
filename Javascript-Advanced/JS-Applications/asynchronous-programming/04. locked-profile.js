function lockedProfile() {
  let main = document.getElementById("main");

  fetch(`http://localhost:3030/jsonstore/advanced/profiles`)
    .then((res) => res.json())
    .then(putInfo)
    .catch((err) => console.log(err));

  function putInfo(data) {
    main.innerHTML = "";
    for (const profile in data) {
        let counter = 1
        counter++
      let username = data[profile].username;
      let email = data[profile].email;
      let age = data[profile].age;
      let div = document.createElement("div");
      div.className = "profile";
      div.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
            <label>Lock</label>
            <input type="radio" name="user${counter}Locked" value="lock" checked>
            <label>Unlock</label>
            <input type="radio" name="user${counter}Locked" value="unlock"><br>
            <hr>
            <label>Username</label>
            <input type="text" name="user${counter}Username" value="${username}" disabled readonly />
            <div class="user${counter}Username">
                <hr>
                <label>Email:</label>
                <input type="email" name="user${counter}Email" value="${email}" disabled readonly />
                <label>Age:</label>
                <input type="text" name="user${counter}Age" value="${age}" disabled readonly />
            </div>
            
            <button>Show more</button>`;

      div.querySelector("div").style.display = "none";
      div.querySelector("button").addEventListener("click", reveal);
      main.appendChild(div);

      function reveal(event) {
        let unlocked = event.target.parentNode.children[4];
        let hiddenDiv = event.target.parentNode.children[9];
        showHideButton = event.target.parentNode.children[10];

        if (unlocked.checked) {
          if (showHideButton.textContent === "Show more") {
            hiddenDiv.style.display = "inline";
            showHideButton.textContent = "Hide it";
          } else if (showHideButton.textContent === "Hide it") {
            hiddenDiv.style.display = "none";
            showHideButton.textContent = "Show more";
          }
        }
      }
    }
  }
}
