const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const themeBtn = document.getElementById("themeBtn");

// Search filter
search.addEventListener("keyup", () => {
  const value = search.value.toLowerCase();

  cards.forEach(card => {
    const text = card.dataset.name;
    card.style.display = text.includes(value) ? "block" : "none";
  });
});

// Sidebar toggle
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Dark mode toggle
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Card click
cards.forEach(card => {
  card.addEventListener("click", () => {
    alert("Opening " + card.querySelector("h3").innerText);
  });
});
