function validateForm() {
  let x = document.forms["login"]["username"].value;
  if (x == "Admin") {
    alert("Name must be filled out");
    return true;
  }
}
