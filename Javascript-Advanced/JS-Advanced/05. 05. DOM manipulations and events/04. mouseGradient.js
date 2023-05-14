function attachGradientEvents() {
    let gradientBox = document.getElementById("gradient");
    gradientBox.addEventListener("mousemove", mouseMove);

    let result = document.getElementById("result");

    function mouseMove(event) {
        result.textContent = Math.floor(event.offsetX / gradientBox.clientWidth * 100) + "%"
    }
}