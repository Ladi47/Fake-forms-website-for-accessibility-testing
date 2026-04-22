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