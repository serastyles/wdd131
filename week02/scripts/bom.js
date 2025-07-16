// Declare references to DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add click event to the Add Chapter button
button.addEventListener('click', () => {
  // Trim input and check for empty
  const chapter = input.value.trim();

  if (chapter !== '') {
    // Create list item and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Populate li with chapter name
    li.textContent = chapter;

    // Style and label delete button
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete-btn');
    deleteButton.setAttribute('aria-label', `Remove ${chapter}`);

    // Append delete button to list item
    li.append(deleteButton);

    // Append list item to ul
    list.append(li);

    // Add delete functionality
    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
    });

    // Clear input
    input.value = '';
  }

  // Refocus on input field
  input.focus();
});