document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.gradient-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });
});
