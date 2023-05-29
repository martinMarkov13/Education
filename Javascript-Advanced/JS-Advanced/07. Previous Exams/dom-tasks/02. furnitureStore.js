window.addEventListener("load", solve);

function solve() {
  let modelField = document.getElementById("model");
  let yearField = document.getElementById("year");
  let desciptionField = document.getElementById("description");
  let priceField = document.getElementById("price");
  let addButton = document.getElementById("add");
  addButton.addEventListener("click", addFurniture);

  let furnitureList = document.getElementById("furniture-list");
  let totalProfit = document.querySelector(".total-price");
  let sum = 0;

  function addFurniture(ev) {
    ev.preventDefault();
    let model = modelField.value;
    let year = Number(yearField.value)
    let description = desciptionField.value;
    let price = Number(priceField.value);

    if (model == "" || description == "" || year <= 0 || price <= 0) {
      return;
    }

    let trInfo = document.createElement("tr");
    trInfo.setAttribute("class", "info");
    let tdModel = document.createElement("td");
    tdModel.textContent = `${model}`;
    let tdPrice = document.createElement("td");
    tdPrice.textContent = `${price.toFixed(2)}`;
    let tdButtons = document.createElement("td");
    let moreInfoButton = document.createElement("button");
    moreInfoButton.textContent = `More Info`;
    moreInfoButton.setAttribute("class", "moreBtn");
    let buyButton = document.createElement("button");
    buyButton.textContent = `Buy it`;
    buyButton.setAttribute("class", "buyBtn");
    tdButtons.appendChild(moreInfoButton);
    tdButtons.appendChild(buyButton);
    trInfo.appendChild(tdModel);
    trInfo.appendChild(tdPrice);
    trInfo.appendChild(tdButtons);

    let trHiddenInfo = document.createElement("tr");
    trHiddenInfo.setAttribute("class", "hide");
    let tdYear = document.createElement("td");
    tdYear.textContent = `Year: ${year}`;
    let tdDescription = document.createElement("td");
    tdDescription.textContent = `Description: ${description}`;
    tdDescription.colSpan = "3";
    trHiddenInfo.appendChild(tdYear);
    trHiddenInfo.appendChild(tdDescription);

    furnitureList.appendChild(trInfo);
    furnitureList.appendChild(trHiddenInfo);

    modelField.value = "";
    yearField.value = "";
    desciptionField.value = "";
    priceField.value = "";

    moreInfoButton.addEventListener("click", moreInfo);
    buyButton.addEventListener("click", buyFurniture);

    function moreInfo() {
      if (moreInfoButton.textContent == "More Info") {
        moreInfoButton.textContent = `Less Info`;
        trHiddenInfo.style.display = "contents";
      } else {
        moreInfoButton.textContent = `More Info`;
        trHiddenInfo.style.display = "none";
      }
    }

    function buyFurniture(ev) {
      sum += Number(price);
      totalProfit.textContent = sum.toFixed(2);

      ev.target.parentElement.parentElement.remove();
    }
  }
}
