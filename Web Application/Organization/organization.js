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
