var toy = {
  category: "John",
  "age-group": "",
  gender: "",
  quantity: 0,
};

function addDonation() {
  // Find a <table> element with id="myTable":
  var table = document.getElementById("myTable");

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(1);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  // Add some text to the new cells:
  cell1.innerHTML = "Charity";
  cell2.innerHTML = "Toys";
  cell3.innerHTML = "2-4 years";
  cell4.innerHTML = "Lego";
}

function checkDonation() {
  var selectedValue = document.getElementById("selectCateory").value;
  var common = document.getElementById("commonDonations");
  var categoryText = document.getElementById("selectedCategory");
  var Toys = document.getElementById("Toys");
  var Clothes = document.getElementById("Clothes");
  if (selectedValue === "Categories") {
    common.style.display = "none";
    Toys.style.display = "none";
    Clothes.style.display = "none";
  } else {
    common.style.display = "block";
  }
  if (selectedValue === "Toys") {
    categoryText.textContent = "Toys";
    Toys.style.display = "block";
    Clothes.style.display = "none";
  }
  if (selectedValue === "Clothes") {
    categoryText.textContent = "Clothes";
    Clothes.style.display = "block";
    Toys.style.display = "none";
  }
  if (selectedValue === "Food") {
    categoryText.textContent = "Food";
    Clothes.style.display = "none";
    Toys.style.display = "none";
  }
  if (selectedValue === "Medical Supplies") {
    categoryText.textContent = "Medical Supplies";
    Clothes.style.display = "none";
    Toys.style.display = "none";
  }
  if (selectedValue === "School Supplies") {
    categoryText.textContent = "School Supplies";
    Clothes.style.display = "none";
    Toys.style.display = "none";
  }
  if (selectedValue === "Blood Donations") {
    categoryText.textContent = "Blood Donations";
    Clothes.style.display = "none";
    Toys.style.display = "none";
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

  var deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-primary";
  deleteButton.textContent = "Delete";

  // Add event listener to delete button
  deleteButton.addEventListener("click", function () {
    var rowIndex = row.rowIndex;
    table.deleteRow(rowIndex); // Remove the row from the table
  });

  // Add some text to the new cells:
  cell1.innerHTML = document.getElementById("DonationName").value;
  cell2.innerHTML = document.getElementById("selectCateory").value;
  cell4.innerHTML = "pending";
  cell4.appendChild(deleteButton);
}
