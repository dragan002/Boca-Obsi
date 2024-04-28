// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".header__nav");

// On click
hamburger.addEventListener("click", function() {
    // Toggle class "is-active" on hamburger icon
    hamburger.classList.toggle("is-active");
    // Toggle class "is-active" on navigation menu
    nav.classList.toggle("is-active");
});
