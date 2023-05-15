function deleteByEmail() {
    let input = document.querySelector(`input[name="email"]`).value;
    let rows = document.querySelectorAll("tbody tr");
    let result = document.getElementById("result")
    let isFound = false;
    for (let row of rows) {
        let email = row.children[1].textContent;
        if (email == input) {
            let parent = row.parentNode
            parent.removeChild(row)
            isFound = true;
        } 
    }
    if(isFound){
        result.textContent = "Deleted"
    }else{
        result.textContent = "Not found."
    }
}