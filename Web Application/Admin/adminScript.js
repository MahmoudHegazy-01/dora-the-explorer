var dropdownElement; // Variable to store the reference to the dropdown
var tabButton; //takes event
var n;
var password = "admin";

function assignNumber1(){
    n=1;
}
function assignNumber2(){
    n=2;
}
function assignNumber3(){
    n=3;
}
function assignNumber4(){
    n=4;
}

function handleClick(event) {
    // Prevent the default behavior of the link
    event.preventDefault();
    tabButton=event;

    // Remove the previous dropdown, if it exists
    if (dropdownElement) {
        dropdownElement.remove();
    }

    // Create ul element
    var ul = document.createElement('ul');
    ul.className = "dropdown-menu position-absolute d-grid gap-1 p-2 rounded-3 mx-0 shadow w-260px";
    ul.setAttribute('data-bs-theme', 'light');

    // Calculate the position of the button
    var buttonRect = event.target.getBoundingClientRect();
    var top = buttonRect.bottom; // Adjust the top position relative to the bottom of the button
    var left = buttonRect.left;

    // Set the position of the dropdown
    ul.style.top = top + 'px';
    ul.style.left = left + 'px';

    if (n==1){
        var urls = ["orglist.html", "donlist.html"];

        var actions = ["Organizations List", "Donors List"];
    }
    else if (n==2){
        var urls = ["orgsubmissions.html", "donsubmissions.html"];

        var actions = ["Organizations' Submissions", "Donors' Submissions"];
    }
    else if (n==3){
        var urls = ["orgrequests.html", "donrequests.html"];

        var actions = ["Organizations' Requests", "Donors' Requests"];
    }
    else{
        var urls = ["orgreg.html", "donreg.html"];

        var actions = ["Registered Organization", "Registered Donors"];
    }

    actions.forEach(function(actionText, index) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.className = "dropdown-item rounded-2";
        a.href = urls[index]; // Set the href attribute to the corresponding URL
        a.textContent = actionText;
        li.appendChild(a);
        ul.appendChild(li);
    });

    // Append the ul element to the document body
    document.body.appendChild(ul);

    // Store the reference to the dropdown element
    dropdownElement = ul;
}

function handleResize() {
    // If the dropdown exists, recalculate its position
    if (dropdownElement) {
        var buttonRect = tabButton.target.getBoundingClientRect();
        var top = buttonRect.bottom;
        var left = buttonRect.left;
        dropdownElement.style.top = top + 'px';
        dropdownElement.style.left = left + 'px';
    }
}

// Add event listeners to all tab buttons
var tabButtons = document.querySelectorAll('.nav-link.text-secondary');
tabButtons.forEach(function(button) {
    button.addEventListener('click', handleClick);
});

// Initialize the tab button reference when the window is loaded
window.onload = function() {
    tabButton = document.querySelector('.nav-link.text-secondary'); // Adjust the selector as needed
}

// Add event listeners
window.addEventListener('resize', handleResize);

function home() {
    window.location.href = "admin.html";
}

function orgRegistered() {
    window.location.href = "orgreg.html";
}
function donRegistered() {
    window.location.href = "donreg.html";
}

function account() {
    window.location.href = "adminaccount.html";
}

function donlist() {
    window.location.href = "donlist.html";
}
function orglist() {
    window.location.href = "orglist.html";
}
function donreq() {
    window.location.href = "donrequests.html";
}
function orgreq() {
    window.location.href = "orgrequests.html";
}
function donsub() {
    window.location.href = "donsubmissions.html";
}
function orgsub() {
    window.location.href = "orgsubmissions.html";
}

function pass() {
    window.location.href = "changepassword.html";
}

var oldpass;
var newpass;
var conpass;
function changepass() {
    if(document.getElementById("oldPassword")!==null && document.getElementById("newPassword")!==null && document.getElementById("confirmPassword")!==null){
        oldpass = document.getElementById("oldPassword").value;
        newpass = document.getElementById("newPassword").value;
        conpass = document.getElementById("confirmPassword").value;
        var prev = localStorage.getItem("myVariable");
    }
    else{
        return;
    }

    if (oldpass === "" || newpass === "" || conpass === ""){
        alert("Empty field detected.");
        return;
    }
    if(oldpass !== prev){
        alert("Old password entered is wrong.");
        window.location.href = "changepassword.html";
        return;
    }
    else if(oldpass === newpass){
        alert("Old password and new password cannot be the same.");
        window.location.href = "changepassword.html";
        return;
    }
    else if (newpass !== conpass){
        alert("New password and confirm password do not match.");
        window.location.href = "changepassword.html";
        return;
    }
    else{
        localStorage.setItem("myVariable", newpass);
        window.location.href = "adminaccount.html";
        return;
    }
}

if (document.getElementById("toggleVisibilityOld")!=null){
    document.getElementById('toggleVisibilityOld').addEventListener('click', function() {
        toggleVisibility('oldPassword');
    });
}

if (document.getElementById("toggleVisibilityNew")!=null){
    document.getElementById('toggleVisibilityNew').addEventListener('click', function() {
        toggleVisibility('newPassword');
    });
}

if (document.getElementById("toggleVisibilityConfirm")!=null){
    document.getElementById('toggleVisibilityConfirm').addEventListener('click', function() {
        toggleVisibility('confirmPassword');
    });
}

