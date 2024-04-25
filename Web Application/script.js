function login() {
  var x = document.getElementById("username").value;
  var y = document.getElementById("password").value;
  if ((x === "admin") & (y === "admin")) {
    window.location.href = "Admin/admin.html";
  }
  if ((x === "Donor") & (y === "donor")) {
    window.location.href = "Donor/donor.html";
  }
  if ((x === "Organization") & (y === "organization")) {
    window.location.href = "Organization/organization.html";
  }
  if ((x === "User") & (y === "user")) {
    window.location.href = "User/user.html";
  }
}

function register() {
  window.location.href = "register.html";
}
