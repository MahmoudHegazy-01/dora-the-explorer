const orgList0 = new Array("Hope","0123450","hope@gmail.com");
const orgList1 = new Array("Light","0123451","light@gmail.com");
const orgList2 = new Array("Future","0123452","future@gmail.com");

const donList0 = new Array("Ahmed Mohamed","0123460","ahmed@gmail.com");
const donList1 = new Array("Ali Mohamed","0123461","ali@gmail.com");
const donList2 = new Array("Karim Mohamed","0123462","karim@gmail.com");

const orgSubmissions0 = new Array(orgList1, "Document1", "Document2");
const orgSubmissions1 = new Array(orgList2, "Document1", "Document2");

const donSubmissions0 = new Array(donList1, "Document1", "Document2");
const donSubmissions1 = new Array(donList2, "Document1", "Document2");


const orgList = {orgList0,orgList1,orgList2};
const donList = {donList0,donList1,donList2};
const orgSubmissions = {orgSubmissions0,orgSubmissions1};
const donSubmissions = {donSubmissions0,donSubmissions1};
const orgRequests = {orgList1,orgList2};
const donRequests = {donList1,donList2};
const regOrg = {orgList0};

function orgListDisplay() {
    
}

function donListDisplay() {
    
}

function orgSubmissionsDisplay() {
    
}

function donSubmissionsDisplay() {
    
}

function orgRequestsDisplay() {
    
}

function donRequestsDisplay() {
    
}

function regOrgDisplay() {
    
}

function handleClick1(event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Create ul element
    var ul = document.createElement('ul');
    ul.className = "dropdown-menu position-absolute d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px";
    ul.setAttribute('data-bs-theme', 'light');

    // Calculate the position of the button
    var buttonRect = event.target.getBoundingClientRect();
    var top = buttonRect.top + buttonRect.height;
    var left = buttonRect.left;

    // Set the position of the dropdown
    ul.style.top = top + 'px';
    ul.style.left = left + 'px';

    // Define the URLs for the dropdown items
    var urls = ["orglist.html", "donlist.html"]; // Example URLs

    // Create li elements and anchor elements
    var actions = ["OrganizationsList", "DonorsList"];
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
}


