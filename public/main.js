document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");

    preloader.style.opacity = 0;
});

const btnOpenOverlay = document.getElementById("slideUp");
btnOpenOverlay.addEventListener("click", () => {
    const overlay = document.getElementById("overlay");
    const main = document.getElementById("main");

    overlay.style.transform = "translateY(-100vh)";
    main.style.maxHeight = "unset";
    main.style.overflowY = "auto";
    setTimeout(() => overlay.style.display = "none", 800);
})