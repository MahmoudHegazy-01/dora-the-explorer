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
function checkRegister() {
  var register = document.getElementById("selectRegister").value;
  var common = document.getElementById("commonRegister");
  var donor = document.getElementById("donorRegister");

  common.style.display = "none";
  donor.style.display = "none";

  if (register === "Donor") {
    common.style.display = "block";
    donor.style.display = "block";
  }
  if (register === "Doctor") {
    common.style.display = "block";
  }
  if (register === "Teacher") {
    common.style.display = "block";
  }
  if (register === "Organization") {
    common.style.display = "block";
  }
}

function check() {
  var fname = document.getElementById("fname").value;
  if (fname === null || fname === "") {
    alert("fill fields");
  }
}
