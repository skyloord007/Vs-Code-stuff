// Useful data: robot components inventory
const components = [
    { name: "Servo Motor", quantity: 12, cost: 15.99 },
    { name: "Ultrasonic Sensor", quantity: 6, cost: 4.50 },
    { name: "Li-Ion Battery", quantity: 3, cost: 29.99 },
    { name: "Microcontroller", quantity: 2, cost: 45.00 }
];

// Create table element
const table = document.createElement("table");
table.border = "1";

// Create header row
const headerRow = document.createElement("tr");

const headers = ["Component", "Quantity", "Cost ($)"];
for (let h of headers) {
    const th = document.createElement("th");
    th.textContent = h;
    headerRow.appendChild(th);
}

table.appendChild(headerRow);

// Create data rows using a loop
for (let item of components) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;

    const quantityCell = document.createElement("td");
    quantityCell.textContent = item.quantity;

    const costCell = document.createElement("td");
    costCell.textContent = item.cost.toFixed(2);

    row.appendChild(nameCell);
    row.appendChild(quantityCell);
    row.appendChild(costCell);

    table.appendChild(row);
}

// Insert table into the page
document.getElementById("tableContainer").appendChild(table);