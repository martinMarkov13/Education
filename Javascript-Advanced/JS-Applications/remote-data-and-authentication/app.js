function attachEvents() {
  let messages = document.getElementById("messages");
  let sendButton = document.getElementById("submit");
  sendButton.addEventListener("click", sendMessage);
  let refreshButton = document.getElementById("refresh");
  refreshButton.addEventListener("click", showChat);
  let url = `http://localhost:3030/jsonstore/messenger`;

  async function showChat() {
    try {
      let res = await fetch(url);
      if (res.ok == false) {
        throw new Error("Error");
      }
      let data = await res.json();
      let comments = [];
      Object.values(data).forEach((element) => {
        comments.push(`${element.author}: ${element.content}`);
      });
      messages.value = comments.join("\n");
    } catch (err) {
      alert(err.message);
    }
  }

  function sendMessage() {
    let authorName = document.querySelector(`[name="author"]`)
    let message = document.querySelector(`[name="content"]`)

    if(authorName == "" || message == ""){
        return
    }
    fetch(url,{
        method: `POST`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            author: authorName.value.trim(),
            content: message.value.trim()
        })
    })
    .then(res => {
        if(res.ok == false){
            throw new Error(`Error`);
        }
        return res.json()
    })
    .catch(err => {
        alert(err.message)
    })
    authorName.value = "";
    message.value = ""
    showChat()
  }
}

attachEvents();
