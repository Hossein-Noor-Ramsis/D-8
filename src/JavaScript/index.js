// navbar hamburger menu
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

const navList = document.getElementById("nav-list");
const content = document.getElementById("content");

const header = document.getElementById("header");

openMenu.addEventListener("click", () => {
  navList.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
  header.classList.add("backdrop-blur");
  header.style.height = "400px";
});

closeMenu.addEventListener("click", () => {
  navList.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
  header.classList.remove("backdrop-blur");
  header.style.height = "84px";
});

content.addEventListener("click", () => {
  navList.classList.add("hidden");
  openMenu.classList.remove("hidden");
  closeMenu.classList.add("hidden");
  header.classList.remove("backdrop-blur");
  header.style.height = "84px";
});

// show animation event listener
const tabs = document.querySelectorAll(".tab");

window.addEventListener("scroll", () => {
  let top = this.scrollY;

  tabs.forEach((tab) => {
    if (tab.offsetTop - top < window.innerHeight - 300) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
});

// first parallax animation
const moon = document.getElementById("moon");
const heading = document.getElementById("heading");
const train = document.getElementById("train");

window.addEventListener("scroll", () => {
  let value = this.scrollY;

  moon.style.translate = `0 ${value * 0.7}px`;
  heading.style.translate = `0 ${value * -1}px`;
  train.style.translate = `${value * 1.3}px 0`;
});

// second parallax animation
const secondMoon = document.getElementById("second-moon");
const man = document.getElementById("man");

window.addEventListener("scroll", () => {
  let value = this.scrollY;

  secondMoon.style.translate = `0 ${value * 0.2}px`;
  man.style.translate = `${value * -0.6}px 0`;
});

// show progress
const progress = document.getElementById("progress");

window.addEventListener("scroll", () => {
  let pos = document.documentElement.scrollTop;

  if (pos > 300) {
    progress.classList.remove("hidden");
  } else {
    progress.classList.add("hidden");
  }
});

// progress scroll up
progress.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// progress scroll percent
window.addEventListener("scroll", () => {
  let pos = document.documentElement.scrollTop;
  let windowScrollHigh =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let progressBar = Math.round((pos / windowScrollHigh) * 100);

  progress.style.background = `conic-gradient(#194eb9 ${progressBar}%, #67ccff ${progressBar}%)`;
});
