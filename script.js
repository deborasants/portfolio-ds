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
        heroDesc: "6+ years of experience crafting robust server-side solutions, specializing in PHP, Node.js, and clean code architecture.",
        viewProjects: "View Projects",
        contactMe: "Contact Me",

        about: "About",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        hire: "Hire Me",

        aboutTitle: "Bio & Philosophy",
        aboutP1: "I am a software architect at heart, dedicated to the art of building scalable, secure, and high-performance backend systems. My philosophy revolves around SOLID principles and the pursuit of clean, maintainable code.",
        aboutP2: "Over the last 6 years, I've navigated through various technical challenges, from monolithic migrations to microservices orchestration, always keeping the developer experience and business goals in harmony.",
        aboutCoreTitle: "Core Focus:",
        aboutLi1: "Scalable RESTful & GraphQL APIs",
        aboutLi2: "Database Optimization & Indexing",
        aboutLi3: "Automated Testing & CI/CD Pipelines",
        aboutResume: "Download Resume (PDF)",

        skillsTitle: "Technical Toolkit",
        skillsBackend: "Backend",
        skillsFrontend: "Frontend",
        skillsDevops: "DevOps",

        experienceTitle: "Professional Journey",
        exp1Role: "Senior Backend Developer",
        exp1Desc: "Led the development of a multi-tenant SaaS platform serving over 50k monthly active users. Optimized database queries resulting in a 40% reduction in response times.",

        exp2Role: "Backend Specialist",
        exp2Desc: "Built and maintained core financial APIs with high compliance standards. Implemented comprehensive unit and integration testing suites.",

        projectsTitle: "Featured Projects",
        project1Title: "Enterprise SaaS API",
        project1Desc: "A high-performance REST API built for scalable business operations with complex RBAC.",
        project1Btn: "View on GitHub",

        project2Title: "E-commerce Engine",
        project2Desc: "Custom checkout system with integrated payment gateways and real-time stock management.",

        project3Title: "Financial Analytics",
        project3Desc: "Internal dashboard for tracking financial health with complex data aggregation logic.",

        educationTitle: "Education",
        educationText: "Technologist in System Analysis and Development",

        contactTitle: "Let’s Work Together",
        contactDesc: "Currently accepting new projects and opportunities. If you're looking for a developer who values reliability and clean architecture, drop me a message.",

        footerRights: "All Rights Reserved."
    },

    pt: {
        heroDesc: "Mais de 6 anos desenvolvendo soluções robustas no backend, especializada em PHP, Node.js e arquitetura limpa.",
        viewProjects: "Ver Projetos",
        contactMe: "Fale Comigo",

        about: "Sobre",
        skills: "Habilidades",
        experience: "Experiência",
        projects: "Projetos",
        hire: "Contrate-me",

        aboutTitle: "Bio & Filosofia",
        aboutP1: "Sou uma arquiteta de software por essência, dedicada à construção de sistemas backend escaláveis, seguros e de alta performance. Minha filosofia gira em torno dos princípios SOLID e da busca por código limpo e sustentável.",
        aboutP2: "Nos últimos 6 anos enfrentei diversos desafios técnicos, desde migrações monolíticas até orquestração de microserviços, sempre equilibrando experiência do desenvolvedor e objetivos de negócio.",
        aboutCoreTitle: "Foco Principal:",
        aboutLi1: "APIs RESTful e GraphQL escaláveis",
        aboutLi2: "Otimização e Indexação de Banco de Dados",
        aboutLi3: "Testes Automatizados e Pipelines CI/CD",
        aboutResume: "Baixar Currículo (PDF)",

        skillsTitle: "Ferramentas Técnicas",
        skillsBackend: "Backend",
        skillsFrontend: "Frontend",
        skillsDevops: "DevOps",

        experienceTitle: "Jornada Profissional",
        exp1Role: "Desenvolvedora Backend Sênior",
        exp1Desc: "Liderei o desenvolvimento de uma plataforma SaaS multi-tenant atendendo mais de 50 mil usuários ativos mensais. Otimizei consultas ao banco de dados, reduzindo o tempo de resposta em 40%.",

        exp2Role: "Especialista Backend",
        exp2Desc: "Desenvolvi e mantive APIs financeiras essenciais com altos padrões de conformidade. Implementei suítes completas de testes unitários e integração.",

        projectsTitle: "Projetos em Destaque",
        project1Title: "API SaaS Corporativa",
        project1Desc: "API REST de alta performance desenvolvida para operações empresariais escaláveis com controle de acesso complexo (RBAC).",
        project1Btn: "Ver no GitHub",

        project2Title: "Motor de E-commerce",
        project2Desc: "Sistema de checkout personalizado com gateways integrados e gestão de estoque em tempo real.",

        project3Title: "Analytics Financeiro",
        project3Desc: "Dashboard interno para acompanhamento da saúde financeira com lógica complexa de agregação de dados.",

        educationTitle: "Educação",
        educationText: "Tecnólogo em Análise e Desenvolvimento de Sistemas",

        contactTitle: "Vamos Trabalhar Juntos",
        contactDesc: "Atualmente aceitando novos projetos e oportunidades. Se você procura uma desenvolvedora que valoriza confiabilidade e arquitetura limpa, me envie uma mensagem.",

        footerRights: "Todos os Direitos Reservados."
    }
};

