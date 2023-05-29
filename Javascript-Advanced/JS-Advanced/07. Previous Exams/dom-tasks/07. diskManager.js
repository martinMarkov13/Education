window.addEventListener("load", solve);

function solve() {
  let firstNameField = document.getElementById("first-name");
  let lastNameField = document.getElementById("last-name");
  let ageField = document.getElementById("age");
  let genderSelectionField = document.getElementById("genderSelect");
  let dishInfoField = document.getElementById("task");

  let submitButton = document.getElementById("form-btn");
  submitButton.addEventListener("click", submitInfo);

  let inProgressSection = document.getElementById("in-progress");
  let finishedSection = document.getElementById("finished");
  let progresCounter = document.getElementById("progress-count");

  function submitInfo() {
    let firstName = firstNameField.value;
    let lastName = lastNameField.value;
    let age = ageField.value;
    let genderSelect = genderSelectionField.value;
    let dishInfo = dishInfoField.value;

    if (firstName == "" || lastName == "" || age == "" || dishInfo == "") {
      return;
    }

    let li = document.createElement("li");
    li.className = "each-line";
    let article = document.createElement("article");
    let h4 = document.createElement("h4");
    h4.textContent = `${firstName} ${lastName}`;
    let p1 = document.createElement("p");
    p1.textContent = `${genderSelect}, ${age}`;
    let p2 = document.createElement("p");
    p2.textContent = `Dish description: ${dishInfo}`;
    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";
    editButton.addEventListener("click", editInfo);

    let completeButton = document.createElement("button");
    completeButton.textContent = "Mark as complete";
    completeButton.setAttribute("class", "complete-btn");
    completeButton.addEventListener("click", finishCooking);

    li.appendChild(article);
    li.appendChild(editButton);
    li.appendChild(completeButton);
    inProgressSection.appendChild(li);

    firstNameField.value = "";
    lastNameField.value = "";
    ageField.value = "";
    dishInfoField.value = "";
    genderSelectionField.value = "";

    progresCounter.textContent++;

    function editInfo() {
      firstNameField.value = firstName;
      lastNameField.value = lastName;
      ageField.value = age;
      dishInfoField.value = dishInfo;
      genderSelectionField.value = genderSelect;
      progresCounter.textContent--;
      li.remove();
    }

    function finishCooking() {
      finishedSection.appendChild(li);
      editButton.remove();
      completeButton.remove();
      progresCounter.textContent--;
    }
  }

  let clearButton = document.getElementById("clear-btn");
  clearButton.addEventListener("click", clearInfo);

  function clearInfo() {
    let allFinished = Array.from(finishedSection.children);
    allFinished.forEach((el) => el.remove());
  }
}
