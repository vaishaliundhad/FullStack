// app.js

// Retrieve items from local storage
let items = JSON.parse(localStorage.getItem('items')) || [];

// Function to display the items in the table
function displayItems() {
    const tableBody = document.querySelector('#itemTable tbody');
    tableBody.innerHTML = '';

    items.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>
                <button onclick="editItem(${index})">Edit</button>
                <button onclick="deleteItem(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to add a new item
function addItem(name) {
    items.push({ name });
    localStorage.setItem('items', JSON.stringify(items));
    displayItems();
}

// Function to delete an item
function deleteItem(index) {
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    displayItems();
}

// Function to edit an existing item
function editItem(index) {
    const newName = prompt("Enter new name:", items[index].name);
    if (newName !== null && newName.trim() !== '') {
        items[index].name = newName;
        localStorage.setItem('items', JSON.stringify(items));
        displayItems();
    }
}

// Handle form submission for adding new items
document.getElementById('itemForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const itemName = document.getElementById('itemName').value;
    if (itemName.trim() !== '') {
        addItem(itemName);
        document.getElementById('itemForm').reset();
    }
});

// Initially display items on page load
displayItems();
