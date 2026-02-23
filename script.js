// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ============================
// Reveal Animation on Scroll
// ============================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("section, .neo-border").forEach(el => {
    el.classList.add("hidden-animate");
    observer.observe(el);
});


// ============================
// Hero typing effect FIXED
// ============================

const heroTitle = document.querySelector("h1");

if (heroTitle) {
    const fullText = "Backend ";
    const highlighted = '<span class="text-primary">Developer</span>';
    const rest = " | PHP & API Specialist";

    heroTitle.innerHTML = "";
    let i = 0;

    function typeEffect() {
        if (i < fullText.length) {
            heroTitle.innerHTML += fullText.charAt(i);
            i++;
            setTimeout(typeEffect, 30);
        } else {
            heroTitle.innerHTML += highlighted + rest;
        }
    }

    typeEffect();
}


// ============================
// Button micro interaction
// ============================

document.querySelectorAll("button, a").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transition = "transform 0.15s ease";
    });
});


// ============================
// Parallax leve na imagem Hero
// ============================

window.addEventListener("scroll", () => {
    const heroImg = document.querySelector("img");
    if (heroImg) {
        let offset = window.pageYOffset;
        heroImg.style.transform = `translateY(${offset * 0.05}px)`;
    }
});

// ============================
// Language Toggle
// ============================

const translations = {
    en: {
        heroTitle: `Backend <span class="text-primary">Developer</span> | PHP & API Specialist`,
        heroDesc: "6+ years of experience crafting robust server-side solutions, specializing in PHP, Node.js, and clean code architecture.",
    },
    pt: {
        heroTitle: `Desenvolvedora <span class="text-primary">Backend</span> | Especialista em PHP & APIs`,
        heroDesc: "Mais de 6 anos desenvolvendo soluções robustas no backend, especializada em PHP, Node.js e arquitetura limpa.",
    }
};

const btnPT = document.getElementById("btn-pt");
const btnEN = document.getElementById("btn-en");

btnPT.addEventListener("click", () => switchLanguage("pt"));
btnEN.addEventListener("click", () => switchLanguage("en"));

function switchLanguage(lang) {
    document.getElementById("hero-title").innerHTML = translations[lang].heroTitle;
    document.getElementById("hero-desc").innerText = translations[lang].heroDesc;

    localStorage.setItem("language", lang);
}

// Mantém idioma salvo
const savedLang = localStorage.getItem("language") || "en";
switchLanguage(savedLang);