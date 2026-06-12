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
    const fullText = "Fullstack ";
    const highlighted = '<span class="text-primary">Developer</span>';
    const rest = " | PHP & JS Specialist";

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
// Language Toggle
// ============================

const translations = {
    en: {
        heroDesc: "Full Stack Developer with 5+ years of experience building scalable web applications, specializing in PHP, Node.js, modern frontend technologies, and clean code architecture.",
        viewProjects: "View Projects",
        contactMe: "Contact Me",

        about: "About",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        hire: "Hire Me",

        aboutTitle: "About Me",
        aboutP1: "I am a software developer focused on building and maintaining web applications, working across both backend and frontend technologies. I specialize in PHP development, creating business logic, system integrations, and REST APIs with an emphasis on performance, reliability, and clean code.",
        aboutP2: "My experience includes maintaining and improving existing systems, fixing bugs, developing new features, creating RESTful APIs, working with SQL Server databases, and producing technical documentation to support development teams and ensure long-term project sustainability.",
        aboutCoreTitle: "Core Skills:",
        aboutLi1: "Backend Development with PHP",
        aboutLi2: "Frontend Development with HTML, CSS, JavaScript, and jQuery",
        aboutLi3: "REST API Design and Development",
        aboutResume: "Download Resume (PDF)",

        skillsTitle: "Technical Toolkit",
        skillsBackend: "Backend",
        skillsFrontend: "Frontend",
        skillsDevops: "DevOps",

        experienceTitle: "Professional Journey",
        exp1Role: "Junior IT Analyst",
        exp1Desc: "Developed financial API integrations, including subscriptions and billing using Asaas. Implemented batch processing with cron jobs for large-scale data queries. Worked with PHP, JavaScript, SQL, and MVC architecture.",

        exp2Role: "Full Stack Developer",
        exp2Desc: "Performed layout adjustments using the Huro template, maintained and refactored legacy code, fixed bugs, and provided technical support. Worked with PHP, JavaScript, SQL, and MVC architecture.",

        exp3Role: "Mid-Level IT Analyst",
        exp3Desc: "Fixed bugs and maintained backend systems. Developed financial data integrations through REST APIs and batch processing using cron jobs. Performed layout adjustments using jQuery and Huro template. Worked with PHP, JavaScript, SQL, and MVC architecture.",

        projectsTitle: "Featured Projects",

        project1Title: "Enterprise APIs",
        project1Desc: "REST APIs for financial integrations, business systems, authentication, data processing and platform communication.",
        project1Btn: "View Projects",

        project2Title: "Jobs & Automation",
        project2Desc: "Scheduled routines, file processing, automated integrations, data imports and recurring task execution.",
        project2Btn: "View Projects",

        project3Title: "LPs & Portfolios",
        project3Desc: "Modern landing pages, business websites and portfolios focused on performance, design and conversion.",
        project3Btn: "View Projects",

        educationTitle: "Education",
        educationText: "Technologist in Internet Systems and Web Development",
        englishCourse: "Professional English Course",
        courseLaravel: "Laravel REST API Development",
        courseApi: "Advanced REST API Architecture",
        postgraduate: "Postgraduate in Software Architecture",

        contactTitle: "Let’s Work Together",
        contactDesc: "Currently accepting new projects and opportunities. If you're looking for a developer who values reliability and clean architecture, drop me a message.",

        footerRights: "All Rights Reserved."
    },

    pt: {
        heroDesc: "Desenvolvedora Full Stack com mais de 5 anos de experiência construindo aplicações web escaláveis, especializada em PHP, Node.js, tecnologias modernas de frontend e arquitetura limpa.",
        viewProjects: "Ver Projetos",
        contactMe: "Fale Comigo",

        about: "Sobre",
        skills: "Habilidades",
        experience: "Experiência",
        projects: "Projetos",
        hire: "Contrate-me",

        aboutTitle: "Sobre Mim",
        aboutP1: "Sou desenvolvedora de software com experiência em desenvolvimento e manutenção de sistemas web, atuando tanto no backend quanto no frontend. Trabalho com PHP no desenvolvimento de regras de negócio, integrações e APIs, sempre focando em performance, organização e qualidade do código.",
        aboutP2: "Minha experiência inclui correção e otimização de sistemas existentes, desenvolvimento de novas funcionalidades, criação de APIs REST, consultas e modelagem de dados em SQL Server, além da elaboração de documentações técnicas para apoiar equipes e garantir a evolução sustentável dos projetos.",
        aboutCoreTitle: "Principais Competências:",
        aboutLi1: "Desenvolvimento Backend com PHP",
        aboutLi2: "Frontend com HTML, CSS, JavaScript e jQuery",
        aboutLi3: "Criação e Consumo de APIs REST",
        aboutResume: "Baixar Currículo (PDF)",

        skillsTitle: "Ferramentas Técnicas",
        skillsBackend: "Backend",
        skillsFrontend: "Frontend",
        skillsDevops: "DevOps",

        experienceTitle: "Jornada Profissional",
        exp1Role: "Analista de TI Junior",
        exp1Desc: "Desenvolvi integrações com APIs financeiras, incluindo assinaturas e cobranças utilizando Asaas. Implementei processamento em lote com jobs cron para consultas em grande escala. Trabalhei com PHP, JavaScript, SQL e arquitetura MVC.",

        exp2Role: "Desenvolvedora FullStack",
        exp2Desc: "Realizei ajustes de layout utilizando o template Huro, manutenção e refatoração de código legado, correção de bugs e suporte técnico. Trabalhei com PHP, JavaScript, SQL e arquitetura MVC.",

        exp3Role: "Analista de TI Pleno",
        exp3Desc: "Realizei correção de bugs e manutenção de sistemas backend. Desenvolvi integrações de dados financeiros via APIs REST e processamento em lote com jobs cron. Fiz ajustes de layout com jQuery e template Huro. Trabalhei com PHP, JavaScript, SQL e arquitetura MVC.",

        projectsTitle: "Featured Projects",

        projectsTitle: "Projetos em Destaque",

        project1Title: "APIs Corporativas",
        project1Desc: "APIs REST para integrações financeiras, sistemas empresariais, autenticação, processamento de dados e comunicação entre plataformas.",
        project1Btn: "Ver Projetos",

        project2Title: "Jobs & Automações",
        project2Desc: "Rotinas agendadas, processamento de arquivos, integrações automáticas, importação de dados e execução de tarefas recorrentes.",
        project2Btn: "Ver Projetos",

        project3Title: "LPs & Portfólios",
        project3Desc: "Landing pages modernas, sites institucionais e portfólios desenvolvidos com foco em performance, design e conversão.",
        project3Btn: "Ver Projetos",

        educationTitle: "Educação",
        educationText: "Tecnólogo em Sistemas e Desenvolvimento para Internet",
        englishCourse: "Curso de Inglês Profissional",
        courseLaravel: "Desenvolvimento de APIs REST com Laravel",
        courseApi: "Arquitetura Avançada de APIs REST",
        postgraduate: "Pós-graduação em Arquitetura de Software",

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
    document.getElementById("exp3-role").innerText = translations[lang].exp3Role;
    document.getElementById("exp3-desc").innerText = translations[lang].exp3Desc;

    // PROJECTS
    document.getElementById("projects-title").innerText = translations[lang].projectsTitle;

    document.getElementById("project1-title").innerText = translations[lang].project1Title;
    document.getElementById("project1-desc").innerText = translations[lang].project1Desc;
    document.getElementById("project1-btn").innerText = translations[lang].project1Btn;

    document.getElementById("project2-title").innerText = translations[lang].project2Title;
    document.getElementById("project2-desc").innerText = translations[lang].project2Desc;
    document.getElementById("project2-btn").innerText = translations[lang].project2Btn;

    document.getElementById("project3-title").innerText = translations[lang].project3Title;
    document.getElementById("project3-desc").innerText = translations[lang].project3Desc;
    document.getElementById("project3-btn").innerText = translations[lang].project3Btn;

    // EDUCATION
    document.getElementById("education-title").innerText = translations[lang].educationTitle;
    document.getElementById("education-text").innerText = translations[lang].educationText;
    // document.getElementById("english-course").innerText = translations[lang].englishCourse;
    // document.getElementById("course-laravel").innerText = translations[lang].courseLaravel;
    // document.getElementById("course-api").innerText = translations[lang].courseApi;
    // document.getElementById("postgraduate").innerText = translations[lang].postgraduate;

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

// ============================
// Download cv translate
// ============================

function downloadCV() {
    const lang = localStorage.getItem("language") || "en";

    let file = lang === "pt"
        ? "assets/cv/debora-santos-cv-pt.pdf"
        : "assets/cv/debora-santos-cv-en.pdf";

    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    link.click();
}

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("download-cv")
        ?.addEventListener("click", downloadCV);

    document.getElementById("about-resume")
        ?.addEventListener("click", downloadCV);

});