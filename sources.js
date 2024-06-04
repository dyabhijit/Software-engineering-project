let items = [];

function addItems() {
    let itemName = document.getElementById('item-name').value;
    let itemPrice = document.getElementById('item-price').value;
    let itemQuantity = document.getElementById('item-quantity').value;

    if (itemName && itemQuantity && itemPrice) {
        items.push({
            name: itemName,
            price: parseFloat(itemPrice),
            quantity: parseInt(itemQuantity)
        });
        showItems();
        calculateTotalPrice();
        clearItem();
    }
}

function showItems() {
    const tbody = document.querySelector('#billing-table tbody');
    tbody.innerHTML = "";
    items.forEach(item => {
        const tr = document.createElement('tr');

        const nameTd = document.createElement('td');
        nameTd.innerText = item.name;

        const quantityTd = document.createElement('td');
        quantityTd.innerText = item.quantity;

        const priceTd = document.createElement('td');
        priceTd.innerText = item.price.toFixed(2);

        tr.appendChild(nameTd);
        tr.appendChild(quantityTd);
        tr.appendChild(priceTd);
        tbody.appendChild(tr);
    });
}

function calculateTotalPrice() {
    let totalPrice = 0;
    items.forEach(item => {
        totalPrice += item.price * item.quantity;
    });
    document.getElementById('total-price').innerText = `Billing Amount: ${totalPrice.toFixed(2)}`;
}

function clearItem() {
    document.getElementById('item-name').value = "";
    document.getElementById('item-quantity').value = "";
    document.getElementById('item-price').value = "";
}

function redirectToPaymentPage() {
    window.location.href = 'payment.html';
}
