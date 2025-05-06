document.addEventListener("DOMContentLoaded", function () {
    // Footer Copyright and Last Modified
    const footerCopyright = document.getElementById("footerCopyright");
    const footerLastModified = document.getElementById("footerLastModified");

    if (footerCopyright) {
        const currentYear = new Date().getFullYear();
        footerCopyright.textContent = `© ${currentYear} Kendahl Bingham, ID, USA`;
    }

    if (footerLastModified) {
        footerLastModified.textContent = `Last Modified: ${document.lastModified}`;
    }

    // Hamburger Menu
    const hamburgerButton = document.getElementById("hamburgerButton");
    const mainNav = document.getElementById("mainNav");

    if (hamburgerButton && mainNav) {
        hamburgerButton.addEventListener("click", function () {
            mainNav.classList.toggle("active");
            if (mainNav.classList.contains("active")) {
                mainNav.style.display = "flex";
                hamburgerButton.textContent = "X";
            } else {
                mainNav.style.display = "none";
                hamburgerButton.textContent = "☰";
            }
        });
    }
});
