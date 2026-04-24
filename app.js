const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

// Search functionality
search.addEventListener("keyup", () => {
  const value = search.value.toLowerCase();

  cards.forEach(card => {
    const name = card.dataset.name;

    if (name.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Click simulation
cards.forEach(card => {
  card.addEventListener("click", () => {
    alert(card.querySelector("h3").innerText + " opened!");
  });
});