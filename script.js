document.addEventListener("DOMContentLoaded", () => {
    // Select filter buttons and project items
    const filterButtons = document.querySelectorAll("[data-filter-btn]");
    const selectItems = document.querySelectorAll("[data-select-item]");
    const filterSelectValue = document.querySelector("[data-selecct-value]");
    const projectItems = document.querySelectorAll("[data-filter-item]");
  
    // Function to filter items based on the selected category
    const filterItems = (category) => {
        projectItems.forEach((item) => {
            const itemCategory = item.dataset.category.toLowerCase();
            if (category === "all" || itemCategory === category) {
            item.classList.add("active");
            } else {
            item.classList.remove("active");
            }
        });
    };
  
    // Add click event listeners for filter buttons
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove "active" class from all buttons and set it on the clicked one
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
    
            // Get the category from the button's text
            const category = button.textContent.toLowerCase();
            filterItems(category);
        });
    });
  
    // Add click event listeners for dropdown select items
    selectItems.forEach((selectItem) => {
        selectItem.addEventListener("click", () => {
            // Update the dropdown display value
            filterSelectValue.textContent = selectItem.textContent;
    
            // Get the category from the select item's text
            const category = selectItem.textContent.toLowerCase();
            filterItems(category);
        });
    });
});
  