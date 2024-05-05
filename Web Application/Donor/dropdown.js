function activateDropdowns() {
    // Get all dropdown toggles
    var dropdownToggleList = document.querySelectorAll('[data-toggle="dropdown"]');
    
    // Loop through each dropdown toggle
    dropdownToggleList.forEach(function(dropdownToggle) {
      // Add click event listener to each dropdown toggle
      dropdownToggle.addEventListener('click', function() {
        // Get the parent dropdown menu
        var dropdownMenu = dropdownToggle.nextElementSibling;
        
        // Toggle the "show" class to display or hide the dropdown menu
        if (dropdownMenu.classList.contains('show')) {
          dropdownMenu.classList.remove('show');
        } else {
          // Hide all other dropdown menus before showing this one
          var openDropdowns = document.querySelectorAll('.dropdown-menu.show');
          openDropdowns.forEach(function(openDropdown) {
            openDropdown.classList.remove('show');
          });
          
          dropdownMenu.classList.add('show');
        }
      });
    });
    
    // Close dropdown when clicking outside of it
    window.addEventListener('click', function(event) {
      var dropdownToggle = event.target.closest('[data-toggle="dropdown"]');
      if (!dropdownToggle) {
        var openDropdowns = document.querySelectorAll('.dropdown-menu.show');
        openDropdowns.forEach(function(openDropdown) {
          openDropdown.classList.remove('show');
        });
      }
    });
  }