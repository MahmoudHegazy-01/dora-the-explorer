function searchFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('myInput');
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
      let arr = ["0-2 years","3-5 years","6-8 years","9-11 years","12-14 years"];
      fillDropDown(arr,"valuesDropDown");
    }
  if(element.value.localeCompare("Gender")==0)
    {
      let arr = ["male","female","uni"];
      fillDropDown(arr,"valuesDropDown");
    }
  if(element.value.localeCompare("Season")==0)
    {
      let arr = ["summer","winter","autumn","fall"];
      fillDropDown(arr,"valuesDropDown");
    }
  if(element.value.localeCompare("Medication")==0)
    {
      let arr = ["Oral","Ingested","External"];
      fillDropDown(arr,"valuesDropDown");
    }
  if(element.value.localeCompare("Category")==0)
    {
      let arr = ["board games","stuffed toys","dolls","sports","cars","outdoor"];
      fillDropDown(arr,"valuesDropDown");
    }  
  if(element.value.localeCompare("Area")==0)
  {
    let arr = ["Fifth Settlement","Maadi","Nasr City","Madinaty","Rehab","6th of October","Sheikh Zayed"];
     fillDropDown(arr,"valuesDropDown");
  }
  if(element.value.localeCompare("Governorate")==0)
    {
      let arr = ["Giza","Cairo","Alexanderia","Aswan","Dakahlia","Assiut","Luxor","Ismailia"];
      fillDropDown(arr,"valuesDropDown");
    }
  if(element.value.localeCompare("Hospital")==0)
    {
      let arr = ["Cairo Hospital","Ain Shams Hospital","Ibn Sina Hospital","Dar el Fouad Hospital"];
      fillDropDown(arr,"valuesDropDown");
    }
 if(element.value.localeCompare("Subject")==0)
    {
      let arr = ["Math","Chemistery","Biology","English","Arabic","Physics","French","German"];
      fillDropDown(arr,"valuesDropDown");
    }
  if(element.value.localeCompare("Medical Speciality")==0)
    {
      let arr = ["Orthopedics","Eyes","Dental","Surgery"];
      fillDropDown(arr,"valuesDropDown");
    }
  if(element.value.localeCompare("Stationary")==0)
  {
    let arr = ["","Stationary"];
    fillDropDown(arr,"valuesDropDown");
  }
  if(element.value.localeCompare("Books")==0)
  {
    let arr = ["","Books"];
    fillDropDown(arr,"valuesDropDown");
  }
  if(element.value.localeCompare("none")==0)
    {
      
      document.getElementById("valuesDropDown").style.display = "none";
    }
 }

 function searchUsingValues()
 {
  let element = document.getElementById("valuesDropDown").options[document.getElementById("valuesDropDown").options["selectedIndex"]];
  unHideTable();
  searchFunctionValues(element.value);
 }

 function searchFunctionValues(obj) {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = obj;
  console.log("Input" + input);
  filter = input;
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.innerText;
      console.log("TxtValue" + txtValue);
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}