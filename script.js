const icons = document.querySelectorAll(".system-icon");

let currentAudio = null;

icons.forEach((icon) => {
  // Mouse enters icon
  icon.addEventListener("mouseenter", () => {
    // Change image to active state
    icon.src = icon.dataset.active;

    // Stop previous sound
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    // Create this icon's audio
    currentAudio = new Audio(icon.dataset.sound);

    // Set individual volume from HTML
    currentAudio.volume = Number(icon.dataset.volume);

    // Play sound
    currentAudio.play().catch((error) => {
      console.log("Audio playback prevented:", error);
    });
  });

  // Mouse leaves icon
  icon.addEventListener("mouseleave", () => {
    // Return image to idle state
    icon.src = icon.dataset.idle;
  });
});
