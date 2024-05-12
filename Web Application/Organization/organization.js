var toy = {
  category: "John",
  "age-group": "",
  gender: "",
  quantity: 0,
};

function checkDonation2() {
  var selectedValue = document.getElementById("selectCateory").value;
  var common = document.getElementById("commonDonations");
  var categoryText = document.getElementById("selectedCategory");
  var Toys = document.getElementById("Toys");
  var Clothes = document.getElementById("Clothes");
  var Food = document.getElementById("Food");
  var Supplies = document.getElementById("Medical Supplies");
  var School = document.getElementById("School");
  var Blood = document.getElementById("Blood Donations");

  common.style.display = "none";
  Toys.style.display = "none";
  Clothes.style.display = "none";
  Food.style.display = "none";
  Supplies.style.display = "none";
  School.style.display = "none";
  Blood.style.display = "none";

  if (selectedValue !== "Donation Type") {
    common.style.display = "block";
  }
  if (selectedValue === "Toys") {
    categoryText.textContent = "Toys";
    Toys.style.display = "block";
  }
  if (selectedValue === "Clothes") {
    categoryText.textContent = "Clothes";
    Clothes.style.display = "block";
  }
  if (selectedValue === "Food") {
    categoryText.textContent = "Food";

    Food.style.display = "block";
  }
  if (selectedValue === "Medical Supplies") {
    categoryText.textContent = "Medical Supplies";

    Supplies.style.display = "block";
  }
  if (selectedValue === "School Supplies") {
    categoryText.textContent = "School Supplies";

    School.style.display = "block";
  }
  if (selectedValue === "Blood Donations") {
    categoryText.textContent = "Blood Donations";
    Blood.style.display = "block";
  }
}

function addClothes() {
  // Find a <table> element with id="myTable":
  var table = document.getElementById("myTable");

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(1);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  var deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-primary";
  deleteButton.textContent = "Delete";

  // Add event listener to delete button
  deleteButton.addEventListener("click", function () {
    var rowIndex = row.rowIndex;
    table.deleteRow(rowIndex); // Remove the row from the table
  });

  if (
    document.getElementById("clothType").value === null ||
    document.getElementById("clothType").value == "" ||
    document.getElementById("selectCateory").value === null ||
    document.getElementById("selectCateory").value == "" ||
    document.getElementById("clotheQuantity").value === null ||
    document.getElementById("clotheQuantity").value == ""
  ) {
    alert("Please fill all fields");
  } else {
    // Add some text to the new cells:
    cell1.innerHTML = document.getElementById("clothType").value;
    cell2.innerHTML = document.getElementById("selectCateory").value;
    cell3.innerHTML = "pending";
    cell4.innerHTML = document.getElementById("clotheQuantity").value;
    cell5.appendChild(deleteButton);
    alert("Donation Added");
  }
}
function addToys() {
  // Find a <table> element with id="myTable":
  var table = document.getElementById("myTable");

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(1);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-primary";
  deleteButton.textContent = "Delete";

  // Add event listener to delete button
  deleteButton.addEventListener("click", function () {
    var rowIndex = row.rowIndex;
    table.deleteRow(rowIndex); // Remove the row from the table
  });

  if (
    document.getElementById("DonationName").value === null ||
    document.getElementById("DonationName").value == "" ||
    document.getElementById("selectCateory").value === null ||
    document.getElementById("selectCateory").value == "" ||
    document.getElementById("toysQuantity").value === null ||
    document.getElementById("toysQuantity").value == ""
  ) {
    alert("Please fill all fields");
  } else {
    // Add some text to the new cells:
    cell1.innerHTML = document.getElementById("DonationName").value;
    cell2.innerHTML = document.getElementById("selectCateory").value;
    cell3.innerHTML = "pending";
    cell4.innerHTML = document.getElementById("toysQuantity").value;

    cell5.appendChild(deleteButton);
  }
}

