// project.js

// Array of resource objects
const resources = [
    {
        title: "National Human Trafficking Hotline",
        desc: "24/7, confidential support and resources for survivors.",
        img: "images/hotline.jpg",
        link: "https://humantraffickinghotline.org/"
    },
    {
        title: "Polaris Project",
        desc: "Works to combat and prevent modern slavery worldwide.",
        img: "images/polaris.jpg",
        link: "https://polarisproject.org/"
    },
    {
        title: "UNODC Human Trafficking",
        desc: "United Nations Office on Drugs and Crime resources and reports.",
        img: "images/unodc.jpg",
        link: "https://www.unodc.org/"
    }
];

// ===== DYNAMIC RESOURCE GRID =====
function buildResourceGrid(containerSelector) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = ""; // clear
    resources.forEach((res, i) => {
        const card = document.createElement("div");
        card.className = "resource-card";
        card.innerHTML = `
        <img src="${res.img}" alt="${res.title}" loading="lazy">
        <div class="resource-card-content">
          <h3>${res.title}</h3>
          <p>${res.desc}</p>
          <button data-index="${i}">Visit Site</button>
        </div>`;
        container.appendChild(card);
    });
    // attach event listeners
    container.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = btn.getAttribute("data-index");
            window.open(resources[idx].link, "_blank");
        });
    });
}

// ===== NEWSLETTER SIGNUP (localStorage) =====
function initSignupForm(formSelector, messageSelector) {
    const form = document.querySelector(formSelector);
    const msg = document.querySelector(messageSelector);
    form.addEventListener("submit", e => {
        e.preventDefault();
        const email = form.querySelector("input[type=email]").value;
        if (!email.includes("@")) {
            msg.textContent = "Please enter a valid email.";
            return;
        }
        let subs = JSON.parse(localStorage.getItem("fw_subs") || "[]");
        if (subs.includes(email)) {
            msg.textContent = "You have already subscribed.";
        } else {
            subs.push(email);
            localStorage.setItem("fw_subs", JSON.stringify(subs));
            msg.textContent = `Thank you for subscribing, ${email}!`;
            form.reset();
        }
    });
}

// ===== CONTACT FORM HANDLER =====
function initContactForm(formSelector, messageSelector) {
    const form = document.querySelector(formSelector);
    const msg = document.querySelector(messageSelector);
    form.addEventListener("submit", e => {
        e.preventDefault();
        const data = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            message: form.message.value.trim()
        };
        if (!data.name || !data.email.includes("@") || !data.message) {
            msg.textContent = "Please fill in all fields correctly.";
            return;
        }
        msg.textContent = `Thanks, ${data.name}! We'll be in touch soon.`;
        form.reset();
    });
}

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector(".resources")) {
        buildResourceGrid(".resources");
    }
    if (document.querySelector("#newsletter-form")) {
        initSignupForm("#newsletter-form", "#newsletter-msg");
    }
    if (document.querySelector("#contact-form")) {
        initContactForm("#contact-form", "#contact-msg");
    }
});
