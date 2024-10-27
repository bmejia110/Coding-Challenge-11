<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Order Form</title>
</head>
<body>
    <h2>Place Your Order</h2>
    
    <label for="product-selector">Select a Product:</label>
    <select id="product-selector">
        <option value="10">Product A - $10</option>
        <option value="15">Product B - $15</option>
        <option value="20">Product C - $20</option>
    </select>
    
    <label for="quantityInput">Quantity:</label>
    <input type="number" id="quantityInput" value="1" min="1">
    
    <p>Total Price: $<span id="total-price">0</span></p>
    
    <button id="place-order">Place Order</button>
    
    <p id="order-summary"></p>
    
    <script src="main.js"></script>
</body>
</html>