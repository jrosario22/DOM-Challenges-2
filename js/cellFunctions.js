
//var row = document.getElementById("row");

function addRowCell() {
    var row = document.getElementById("row");
    var x = row.insertCell(-1);
    var clone = row.cloneNode(true);
    clone.id = "newColID"
    row.appendChild(clone);
    //x.innerHTML = "cell";
}

function removeRowCell() {
    var cell = document.getElementById("row");
    cell.deleteCell(0);
}

function addRow() {
    var table = document.getElementById("table");
    var row = document.getElementById("row");
    var clone = row.cloneNode(true);
    clone.id = "newRowID";
    table.appendChild(clone);
}
function removeRow() {
    var table = document.getElementById("table");
    var row = document.getElementById("row");
    row.remove(0);
}

let lastX; // Tracks the last observed mouse X position
  let bar = document.querySelector("div");
  bar.addEventListener("mousedown", event => {
    if (event.button == 0) {
      lastX = event.clientX;
      window.addEventListener("mousemove", moved);
      event.preventDefault(); // Prevent selection
    }
  });

  function moved(event) {
    if (event.buttons == 0) {
      window.removeEventListener("mousemove", moved);
    } else {
      let dist = event.clientX - lastX;
      let newWidth = Math.max(10, bar.offsetWidth + dist);
      bar.style.width = newWidth + "px";
      lastX = event.clientX;
    }
  }