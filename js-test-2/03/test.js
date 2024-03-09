var selectedRow = null;
function onFormSubmit() {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

// retrive Data
function readFormData() {
  var formData = {};
  formData["todocode"] = document.getElementById("todocode").value;
  return formData;
}

// insert data
function insertNewRecord(data) {
  var table = document
    .getElementById("storelist")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(0);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.todocode;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = `<button onClick="onEdit(this)">Edit</button><button onClick="onDelete(this)">Delete</button>`;
  selectedRow = null;
}
function onEdit(td) {
  selectedRow = td.parentNode.parentNode;
  document.getElementById("todocode").value = selectedRow.cells[0].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.todocode;
}

function onDelete(td) {
  if (confirm("Do you want to delete this record")) {
    var row = td.parentNode.parentNode;
    document.getElementById("storelist").deleteRow(row.rowIndex);
  }
  resetForm();
}
function resetForm() {
  document.getElementById("todocode").value = "";
}
