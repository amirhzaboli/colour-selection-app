const amountInput = document.getElementById("amount");
const totalBox = document.querySelector(".total-box");
const saveButton = document.querySelectorAll("button")[3];
const pdfButton = document.querySelectorAll("button")[4];

function updateTotal() {
  const amount = parseFloat(amountInput.value) || 0;
  totalBox.textContent = `Total Amount: $${amount.toFixed(2)}`;
}

amountInput.addEventListener("input", updateTotal);

saveButton.addEventListener("click", function () {
  alert("Selection saved in basic version");
});

pdfButton.addEventListener("click", function () {
  window.print();
});

updateTotal();