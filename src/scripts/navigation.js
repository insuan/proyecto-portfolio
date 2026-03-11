const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");
const navLis = document.querySelectorAll("#nav-menu li");

menuButton.addEventListener("click", () => {
  navMenu.classList.remove("hidden", "animate-menu-out");
  navMenu.classList.toggle("flex", "animate-menu-in");
});

navLis.forEach(li => {
  li.addEventListener("click", () => {
    if(window.innerWidth >= 640) return;
    navMenu.classList.add("animate-menu-out");
    navMenu.classList.remove("animate-menu-in");
    setTimeout(() => {
        navMenu.classList.add("hidden");
    }, 500);
  });
}); 

navMenu.addEventListener("animationend", (event) => {
    if (event.animationName !== "animate-menu-out") return;
    navMenu.classList.add("hidden");
    navMenu.classList.remove("flex");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 640) {
    navMenu.classList.remove("animate-menu-in", "animate-menu-out");
  }
});