var transportation;
var time;
function submitForm(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get the selected options
    transportation = document.getElementById("transportation-dropdown").value;
    time = document.getElementById("time-dropdown").value;
    if(transportation == "" || time == ""){
        alert("Empty field detected.");
        return;
    }
    // Store the selected options into variables
    localStorage.setItem("selectedTransportation", transportation);
    localStorage.setItem("selectedTime", time);

    // Redirect to another page
    window.location.href = "eta.html";
  }
  