let url = `http://localhost:3030/jsonstore/collections/students`;
let table = document.querySelector(`#results tbody`);
let form = document.getElementById("form");

window.addEventListener("load", loadStudents);
form.addEventListener("submit", addStudent);

async function loadStudents() {
  try {
    let res = await fetch(url);
    if (res.ok == false) {
      throw new Error(`Error`);
    }
    let data = await res.json();
    Object.values(data).forEach((r) => {
      let tr = document.createElement("tr");
      let firstNameTD = document.createElement("td");
      firstNameTD.textContent = `${r.firstName}`;
      tr.appendChild(firstNameTD);
      let lastNameTD = document.createElement("td");
      lastNameTD.textContent = `${r.lastName}`;
      tr.appendChild(lastNameTD);
      let facultyNumberTD = document.createElement("td");
      facultyNumberTD.textContent = `${r.facultyNumber}`;
      tr.appendChild(facultyNumberTD);
      let gradeTD = document.createElement("td");
      gradeTD.textContent = `${r.grade}`;
      tr.appendChild(gradeTD);
      table.appendChild(tr);
    });
  } catch (error) {
    alert(error.message);
  }
}

async function addStudent(e) {
  //e.preventDefault();

  let dataForm = new FormData(form);
  let infoArr = [...dataForm.values()];
  let gradeNumber = Number(infoArr[3].trim());
  table.replaceChildren()

  try {
    let res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: infoArr[0],
        lastName: infoArr[1],
        facultyNumber: infoArr[2],
        grade: gradeNumber,
      }),
    });
    if (res.ok == false) {
      throw new Error(`Error fetching data`);
    }
   
    loadStudents()
  } catch (err) {
    alert(err.message);
  }
}
