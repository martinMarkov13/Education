window.addEventListener("load", solve);

function solve() {
  let firstNameField = document.getElementById("first-name");
  let lastNameField = document.getElementById("last-name");
  let dateInField = document.getElementById("date-in");
  let dateOutField = document.getElementById("date-out");
  let guestCountField = document.getElementById("people-count");

  let reservationInfoList = document.querySelector(".info-list");
  let confirmReservationList = document.querySelector(".confirm-list");

  let nextButton = document.getElementById("next-btn");
  nextButton.addEventListener("click", makeReservation);

  function makeReservation(ev) {
    ev.preventDefault();
    let firstName = firstNameField.value;
    let lastName = lastNameField.value;
    let dateIn = dateInField.value;
    let dateOut = dateOutField.value;
    let guestCount = guestCountField.value;

    if (
      firstName == "" ||
      lastName == "" ||
      dateIn == "" ||
      dateOut == "" ||
      guestCount == "" ||
      dateIn > dateOut
    ) {
      return;
    }

    let liELement = document.createElement("li");
    liELement.setAttribute("class", "reservation-content");
    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    h3.textContent = `Name: ${firstName} ${lastName}`;
    let dateInP = document.createElement("p");
    dateInP.textContent = `From date: ${dateIn}`;
    let dateOutP = document.createElement("p");
    dateOutP.textContent = `To date: ${dateOut}`;
    let guestsP = document.createElement("p");
    guestsP.textContent = `For ${guestCount} people`;
    let editButton = document.createElement("button");
    editButton.textContent = `Edit`;
    editButton.setAttribute("class", "edit-btn");
    editButton.addEventListener("click", editReservation);
    let continueButton = document.createElement("button");
    continueButton.textContent = `Continue`;
    continueButton.setAttribute("class", "continue-btn");
    continueButton.addEventListener("click", confirmReservation);

    article.appendChild(h3);
    article.appendChild(dateInP);
    article.appendChild(dateOutP);
    article.appendChild(guestsP);
    liELement.appendChild(article);
    liELement.appendChild(editButton);
    liELement.appendChild(continueButton);
    reservationInfoList.appendChild(liELement);

    nextButton.disabled = true;
    firstNameField.value = "";
    lastNameField.value = "";
    dateInField.value = "";
    dateOutField.value = "";
    guestCountField.value = "";

    function editReservation() {
      nextButton.disabled = false;
      firstNameField.value = firstName;
      lastNameField.value = lastName;
      dateInField.value = dateIn;
      dateOutField.value = dateOut;
      guestCountField.value = guestCount;

      liELement.remove();
    }

    function confirmReservation() {
      liELement.removeChild(editButton);
      confirmReservationList.appendChild(liELement);
      let confirmButton = document.createElement("button");
      liELement.appendChild(confirmButton);
      confirmButton.textContent = "Confirm";
      confirmButton.setAttribute("class", "confirm-btn");
      confirmButton.addEventListener("click", finishReservation);

      function finishReservation() {
        liELement.remove();
        nextButton.disabled = false;
        let verificationH1 = document.getElementById("verification");
        verificationH1.setAttribute("class", "reservation-confirmed");
        verificationH1.textContent = `Confirmed.`;
    
      }

      liELement.removeChild(continueButton);
      let cancelButton = document.createElement("button");
      liELement.appendChild(cancelButton);
      cancelButton.textContent = `Cancel`;
      cancelButton.setAttribute("class", "cancel-btn");
      cancelButton.addEventListener("click", cancelReservation);

      function cancelReservation() {
        liELement.remove();
        nextButton.disabled = false;
        let verificationH1 = document.getElementById("verification");
        verificationH1.setAttribute("class", "reservation-cancelled");
        verificationH1.textContent = `Cancelled.`;
      }
    }
  }
}
