function login() {
  var x = document.getElementById("username").value;
  var y = document.getElementById("password").value;
  if ((x === "admin") & (y === "admin")) {
    window.location.href = "Admin/admin.html";
  }
  if ((x === "donor") & (y === "donor")) {
    window.location.href = "Donor/donorMainPage.html";
  }
  if ((x === "organization") & (y === "organization")) {
    window.location.href = "/Web Application/Organization/donate.html";  }
}

function register() {
  window.location.href = "register.html";
}
function checkRegister() {
  var register = document.getElementById("selectRegister").value;
  var common = document.getElementById("commonRegister");
  var donor = document.getElementById("donorRegister");
  var doctor = document.getElementById("doctorRegister");
  var teacher = document.getElementById("teacherRegister");
  var org = document.getElementById("organizationRegister")

  common.style.display = "none";
  donor.style.display = "none";
  doctor.style.display = "none";
  teacher.style.display = "none";
  org.style.display = "none";
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
    org.style.display = "block"; 
  }
}

function check() {

  var register = document.getElementById("selectRegister").value;
  
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var gender = document.getElementById("Gender-Dropdown").value;
  var email = document.getElementById("email").value;
  var contactnumber = document.getElementById("contactnumber").value;
  var governate = document.getElementById("governate").value;
  var address = document.getElementById("address").value;
  var addressclinic = document.getElementById("addressclinic").value;
  var areaclinic = document.getElementById("areaclinic").value;
  var Governateclinic = document.getElementById("Governateclinic").value;
  var speciality = document.getElementById("speciality").value;
  var casesnumb = document.getElementById("casesnumb").value;
  var subjects = document.getElementById("subjects").value;
  var numbclasses = document.getElementById("numbclasses").value;
  var numbstudents = document.getElementById("numbstudents").value;
  var password = document.getElementById("password").value;
  var orgname = document.getElementById("orgname").value;
  var orgtype = document.getElementById("orgtype").value;
  var orgaddress = document.getElementById("orgaddress").value;
  var area = document.getElementById("area").value;

  var fname1 = document.getElementById("fname");
  var lname1 = document.getElementById("lname");
  var gender1 = document.getElementById("Gender-Dropdown");
  var email1 = document.getElementById("email");
  var contactnumber1 = document.getElementById("contactnumber");
  var governate1 = document.getElementById("governate");
  var address1 = document.getElementById("address");
  var addressclinic1 = document.getElementById("addressclinic");
  var areaclinic1 = document.getElementById("areaclinic");
  var Governateclinic1 = document.getElementById("Governateclinic");
  var speciality1 = document.getElementById("speciality");
  var casesnumb1 = document.getElementById("casesnumb");
  var subjects1 = document.getElementById("subjects");
  var numbclasses1 = document.getElementById("numbclasses");
  var numbstudents1 = document.getElementById("numbstudents");
  var password1 = document.getElementById("password");
  var orgname1 = document.getElementById("orgname");
  var orgtype1 = document.getElementById("orgtype");
  var orgaddress1 = document.getElementById("orgaddress");
  var area1 = document.getElementById("area");
 
 
  
if(register === "Donor"){
  if (fname === null || fname === "" || lname === null || lname === "" || gender === "Gender" || email === null || email === "" || contactnumber === null || contactnumber === "" ||governate === null || governate === "" || password === null || password === "" || address === null || address === "" || area === null || area === ""){
    alert("fill fields");
  }
  if(fname === null || fname === ""){
    fname1.className = "form-control is-invalid"
  }
  else{
    fname1.className = "form-control is-valid"
  }
  if(lname === null || lname === ""){
    lname1.className = "form-control is-invalid"
  }
  else{
    lname1.className = "form-control is-valid"
  }
  if(email === null || email === ""){
    email1.className = "form-control is-invalid"
  }
  else{
    email1.className = "form-control is-valid"
  }
  if(contactnumber === null || contactnumber === ""){
    contactnumber1.className = "form-control is-invalid"
  }
  else{
    contactnumber1.className = "form-control is-valid"
  }
  if(governate === null || governate === ""){
    governate1.className = "form-control is-invalid"
  }
  else{
    governate1.className = "form-control is-valid"
  }
  if(address === null || address === ""){
    address1.className = "form-control is-invalid"
  }
  else{
    address1.className = "form-control is-valid"
  }
  if(password === null || password === ""){
    password1.className = "form-control is-invalid"
  }
  else{
    password1.className = "form-control is-valid"
  }
  if(area === null || area === ""){
    area1.className = "form-control is-invalid"
  }
  else{
    area1.className = "form-control is-valid"
  }

}
  if (register === "Doctor") {
    if (fname === null || fname === "" || lname === null || lname === "" || gender === "Gender" || email === null || email === "" || contactnumber === null || contactnumber === "" ||governate === null || governate === "" || password === null || password === "" || addressclinic === null || addressclinic === "" || areaclinic === null || areaclinic === ""|| Governateclinic === null || Governateclinic === "" || speciality === null || speciality === "" || casesnumb === null || casesnumb === "" || area === null || area === "" ){
      alert("fill fields");
  }
  if(fname === null || fname === ""){
    fname1.className = "form-control is-invalid"
  }
  else{
    fname1.className = "form-control is-valid"
  }
  if(lname === null || lname === ""){
    lname1.className = "form-control is-invalid"
  }
  else{
    lname1.className = "form-control is-valid"
  }
  if(email === null || email === ""){
    email1.className = "form-control is-invalid"
  }
  else{
    email1.className = "form-control is-valid"
  }
  if(contactnumber === null || contactnumber === ""){
    contactnumber1.className = "form-control is-invalid"
  }
  else{
    contactnumber1.className = "form-control is-valid"
  }
  if(governate === null || governate === ""){
    governate1.className = "form-control is-invalid"
  }
  else{
    governate1.className = "form-control is-valid"
  }
  if(password === null || password === ""){
    password1.className = "form-control is-invalid"
  }
  else{
    password1.className = "form-control is-valid"
  }
  if(area === null || area === ""){
    area1.className = "form-control is-invalid"
  }
  else{
    area1.className = "form-control is-valid"
  }
  if(addressclinic === null || addressclinic === ""){
    addressclinic1.className = "form-control is-invalid"
  }
  else{
    addressclinic1.className = "form-control is-valid"
  }
  if(areaclinic === null || areaclinic === ""){
    areaclinic1.className = "form-control is-invalid"
  }
  else{
    areaclinic1.className = "form-control is-valid"
  }
  if(Governateclinic === null || Governateclinic === ""){
    Governateclinic1.className = "form-control is-invalid"
  }
  else{
    Governateclinic1.className = "form-control is-valid"
  }
  if(speciality === null || speciality === ""){
    speciality1.className = "form-control is-invalid"
  }
  else{
    speciality1.className = "form-control is-valid"
  }
  if(casesnumb === null || casesnumb === ""){
    casesnumb1.className = "form-control is-invalid"
  }
  else{
    casesnumb1.className = "form-control is-valid"
  }
}
  if (register === "Teacher") {
    if (fname === null || fname === "" || lname === null || lname === "" || gender === "Gender" || email === null || email === "" || contactnumber === null || contactnumber === "" ||governate === null || governate === "" || password === null || password === "" || subjects === null || subjects === "" || numbclasses === null || numbclasses === "" || numbstudents === null || numbstudents === "" || area === null || area === ""){
      alert("fill fields");
  }
  if(fname === null || fname === ""){
    fname1.className = "form-control is-invalid"
  }
  else{
    fname1.className = "form-control is-valid"
  }
  if(lname === null || lname === ""){
    lname1.className = "form-control is-invalid"
  }
  else{
    lname1.className = "form-control is-valid"
  }
  if(email === null || email === ""){
    email1.className = "form-control is-invalid"
  }
  else{
    email1.className = "form-control is-valid"
  }
  if(contactnumber === null || contactnumber === ""){
    contactnumber1.className = "form-control is-invalid"
  }
  else{
    contactnumber1.className = "form-control is-valid"
  }
  if(governate === null || governate === ""){
    governate1.className = "form-control is-invalid"
  }
  else{
    governate1.className = "form-control is-valid"
  }
  if(password === null || password === ""){
    password1.className = "form-control is-invalid"
  }
  else{
    password1.className = "form-control is-valid"
  }
  if(area === null || area === ""){
    area1.className = "form-control is-invalid"
  }
  else{
    area1.className = "form-control is-valid"
  }
  if(subjects === null || subjects === ""){
    subjects1.className = "form-control is-invalid"
  }
  else{
    subjects1.className = "form-control is-valid"
  }
  if(numbclasses === null || numbclasses === ""){
    numbclasses1.className = "form-control is-invalid"
  }
  else{
    numbclasses1.className = "form-control is-valid"
  }
  if(numbstudents === null || numbstudents === ""){
    numbstudents1.className = "form-control is-invalid"
  }
  else{
    numbstudents1.className = "form-control is-valid"
  }
  
}
if(register === "Organization"){
  if (fname === null || fname === "" || lname === null || lname === "" || gender === "Gender" || email === null || email === "" || contactnumber === null || contactnumber === "" ||governate === null || governate === "" || password === null || password === "" || orgname === null || orgname === "" || orgtype === null || orgtype === "" || orgaddress === null || orgaddress === "" || area === null || area === ""){
    alert("fill fields");
  }
  if(fname === null || fname === ""){
    fname1.className = "form-control is-invalid"
  }
  else{
    fname1.className = "form-control is-valid"
  }
  if(lname === null || lname === ""){
    lname1.className = "form-control is-invalid"
  }
  else{
    lname1.className = "form-control is-valid"
  }
  if(email === null || email === ""){
    email1.className = "form-control is-invalid"
  }
  else{
    email1.className = "form-control is-valid"
  }
  if(contactnumber === null || contactnumber === ""){
    contactnumber1.className = "form-control is-invalid"
  }
  else{
    contactnumber1.className = "form-control is-valid"
  }
  if(governate === null || governate === ""){
    governate1.className = "form-control is-invalid"
  }
  else{
    governate1.className = "form-control is-valid"
  }
  if(password === null || password === ""){
    password1.className = "form-control is-invalid"
  }
  else{
    password1.className = "form-control is-valid"
  }
  if(area === null || area === ""){
    area1.className = "form-control is-invalid"
  }
  else{
    area1.className = "form-control is-valid"
  }
  if(orgname === null || orgname === ""){
    orgname1.className = "form-control is-invalid"
  }
  else{
    orgname1.className = "form-control is-valid"
  }
  if(orgtype === null || orgtype === ""){
    orgtype1.className = "form-control is-invalid"
  }
  else{
    orgtype1.className = "form-control is-valid"
  }
  if(orgaddress === null || orgaddress === ""){
    orgaddress1.className = "form-control is-invalid"
  }
  else{
    orgaddress1.className = "form-control is-valid"
  }
}

window.location.href = "login.html";
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


function changeMarkerPosition(marker) {
  var latlng = new google.maps.LatLng(40.748774, -73.985763);
  marker.setPosition(latlng);
}
