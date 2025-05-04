// Fade-in animation
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
});

// Mortgage Calculator
document.getElementById('mortgageForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const amount = parseFloat(document.getElementById('amount').value);
  const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
  const years = parseFloat(document.getElementById('years').value) * 12;
  const x = Math.pow(1 + interest, years);
  const monthly = (amount * x * interest) / (x - 1);
  document.getElementById('monthlyPayment').innerText = `Estimated Monthly Payment: $${monthly.toFixed(2)}`;
});
