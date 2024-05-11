// dropdown.js

function closeTeacher()
{
  console.log("clickOn doctor");
  document.getElementById("multiCollapseExample1").style.display = "";
  document.getElementById("multiCollapseExample2").style.display = "none";
}

function closeDoctor()
{
  console.log("clickOn teacher");
  document.getElementById("multiCollapseExample2").style.display = "";
  document.getElementById("multiCollapseExample1").style.display = "none";
}

// dropdown.js


  
  
  
  

  function donorregister(){
    var firstName = document.getElementById("FirstName").value;
    var lastName = document.getElementById("LastName").value;
    var gender = document.getElementById("Gender-Dropdown").value;
    var email = document.getElementById("Email").value;
    var contactNumber = document.getElementById("ContactNumber").value;
    var password = document.getElementById("Password").value;
    var address = document.getElementById("Address").value;
    var area = document.getElementById("Area").value;
    var governorate = document.getElementById("Governorate").value;

    if (
      firstName == ""||
      lastName == ""  ||
      gender === "Gender" ||
      email == ""  ||
      contactNumber == ""  ||
      password == ""  ||
      address == "" ||
      area == "" ||
      governorate == "" 

    ) {
      alert("Please fill in all the fields.");
      console.log("Please help me");
      return false;
    }
    window.location.href = "/Web Application/login.html";
    return true;
  }
  