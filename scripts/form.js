document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 'p1', name: 'Mountain Bike' },
        { id: 'p2', name: 'Road Bike' },
        { id: 'p3', name: 'Electric Scooter' },
        { id: 'p4', name: 'Helmet' },
        { id: 'p5', name: 'Bike Lock' }
    ];

    const selectEl = document.getElementById('productName');
    if (selectEl) {
        products.forEach(p => {
            const option = document.createElement('option');
            option.value = p.id;
            option.textContent = p.name;
            selectEl.appendChild(option);
        });
    }

    if (window.location.pathname.includes('review.html')) {
        let count = parseInt(localStorage.getItem('reviewCount') || '0', 10) + 1;
        localStorage.setItem('reviewCount', count);
        const counter = document.getElementById('counter');
        if (counter) {
            counter.textContent = `You have submitted ${count} review(s).`;
        }
    }
});
