const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card");
const languageButtons = document.querySelectorAll("[data-lang-switch]");

const translations = {
  pt: {
    lang: "pt-BR",
    title: "Daniel Silva | Desenvolvedor Web",
    description:
      "Portfólio de Daniel Silva, desenvolvedor WordPress, PHP e front-end com experiência em portais, WooCommerce, APIs REST, performance, SEO técnico e CMS.",
    ogDescription:
      "Temas, plugins, WooCommerce, APIs REST, performance, segurança e portais de alto volume.",
    navLabel: "Navegação principal",
    languageLabel: "Selecionar idioma",
    menuLabel: "Abrir menu",
    heroStatsLabel: "Resumo profissional",
    avatarLabel: "Ilustração de Daniel Silva",
    whatsapp:
      "https://wa.me/5511985393097?text=Ol%C3%A1%2C%20Daniel%21%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
    text: {
      ".skip-link": "Ir para o conteúdo",
      ".nav-menu li:nth-child(1) a": "Sobre",
      ".nav-menu li:nth-child(2) a": "Projetos",
      ".nav-menu li:nth-child(3) a": "Experiência",
      ".nav-menu li:nth-child(4) a": "Contato",
      ".hero .eyebrow": "WordPress, PHP, Laravel, IA aplicada e arquitetura de conteúdo",
      "#hero-title": "Código limpo, CMS organizado e WordPress sem drama.",
      ".hero-lead":
        "Eu sou Daniel Silva, desenvolvedor web com quase 14 anos criando temas, plugins, integrações API REST, WooCommerce, portais institucionais e plataformas digitais com foco em performance, SEO técnico e experiência do usuário. Hoje também sou pós-graduando em Engenharia de Software em IA Aplicada.",
      ".hero-actions .button-primary": "Ver projetos",
      ".hero-actions .button-secondary": "Falar comigo",
      ".hero-stats div:nth-child(1) dd": "anos de experiência",
      ".hero-stats div:nth-child(2) dd": "sites governamentais mantidos",
      ".hero-stats div:nth-child(3) dd": "temas, plugins e WooCommerce",
      ".hero-avatar figcaption": "WordPress, PHP e café bem administrado.",
      "#sobre .section-kicker": "Perfil",
      "#sobre-title": "Especialista em WordPress com visão de produto, conteúdo e operação.",
      ".mini-bio":
        "Desenvolvedor, professor e pai de adolescente. Acredito em uma tecnologia feita para servir as pessoas, aberta a quem quiser aprender, criar e transformar a própria realidade com ela.",
      ".intro-copy p:nth-of-type(2)":
        "Atuo no desenvolvimento de temas do zero, Gutenberg, Theme Builder, Custom Post Types, taxonomias, campos personalizados, hooks, otimização de performance, SEO técnico, segurança e responsividade.",
      ".intro-copy p:nth-of-type(3)":
        "Minha experiência passa por portais de alta audiência, ambientes educacionais, e-commerces, intranets corporativas e plataformas públicas com alto volume de acesso.",
      ".learning-note":
        "Em paralelo, estou cursando pós-graduação em Engenharia de Software em IA Aplicada para conectar minha base web com automação, qualidade de software e novas formas de construir produtos digitais.",
      ".skills-section .section-kicker": "Stacks e Soft Skills",
      "#skills-title": "Competências técnicas e de colaboração",
      ".skill-card:nth-child(1) h3": "WordPress",
      ".skill-card:nth-child(1) p":
        "Temas, plugins, hooks, actions, filters, CPT, taxonomias, ACF, templates Twig e multisite.",
      ".skill-card:nth-child(2) h3": "Back-end",
      ".skill-card:nth-child(2) p":
        "PHP, SQL, MySQL, MariaDB, SQL Server, Docker, autenticação, segurança e integrações com APIs REST.",
      ".skill-card:nth-child(3) h3": "Front-end",
      ".skill-card:nth-child(3) p":
        "HTML5, CSS3, Sass, Bootstrap, Flexbox, Grid, JavaScript, jQuery, AJAX, React, UX/UI e responsividade.",
      ".skill-card:nth-child(4) h3": "Plataformas",
      ".skill-card:nth-child(4) p":
        "WooCommerce, Moodle, Joomla, Drupal, Magento, Laravel, Mapas Culturais, Vue.js, AWS e Azure.",
      ".skill-card:nth-child(5) h3": "Colaboração e produto",
      ".skill-card:nth-child(5) p":
        "Boa comunicação, marketing digital, trabalho em equipe e liderança de projetos.",
      ".projects-section .section-kicker": "Cases",
      "#projetos-title": "Projetos em destaque",
      ".filter-button[data-filter='all']": "Todos",
      ".filter-button[data-filter='wordpress']": "WordPress",
      ".filter-button[data-filter='laravel']": "Laravel",
      ".filter-button[data-filter='api']": "API",
      ".filter-button[data-filter='portal']": "Portais",
      ".more-projects p": "Outros projetos, manutenções e evoluções também fazem parte da caminhada.",
      ".more-projects .button": "E muito mais",
      ".experience-section .section-kicker": "Trajetória",
      "#experiencia-title": "Experiência construída em projetos reais e ambientes críticos.",
      ".timeline-item:nth-child(1) span": "2025 - atual",
      ".timeline-item:nth-child(1) p":
        "Laravel, Mapas Culturais, plugins customizados e manutenção evolutiva para fluxos públicos e avaliação.",
      ".timeline-item:nth-child(2) p":
        "WordPress, RD Station, Moodle, tema bilíngue do zero, ACF, CPTs e melhorias de UX em conversão.",
      ".timeline-item:nth-child(3) p":
        "Temas customizados, intranet com SSO Microsoft, APIs REST, CPTs, ACF e portais institucionais.",
      ".timeline-item:nth-child(4) p":
        "Portais de grande audiência, blogs e sites WordPress, WP multisites, hotsites, SEO técnico e suporte a ambientes críticos.",
      ".education-section .section-kicker": "Formação",
      "#formacao-title": "Base acadêmica e aprimoramento contínuo",
      ".education-grid article:nth-child(1) h3": "Pós-graduando em IA Aplicada",
      ".education-grid article:nth-child(1) p": "Engenharia de Software em IA Aplicada, UniPDS.",
      ".education-grid article:nth-child(2) h3": "Graduação",
      ".education-grid article:nth-child(2) p":
        "Análise e Desenvolvimento de Sistemas, Fatec e ETEP Centro Universitário.",
      ".education-grid article:nth-child(3) h3": "Técnico em Informática",
      ".education-grid article:nth-child(3) p": "Formação técnica em Informática pela ETEC Lauro Gomes.",
      ".education-grid article:nth-child(4) h3": "Cursos",
      ".education-grid article:nth-child(4) p": "PHP, Java, Itil, Desenvolvimento Web, QlikView e Flask Python",
      ".contact-section .section-kicker": "Contato",
      "#contato-title": "Vamos conversar sobre seu próximo projeto?",
      ".contact-panel > div:first-child > p:not(.section-kicker)":
        "Estou em São Paulo/SP e atuo com desenvolvimento Web: PHP, JavaScript e frameworks, WordPress, WooCommerce, Moodle, manutenção evolutiva, integrações e melhoria de performance.",
      ".site-footer p": "Daniel Silva - Desenvolvedor Web",
      ".site-footer a": "Voltar ao topo"
    },
    projects: [
      {
        meta: ["2024-2025", "Educação"],
        title: "Vencendo Concursos",
        description:
          "Landing pages em WordPress integradas ao RD Station, CPTs para notícias, cursos e conteúdos, otimização de UX, SEO, segurança com Wordfence e configuração de Moodle.",
        tags: ["WordPress", "Landing pages", "CPTs", "SEO técnico"],
        link: "Acessar projeto"
      },
      {
        meta: ["2025", "Laravel"],
        title: "Prêmio Periferia Viva 2025",
        description:
          "Plataforma construída em Laravel com base no Mapas Culturais, com customizações de fluxo, plugin para distribuição automatizada de avaliadores e melhorias de usabilidade, performance e estabilidade.",
        tags: ["Laravel", "Mapas Culturais", "Plugin"],
        link: "Acessar projeto"
      },
      {
        meta: ["2025", "Mapas Culturais"],
        title: "Periferia Viva Reformas",
        description:
          "Plataforma em Laravel baseada no Mapas Culturais para submissão e acompanhamento de propostas do programa, com fluxos administrativos, conteúdo público e suporte a regras de seleção.",
        tags: ["Laravel", "Mapas Culturais", "Fluxos públicos"],
        link: "Acessar projeto"
      },
      {
        meta: ["2024", "Bilíngue"],
        title: "Edge UOL",
        description:
          "Site institucional bilíngue em WordPress com tema criado do zero, estrutura flexbox, Custom Post Types e ACF para organizar conteúdos, soluções e páginas institucionais.",
        tags: ["Tema do zero", "ACF", "Bilíngue"],
        link: "Acessar projeto"
      },
      {
        meta: ["2021-2023", "Turismo"],
        title: "RDC Viagens",
        description:
          "Tema WordPress do zero com PHP, HTML, CSS e JavaScript, integração REST para autenticação segura, dashboard com consumo de serviços externos e melhorias de performance.",
        tags: ["Tema customizado", "API REST", "Dashboard"],
        link: "Acessar projeto"
      },
      {
        meta: ["2018-2021", "Governo"],
        title: "Portal do Governo de São Paulo",
        description:
          "Manutenção e evolução de 25 sites governamentais, hotsites de alta visibilidade e Vacinômetro com integração a API externa da Secretaria da Saúde.",
        tags: ["Alta criticidade", "API externa", "Portais públicos"],
        link: "Acessar projeto"
      },
      {
        meta: ["2013-2017", "Conteúdo"],
        title: "Blogs e Colunas do Estadão",
        description:
          "Desenvolvimento de temas WordPress e manutenção para blogs de grande audiência, com suporte a conteúdo, estabilidade operacional e evolução de templates editoriais.",
        tags: ["WordPress", "Temas", "Alta audiência"],
        link: "Acessar projeto"
      },
      {
        meta: ["WordPress", "Literatura"],
        title: "Pedro Bandeira",
        description:
          "Site WordPress com Custom Post Types e filtros para obras literárias, pensado para consulta de livros, conteúdos do autor e navegação clara por acervo.",
        tags: ["Custom Posts", "Filtros", "Acervo literário"],
        link: "Acessar projeto"
      },
      {
        meta: ["Projeto", "Impacto social"],
        title: "Cozinhas Solidárias",
        description:
          "Site estático em HTML, CSS e JavaScript puro, desenvolvido como trabalho voluntário para divulgar cozinhas solidárias. Contribuições, imprensa e conteúdo institucional.",
        tags: ["HTML", "CSS", "JavaScript", "Voluntariado"],
        link: "Acessar projeto"
      }
    ]
  },
  en: {
    lang: "en",
    title: "Daniel Silva | Web Developer",
    description:
      "Daniel Silva's portfolio: WordPress, PHP and front-end developer experienced in portals, WooCommerce, REST APIs, performance, technical SEO and CMS projects.",
    ogDescription:
      "Custom themes, plugins, WooCommerce, REST APIs, performance, security and high-traffic portals.",
    navLabel: "Main navigation",
    languageLabel: "Select language",
    menuLabel: "Open menu",
    heroStatsLabel: "Professional summary",
    avatarLabel: "Illustration of Daniel Silva",
    whatsapp:
      "https://wa.me/5511985393097?text=Hi%2C%20Daniel%21%20I%20came%20from%20your%20portfolio%20and%20would%20like%20to%20talk.",
    text: {
      ".skip-link": "Skip to content",
      ".nav-menu li:nth-child(1) a": "About",
      ".nav-menu li:nth-child(2) a": "Projects",
      ".nav-menu li:nth-child(3) a": "Experience",
      ".nav-menu li:nth-child(4) a": "Contact",
      ".hero .eyebrow": "WordPress, PHP, Laravel, applied AI and content architecture",
      "#hero-title": "Clean code, organized CMS, and WordPress that just works.",
      ".hero-lead":
        "I am Daniel Silva, a web developer with almost 14 years of experience building themes, plugins, REST API integrations, WooCommerce stores, institutional portals and digital platforms focused on performance, technical SEO and user experience. I am also pursuing a graduate degree in Software Engineering with Applied AI.",
      ".hero-actions .button-primary": "View projects",
      ".hero-actions .button-secondary": "Contact me",
      ".hero-stats div:nth-child(1) dd": "years of experience",
      ".hero-stats div:nth-child(2) dd": "government websites maintained",
      ".hero-stats div:nth-child(3) dd": "themes, plugins and WooCommerce",
      ".hero-avatar figcaption": "WordPress, PHP and well-managed coffee.",
      "#sobre .section-kicker": "Profile",
      "#sobre-title": "WordPress specialist with a product, content and operations mindset.",
      ".mini-bio":
        "Developer, teacher and father of a teenager. I believe technology should serve people and be open to anyone who wants to learn, create and use it to transform their own reality.",
      ".intro-copy p:nth-of-type(2)":
        "I work on custom theme development, Gutenberg, Theme Builder, Custom Post Types, taxonomies, custom fields, hooks, performance optimization, technical SEO, security and responsive interfaces.",
      ".intro-copy p:nth-of-type(3)":
        "My experience includes high-traffic portals, educational platforms, e-commerce projects, corporate intranets and public-sector platforms used at scale.",
      ".learning-note":
        "I am also pursuing a graduate degree in Software Engineering with Applied AI, connecting my web background with automation, software quality and new ways to build digital products.",
      ".skills-section .section-kicker": "Stacks and Soft Skills",
      "#skills-title": "Technical and collaboration skills",
      ".skill-card:nth-child(1) h3": "WordPress",
      ".skill-card:nth-child(1) p":
        "Themes, plugins, hooks, actions, filters, CPTs, taxonomies, ACF, Twig templates and multisite.",
      ".skill-card:nth-child(2) h3": "Back-end",
      ".skill-card:nth-child(2) p":
        "PHP, SQL, MySQL, MariaDB, SQL Server, Docker, authentication, security and REST API integrations.",
      ".skill-card:nth-child(3) h3": "Front-end",
      ".skill-card:nth-child(3) p":
        "HTML5, CSS3, Sass, Bootstrap, Flexbox, Grid, JavaScript, jQuery, AJAX, React, UX/UI and responsive design.",
      ".skill-card:nth-child(4) h3": "Platforms",
      ".skill-card:nth-child(4) p":
        "WooCommerce, Moodle, Joomla, Drupal, Magento, Laravel, Mapas Culturais, Vue.js, AWS and Azure.",
      ".skill-card:nth-child(5) h3": "Collaboration and product thinking",
      ".skill-card:nth-child(5) p":
        "Clear communication, digital marketing knowledge, teamwork and project leadership.",
      ".projects-section .section-kicker": "Case Studies",
      "#projetos-title": "Featured projects",
      ".filter-button[data-filter='all']": "All",
      ".filter-button[data-filter='wordpress']": "WordPress",
      ".filter-button[data-filter='laravel']": "Laravel",
      ".filter-button[data-filter='api']": "API",
      ".filter-button[data-filter='portal']": "Portals",
      ".more-projects p": "Other projects, maintenance work and ongoing improvements are also part of the journey.",
      ".more-projects .button": "And much more",
      ".experience-section .section-kicker": "Career",
      "#experiencia-title": "Experience shaped by real projects and mission-critical environments.",
      ".timeline-item:nth-child(1) span": "2025 - present",
      ".timeline-item:nth-child(1) p":
        "Laravel, Mapas Culturais, custom plugins and ongoing maintenance for public workflows and evaluation processes.",
      ".timeline-item:nth-child(2) p":
        "WordPress, RD Station, Moodle, bilingual theme development from scratch, ACF, CPTs and UX improvements focused on conversion.",
      ".timeline-item:nth-child(3) p":
        "Custom themes, Microsoft SSO intranet, REST APIs, CPTs, ACF and institutional portals.",
      ".timeline-item:nth-child(4) p":
        "High-traffic portals, WordPress blogs and websites, WP multisites, campaign sites, technical SEO and support for critical environments.",
      ".education-section .section-kicker": "Education",
      "#formacao-title": "Academic background and continuous learning",
      ".education-grid article:nth-child(1) h3": "Graduate studies in Applied AI",
      ".education-grid article:nth-child(1) p": "Software Engineering with Applied AI, UniPDS.",
      ".education-grid article:nth-child(2) h3": "Undergraduate degree",
      ".education-grid article:nth-child(2) p":
        "Systems Analysis and Development, Fatec and ETEP Centro Universitário.",
      ".education-grid article:nth-child(3) h3": "Technical degree in IT",
      ".education-grid article:nth-child(3) p": "Technical training in Information Technology at ETEC Lauro Gomes.",
      ".education-grid article:nth-child(4) h3": "Courses",
      ".education-grid article:nth-child(4) p": "PHP, Java, ITIL, Web Development, QlikView and Flask Python",
      ".contact-section .section-kicker": "Contact",
      "#contato-title": "Let's talk about your next project?",
      ".contact-panel > div:first-child > p:not(.section-kicker)":
        "I am based in São Paulo, Brazil, and work with web development: PHP, JavaScript and frameworks, WordPress, WooCommerce, Moodle, ongoing maintenance, integrations and performance optimization.",
      ".site-footer p": "Daniel Silva - Web Developer",
      ".site-footer a": "Back to top"
    },
    projects: [
      {
        meta: ["2024-2025", "Education"],
        title: "Vencendo Concursos",
        description:
          "WordPress landing pages integrated with RD Station, CPTs for news, courses and content, UX and SEO improvements, Wordfence security and Moodle setup.",
        tags: ["WordPress", "Landing pages", "CPTs", "Technical SEO"],
        link: "View project"
      },
      {
        meta: ["2025", "Laravel"],
        title: "Periferia Viva Award 2025",
        description:
          "Laravel platform based on Mapas Culturais, with custom workflows, an automated evaluator-assignment plugin and improvements to usability, performance and stability.",
        tags: ["Laravel", "Mapas Culturais", "Plugin"],
        link: "View project"
      },
      {
        meta: ["2025", "Mapas Culturais"],
        title: "Periferia Viva Reformas",
        description:
          "Laravel platform based on Mapas Culturais for submitting and tracking proposals, with administrative workflows, public content and support for selection rules.",
        tags: ["Laravel", "Mapas Culturais", "Public workflows"],
        link: "View project"
      },
      {
        meta: ["2024", "Bilingual"],
        title: "Edge UOL",
        description:
          "Bilingual institutional WordPress website with a custom theme built from scratch, flexbox layout, Custom Post Types and ACF to organize content, solutions and institutional pages.",
        tags: ["Custom theme", "ACF", "Bilingual"],
        link: "View project"
      },
      {
        meta: ["2021-2023", "Travel"],
        title: "RDC Viagens",
        description:
          "Custom WordPress theme built with PHP, HTML, CSS and JavaScript, REST integration for secure authentication, a dashboard connected to external services and performance improvements.",
        tags: ["Custom theme", "REST API", "Dashboard"],
        link: "View project"
      },
      {
        meta: ["2018-2021", "Government"],
        title: "São Paulo State Government Portal",
        description:
          "Maintenance and evolution of 25 government websites, high-visibility campaign sites and a public vaccination dashboard integrated with an external API from the Health Department.",
        tags: ["Mission-critical", "External API", "Public portals"],
        link: "View project"
      },
      {
        meta: ["2013-2017", "Content"],
        title: "Estadão Blogs and Columns",
        description:
          "WordPress theme development and maintenance for high-traffic blogs, supporting editorial operations, stability and template evolution.",
        tags: ["WordPress", "Themes", "High traffic"],
        link: "View project"
      },
      {
        meta: ["WordPress", "Literature"],
        title: "Pedro Bandeira",
        description:
          "WordPress website with Custom Post Types and filters for literary works, designed for book discovery, author content and clear archive browsing.",
        tags: ["Custom Posts", "Filters", "Literary archive"],
        link: "View project"
      },
      {
        meta: ["Project", "Social impact"],
        title: "Cozinhas Solidárias",
        description:
          "Static website built with plain HTML, CSS and JavaScript as volunteer work to promote community kitchens, donations, press coverage and institutional content.",
        tags: ["HTML", "CSS", "JavaScript", "Volunteer work"],
        link: "View project"
      }
    ]
  }
};

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

