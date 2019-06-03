
//var row = document.getElementById("row");

function addRowCell() {
    var row = document.getElementById("row");
    var x = row.insertCell(-1);
    x.innerHTML = "cell";
}
function removeRowCell() {
    var cell = document.getElementById("row");
    cell.deleteCell(0);
}
