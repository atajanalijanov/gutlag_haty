const colors = ["#FF6F91", "#FFD1DC", "#FFF5B7", "#6FFFB0", "#6FC1FF"];

for(let i = 0; i < 30; i++){
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.width = confetti.style.height = Math.random() * 10 + 5 + "px";
  confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(confetti);
}
