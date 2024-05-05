function createTable() {
    var rn = prompt("Input number of rows");
    var cn = prompt("Input number of columns");
    
    var table = document.getElementById("myTable");
    table.innerHTML = ''; // Clear previous content if any
    
    for (var i = 0; i < rn; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < cn; j++) {
            var cell = row.insertCell(j);
            cell.innerHTML = "Row-" + i + " Column-" + j;
        }
    }
}
