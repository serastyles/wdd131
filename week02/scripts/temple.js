document.addEventListener("DOMContentLoaded", () => {
  // ✅ Set current year in footer
  document.getElementById("currentyear").textContent = new Date().getFullYear();

  // ✅ Set last modified date in footer
  document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

  // ✅ Toggle navigation menu
  const toggleButton = document.getElementById("menu-toggle");
  const menuList = document.getElementById("menu-list");

  if (toggleButton && menuList) {
    toggleButton.addEventListener("click", () => {
      menuList.classList.toggle("show");
    });
  }

  // ✅ Create a new paragraph when any button is clicked
  const buttons = document.querySelectorAll("button");
  for (const button of buttons) {
    button.addEventListener("click", () => {
      const para = document.createElement("p");
      para.textContent = "You clicked the button!";
      document.body.appendChild(para);
    });
  }
});
