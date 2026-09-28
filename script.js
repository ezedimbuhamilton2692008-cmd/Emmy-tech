// ===============================
// EMMY-TECH JAVASCRIPT
// ===============================


// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// CLOSE MOBILE MENU AFTER CLICKING A LINK
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


// WHATSAPP FORM
const whatsappForm = document.getElementById("whatsappForm");

whatsappForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const model = document.getElementById("model").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    // EMMY-TECH WHATSAPP NUMBER
    const whatsappNumber = "2347083464430";

    const whatsappMessage =
        `Hello EMMY-TECH,%0A%0A` +
        `I would like to make an enquiry about my phone.%0A%0A` +
        `*Name:* ${name}%0A` +
        `*My Phone Number:* ${phone}%0A` +
        `*Phone Brand/Model:* ${model}%0A` +
        `*Service Needed:* ${service}%0A` +
        `*Problem:* ${message}%0A%0A` +
        `Please let me know how I can get my phone repaired.`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

});


// CURRENT YEAR
document.getElementById("year").textContent = new Date().getFullYear();
