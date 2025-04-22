// Animate gallery
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach((img, i) => {
  setTimeout(() => {
    img.classList.add('animated');
  }, i * 300);
});

// Sparkle trail
document.addEventListener('mousemove', (e) => {
  const star = document.createElement('div');
  star.className = 'trail-star';
  star.textContent = '💖';
  star.style.left = `${e.clientX}px`;
  star.style.top = `${e.clientY}px`;
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 1000);
});

// Music toggle
function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
