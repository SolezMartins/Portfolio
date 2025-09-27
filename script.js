// Scroll reveal effect for projects
const cards = document.querySelectorAll(".project-card");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("reveal");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Dark Mode Toggle
const toggle = document.getElementById("dark-toggle");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});