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
<<<<<<< Updated upstream
=======
function checkRegister() {
  var register = document.getElementById("selectRegister").value;
  var common = document.getElementById("commonRegister");
  var donor = document.getElementById("donorRegister");
  var doctor = document.getElementById("doctorRegister");
  var teacher = document.getElementById("teacherRegister");

  common.style.display = "none";
  donor.style.display = "none";
  doctor.style.display = "none";
  teacher.style.display = "none";

  if (register === "Donor") {
    common.style.display = "block";
    donor.style.display = "block";
  }
  if (register === "Doctor") {
    common.style.display = "block";
    doctor.style.display = "block";
  }
  if (register === "Teacher") {
    common.style.display = "block";
    teacher.style.display = "block";
  }
  if (register === "Organization") {
    common.style.display = "block";
  }
}

function check() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var gender = document.getElementById("Gender-Dropdown").value;
  var email = document.getElementById("email").value;
  var contactnumber = document.getElementById("contactnumber").value;
  var address = document.getElementById("address").value;
  var addressclinic = document.getElementById("addressclinic").value;
  var areaclinic = document.getElementById("areaclinic").value;
  var Governateclinic = document.getElementById("Governateclinic").value;
  var speciality = document.getElementById("speciality").value;
  var casesnumb = document.getElementById("casesnumb").value;
  var subjects = document.getElementById("subjects").value;
  var numbclasses = document.getElementById("numbclasses").value;
  var numbstudents = document.getElementById("numbstudents").value;
 
 
  

  if (fname === null || fname === "" || lname === null || lname === "" || gender === "Gender" || email === null || email === "" || contactnumber === null || contactnumber === "" ||governate === null || governate === "" || lnapasswordme === null || password === "" || address === null || address === "" || addressclinic === null || addressclinic === "" || areaclinic === null || areaclinic === ""|| Governateclinic === null || Governateclinic === "" || speciality === null || speciality === "" || casesnumb === null || casesnumb === "" || subjects === null || subjects === "" || numbclasses === null || numbclasses === "" || numbstudents === null || numbstudents === "") {
    alert("fill fields");
    //fname.classList.remove("form-control");
    //fname.classList.add("form-control is-invalid");
  }


}
document.addEventListener("DOMContentLoaded", function() {
  var uploadButton = document.getElementById('uploadBtn');
  var fileInput = document.getElementById('fileInput');

  uploadButton.addEventListener('click', function() {
    uploadPDF();
  });

  function uploadPDF() {
    var file = fileInput.files[0];
    
    if (file) {
      if (file.type === 'application/pdf') {
        var formData = new FormData();
        formData.append('pdfFile', file);
        
        // For demonstration, logging the file details
        console.log('File name:', file.name);
        console.log('File size:', file.size, 'bytes');
        console.log('File type:', file.type);
      } else {
        alert('Please select a PDF file.');
      }
    } else {
      alert('Please select a file.');
    }
  }
});

>>>>>>> Stashed changes
