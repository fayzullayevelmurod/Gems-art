// Custom select functionality
const selectBtn = document.getElementById('selectBtn');
const selectedOption = document.getElementById('selectedOption');
const selectOptions = document.getElementById('selectOptions');

selectBtn.addEventListener('click', () => {
  selectOptions.classList.toggle('hidden');
});

selectOptions.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    selectedOption.textContent = e.target.textContent;
    selectOptions.classList.add('hidden');
  }
});

// Close the dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!selectBtn.contains(e.target) && !selectOptions.contains(e.target)) {
    selectOptions.classList.add('hidden');
  }
});