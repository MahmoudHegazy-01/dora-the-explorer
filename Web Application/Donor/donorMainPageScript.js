function searchFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        console.log(txtValue);
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function fillFilter(obj)
  {
    if(obj.localeCompare("Toys") == 0)
      {
        let arr = ["age","gender","category"]
        fillDropDown(arr,"filterDropDown");
      }
    if(obj.localeCompare("Clothes") == 0)
      document.body.style.backgroundColor = "blue";
    if(obj.localeCompare("School") == 0)
      document.body.style.backgroundColor = "green";
    if(obj.localeCompare("Medical") == 0)
      document.body.style.backgroundColor = "yellow";
    if(obj.localeCompare("Blood") == 0)
      document.body.style.backgroundColor = "black";
    if(obj.localeCompare("Food") == 0)
      document.body.style.backgroundColor = "white";
  }


  function fillDropDown(obj,dropDown)
  {
    let select = document.getElementById("dropDown");
    for (let i = 0; i < obj.length; i++) {
      let optn = obj[i];
      let el = document.createElement("li");
      el.textContent = optn;
      el.value = optn;
      select.appendChild(el);
  }
  }