async function getInfo() {
  let stopName = document.getElementById("stopName");
  let uLElement = document.getElementById("buses");
  let stopId = document.getElementById("stopId").value;

  try {
    const response = await fetch(
      `http://localhost:3030/jsonstore/bus/businfo/${stopId}`
    );
    if (response.ok == false) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    let name = data.name;
    let buses = data.buses;
    stopName.innerHTML = name;

    uLElement.innerHTML = "";

    Object.keys(buses).forEach((bus) => {
      let liELement = document.createElement("li");
      liELement.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;
      uLElement.appendChild(liELement);
    });
  } catch (error) {
    uLElement.innerHTML = "";
    stopName.innerHTML = `${error.message}`;
  }
}
