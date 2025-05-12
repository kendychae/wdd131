document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];

    const selectEl = document.getElementById('productName');
    if (selectEl) {
        products.forEach(p => {
            const option = document.createElement('option');
            option.value = p.id;
            option.textContent = `${p.name} (Rating: ${p.averagerating})`;
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