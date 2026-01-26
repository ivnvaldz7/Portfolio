// Cache DOM references
const goButton = document.querySelector(".go");

// Use Intersection Observer for better performance
const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-100px 0px 0px 0px"
};

const headerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      goButton.classList.add("show");
    } else {
      goButton.classList.remove("show");
    }
  });
}, observerOptions);

// Observe the header element
const header = document.querySelector(".header");
if (header) {
  headerObserver.observe(header);
}

// Scroll to top functionality
if (goButton) {
  goButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Keyboard accessibility
  goButton.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
}
