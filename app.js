// Marca el documento como compatible con interacciones JavaScript.
document.documentElement.classList.add("has-js");

// Actualiza esta configuración para ajustar la información y servicios de cada profesional.
const professionals = {
  lissette: {
    name: "Lissette Manríquez",
    role: "Rehabilitación musculoesquelética",
    tags: ["Deportivo", "Dolor crónico", "Telemedicina"],
    bio:
      "Me dedico a la rehabilitación y prevención de lesiones musculoesqueléticas, promoviendo el ejercicio terapéutico personalizado con seguimiento digital y acompañamiento constante.",
    photoClass: "booking__profile-photo--lissette",
    avatarClass: "booking-card__avatar--lissette",
    sessions: [
      { title: "1 sesión de kinesiología", subtitle: "45 minutos", price: "$25.000" },
      { title: "Recovery", subtitle: "Sesión 55 minutos", price: "$35.000" },
      { title: "Plan semanal 3 sesiones", subtitle: "Duración 1 hora", price: "$75.000" },
      { title: "Evaluación kinesiológica", subtitle: "Consulta inicial", price: "$15.000" }
    ]
  },
  javier: {
    name: "Javier Nuñez",
    role: "Kinesiología deportiva",
    tags: ["Alto rendimiento", "Readaptación", "Prevención"],
    bio:
      "Especialista en retorno deportivo post lesión. Planifico protocolos de fuerza, control motor y movilidad para deportistas que buscan volver a competir con seguridad.",
    photoClass: "booking__profile-photo--javier",
    avatarClass: "booking-card__avatar--javier",
    sessions: [
      { title: "Sesión performance", subtitle: "60 minutos", price: "$32.000" },
      { title: "Plan retorno competitivo", subtitle: "3 sesiones + evaluación", price: "$92.000" },
      { title: "Evaluación funcional", subtitle: "Testing de fuerza y movilidad", price: "$22.000" },
      { title: "Sesión de descarga", subtitle: "45 minutos", price: "$26.000" }
    ]
  },
  martin: {
    name: "Martín Díaz",
    role: "Rehabilitación respiratoria",
    tags: ["Post COVID", "EPOC", "Telemonitoreo"],
    bio:
      "Trabajo junto a pacientes con patologías respiratorias para mejorar su capacidad pulmonar mediante técnicas de respiración, ejercicio aeróbico y seguimiento remoto.",
    photoClass: "booking__profile-photo--martin",
    avatarClass: "booking-card__avatar--martin",
    sessions: [
      { title: "Sesión respiratoria", subtitle: "45 minutos", price: "$24.000" },
      { title: "Programa pulmonar", subtitle: "4 sesiones + control", price: "$89.000" },
      { title: "Capacitación domiciliaria", subtitle: "1 hora", price: "$40.000" },
      { title: "Evaluación inicial", subtitle: "Espirometría + plan", price: "$18.000" }
    ]
  },
  ignacio: {
    name: "Ignacio Quintana",
    role: "Entrenamiento funcional",
    tags: ["Fuerza", "Estabilidad", "Prevención"],
    bio:
      "Diseño sesiones dinámicas enfocadas en fuerza funcional, estabilidad y control motor para que mejores tu rendimiento y evites recaídas en tus actividades favoritas.",
    photoClass: "booking__profile-photo--ignacio",
    avatarClass: "booking-card__avatar--ignacio",
    sessions: [
      { title: "Sesión funcional", subtitle: "50 minutos", price: "$28.000" },
      { title: "Plan mensual", subtitle: "8 sesiones guiadas", price: "$150.000" },
      { title: "Entrenamiento dúo", subtitle: "2 personas", price: "$42.000" },
      { title: "Sesión recovery", subtitle: "45 minutos", price: "$24.000" }
    ]
  },
  isidora: {
    name: "Isidora Martínez",
    role: "Suelo pélvico y maternidad",
    tags: ["Postparto", "Respiración", "Pilates"],
    bio:
      "Acompaño procesos de embarazo y postparto con foco en el fortalecimiento del suelo pélvico, control de la respiración y activación del core para recuperar confianza corporal.",
    photoClass: "booking__profile-photo--isidora",
    avatarClass: "booking-card__avatar--isidora",
    sessions: [
      { title: "Evaluación obstétrica", subtitle: "Primera visita", price: "$27.000" },
      { title: "Sesión suelo pélvico", subtitle: "50 minutos", price: "$30.000" },
      { title: "Programa postparto", subtitle: "6 sesiones", price: "$162.000" },
      { title: "Pilates prenatal", subtitle: "Clase personalizada", price: "$28.000" }
    ]
  }
};

