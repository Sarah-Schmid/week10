function myFunction() {
  var table = document.getElementById("tbl");
  var row = table.insertRow(1);
  row.insertCell(0).innerHTML = document.getElementById("id1").value;
  row.insertCell(1).innerHTML = document.getElementById("id2").value;
  row.insertCell(2).innerHTML = document.getElementById("id3").value;
  row.insertCell(3).innerHTML = document.getElementById("id4").value;
}