function addFood() {
  // Find a <table> element with id="myTable":
  var table = document.getElementById("myTable");

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(1);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-primary";
  deleteButton.textContent = "Delete";

  // Add event listener to delete button
  deleteButton.addEventListener("click", function () {
    var rowIndex = row.rowIndex;
    table.deleteRow(rowIndex); // Remove the row from the table
  });

  if (
    document.getElementById("foodType").value === null ||
    document.getElementById("foodType").value == "" ||
    document.getElementById("selectCateory").value === null ||
    document.getElementById("selectCateory").value == "" ||
    document.getElementById("FoodQuantity").value === null ||
    document.getElementById("FoodQuantity").value == "" ||
    document.getElementById("foodUnit").value === null ||
    document.getElementById("foodUnit").value == ""
  ) {
    alert("Please fill all fields");
  } else {
    // Add some text to the new cells:
    cell1.innerHTML = document.getElementById("foodType").value;
    cell2.innerHTML = document.getElementById("selectCateory").value;
    cell3.innerHTML = "pending";
    cell4.innerHTML =
      document.getElementById("FoodQuantity").value +
      "" +
      document.getElementById("foodUnit").value;

    cell5.appendChild(deleteButton);
  }
}
function addSupplies() {
  // Find a <table> element with id="myTable":
  var table = document.getElementById("myTable");

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(1);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-primary";
  deleteButton.textContent = "Delete";

  // Add event listener to delete button
  deleteButton.addEventListener("click", function () {
    var rowIndex = row.rowIndex;
    table.deleteRow(rowIndex); // Remove the row from the table
  });

  if (
    document.getElementById("SuppliesType").value === null ||
    document.getElementById("SuppliesType").value == "" ||
    document.getElementById("selectCateory").value === null ||
    document.getElementById("selectCateory").value == "" ||
    document.getElementById("SuppliesQuantity").value === null ||
    document.getElementById("SuppliesQuantity").value == ""
  ) {
    alert("Please fill all fields");
  } else {
    // Add some text to the new cells:
    cell1.innerHTML = document.getElementById("SuppliesType").value;
    cell2.innerHTML = document.getElementById("selectCateory").value;
    cell3.innerHTML = "pending";
    cell4.innerHTML = document.getElementById("SuppliesQuantity").value;

    cell5.appendChild(deleteButton);
  }
}

function addSchool() {
  // Find a <table> element with id="myTable":
  var table = document.getElementById("myTable");

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(1);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-primary";
  deleteButton.textContent = "Delete";

  // Add event listener to delete button
  deleteButton.addEventListener("click", function () {
    var rowIndex = row.rowIndex;
    table.deleteRow(rowIndex); // Remove the row from the table
  });

  if (
    document.getElementById("SchoolType").value === null ||
    document.getElementById("SchoolType").value == "" ||
    document.getElementById("selectCateory").value === null ||
    document.getElementById("selectCateory").value == "" ||
    document.getElementById("SchoolQuantity").value === null ||
    document.getElementById("SchoolQuantity").value == ""
  ) {
    alert("Please fill all fields");
  } else {
    // Add some text to the new cells:
    cell1.innerHTML = document.getElementById("SchoolType").value;
    cell2.innerHTML = document.getElementById("selectCateory").value;
    cell3.innerHTML = "pending";
    cell4.innerHTML = document.getElementById("SchoolQuantity").value;

    cell5.appendChild(deleteButton);
  }
}
function addBlood() {
  // Find a <table> element with id="myTable":
  var table = document.getElementById("myTable");

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(1);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-primary";
  deleteButton.textContent = "Delete";

  // Add event listener to delete button
  deleteButton.addEventListener("click", function () {
    var rowIndex = row.rowIndex;
    table.deleteRow(rowIndex); // Remove the row from the table
  });
  if (
    document.getElementById("BloodType").value === null ||
    document.getElementById("BloodType").value == "" ||
    document.getElementById("selectCateory").value === null ||
    document.getElementById("selectCateory").value == "" ||
    document.getElementById("BloodQuantity").value === null ||
    document.getElementById("BloodQuantity").value == ""
  ) {
    alert("Please fill all fields");
  } else {
    // Add some text to the new cells:
    cell1.innerHTML = document.getElementById("BloodType").value;
    cell2.innerHTML = document.getElementById("selectCateory").value;
    cell3.innerHTML = "pending";
    cell4.innerHTML = document.getElementById("BloodQuantity").value;

    cell5.appendChild(deleteButton);
  }
}

function remDone() {
  document
    .getElementById("myTable")
    .deleteRow(document.getElementById("done").rowIndex);
}
