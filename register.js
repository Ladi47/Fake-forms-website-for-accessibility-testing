function openTerms() {
    document.getElementById('termsModal').style.display = 'flex';
}

function closeTerms() {
    document.getElementById('termsModal').style.display = 'none';
}

const form = document.getElementById('registerForm');
const progress = document.getElementById('progressFill');
const trackedFields = form.querySelectorAll('input, select');

trackedFields.forEach(function (field) {
    field.addEventListener('input', updateProgress);
    field.addEventListener('change', updateProgress);
});

function updateProgress() {
    let filled = 0;
    trackedFields.forEach(function (field) {
        if (field.type === 'radio' || field.type === 'checkbox') {
            if (field.checked) {
                filled += 1;
            }
        } else if (field.value.trim() !== '') {
            filled += 1;
        }
    });

    const width = Math.min(100, Math.round((filled / trackedFields.length) * 100));
    progress.style.width = width + '%';
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = this.querySelector('input[name="email"]');
    const pass = this.querySelector('input[name="password"]');
    const repeat = this.querySelector('input[name="repeatPassword"]');
    const toast = document.getElementById('fakeToast');

    let hasError = false;
    const requiredFields = this.querySelectorAll('[required]');

    requiredFields.forEach(function(field) {
        field.classList.remove('error-visual');
        field.style.backgroundColor = '';
        if (field.type === 'checkbox' || field.type === 'radio') {
            if (!field.checked) {
                field.style.backgroundColor = '#ffcccc'; // Only color change -> WCAG Error
                hasError = true;
            }
        } else if (field.value.trim() === '') {
            field.classList.add('error-visual'); // No aria-invalid, no descriptive message -> WCAG Error
            hasError = true;
        }
    });

    if (hasError) {
        toast.textContent = 'Oops! Something is wrong.'; // Unhelpful error message -> WCAG Error
        toast.style.display = 'block';
        toast.style.background = 'red';
        setTimeout(() => toast.style.display = 'none', 3000);
        return;
    }

    email.classList.remove('error-visual');
    pass.classList.remove('error-visual');
    repeat.classList.remove('error-visual');

    if (!email.value.includes('@')) {
        email.classList.add('error-visual');
    }

    if (pass.value !== repeat.value) {
        pass.classList.add('error-visual');
        repeat.classList.add('error-visual');
    }

    toast.textContent = 'Submitting fake data...';
    toast.style.display = 'block';

    setTimeout(function () {
        window.location.href = 'summary.html';
    }, 550);
});