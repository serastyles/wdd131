function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
document.addEventListener("DOMContentLoaded", () => {

// ✅ Set current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// ✅ Set last modified date in footer
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
});
