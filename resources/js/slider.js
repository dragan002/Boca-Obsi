    // Selecting the scroll container using the correct class selector
let scrollContainer = document.querySelector('.product__gallery');
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

// Attaching the event listener to the window object to capture all scroll events
window.addEventListener("wheel", (evt) => {
    // Checking if the scroll event occurred within the scroll container
    if (scrollContainer.contains(evt.target)) {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.style.scrollBehavior = "auto"; // Fixed the typo
    }
});

nextBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += scrollContainer.clientWidth; // Adjusting scroll position
});

backBtn.addEventListener('click', () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= scrollContainer.clientWidth; // Adjusting scroll position
});