function searchFunction1() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  function searchFunction(obj) {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = obj;
    filter = input.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.innerText;
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
    document.getElementById("valuesDropDown").style.display = "none";
    if(obj.localeCompare("None") != 0)
    {
    searchFunction(obj);
    if(obj.localeCompare("Toys") == 0)
      {
        let arr = ["none","Age","Gender","Category"];
        fillDropDown(arr,"filterDropDown");
      }
    if(obj.localeCompare("Clothes") == 0)
      {
        let arr = ["none","Age","Gender","Season"];
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
    if(obj.localeCompare("Medical Cases") == 0)
      {
        let arr = ["none","Medical Speciality","Area","Governorate","Hospital"];
        fillDropDown(arr,"filterDropDown");
      }
    if(obj.localeCompare("Teaching") == 0)
      {
        let arr = ["none","Subject","Area","Governorate"];
        fillDropDown(arr,"filterDropDown");
      }
    }
    else{
      let arr = ["Filter"];
      fillDropDown(arr,"filterDropDown");
      unHideTable();
    }
      
  }
  //Shows all table elements
function unHideTable()
{
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      tr[i].style.display = "";

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
  let element = document.getElementById("filterDropDown").options[document.getElementById("filterDropDown").options["selectedIndex"]];
  if(element.value.localeCompare("Age")==0)
    {
      let arr = ["none","0-2 years","3-5 years","6-8 years","9-11 years","12-14 years"];
      fillDropDown(arr,"valuesDropDown");
    }
  if(element.value.localeCompare("Gender")==0)
    {
      let arr = ["none","male","female","unisex"];
      fillDropDown(arr,"valuesDropDown");
    }
  if(element.value.localeCompare("Season")==0)
    {
      let arr = ["none","summer","winter","autumn","fall"];
      fillDropDown(arr,"valuesDropDown");
    }
  if(element.value.localeCompare("Medication")==0)
    {
      let arr = ["none","Oral","Ingested","External"];
      fillDropDown(arr,"valuesDropDown");
    }
  if(element.value.localeCompare("Category")==0)
    {
      let arr = ["none","board games","stuffed toys","dolls","sports","cars","outdoor"];
      fillDropDown(arr,"valuesDropDown");
    }  
  if(element.value.localeCompare("Area")==0)
  {
    let arr = ["none","Fifth Settlement","Maadi","Nasr City","Madinaty","Rehab","6th of October","Sheikh Zayed"];
     fillDropDown(arr,"valuesDropDown");
  }
  if(element.value.localeCompare("Governorate")==0)
    {
      let arr = ["none","Giza","Cairo","Alexanderia","Aswan","Dakahlia","Assiut","Luxor","Ismailia"];
      fillDropDown(arr,"valuesDropDown");
    }
  if(element.value.localeCompare("Hospital")==0)
    {
      let arr = ["none","Cairo Hospital","Ain Shams Hospital","Ibn Sina Hospital","Dar el Fouad Hospital"];
      fillDropDown(arr,"valuesDropDown");
    }
 if(element.value.localeCompare("Subject")==0)
    {
      let arr = ["none","Math","Chemistry","Biology","English","Arabic","Physics","French","German"];
      fillDropDown(arr,"valuesDropDown");
    }
  if(element.value.localeCompare("Medical Speciality")==0)
    {
      let arr = ["none","Orthopedics","Eyes","Dental","Surgery"];
      fillDropDown(arr,"valuesDropDown");
    }
  if(element.value.localeCompare("Stationary")==0)
  {
    let arr = ["none","Stationary"];
    fillDropDown(arr,"valuesDropDown");
  }
  if(element.value.localeCompare("Books")==0)
  {
    let arr = ["none","Fiction","Physics","Biology","Time Management"];
    fillDropDown(arr,"valuesDropDown");
  }
  if(element.value.localeCompare("Medical Devices") == 0)
    {
      let arr = ["none","Medical Devices"];
      fillDropDown(arr,"valuesDropDown");
    }
  if(element.value.localeCompare("Medical Equipment") == 0)
    {
      let arr = ["none","Medical Equipment"];
      fillDropDown(arr,"valuesDropDown");
    }
   if(element.value.localeCompare("Fruits & Vegetables") == 0)
    {
      let arr = ["none","Fruits","Vegetables"];
      fillDropDown(arr,"valuesDropDown");
    }
   if(element.value.localeCompare("Canned Foods") == 0)
    {
      let arr = ["none","Canned Foods"];
      fillDropDown(arr,"valuesDropDown");
    }
    if(element.value.localeCompare("Baked Goods") == 0)
      {
        let arr = ["none","Baked Goods"];
        fillDropDown(arr,"valuesDropDown");
      }
   if(element.value.localeCompare("Fresh Meals") == 0)
    {
      let arr = ["none","Grilled","Vegan"];
      fillDropDown(arr,"valuesDropDown");
    }
  if(element.value.localeCompare("none")==0)
    {
      let Category = document.getElementById("categoryDropDown").options[document.getElementById("categoryDropDown").options["selectedIndex"]];
      searchFunction(Category.value);
      document.getElementById("valuesDropDown").style.display = "none";
    }
 }

 function searchUsingValues()
 {
  let element = document.getElementById("valuesDropDown").options[document.getElementById("valuesDropDown").options["selectedIndex"]];
  let Category = document.getElementById("categoryDropDown").options[document.getElementById("categoryDropDown").options["selectedIndex"]];
  unHideTable();
  if(element.value.localeCompare("none") != 0)
    {
  searchFunctionValues(element.value,Category.value);
    }
  else
  {
    let Category = document.getElementById("categoryDropDown").options[document.getElementById("categoryDropDown").options["selectedIndex"]];
    searchFunction(Category.value);
  }

 }

 function searchFunctionValues(obj,Category) {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = obj;
  filter = input;
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    td1 = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.innerText;
      txtCategory = td1.innerText;
      if (txtValue.indexOf(filter) > -1 && txtCategory.indexOf(Category)> -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

//Checks if the quantity is a postive number and then changes the webpage to schedule pickup
function checkDonation()
{


  
}