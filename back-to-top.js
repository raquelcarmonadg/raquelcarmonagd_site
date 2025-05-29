document.addEventListener("DOMContentLoaded", () => {
  // Ensure fade-in is added after DOM is fully loaded
  if (!document.body.classList.contains("fade-in")) {
    document.body.classList.add("fade-in");
  }

  // Back to top functionality
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Smooth page transition for internal links
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
      if (this.target === "_blank" || this.href.includes("http")) return;

      e.preventDefault();

      // Fade out only the content, not the whole body
      const content = document.querySelector('.content'); // Assuming you have a 'content' class for main content

      if (content) {
        content.style.transition = "opacity 0.3s ease";
        content.style.opacity = 0;
      }

      setTimeout(() => {
        window.location = this.href;
      }, 300);
    });
  });
});
