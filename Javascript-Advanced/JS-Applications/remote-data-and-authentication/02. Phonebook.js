function attachEvents() {
  let phonebook = document.getElementById("phonebook");
  let url = `http://localhost:3030/jsonstore/phonebook`;
  let loadButton = document.querySelector(`#btnLoad`);
  loadButton.addEventListener("click", loadPhonebook);
  let createbButton = document.getElementById("btnCreate");
  createbButton.addEventListener("click", createRecord);
  let personName = document.getElementById("person");
  let phoneNumber = document.getElementById("phone");

  function loadPhonebook() {
    fetch(url)
      .then((res) => {
        if (res.ok == false) {
          throw new Error(`Error occured`);
        }
        return res.json();
      })
      .then((data) => {
        phonebook.replaceChildren()
        Object.values(data).forEach((p) => {
          let liElement = document.createElement("li");
          liElement.textContent = `${p.person}:${p.phone}`;
          phonebook.appendChild(liElement);
          let deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          liElement.appendChild(deleteButton);
          deleteButton.addEventListener("click", deleteRecord);
          function deleteRecord(ev) {
            fetch(`http://localhost:3030/jsonstore/phonebook/${p._id}`, {
              method: "DELETE",
            })
            .then(res=>res.json())
            .catch(err=> alert(err.message))
            ev.target.parentElement.remove();
          }
        });
      });
  }

  function createRecord() {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        person: personName.value.trim(),
        phone: phoneNumber.value.trim(),
      }),
    })
      .then((res) => {
        if (res.ok == false) {
          throw new Error(`Error`);
        }
        return res.json();
      })
      .catch((err) => alert(err.message));
    personName.value = "";
    phoneNumber.value = "";
    phonebook.replaceChildren()
    loadPhonebook();
  }
}

attachEvents();
