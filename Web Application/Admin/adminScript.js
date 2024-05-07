var dropdownElement; // Variable to store the reference to the dropdown
var tabButton; //takes event
var n;

function assignNumber1(){
    n=1;
}
function assignNumber2(){
    n=2;
}
function assignNumber3(){
    n=3;
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
    else{
        var urls = ["orgrequests.html", "donrequests.html"];

        var actions = ["Organizations' Requests", "Donors' Requests"];
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