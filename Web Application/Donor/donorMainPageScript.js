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
        let arr = ["none","age","gender","category"];
        fillDropDown(arr,"filterDropDown");
      }
    if(obj.localeCompare("Clothes") == 0)
      {
        let arr = ["none","age","gender","season"];
        fillDropDown(arr,"filterDropDown");
      }
    if(obj.localeCompare("School") == 0)
      {
        let arr = ["none","Books","Stationary"];
        fillDropDown(arr,"filterDropDown");
      }
    if(obj.localeCompare("Medical") == 0)
      {
        let arr = ["none","Medical Devices","Medical Equipment","Medication"];
        fillDropDown(arr,"filterDropDown");
      }
    if(obj.localeCompare("Blood") == 0)
      {
        let arr = ["none","Hospital","Area","Governorate"];
        fillDropDown(arr,"filterDropDown");
      }
    if(obj.localeCompare("Food") == 0)
      {
        let arr = ["none","Fruits & Vegetables","Canned Foods","Fresh Meals","Baked Goods"];
        fillDropDown(arr,"filterDropDown");
      }
  }


  function fillDropDown(obj,dropDown)
  {

    let select = document.getElementById(dropDown);
    removeOptions(select);
    for (let i = 0; i < obj.length; i++) {
      let optn = obj[i];
      let el = document.createElement("option");
      el.textContent = optn;
      el.value = optn;
      select.appendChild(el);
  }
  
  }

  function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
 }

 function fillValues()
 {
  document.getElementById("valuesDropDown").style.display = "";
  
 }