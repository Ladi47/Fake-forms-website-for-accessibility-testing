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