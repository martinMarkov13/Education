  window.addEventListener("load", solve);

function solve() {
  let makeInputField = document.querySelector("#make");
  let modelInputField = document.querySelector("#model");
  let yearInputField = document.querySelector("#year");
  let fuelSelectionField = document.querySelector("#fuel");
  let originalCostField = document.querySelector("#original-cost");
  let sellingPriceField = document.querySelector("#selling-price");
  let publishButton = document.getElementById("publish");
  publishButton.addEventListener("click", publish);

  let sellingCarsSection = document.getElementById("table-body");
  let soldCarsSection = document.getElementById("cars-list");
  let profit = document.getElementById("profit");
  totalSellPrice = [];

  function publish(e) {
    e.preventDefault();
    let make = makeInputField.value;
    let model = modelInputField.value;
    let year = yearInputField.value;
    let fuel = fuelSelectionField.value;
    let originalCost = originalCostField.value;
    let sellingPrice = sellingPriceField.value;

    if (make == "" || model == "" || year == "" || fuel == "") {
      return;
    }
    if(originalCost > sellingPrice){
      return;
    }

    let tr = document.createElement("tr");
    tr.setAttribute("class", "row")
    let tdMake = document.createElement("td");
    tdMake.textContent = `${make}`;
    let tdModel = document.createElement("td")
    tdModel.textContent = `${model}`;
    let tdYear = document.createElement("td");
    tdYear.textContent = `${year}`;
    let tdFuel = document.createElement("td");
    tdFuel.textContent = `${fuel}`;
    let tdOriginalPrice = document.createElement("td")
    tdOriginalPrice.textContent = `${originalCost}`;
    let tdSellingPrice = document.createElement("td");
    tdSellingPrice.textContent = `${sellingPrice}`;
    let tdButtons = document.createElement("td");
    let editButton = document.createElement("button");
    editButton.textContent = `Edit`;
    editButton.setAttribute("class", "action-btn edit")
    editButton.addEventListener("click", edit)
    let sellButton = document.createElement("button");
    sellButton.textContent = `Sell`;
    sellButton.setAttribute("class","action-btn sell")
    sellButton.addEventListener("click", sell)
    tdButtons.appendChild(editButton);
    tdButtons.appendChild(sellButton);

    tr.appendChild(tdMake);
    tr.appendChild(tdModel);
    tr.appendChild(tdYear);
    tr.appendChild(tdFuel);
    tr.appendChild(tdOriginalPrice);
    tr.appendChild(tdSellingPrice);
    tr.appendChild(tdButtons);
    sellingCarsSection.appendChild(tr);

    makeInputField.value = ""
    modelInputField.value = ""
    yearInputField.value = ""
    fuelSelectionField.value = ""
    originalCostField.value = ""
    sellingPriceField.value = ""

    function edit() {
      makeInputField.value = make;
      modelInputField.value = model;
      yearInputField.value = year;
      fuelSelectionField.value = fuel;
      originalCostField.value = originalCost;
      sellingPriceField.value = sellingPrice;

      tr.remove()
    }
    
    function sell() {
      let car = `${make} ${model}`;
      let priceDifference = `${sellingPrice-originalCost}`;
      let liElement = document.createElement("li");
      liElement.setAttribute("class", "each-list");
      let spanCar = document.createElement("span");
      spanCar.textContent = `${car}`
      let spanYear = document.createElement("span");
      spanYear.textContent = `${year}`
      let differenceSpan = document.createElement("span");
      differenceSpan.textContent = `${priceDifference}`;
      liElement.appendChild(spanCar)
      liElement.appendChild(spanYear)
      liElement.appendChild(differenceSpan)
      soldCarsSection.appendChild(liElement)
      tr.remove();

      let totalSum = 0;
      totalSellPrice.push(priceDifference)
      for (let p of totalSellPrice) {
        totalSum += Number(p)
      }
      profit.textContent = totalSum.toFixed(2)
    }
  }
}
