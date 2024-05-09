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
  var c = document.getElementById("collapseExample");
  if (selectedValue === "1") {
    console.log("1");
    c.style.display = "block";
  }
  if (selectedValue === "2") {
    console.log("2");
    c.style.display = "none";
  }
  if (selectedValue === "3") {
    console.log("3");
  }
  if (selectedValue === "4") {
    console.log("4");
  }
  if (selectedValue === "5") {
    console.log("5");
  }
  if (selectedValue === "6") {
    console.log("6");
  }
}
