document.addEventListener("DOMContentLoaded", function() {
  const accordionButtons = document.querySelectorAll(".product__accordion");

  accordionButtons.forEach(button => {
      button.addEventListener("click", function() {
          // Toggle the active class on the clicked button
          this.classList.toggle("active");

          // Get the panel associated with the clicked button
          const panel = this.nextElementSibling;

          // Toggle the max-height style to show/hide the panel
          if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
          } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
          }
      });
  });
});
