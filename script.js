// Efekt hover dla kart metodologii
const methodologyCards = document.querySelectorAll('.methodology-card');

methodologyCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.03)';
        card.style.transition = 'transform 0.2s ease-in-out';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

