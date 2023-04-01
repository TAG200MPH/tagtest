// Add hover effect to portfolio items
const portfolioItems = document.querySelectorAll("#portfolio li a");

portfolioItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "#0077be";
    item.style.color = "#fff";
  });

  item.addEventListener("mouseout", () => {
    item.style.backgroundColor = "";
    item.style.color = "#fff";
  });
});