function toggleVisibility(inputId) {
    var inputField = document.getElementById(inputId);

    if (inputField.type === 'password') {
      inputField.type = 'text';
      if (document.getElementById('toggleVisibility' + inputId.charAt(0).toUpperCase() + inputId.slice(1))!=null){
        document.getElementById('toggleVisibility' + inputId.charAt(0).toUpperCase() + inputId.slice(1)).textContent = 'Hide';
      }
    } else {
      inputField.type = 'password';
      if (document.getElementById('toggleVisibility' + inputId.charAt(0).toUpperCase() + inputId.slice(1))!=null){
        document.getElementById('toggleVisibility' + inputId.charAt(0).toUpperCase() + inputId.slice(1)).textContent = 'Show';
      }
    }
}

function performSearch() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var table = document.getElementById("dataTable");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) { // Start from index 1 to skip header row
        var cells = rows[i].getElementsByTagName("td"); // Get cells (td) in each row
        var found = false;
        for (var j = 0; j < cells.length; j++) {
            var cellText = cells[j].textContent.toLowerCase(); // Get text content of the cell
            if (cellText.includes(searchTerm)) {
                found = true;
                break;
            }
        }
        rows[i].style.display = found ? "" : "none"; // Show or hide row based on search result
    }
}

if (document.getElementById("searchInput")!=null){
    document.getElementById("searchInput").addEventListener("input", performSearch);
}


function filterTable() {
    var areaFilter = document.getElementById("areaFilter").value.toUpperCase();
    var governorateFilter = document.getElementById("governorateFilter").value.toUpperCase();
    var typeFilter = document.getElementById("typeFilter").value.toUpperCase();
    var table = document.getElementById("dataTable");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) { // Start from index 1 to skip header row
        var cells = rows[i].getElementsByTagName("td");
        var showRow = true;

        // Check if any filter criteria is matched
        for (var j = 0; j < cells.length; j++) {
            var cellValue = cells[j].textContent.toUpperCase();
            if ((areaFilter === "" || cellValue.includes(areaFilter)) &&
                (governorateFilter === "" || cellValue.includes(governorateFilter)) &&
                (typeFilter === "" || cellValue.includes(typeFilter))) {
                // Show the row if it matches all filter criteria
                rows[i].style.display = "";
                showRow = true;
                break;
            } else {
                // Hide the row if it doesn't match any filter criteria
                showRow = false;
            }
        }

        if (!showRow) {
            rows[i].style.display = "none";
        }
    }
}

if (document.getElementById("areaFilter")!=null){
    document.getElementById("areaFilter").addEventListener("change", filterTable);
}
if (document.getElementById("governorateFilter")!=null){
    document.getElementById("governorateFilter").addEventListener("change", filterTable);
}
if (document.getElementById("typeFilter")!=null){
    document.getElementById("typeFilter").addEventListener("change", filterTable);
}

function accept(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    alert("Accepted!");
  }

function reject(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    alert("Rejected!");
}

function hope(){
    window.location.href = "hope.html";
}
function light(){
    window.location.href = "light.html";
}
function future(){
    window.location.href = "future.html";
}
function youssef(){
    window.location.href = "youssef.html";
}
function ahmed(){
    window.location.href = "ahmed.html";
}
function asmaa(){
    window.location.href = "asmaa.html";
}
function heart(){
    window.location.href = "heart.html";
}
function newlife(){
    window.location.href = "newlife.html";
}
function betterfuture(){
    window.location.href = "betterfuture.html";
}
function nabil(){
    window.location.href = "nabil.html";
}
function belal(){
    window.location.href = "belal.html";
}
function farah(){
    window.location.href = "farah.html";
}


// Initialize and add the map
function initMap(n) {
    // Specify the coordinates of the marker's location
    var x;
    var y;
    if(n==0){
        x=30.071020;
        y=31.273279;
    }
    else if(n==1){
        x=30.107510;
        y=31.335880;
    }
    else if(n==2){
        x=30.043660;
        y=31.196090;
    }
    else if(n==3){
        x=30.105420;
        y=31.266090;
    }
    else if(n==4){
        x=29.988330;
        y=30.942220;
    }
    else if(n==5){
        x=29.961380;
        y=31.217200;
    }
    else if(n==6){
        x=30.092560;
        y=31.252320;
    }
    else if(n==7){
        x=29.985540;
        y=30.944830;
    }
    else if(n==8){
        x=30.052530;
        y=31.197450;
    }
    else if(n==9){
        x=30.032840;
        y=31.199160;
    }
    else if(n==10){
        x=30.065780;
        y=31.383450;
    }
    else if(n==11){
        x=29.981830;
        y=31.254200;
    }
    var location = { lat:  x, lng: y };

    // Create a map object and specify the DOM element for display
    var map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 15 // Adjust the zoom level as needed
    });

    // Create a marker and set its position
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function downloadPdf() {
    // Replace "path/to/your/file.pdf" with the actual path to your PDF file
    var pdfUrl = "D:\MS2.pdf";
    
    // Create an anchor element
    var a = document.createElement("a");
    
    // Set the href attribute to the PDF URL
    a.href = pdfUrl;
    
    // Set the download attribute to force the file to be downloaded instead of opened
    a.download = "MS2.pdf"; // You can specify the filename here
    
    // Append the anchor element to the document body
    document.body.appendChild(a);
    
    // Trigger a click event on the anchor element
    a.click();
    
    // Remove the anchor element from the document body
    document.body.removeChild(a);
}

function signout(){
    window.location.href = "../login.html";
}

function deletetherow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    alert("Deleted!");
  }