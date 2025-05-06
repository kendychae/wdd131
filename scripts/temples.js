// temples.js

document.addEventListener("DOMContentLoaded", function () {
    // === Footer Copyright and Last Modified Date ===
    // Ensure your footer HTML elements have these IDs.
    const footerCopyright = document.getElementById("footerCopyright");
    const footerLastModified = document.getElementById("footerLastModified");

    if (footerCopyright) {
        // Get the current year and update copyright text.
        const currentYear = new Date().getFullYear();
        footerCopyright.textContent =
            "© " + currentYear + " Brigham Young University-Idaho | All rights reserved";
    }

    if (footerLastModified) {
        // Use document.lastModified to display the last modified date.
        footerLastModified.textContent = "Last Modified: " + document.lastModified;
    }

    // === Responsive Hamburger Menu ===
    // Ensure your HTML has a hamburger button and a nav element with these IDs.
    const hamburgerButton = document.getElementById("hamburgerButton");
    const mainNav = document.getElementById("mainNav");

    if (hamburgerButton && mainNav) {
        hamburgerButton.addEventListener("click", function () {
            // Toggle a class on the nav element to switch between hidden and visible.
            mainNav.classList.toggle("active");

            // Change the button icon: show "X" when active, hamburger icon when not.
            if (mainNav.classList.contains("active")) {
                hamburgerButton.textContent = "X";
            } else {
                hamburgerButton.textContent = "☰";
            }
        });
    }
});
