function selectOp(element) {
    // Finds parent span and replaces text
    const dropdown = element.parentElement.previousElementSibling;
    dropdown.textContent = element.innerText;
    element.parentElement.style.display = 'none';
    
    // Stop propagation so it doesn't immediately toggle back
    event.stopPropagation();
}

function toggleAcc(element) {
    element.classList.toggle('selected');
}

function submitOrder() {
    const requiredFields = document.querySelectorAll('input[required], textarea[required]');
    let hasError = false;

    requiredFields.forEach(function(field) {
        field.style.border = ''; // reset
        if (field.type === 'checkbox' || field.type === 'radio') {
            if (!field.checked) {
                field.style.border = '2px solid red';
                hasError = true;
            }
        } else if (field.value.trim() === '') {
            field.style.border = '2px solid red'; // Using only color for error state -> WCAG error
            hasError = true;
        }
    });

    if (hasError) {
        alert('Fix empty fields!'); // Vague error, focus not moved -> WCAG error
        return;
    }

    alert('Thank you! Your equipment request has been tracked in the shadow realm.');
    window.location.href = 'summary.html';
}

// Close Dropdowns on outside click
document.addEventListener('click', function(event) {
    const isDropdown = event.target.closest('.custom-dropdown');
    if (!isDropdown) {
        document.querySelectorAll('.dropdown-list').forEach(function(list) {
            list.style.display = 'none';
        });
    }
});