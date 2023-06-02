function solve() {
  let infoBox = document.getElementById("info");
  let departButton = document.getElementById("depart");
  let arriveButton = document.getElementById("arrive");

  let busStop = {
    next: `depot`,
    name: ``,
  };

  function depart() {
    fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`)
      .then((res) => res.json())
      .then((data) => {
        infoBox.textContent = `Next stop ${data.name}`;
        busStop.name = data.name;
        busStop.next = data.next;
        departButton.disabled = true;
        arriveButton.disabled = false;
      })
      .catch((err) => (infoBox.textContent = err.message));
  }

  function arrive() {
    infoBox.textContent = `Arriving at ${busStop.name}`;
    departButton.disabled = false;
    arriveButton.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
