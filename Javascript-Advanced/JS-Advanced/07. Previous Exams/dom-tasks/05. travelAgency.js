window.addEventListener("load", solution);

function solution() {
  let fullNameField = document.getElementById("fname");
  let emailField = document.getElementById("email");
  let phoneField = document.getElementById("phone");
  let adressField = document.getElementById("address");
  let postalCodeField = document.getElementById("code");
  let submitButton = document.getElementById("submitBTN");
  submitButton.addEventListener("click", submitInfo);
  let infoPreviewSection = document.getElementById("infoPreview");

  function submitInfo(ev) {
    ev.preventDefault();
    let fullName = fullNameField.value;
    let email = emailField.value;
    let phone = Number(phoneField.value);
    let adress = adressField.value;
    let postalCode = Number(postalCodeField.value);

    if (fullName == "" || email == "") {
      return;
    }
    submitButton.disabled = true;
    let editButton = document.getElementById("editBTN");
    editButton.addEventListener("click", editInfo);
    let continueButton = document.getElementById("continueBTN");
    continueButton.addEventListener("click", continueTrip);

    let nameLi = document.createElement("li");
    nameLi.textContent = `Full Name: ${fullName}`;
    let emailLi = document.createElement("li");
    emailLi.textContent = `Email: ${email}`;
    let phoneLi = document.createElement("li");
    phoneLi.textContent = `Phone Number: ${Number(phone)}`;
    let adressLi = document.createElement("li");
    adressLi.textContent = `Adress: ${adress}`;
    let postalCodeLi = document.createElement("li");
    postalCodeLi.textContent = `Postal Code: ${Number(postalCode)}`;
    infoPreviewSection.appendChild(nameLi);
    infoPreviewSection.appendChild(emailLi);
    infoPreviewSection.appendChild(phoneLi);
    infoPreviewSection.appendChild(adressLi);
    infoPreviewSection.appendChild(postalCodeLi);

    editButton.disabled = false;
    continueButton.disabled = false;

    fullNameField.value = "";
    emailField.value = "";
    phoneField.value = "";
    adressField.value = "";
    postalCodeField.value = "";

    function editInfo() {
      fullNameField.value = fullName;
      emailField.value = email;
      phoneField.value = phone;
      adressField.value = adress;
      postalCodeField.value = postalCode;

      editButton.disabled = true;
      continueButton.disabled = true;
      submitButton.disabled = false;
      Array.from(infoPreviewSection.children).forEach((element) => {
        element.remove();
      });
    }

    function continueTrip() {
      let div = document.getElementById("block");
      div.innerHTML = "";
      let h3 = document.createElement("h3");
      h3.textContent = `Thank you for your reservation!`;
      div.appendChild(h3);
    }
  }
}
