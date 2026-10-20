export const profile = {
  name: 'Débora Santos',
  brand: 'DÉBORA SANTOS',
  headline: 'Desenvolvedora Backend / Full Stack PHP',
  tagline: 'APIs REST, integrações bancárias e sistemas de consignado',
  year: "'26",
  photo: `${import.meta.env.BASE_URL}assets/images/debora.jpg`,
  bio: 'Desenvolvedora Full Stack com foco em backend PHP, SQL Server e APIs REST. Atuo em sistemas de crédito consignado: integrações com bancos, jobs em lote, documentação e comunicação via Evolution API (WhatsApp).',
  location: 'Mogi Guaçu, SP',
  email: 'os.debora.2001@gmail.com',
  phone: '+55 19 99173-1213',
  phoneHref: 'tel:+5519991731213',
  whatsapp: 'https://wa.me/5519991731213',
  linkedin: 'https://www.linkedin.com/in/debora-oliveira-santos-1b920321a',
  github: 'https://github.com/deborasants',
  cvBackend: `${import.meta.env.BASE_URL}assets/cv/Debora-Santos-CV-Backend-PHP.docx`,
}

export const experiences = [
  {
    role: 'Desenvolvedora Full Stack',
    company: 'Smart in Tech',
    period: 'Abr 2025 – Atual',
    detail: 'Consignado Rápido · PHP · SQL Server · Evolution API',
  },
  {
    role: 'Desenvolvedora Full Stack',
    company: 'Veloon',
    period: 'Dez 2024 – Abr 2025',
    detail: 'PHP · APIs REST · SQL Server · jQuery',
  },
  {
    role: 'Analista de TI Júnior',
    company: 'Smart in Tech',
    period: 'Nov 2022 – Out 2024',
    detail: 'APIs C6, Itaú, Master, Facta, Safra · jobs em lote',
  },
  {
    role: 'Desenvolvedora Web',
    company: 'Freelancer',
    period: 'Nov 2021 – Jun 2023',
    detail: 'React · Node.js · MongoDB · Landing pages',
  },
]

export const stack = [
  'PHP',
  'SQL Server',
  'APIs REST',
  'Node.js',
  'JavaScript',
  'jQuery',
  'React',
  'MySQL',
  'MongoDB',
  'Evolution API',
  'HTML',
  'CSS',
]

export const projects = [
  {
    id: '01',
    title: 'Integrações bancárias',
    description:
      'Consultas e digitações de contratos de consignado com APIs C6, Itaú, Master, Facta e Safra.',
    color: '#2F6FED',
    href: profile.linkedin,
  },
  {
    id: '02',
    title: 'Evolution WhatsApp',
    description:
      'Integração com Evolution API para disparos e comunicação no fluxo do Consignado Rápido.',
    color: '#1FA971',
    href: profile.github,
  },
  {
    id: '03',
    title: 'Jobs em lote',
    description:
      'Rotinas unitárias e em lote para consultas e processamento de operações de consignado.',
    color: '#E25B2C',
    href: profile.linkedin,
  },
  {
    id: '04',
    title: 'sansystems-store',
    description: 'Projeto web de vitrine/loja — código público no GitHub.',
    color: '#C9A227',
    href: 'https://github.com/deborasants/sansystems-store',
  },
  {
    id: '05',
    title: 'Este portfólio',
    description: 'Site mobile-first com React, Vite e Framer Motion.',
    color: '#1C1C1C',
    href: 'https://github.com/deborasants/portfolio-ds',
  },
]

export const certificates = [
  {
    label: 'Diploma — Sistemas para Internet',
    href: `${import.meta.env.BASE_URL}assets/certificates/diploma-ds.pdf`,
  },
  {
    label: 'Laravel API',
    href: `${import.meta.env.BASE_URL}assets/certificates/laravel-api.pdf`,
  },
  {
    label: 'Arquitetura REST API',
    href: `${import.meta.env.BASE_URL}assets/certificates/rest-api-architecture.pdf`,
  },
]

export const education = {
  degree: 'Sistemas para Internet',
  school: 'Senac Campinas',
  period: '2022 – 2024',
}
