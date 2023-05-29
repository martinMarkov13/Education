function solve() {
  let firstNameField = document.getElementById("fname");
  let lasteNameField = document.getElementById("lname");
  let emailField = document.getElementById("email");
  let birthField = document.getElementById("birth");
  let positionField = document.getElementById("position");
  let salaryField = document.getElementById("salary");
  let hireButton = document.getElementById("add-worker");
  hireButton.addEventListener("click", hireWorker);
  let workersList = document.getElementById("tbody");
  let budget = 0;

  function hireWorker(ev) {
    ev.preventDefault();
    let budgetSpan = document.getElementById("sum");
    let firstName = firstNameField.value;
    let lastName = lasteNameField.value;
    let email = emailField.value;
    let birth = birthField.value;
    let position = positionField.value;
    let salary = salaryField.value;

    if (
      firstName == "" ||
      lastName == "" ||
      email == "" ||
      birth == "" ||
      position == "" ||
      salary == ""
    ) {
      return;
    }

    let tr = document.createElement("tr");
    let firstNameTd = document.createElement("td");
    firstNameTd.textContent = `${firstName}`;
    let lastNameTd = document.createElement("td");
    lastNameTd.textContent = `${lastName}`;
    let emailTd = document.createElement("td");
    emailTd.textContent = `${email}`;
    let birthTd = document.createElement("td");
    birthTd.textContent = `${birth}`;
    let positionTd = document.createElement("td");
    positionTd.textContent = `${position}`;
    let salaryTd = document.createElement("td");
    salaryTd.textContent = `${salary}`;
    budget += Number(salary);
    let firedButton = document.createElement("button");
    firedButton.textContent = `Fired`;
    firedButton.setAttribute("class", "fired");
    firedButton.addEventListener("click", fireWorker);
    let editButton = document.createElement("button");
    editButton.textContent = `Edit`;
    editButton.setAttribute("class", "edit");
    editButton.addEventListener("click", editWorker);
    let buttonsTd = document.createElement("td");

    buttonsTd.appendChild(editButton);
    buttonsTd.appendChild(firedButton);
    tr.appendChild(firstNameTd);
    tr.appendChild(lastNameTd);
    tr.appendChild(emailTd);
    tr.appendChild(birthTd);
    tr.appendChild(positionTd);
    tr.appendChild(salaryTd);
    tr.appendChild(buttonsTd);
    workersList.appendChild(tr);

    firstNameField.value = "";
    lasteNameField.value = "";
    emailField.value = "";
    birthField.value = "";
    positionField.value = "";
    salaryField.value = "";
    budgetSpan.textContent = budget.toFixed(2);

    function editWorker() {
      firstNameField.value = firstName;
      lasteNameField.value = lastName;
      emailField.value = email;
      birthField.value = birth;
      positionField.value = position;
      salaryField.value = salary;
      budget -= Number(salary);
      budgetSpan.textContent = budget.toFixed(2);
      tr.remove();
    }

    function fireWorker(ev) {
      budget -= Number(salary);
      budgetSpan.textContent = budget.toFixed(2);
      tr.remove();
    }
  }
}
solve();
