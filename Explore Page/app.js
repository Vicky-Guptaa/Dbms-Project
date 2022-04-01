const btn = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const menuLines = document.querySelectorAll(".line");
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menuLines[0].classList.toggle("rotate-45");
    menuLines[1].classList.toggle("opacity-0");
    menuLines[2].classList.toggle("-rotate-45");
});

const btnSearchHere = document.querySelector(".btn-search-here");
const searchInput = document.querySelector(".search-here");
let issearchInputVisible = false;
btnSearchHere.addEventListener("click", (e) => {
    if (!issearchInputVisible) {
        e.preventDefault();
        issearchInputVisible = true;
    }
    searchInput.classList.toggle(`w-[80vw]`)
    searchInput.focus();
})