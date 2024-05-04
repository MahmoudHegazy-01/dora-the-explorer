/// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Activate Bootstrap dropdowns
    var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    var dropdownList = dropdownElementList.map(function (dropdownToggle) {
      return new bootstrap.Dropdown(dropdownToggle);
    });
  });
  
  

  function register(){

  }
  