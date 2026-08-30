const icons = document.querySelectorAll(".dream-icon");

icons.forEach((icon) => {
  // Mouse enters icon
  icon.addEventListener("mouseenter", () => {
    icon.src = icon.dataset.active;
  });

  // Mouse leaves icon
  icon.addEventListener("mouseleave", () => {
    icon.src = icon.dataset.idle;
  });
});