const closeMenu = () => {
  navToggle.setAttribute("aria-expanded", "false");
  navMenu.classList.remove("is-open");
  document.body.classList.remove("is-menu-open");
};

const setText = (selector, text) => {
  const element = document.querySelector(selector);

  if (element) {
    element.textContent = text;
  }
};

const setMeta = (selector, content) => {
  const element = document.querySelector(selector);

  if (element) {
    element.setAttribute("content", content);
  }
};

const applyProjects = (projects) => {
  projects.forEach((project, index) => {
    const card = projectCards[index];

    if (!card) {
      return;
    }

    card.querySelectorAll(".project-topline span").forEach((item, itemIndex) => {
      item.textContent = project.meta[itemIndex];
    });

    card.querySelector("h3").textContent = project.title;
    card.querySelector("p").textContent = project.description;
    card.querySelector(".project-link").textContent = project.link;

    card.querySelectorAll(".tag-list li").forEach((tag, tagIndex) => {
      tag.textContent = project.tags[tagIndex];
    });
  });
};

const applyLanguage = (language) => {
  const dictionary = translations[language] || translations.pt;

  document.documentElement.lang = dictionary.lang;
  document.title = dictionary.title;

  setMeta("meta[name='description']", dictionary.description);
  setMeta("meta[property='og:title']", dictionary.title);
  setMeta("meta[property='og:description']", dictionary.ogDescription);

  document.querySelector("nav").setAttribute("aria-label", dictionary.navLabel);
  document.querySelector(".language-switch").setAttribute("aria-label", dictionary.languageLabel);
  document.querySelector(".nav-toggle .sr-only").textContent = dictionary.menuLabel;
  document.querySelector(".hero-stats").setAttribute("aria-label", dictionary.heroStatsLabel);
  document.querySelector(".hero-avatar").setAttribute("aria-label", dictionary.avatarLabel);
  document.querySelector(".hero-avatar img").setAttribute("alt", dictionary.avatarLabel);
  document.querySelector(".contact-actions a[href^='https://wa.me']").setAttribute("href", dictionary.whatsapp);

  Object.entries(dictionary.text).forEach(([selector, text]) => {
    setText(selector, text);
  });

  applyProjects(dictionary.projects);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("portfolio-language", language);
};

const savedLanguage = localStorage.getItem("portfolio-language");
const initialLanguage = savedLanguage && translations[savedLanguage] ? savedLanguage : "pt";

applyLanguage(initialLanguage);
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langSwitch);
  });
});

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navMenu.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("is-menu-open", !isOpen);
});

navMenu.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeMenu();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const shouldShow = selectedFilter === "all" || categories.includes(selectedFilter);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

const animatedElements = document.querySelectorAll(".section, .project-card, .skill-card, .timeline-item");

animatedElements.forEach((element) => {
  element.setAttribute("data-animate", "");
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  animatedElements.forEach((element) => observer.observe(element));
} else {
  animatedElements.forEach((element) => element.classList.add("is-visible"));
}
