// Product array
const products = [
    { id: 'p1', name: 'Mountain Bike' },
    { id: 'p2', name: 'Road Bike' },
    { id: 'p3', name: 'Electric Scooter' },
    { id: 'p4', name: 'Helmet' },
    { id: 'p5', name: 'Bike Lock' }
];

// Populate the select options dynamically
const select = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});

// Count review submissions using localStorage (in review.html)
if (window.location.pathname.includes('review.html')) {
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem('reviewCount', reviewCount);

    // Display review count (optional - if you include a div with id="counter" in review.html)
    const counterDisplay = document.getElementById('counter');
    if (counterDisplay) {
        counterDisplay.textContent = `You have submitted ${reviewCount} review(s).`;
    }
}
