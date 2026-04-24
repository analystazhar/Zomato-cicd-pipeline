// Get elements
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

// 🔍 Search Filter
searchInput.addEventListener("keyup", function () {
  const value = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});


// ⭐ Filter: Rating 4.0+
const ratingBtn = document.querySelectorAll(".filters button")[1];

ratingBtn.addEventListener("click", () => {
  cards.forEach(card => {
    const ratingText = card.querySelector("p").innerText;
    const rating = parseFloat(ratingText.replace("⭐", ""));

    if (rating >= 4.0) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});


// 🍃 Filter: Pure Veg (demo logic)
const vegBtn = document.querySelectorAll(".filters button")[3];

vegBtn.addEventListener("click", () => {
  alert("Demo: Only Veg filter applied");
});


// 🚀 Reset filters when clicking "Filters" button
const resetBtn = document.querySelectorAll(".filters button")[0];

resetBtn.addEventListener("click", () => {
  cards.forEach(card => {
    card.style.display = "block";
  });
  searchInput.value = "";
});