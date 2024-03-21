function calculateTotal() {
    // Get all rows except the header and total row
    var rows = document.querySelectorAll('table tr:not(:first-child):not(:last-child)');
    var total1 = 0;
    var total2 = 0;
    
    // Loop through each row
    rows.forEach(function(row) {
        // Get the price and count values for Without Walk-in Aviary
        var price1 = parseFloat(row.cells[2].textContent);
        var count1 = parseInt(row.cells[3].querySelector('input').value);
        
        // Get the price and count values for With Walk-in Aviary
        var price2 = parseFloat(row.cells[4].textContent);
        var count2 = parseInt(row.cells[5].querySelector('input').value);
        
        // Calculate subtotal for Without Walk-in Aviary and add to total1
        total1 += price1 * count1;

        // Calculate subtotal for With Walk-in Aviary and add to total2
        total2 += price2 * count2;
    });

    // Update the total cell for Without Walk-in Aviary
    document.getElementById('total1').textContent = total1;

    // Update the total cell for With Walk-in Aviary
    document.getElementById('total2').textContent = total2;
    
    // Update the final total
    document.getElementById('finalTotal').textContent = total1 + total2;
}

function calculateTotal() {
    var rows = document.querySelectorAll('table tr:not(:first-child):not(:last-child)');
    var total1 = 0;
    var total2 = 0;
    
    rows.forEach(function(row) {
        var price1 = parseFloat(row.cells[2].textContent);
        var count1 = parseInt(row.cells[3].querySelector('input').value);
        var price2 = parseFloat(row.cells[4].textContent);
        var count2 = parseInt(row.cells[5].querySelector('input').value);
        
        total1 += price1 * count1;
        total2 += price2 * count2;

        // Calculate 'sum' value for each row
        var sum = (price1 * count1) + (price2 * count2); // 'sum' is the sum of two products
        row.cells[6].textContent = sum; // Update the 'sum' cell with the calculated value
    });

    document.getElementById('total1').textContent = total1;
    document.getElementById('total2').textContent = total2;
    document.getElementById('finalTotal').textContent = total1 + total2;
}