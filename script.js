// Toggle three-dots menu
const overflowBtn = document.querySelector('.overflow-btn');
const overflowMenu = document.querySelector('.overflow-menu');

overflowBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  overflowMenu.classList.toggle('is-open');
  overflowBtn.setAttribute(
    'aria-expanded',
    overflowMenu.classList.contains('is-open') ? 'true' : 'false'
  );
});

// Close menu when clicking outside
document.addEventListener('click', () => {
  overflowMenu.classList.remove('is-open');
  overflowBtn.setAttribute('aria-expanded', 'false');
});

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    overflowMenu.classList.remove('is-open');
    overflowBtn.setAttribute('aria-expanded', 'false');
  }
});

// Section switching logic
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

navButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Hide all sections
    sections.forEach((sec) => sec.classList.add('is-hidden'));

    // Show target section
    const target = btn.getAttribute('data-target');
    document.getElementById(target).classList.remove('is-hidden');

    // Close menu after selection
    overflowMenu.classList.remove('is-open');
    overflowBtn.setAttribute('aria-expanded', 'false');
  });
});

// ✅ Reimbursement form logic
document.getElementById("reimbursementForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("staffName").value;
  const date = document.getElementById("expenseDate").value;
  const desc = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;

  const table = document.querySelector("#recordsTable tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
  <td>${name}</td>
  <td>${date}</td>
  <td>${desc}</td>
  <td>$${parseFloat(amount).toFixed(2)}</td>
  <td>Pending</td>
  <td>
    <button onclick="this.parentElement.parentElement.cells[4].innerText='Approved'">Approve</button>
    <button onclick="this.parentElement.parentElement.cells[4].innerText='Rejected'">Reject</button>
  </td>
`;

  table.appendChild(row);
  this.reset();
});
function showSection(id) {
    sections.forEach((sec) => sec.classList.add("is-hidden"));
    const target = document.getElementById(id);
    if (target) {
      target.classList.remove("is-hidden");
    }
  }
  learnMoreBtn?.addEventListener("click", () => {
    showSection("about");
  });
  
  getQuoteBtn?.addEventListener("click", () => {
    showSection("contact");
    alert("Thank you for your interest! We will contact you soon.");
  });