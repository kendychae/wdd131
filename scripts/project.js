document.addEventListener("DOMContentLoaded", () => {
    const learnMoreBtn = document.getElementById("learnMoreBtn");
    const moreInfo = document.getElementById("moreInfo");
    const emailForm = document.getElementById("emailForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    learnMoreBtn.addEventListener("click", () => {
        moreInfo.classList.toggle("hidden");
        thankYouMessage.classList.add("hidden");
        emailForm.style.display = "block";
    });

    emailForm.addEventListener("submit", (e) => {
        e.preventDefault();
        emailForm.style.display = "none";
        thankYouMessage.classList.remove("hidden");
    });
});
