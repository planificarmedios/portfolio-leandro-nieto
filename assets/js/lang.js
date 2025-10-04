const translations = {
  en: {
    "menu.home": "Home",
    "menu.about": "About we",
    "menu.resume": "Resume",
    "menu.services": "Services",
    "menu.contact": "Contact",
    "hero.title": "Passionate about creating exceptional digital experiences",
    "hero.cta1": "View My Work",
    "hero.cta2": "Get In Touch",
    "about.title": "Get to Know Me",
    "about.subtitle": "Passionate About Creating Digital Experiences",
    "resume.title": "Resume",
    "portfolio.title": "Portfolio",
    "services.title": "Services",
    "contact.title": "Contact",
    "sidebar-design": "Rooms",
    "sidebar-animes": "Anime",
    "hero.roles": ["UI/UX Design", "Software Engineering", "Web Development", "3D Experience"],
    "hero.prefix": "",
    "hero": {"viewWork": "View My Work" },
    "hero-contact": "3D Models",
    "hero-experience": "Experience",
    "sidebar-universe": "Universe",
    "data-profession": "Software Engineer, Developer, UI/UX Designer",
    "hero-description": "We develop innovative digital experiences. We create your ideas with a difference..",
    "about-title": "We create exceptional digital experiences",
    "about-upper-degrees": "Upper-level degrees",
    "about-years-experience": "Years Experience",
    "about-client-satisfaction": "Client Satisfaction",
    "about-description1": "Bachelor's degree in Computer Science with over 20 years of experience in systems development, electronic security, and technology management.",
    "about-description2": "Verifiable experience in the integration of functional and technical solutions, with a focus on results, leadership, and the ability to adapt to dynamic environments.",
    "about-upper-degrees": "Degrees",
    "about-degrees": "Software Engineering",
    "languages-label": "Languages" ,
    "languages-value": "Spanish, English, Portuguese"
  },
  es: {
    "languages-label": "Idiomas",
    "languages-value": "Español, Inglés, Portugués",
    "about-upper-degrees": "Formación Superior",
    "about-degrees": "Licenciado y Analista en Sistemas",
    "about-description1": "Licenciado en Informática con más de 20 años de trayectoria en desarrollo de sistemas, seguridad electrónica y gestión tecnológica",
    "about-description2": "Experiencia comprobable en la integración de soluciones funcionales y técnicas, con un enfoque en resultados, liderazgo y la capacidad de adaptarse a entornos dinámicos.",
    "about-upper-degrees": "Títulos superiores",
    "about-years-experience": "Años de experiencia",
    "about-client-satisfaction": "Clientes satisfechos",
    "about-title": "Creamos experiencias digitales diferentes",
    "menu.home": "Inicio",
    "menu.about": "Sobre nosotros",
    "menu.resume": "Currículum",
    "menu.services": "Servicios",
    "menu.contact": "Contacto",
    "hero.title": "Apasionado por crear experiencias digitales diferentes",
    "hero.cta1": "Ver mi trabajo",
    "hero.cta2": "Contáctame",
    "sidebar-design": "Habitaciones",
    "sidebar-animes": "Anime",
    "sidebar-universe": "Universo",
    "about.title": "Conóceme",
    "about.subtitle": "Apasionado por crear experiencias digitales",
    "resume.title": "Currículum",
    "portfolio.title": "Portafolio",
    "services.title": "Servicios",
    "contact.title": "Contacto",
    "hero.roles": ["Diseños UI/UX", "Ingeniería en Sistemas", "Desarrollos Web", "Experiencias 3D"],
    "hero.prefix": "",
    "hero-contact": "Modelos 3D",
    "hero-experience": "Trayectoria",
    "data-profession": "Ingeniero en Sistemas, Desarrollador, Diseñador UI/UX",
    "hero": {"viewWork": "Ver mi trabajo"},
    "hero-description": "Desarrollamos experiencias digitales con innovación. Creamos tus ideas con diferencia."
  }
};

let typedInstance = null;

function initTyped(lang) {
  const roles = translations[lang]["hero.roles"];
  const prefix = translations[lang]["hero.prefix"];
  
  // Cambiar el texto del prefijo
  document.querySelector(".lead.mt-4").firstChild.textContent = prefix + " ";

  // Destruir instancia previa si existe
  if (typedInstance) {
    typedInstance.destroy();
  }

  // Inicializar Typed.js
  typedInstance = new Typed("#typed-role", {
    strings: roles,
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: true,
    cursorChar: "|"
  });
}


// Función para aplicar traducciones
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("lang", lang);
}

// Función para actualizar la bandera del botón
function updateFlag(lang) {
  const flagSpan = document.getElementById("lang-flag");
  if (!flagSpan) return;

  if (lang === "es") {
    flagSpan.style.backgroundImage = "url('https://flagcdn.com/w40/ar.png')";
  } else {
    flagSpan.style.backgroundImage = "url('https://flagcdn.com/w40/us.png')";
  }
}

// Inicialización al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  let currentLang = localStorage.getItem("lang") || "en";
  setLanguage(currentLang);
  updateFlag(currentLang);
  initTyped(currentLang);

  document.getElementById("language-toggle").addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    setLanguage(currentLang);
    updateFlag(currentLang);
    initTyped(currentLang);
  });
});
