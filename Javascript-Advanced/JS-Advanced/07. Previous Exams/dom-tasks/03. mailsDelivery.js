function solve() {
  let recepientNameField = document.getElementById("recipientName");
  let titleField = document.getElementById("title");
  let messageField = document.getElementById("message");
  let addButton = document.getElementById("add");
  addButton.addEventListener("click", addMail);
  let resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", resetInput);
  let listOfMails = document.querySelector(".list-mails ul");
  let sentMails = document.querySelector(".sent-list");
  let deletedMails = document.querySelector(".delete-list");


  function addMail(ev) {
    ev.preventDefault();
    let recepient = recepientNameField.value;
    let title = titleField.value;
    let message = messageField.value;

    if (recepient == "" || title == "" || message == "") {
      return;
    }

    let li = document.createElement("li");
    let h4Title = document.createElement("h4");
    h4Title.textContent = `Title: ${title}`;
    let h4Recepient = document.createElement("h4");
    h4Recepient.textContent = `Recipient Name: ${recepient}`;
    let span = document.createElement("span");
    span.textContent = `${message}`;
    let div = document.createElement("div");
    div.setAttribute("id", "list-action");
    let sendButton = document.createElement("button");
    sendButton.textContent = "Send";
    sendButton.type = "submit";
    sendButton.id = "send";
    sendButton.addEventListener("click", sendMail);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "submit";
    deleteButton.id = "delete";
    deleteButton.addEventListener("click", deleteMail);
    div.appendChild(sendButton);
    div.appendChild(deleteButton);
    li.appendChild(h4Title);
    li.appendChild(h4Recepient);
    li.appendChild(span);
    li.appendChild(div);
    listOfMails.appendChild(li);

    recepientNameField.value = "";
    titleField.value = "";
    messageField.value = "";
  }

  function resetInput(e) {
    e.preventDefault();
    recepientNameField.value = "";
    titleField.value = "";
    messageField.value = "";
  }

  function sendMail(ev) {
    let liElement = document.createElement("li");
    let recepientSpan = document.createElement("span");
    recepientSpan.textContent = `To: ${ev.target.parentElement.parentElement.children[1].textContent}`;
    let titleSpan = document.createElement("span");
    titleSpan.textContent = `Title: ${ev.target.parentElement.parentElement.children[0].textContent}`;
    let divElement = document.createElement("div");
    divElement.setAttribute("class", "btn");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "submit";
    deleteButton.setAttribute("class", "delete");
 
    divElement.appendChild(deleteButton);
    liElement.appendChild(recepientSpan);
    liElement.appendChild(titleSpan);
    liElement.appendChild(divElement);
    sentMails.appendChild(liElement);
    ev.target.parentElement.parentElement.remove();

    let deleteSentMailButton = document.querySelector(".delete")
    deleteSentMailButton.addEventListener("click",deleteSentMail)
    
  }
  
  function deleteMail(ev) {
    let liElement = document.createElement("li");
    let recepientSpan = document.createElement("span");
    recepientSpan.textContent = `To: ${ev.target.parentElement.parentElement.children[1].textContent}`;
    let titleSpan = document.createElement("span");
    titleSpan.textContent = `Title: ${ev.target.parentElement.parentElement.children[0].textContent}`;
    liElement.appendChild(recepientSpan);
    liElement.appendChild(titleSpan);
    deletedMails.appendChild(liElement)
    ev.target.parentElement.parentElement.remove();
  }

  function deleteSentMail(ev){
    let liElement = ev.target.parentElement.parentElement
    deletedMails.appendChild(liElement)
    ev.target.remove();
  }
}
solve();
