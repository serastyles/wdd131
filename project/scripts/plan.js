document.addEventListener("DOMContentLoaded", () => {
  // ✅ Set current year in footer
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ✅ Set last modified date in footer with formatting
  const modifiedSpan = document.getElementById("lastModified");
  if (modifiedSpan) {
    const lastModified = new Date(document.lastModified);
    const formattedDate = lastModified.toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    modifiedSpan.textContent = `Last Modified: ${formattedDate}`;
  }

  // ✅ Toggle navigation menu (responsive)
  const toggleButton = document.getElementById("menu-toggle");
  const menuList = document.getElementById("menu-list");

  if (toggleButton && menuList) {
    toggleButton.addEventListener("click", () => {
      menuList.classList.toggle("show");
      toggleButton.setAttribute("aria-expanded", menuList.classList.contains("show"));
    });

    // Optional: allow toggle via keyboard (Enter/Space)
    toggleButton.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleButton.click();
      }
    });
  }
});
