// project.js

const resources = [
    { title: "National Human Trafficking Hotline", desc: "24/7, confidential support.", img: "images/hotline.jpg", link: "https://humantraffickinghotline.org/" },
    { title: "Polaris Project", desc: "Combating modern slavery worldwide.", img: "images/polaris.jpg", link: "https://polarisproject.org/" },
    { title: "UNODC Human Trafficking", desc: "UN resources and reports.", img: "images/unodc.jpg", link: "https://www.unodc.org/" }
];

function buildResourceGrid(sel) {
    const container = document.querySelector(sel);
    container.innerHTML = "";
    resources.forEach((r, i) => {
        const card = document.createElement("div"); card.className = "resource-card";
        card.innerHTML = `
        <img src="${r.img}" alt="${r.title}">
        <div class="resource-card-content">
          <h3>${r.title}</h3>
          <p>${r.desc}</p>
          <button data-index="${i}">Visit Site</button>
        </div>`;
        container.append(card);
    });
    container.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
            window.open(resources[btn.dataset.index].link, "_blank");
        });
    });
}

function initSignupForm(fs, ms) {
    const form = document.querySelector(fs), msg = document.querySelector(ms);
    form.addEventListener("submit", e => {
        e.preventDefault();
        const email = form.email.value.trim();
        if (!email.includes("@")) return msg.textContent = "Enter a valid email.";
        let subs = JSON.parse(localStorage.getItem("fw_subs") || "[]");
        if (subs.includes(email)) msg.textContent = "Already subscribed.";
        else {
            subs.push(email);
            localStorage.setItem("fw_subs", JSON.stringify(subs));
            msg.textContent = `Thanks for subscribing, ${email}!`;
            form.reset();
        }
    });
}

function initContactForm(fs, ms) {
    const form = document.querySelector(fs), msg = document.querySelector(ms);
    form.addEventListener("submit", e => {
        e.preventDefault();
        const { name, email, message } = form;
        if (!name.value || !email.value.includes("@") || !message.value) {
            return msg.textContent = "Please complete all fields.";
        }
        msg.textContent = `Thank you, ${name.value}! We'll be in touch.`;
        form.reset();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".resources")) buildResourceGrid(".resources");
    if (document.querySelector("#newsletter-form")) initSignupForm("#newsletter-form", "#newsletter-msg");
    if (document.querySelector("#contact-form")) initContactForm("#contact-form", "#contact-msg");
});
