function addItem() {
    let input = document.getElementById("newItemText").value;
    let list = document.getElementById("items");
    let li=document.createElement("li");
    li.textContent = input;

    let deleteButton = document.createElement("a");
    deleteButton.textContent = "Delete";
    deleteButton.href = "#";
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", onDelete)

    list.appendChild(li);
    document.getElementById("newItemText").value = "";
}
function onDelete(event){
event.target.parentElement.remove()
}   