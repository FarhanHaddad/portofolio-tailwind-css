//navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};
//hamburger
const hamburger = document.querySelector("#hamburger");
const navmenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("burger-aktif");
  navmenu.classList.toggle("hidden");
});

//klik diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navmenu) {
    hamburger.classList.remove("burger-aktif");
    navmenu.classList.add("hidden");
  }
});

//darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

//pindahkan posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