const professionalKeys = Object.keys(professionals);

function getCurrentPage() {
  const { page } = document.body?.dataset ?? {};
  return page ?? "";
}

function initNavigationHighlight() {
  const currentPage = getCurrentPage();
  const navLinks = document.querySelectorAll(".site-nav [data-nav-target]");

  navLinks.forEach((link) => {
    const { navTarget } = link.dataset;
    if (!navTarget) return;

    const isActive = navTarget === currentPage;
    link.classList.toggle("is-active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

function initSmoothScroll() {
  const samePageLinks = document.querySelectorAll('a[href^="#"]');

  samePageLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.length <= 1) return;

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    link.addEventListener("click", (event) => {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function initHomePage() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    hero.classList.add("is-ready");
    return;
  }

  window.requestAnimationFrame(() => {
    hero.classList.add("is-ready");
  });
}

function getPriceValue(card) {
  const priceElement = card.querySelector(".value-card__price");
  if (!priceElement) return 0;
  const digits = priceElement.textContent.replace(/[^0-9]/g, "");
  return Number.parseInt(digits, 10) || 0;
}

function initValuesPage() {
  const grid = document.querySelector(".values__grid");
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll(".value-card"));
  const range = document.querySelector(".values__range");
  if (range) {
    range.textContent = `Mostrando ${cards.length} servicios`;
  }

  const sortButton = document.querySelector(".values__sort");
  if (!sortButton) return;

  const defaultOrder = cards.slice();
  let sortAscending = false;

  sortButton.setAttribute("aria-pressed", "false");

  sortButton.addEventListener("click", () => {
    sortAscending = !sortAscending;
    sortButton.setAttribute("aria-pressed", sortAscending ? "true" : "false");

    const nextCards = sortAscending
      ? [...cards].sort((a, b) => getPriceValue(a) - getPriceValue(b))
      : defaultOrder;

    grid.innerHTML = "";
    nextCards.forEach((card) => grid.appendChild(card));

    sortButton.textContent = sortAscending ? "Precio: menor a mayor" : "Orden predeterminada";
  });
}

function initAboutPage() {
  const teamCards = document.querySelectorAll(".team-card");
  if (!teamCards.length) return;

  const setActiveCard = (card) => {
    teamCards.forEach((item) => {
      item.classList.toggle("is-active", item === card);
    });
  };

  teamCards.forEach((card) => {
    ["mouseenter", "focusin", "click"].forEach((eventName) => {
      card.addEventListener(eventName, () => setActiveCard(card));
    });
  });

  setActiveCard(teamCards[0]);
}

function createProfessionalButton(key, data, isActive = false) {
  const listItem = document.createElement("li");

  const button = document.createElement("button");
  button.className = "booking-card";
  if (isActive) {
    button.classList.add("is-active");
  }
  button.type = "button";
  button.dataset.professional = key;
  button.setAttribute("role", "tab");
  button.setAttribute("aria-selected", isActive ? "true" : "false");

  const avatar = document.createElement("span");
  avatar.className = "booking-card__avatar";
  if (data.avatarClass) {
    avatar.classList.add(data.avatarClass);
  }
  avatar.setAttribute("aria-hidden", "true");

  const info = document.createElement("span");
  info.className = "booking-card__info";

  const name = document.createElement("strong");
  name.textContent = data.name;

  const specialty = document.createElement("span");
  specialty.textContent = data.role;

  info.append(name, specialty);
  button.append(avatar, info);
  listItem.appendChild(button);

  return { listItem, button };
}

function createSessionCard(session) {
  const article = document.createElement("article");
  article.className = "session-card session-card--dynamic";

  const info = document.createElement("div");
  info.className = "session-card__info";
  const title = document.createElement("h4");
  title.textContent = session.title;
  const subtitle = document.createElement("span");
  subtitle.textContent = session.subtitle;
  info.append(title, subtitle);

  const price = document.createElement("strong");
  price.className = "session-card__price";
  price.textContent = session.price;

  const button = document.createElement("button");
  button.className = "session-card__action";
  button.type = "button";
  button.textContent = "Ver horarios";
  button.addEventListener("click", () => {
    const toast = document.querySelector(".booking__toast");
    if (!toast) return;
    toast.textContent = `Te mostraremos los horarios disponibles para ${session.title}.`;
    toast.classList.add("is-visible");
    setTimeout(() => toast.classList.remove("is-visible"), 2600);
  });

  article.append(info, price, button);
  return article;
}

function updateProfile(key) {
  const data = professionals[key];
  if (!data) return;

  const photo = document.querySelector(".booking__profile-photo");
  const name = document.querySelector("[data-profile-name]");
  const role = document.querySelector("[data-profile-role]");
  const bio = document.querySelector("[data-profile-bio]");
  const tagsWrapper = document.querySelector("[data-profile-tags]");
  const sessionGrid = document.querySelector("[data-session-grid]");

  if (photo) {
    professionalKeys.forEach((slug) => {
      photo.classList.remove(professionals[slug].photoClass);
    });
    photo.classList.add(data.photoClass);
  }

  if (name) name.textContent = data.name;
  if (role) role.textContent = data.role;
  if (bio) bio.textContent = data.bio;

  if (tagsWrapper) {
    tagsWrapper.innerHTML = "";
    data.tags.forEach((tag) => {
      const chip = document.createElement("span");
      chip.textContent = tag;
      tagsWrapper.appendChild(chip);
    });
  }

  if (sessionGrid) {
    sessionGrid.innerHTML = "";
    data.sessions.forEach((session) => {
      sessionGrid.appendChild(createSessionCard(session));
    });
  }
}

function initBookingPage() {
  const bookingRoot = document.querySelector(".booking");
  if (!bookingRoot) return;

  const list = bookingRoot.querySelector("[data-professional-list]");
  let buttons = [];

  if (list) {
    list.innerHTML = "";
    const fragment = document.createDocumentFragment();

    professionalKeys.forEach((key, index) => {
      const { listItem, button } = createProfessionalButton(key, professionals[key], index === 0);
      fragment.appendChild(listItem);
      buttons.push(button);
    });

    list.appendChild(fragment);
  } else {
    buttons = Array.from(document.querySelectorAll("[data-professional]"));
  }

  if (!buttons.length) return;

  const existingToast = bookingRoot.querySelector(".booking__toast");
  const toast = existingToast || document.createElement("div");
  toast.className = "booking__toast";
  toast.setAttribute("role", "status");
  if (!existingToast) {
    bookingRoot.appendChild(toast);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.professional;
      if (!key) return;

      buttons.forEach((other) => {
        other.classList.remove("is-active");
        other.setAttribute("aria-selected", "false");
      });

      button.classList.add("is-active");
      button.setAttribute("aria-selected", "true");

      updateProfile(key);
    });
  });

  const defaultButton = buttons.find((btn) => btn.classList.contains("is-active")) || buttons[0];
  if (defaultButton) {
    updateProfile(defaultButton.dataset.professional);
  }
}

const pageInitializers = {
  home: initHomePage,
  valores: initValuesPage,
  quienes: initAboutPage,
  agendar: initBookingPage
};

window.addEventListener("DOMContentLoaded", () => {
  initNavigationHighlight();
  initSmoothScroll();

  const currentPage = getCurrentPage();
  const initializer = pageInitializers[currentPage];
  if (typeof initializer === "function") {
    initializer();
  }
});

window.addEventListener("hashchange", initNavigationHighlight);