document.addEventListener("DOMContentLoaded", function () {
    gsap.from("nav", { duration: 1, y: -100, opacity: 0, ease: "bounce" });
    gsap.from("h1", { duration: 1.5, x: -200, opacity: 0, delay: 0.5 });
    gsap.from("section", { opacity: 0, duration: 1, stagger: 0.3, ease: "power2.out" });
});

function toggleMute() {
  const video = document.getElementById('myVideo');
  const btn = document.getElementById('muteBtn');

  if (video.muted) {
    video.muted = false;
    btn.textContent = '🔇 Mute';
  } else {
    video.muted = true;
    btn.textContent = '🔈 Suara';
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
});




// 🔹 Efek Fade-in saat halaman load
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".fade-in").forEach(el => {
    setTimeout(() => el.classList.add("visible"), 300);
  });
});

// 🔹 Modal Functions
const modal = document.getElementById("cvModal");
const btnShow = document.getElementById("btnShow");
const btnClose = document.getElementById("btnClose");

btnShow.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

btnClose.addEventListener("click", () => {
  modal.classList.add("hidden");
});
