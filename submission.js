const daysContainer = document.getElementById("daysContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const monthYear = document.getElementById("monthYear");
const dateInput = document.getElementById("dateInput");
const calendar = document.getElementById("calendar");

let currentDate = new Date();
let selectedDate = null;

function handleDayClick(day) {
  selectedDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    day
  );
  dateInput.value = selectedDate.toLocaleDateString("en-US");
  calendar.style.display = "none";
  renderCalendar();
}

function createDayElement(day) {
  const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
  const dayElement = document.createElement("div");
  dayElement.classList.add("day");

  if (date.toDateString() === new Date().toDateString()) {
    dayElement.classList.add("current");
  }
  if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
    dayElement.classList.add("selected");
  }

  dayElement.textContent = day;
  dayElement.addEventListener("click", () => {
    handleDayClick(day);
  });
  daysContainer.appendChild(dayElement);
}

function renderCalendar() {
  daysContainer.innerHTML = "";
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  monthYear.textContent = `${currentDate.toLocaleString("default", {
    month: "long"
  })} ${currentDate.getFullYear()}`;

  for (let day = 1; day <= lastDay.getDate(); day++) {
    createDayElement(day);
  }
}

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

dateInput.addEventListener("click", () => {
  calendar.style.display = "block";
  positionCalendar();
});

document.addEventListener("click", (event) => {
  if (!dateInput.contains(event.target) && !calendar.contains(event.target)) {
    calendar.style.display = "none";
  }
});

function positionCalendar() {
  const inputRect = dateInput.getBoundingClientRect();
  calendar.style.top = inputRect.bottom + "px";
  calendar.style.left = inputRect.left + "px";
}

window.addEventListener("resize", positionCalendar);

renderCalendar();



$(document).ready(function(){
    $("#visitorType").change(function(){
        var charges = 0;
        var visitorType = $(this).val();

        if(visitorType == "1") {
            charges = 100;
        } else if(visitorType == "2") {
            charges = 200; // Adjust charges for Video camera fee as needed
        } else if(visitorType == "3") {
            charges = 150; // Adjust charges for Educational visitors as needed
        }

        $("#charges").val(charges);

        // Update amount when visitor type changes
        updateAmount();
    });

    $("#count").keyup(function(){
        // Update amount when count changes
        updateAmount();
    });

    $("#calculateBtn").click(function(){
        // Update amount when calculate button is clicked
        updateAmount();
    });

    function updateAmount() {
        var charges = parseFloat($("#charges").val());
        var count = parseInt($("#count").val());

        var amount = charges * count;

        $("#amount").val(amount);
    }
});

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