const btnPT = document.getElementById("btn-pt");
const btnEN = document.getElementById("btn-en");

btnPT.addEventListener("click", () => switchLanguage("pt"));
btnEN.addEventListener("click", () => switchLanguage("en"));

function switchLanguage(lang) {
    // hero
    document.getElementById("hero-desc").innerText = translations[lang].heroDesc;
    document.getElementById("btn-projects").innerText = translations[lang].viewProjects;
    document.getElementById("btn-contact").innerText = translations[lang].contactMe;

    // Header
    document.getElementById("nav-about").innerText = translations[lang].about;
    document.getElementById("nav-skills").innerText = translations[lang].skills;
    document.getElementById("nav-experience").innerText = translations[lang].experience;
    document.getElementById("nav-projects").innerText = translations[lang].projects;
    document.getElementById("nav-hire").innerText = translations[lang].hire;

    // ABOUT SECTION
    document.getElementById("about-title").innerText = translations[lang].aboutTitle;
    document.getElementById("about-p1").innerText = translations[lang].aboutP1;
    document.getElementById("about-p2").innerText = translations[lang].aboutP2;
    document.getElementById("about-core-title").innerText = translations[lang].aboutCoreTitle;
    document.getElementById("about-li-1").innerText = translations[lang].aboutLi1;
    document.getElementById("about-li-2").innerText = translations[lang].aboutLi2;
    document.getElementById("about-li-3").innerText = translations[lang].aboutLi3;
    document.getElementById("about-resume").innerText = translations[lang].aboutResume;

    // SKILLS SECTION
    document.getElementById("skills-title").innerText = translations[lang].skillsTitle;
    document.getElementById("skills-backend").innerText = translations[lang].skillsBackend;
    document.getElementById("skills-frontend").innerText = translations[lang].skillsFrontend;
    document.getElementById("skills-devops").innerText = translations[lang].skillsDevops;

    // EXPERIENCE
    document.getElementById("experience-title").innerText = translations[lang].experienceTitle;
    document.getElementById("exp1-role").innerText = translations[lang].exp1Role;
    document.getElementById("exp1-desc").innerText = translations[lang].exp1Desc;
    document.getElementById("exp2-role").innerText = translations[lang].exp2Role;
    document.getElementById("exp2-desc").innerText = translations[lang].exp2Desc;

    // PROJECTS
    document.getElementById("projects-title").innerText = translations[lang].projectsTitle;
    document.getElementById("project1-title").innerText = translations[lang].project1Title;
    document.getElementById("project1-desc").innerText = translations[lang].project1Desc;
    document.getElementById("project1-btn").innerText = translations[lang].project1Btn;

    document.getElementById("project2-title").innerText = translations[lang].project2Title;
    document.getElementById("project2-desc").innerText = translations[lang].project2Desc;

    document.getElementById("project3-title").innerText = translations[lang].project3Title;
    document.getElementById("project3-desc").innerText = translations[lang].project3Desc;

    // EDUCATION
    document.getElementById("education-title").innerText = translations[lang].educationTitle;
    document.getElementById("education-text").innerText = translations[lang].educationText;

    // CONTACT
    document.getElementById("contact-title").innerText = translations[lang].contactTitle;
    document.getElementById("contact-desc").innerText = translations[lang].contactDesc;

    // FOOTER
    document.getElementById("footer-rights").innerText =
        `2024 Débora Oliveira Santos. ${translations[lang].footerRights}`;

    localStorage.setItem("language", lang);
}

// Mantém idioma salvo
const savedLang = localStorage.getItem("language") || "en";
switchLanguage(savedLang);