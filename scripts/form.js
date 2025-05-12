document.addEventListener('DOMContentLoaded', () => {
    // Product array
    const products = [
        { id: 'p1', name: 'Mountain Bike' },
        { id: 'p2', name: 'Road Bike' },
        { id: 'p3', name: 'Electric Scooter' },
        { id: 'p4', name: 'Helmet' },
        { id: 'p5', name: 'Bike Lock' }
    ];

    // Populate select options
    const selectEl = document.getElementById('productName');
    if (selectEl) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            selectEl.appendChild(option);
        });
    }

    // On review.html: increment & display review count
    if (window.location.pathname.includes('review.html')) {
        let count = parseInt(localStorage.getItem('reviewCount') || '0', 10) + 1;
        localStorage.setItem('reviewCount', count);
        const counter = document.getElementById('counter');
        if (counter) {
            counter.textContent = `You have submitted ${count} review(s).`;
        }
    }
});
