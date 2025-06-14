document.addEventListener("DOMContentLoaded", () => {
    const learnMoreBtn = document.getElementById("learnMoreBtn");
    const moreInfo = document.getElementById("moreInfo");
    const emailForm = document.getElementById("emailForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    learnMoreBtn.addEventListener("click", () => {
        const isHidden = moreInfo.classList.toggle("hidden");

        // Update aria-expanded attribute for accessibility
        learnMoreBtn.setAttribute("aria-expanded", !isHidden);

        // Toggle aria-hidden on moreInfo container
        moreInfo.setAttribute("aria-hidden", isHidden);

        // Reset thank you message visibility when toggling more info
        thankYouMessage.classList.add("hidden");

        // Show form when expanded
        if (!isHidden) {
            emailForm.style.display = "flex";
            emailForm.reset();
        } else {
            emailForm.style.display = "none";
        }
    });

    emailForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailInput = emailForm.email;
        if (!emailInput.checkValidity()) {
            emailInput.reportValidity();
            return;
        }

        emailForm.style.display = "none";
        thankYouMessage.classList.remove("hidden");

        // Save email in localStorage
        localStorage.setItem("subscriberEmail", emailInput.value);
    });

    // On page load, if email already saved, show thank you message
    const savedEmail = localStorage.getItem("subscriberEmail");
    if (savedEmail) {
        thankYouMessage.textContent = `Thank you for subscribing, ${savedEmail}!`;
        thankYouMessage.classList.remove("hidden");
        emailForm.style.display = "none";
    }
});
