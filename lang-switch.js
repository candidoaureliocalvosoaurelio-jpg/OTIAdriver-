// /assets/lang-switch.js
(function () {
  const DICTS = {
    pt: {
      nav_home: "Início",
      nav_about: "Sobre",
      nav_contact: "Contato",
      hero_title: "Seu copiloto de conhecimento na estrada",
      hero_sub: "A OTIAdriver impulsiona sua jornada com tecnologia e aprendizado prático. Conteúdos curtos, pesquisa por voz e visão, além de uma biblioteca sempre atualizada.",
      cta_start: "Começar agora",
      cta_talk: "Falar com a equipe",
      section_ai: "IA de apoio",
      section_ai_desc: "Respostas rápidas sobre símbolos e alertas.",
      section_learn: "Aprendizado",
      section_learn_desc: "Módulos curtos e objetivos para o dia a dia.",
      section_library: "Biblioteca",
      section_library_desc: "Conteúdo confiável e sempre disponível."
    },
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_contact: "Contact",
      hero_title: "Your knowledge copilot on the road",
      hero_sub: "OTIAdriver powers your journey with practical learning and technology. Short content, voice & vision search, plus an always-updated library.",
      cta_start: "Get started",
      cta_talk: "Talk to the team",
      section_ai: "Assistive AI",
      section_ai_desc: "Quick answers about dashboard symbols and alerts.",
      section_learn: "Learning",
      section_learn_desc: "Short, objective modules for everyday use.",
      section_library: "Library",
      section_library_desc: "Reliable content, always available."
    },
    es: {
      nav_home: "Inicio",
      nav_about: "Sobre",
      nav_contact: "Contacto",
      hero_title: "Tu copiloto de conocimiento en la carretera",
      hero_sub: "OTIAdriver impulsa tu viaje con tecnología y aprendizaje práctico. Contenidos breves, búsqueda por voz y visión, y una biblioteca siempre actualizada.",
      cta_start: "Empezar ahora",
      cta_talk: "Hablar con el equipo",
      section_ai: "IA de apoyo",
      section_ai_desc: "Respuestas rápidas sobre símbolos y alertas.",
      section_learn: "Aprendizaje",
      section_learn_desc: "Módulos cortos y objetivos para el día a día.",
      section_library: "Biblioteca",
      section_library_desc: "Contenido confiable y siempre disponible."
    },
    zh: {
      nav_home: "首页",
      nav_about: "关于",
      nav_contact: "联系",
      hero_title: "您在路上的知识副驾驶",
      hero_sub: "OTIAdriver 以实用学习与技术助力您的旅程。简短内容、语音与视觉搜索，以及持续更新的资料库。",
      cta_start: "立即开始",
      cta_talk: "联系团队",
      section_ai: "辅助 AI",
      section_ai_desc: "关于仪表符号与警报的快速解答。",
      section_learn: "学习",
      section_learn_desc: "简短且实用的日常模块。",
      section_library: "资料库",
      section_library_desc: "可靠内容，随时可用。"
    }
  };

  // Utilidades
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function getLangFromUrl() {
    const p = new URLSearchParams(location.search);
    return p.get("lang");
  }
  function setUrlLang(lang) {
    const url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState({}, "", url.toString());
  }
  function saveLang(lang) { try { localStorage.setItem("lang", lang); } catch (_) {} }
  function loadLang() { return getLangFromUrl() || (localStorage.getItem("lang") || "pt"); }

  // Detectar página atual (home / about / contact)
  function currentPage() {
    const p = location.pathname.replace(/\/+$/, "");
    if (p.endsWith("/sobre") || p.endsWith("/about")) return "about";
    if (p.endsWith("/contato") || p.endsWith("/contact") || p.endsWith("/contacto")) return "contact";
    return "home";
  }

  // Mapa de rotas por idioma (apenas para páginas de conteúdo separado)
  const ROUTES = {
    about: { pt: "/sobre", en: "/en/about", es: "/es/sobre", zh: "/sobre" },
    contact:{ pt: "/contato", en: "/en/contact", es: "/es/contacto", zh: "/contato" }
  };

  function applyDict(lang) {
    const dict = DICTS[lang] || DICTS.pt;
    $$("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
  }

  function syncUI(lang) {
    $$(".flags-bar .flag").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    const sel = $("#lang-switch");
    if (sel) sel.value = lang;
  }

  function navigateIfNeeded(lang) {
    const page = currentPage();
    if (page === "home") return; // home é traduzida via JS
    const target = ROUTES[page] && ROUTES[page][lang];
    if (target && location.pathname !== target) {
      location.href = target + location.search; // mantém ?lang
    }
  }

  function setLang(lang) {
    saveLang(lang);
    setUrlLang(lang);
    applyDict(lang);
    syncUI(lang);
    navigateIfNeeded(lang);
  }

  // Eventos: bandeiras
  $$(".flags-bar .flag").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  // Evento: <select>
  const sel = $("#lang-switch");
  if (sel) sel.addEventListener("change", () => setLang(sel.value));

  // Inicialização
  setLang(loadLang());
})();
