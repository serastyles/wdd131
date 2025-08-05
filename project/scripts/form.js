document.addEventListener("DOMContentLoaded", () => {
  // Product array
  const products = [
    { name: "Product Alpha" },
    { name: "Product Beta" },
    { name: "Product Gamma" },
    { name: "Product Delta" }
  ];

  // Populate the select options
  const productSelect = document.getElementById('product');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });

  // Set current year in footer (if element exists)
  const yearElement = document.getElementById("currentyear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Set last modified date in footer (if element exists)
  const modifiedElement = document.getElementById("lastModified");
  if (modifiedElement) {
    modifiedElement.textContent = "Last Modified: " + document.lastModified;
  }
});
