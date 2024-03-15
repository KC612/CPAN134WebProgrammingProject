/*const faqHeaders = document.querySelectorAll(".faqs-container .faq-header");

faqHeaders.forEach((header, i) => {
  header.addEventListener("click", () => {
    header.nextElementSibling.classList.toggle("active");

    const open = header.querySelector(".open");
    const close = header.querySelector(".close");

    if (header.nextElementSibling.classList.contains("active")) {
      open.classList.remove("active");
      close.classList.add("active");
    } else {
      open.classList.add("active");
      close.classList.remove("active");
    }
  });
});

// Get the element with the web-links-one class
var webLinks = document.getElementById("web-links-one");

// Check the screen width on page load and show/hide the web links accordingly
window.onload = function() {
    showHideWebLinks();
};

// Listen for window resize events and show/hide the web links accordingly
window.addEventListener("resize", function() {
    showHideWebLinks();
});


}
Improved code bellow does not give me console errors, use as ref to see the diffrence in phase 3**/
const faqHeaders = document.querySelectorAll(".faqs-container .faq-header");

faqHeaders.forEach((header, i) => {
  header.addEventListener("click", () => {
    console.log("Header clicked:", header);
    console.log("Next sibling:", header.nextElementSibling);

    // Check if the next sibling exists before toggling its class
    if (header.nextElementSibling) {
      header.nextElementSibling.classList.toggle("active");

      const open = header.querySelector(".open");
      const close = header.querySelector(".close");

      if (header.nextElementSibling.classList.contains("active")) {
        open.classList.remove("active");
        close.classList.add("active");
      } else {
        open.classList.add("active");
        close.classList.remove("active");
      }
    } else {
      console.log("Next sibling does not exist.");
    }
  });
});

