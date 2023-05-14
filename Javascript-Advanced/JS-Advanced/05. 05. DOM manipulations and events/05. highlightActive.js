function focused() {
    let input = Array.from(document.querySelectorAll("input"))
        .forEach(i => {
            i.addEventListener("focus", focused);
            i.addEventListener("blur", onBlur);
        })

    function focused(evn) {
        evn.target.parentElement.className = "focused"
    }

    function onBlur(evn) {
        evn.target.parentElement.className = ""
    }

}