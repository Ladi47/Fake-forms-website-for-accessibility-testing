function showInfo() {
    const toast = document.getElementById('toast');
    toast.style.display = 'block';
    setTimeout(function () {
        toast.style.display = 'none';
    }, 1200);
}

function toggleDetails() {
    const details = document.getElementById('secretDetails');
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}