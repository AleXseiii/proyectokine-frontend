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

// Actualiza este listado para modificar la ficha que se muestra en la pestaña Horarios (nombre, servicio base y valores).
const scheduleProfessionals = [
  {
    id: "lissette",
    name: "Lissette Manríquez",
    role: "Kinesióloga rehabilitadora",
    service: "Sesión de kinesiología integral",
    photoClass: "schedule-profile__photo--lissette",
    modality: "Presencial",
    duration: "45 minutos",
    price: "$35.000 CLP"
  },
  {
    id: "javier",
    name: "Javier Nuñez",
    role: "Kinesiología deportiva",
    service: "Plan de retorno deportivo",
    photoClass: "schedule-profile__photo--javier",
    modality: "Presencial",
    duration: "60 minutos",
    price: "$32.000 CLP"
  },
  {
    id: "martin",
    name: "Martín Díaz",
    role: "Rehabilitación respiratoria",
    service: "Programa de fortalecimiento respiratorio",
    photoClass: "schedule-profile__photo--martin",
    modality: "Teleconsulta y presencial",
    duration: "45 minutos",
    price: "$24.000 CLP"
  },
  {
    id: "ignacio",
    name: "Ignacio Quintana",
    role: "Entrenamiento funcional",
    service: "Sesión de entrenamiento funcional",
    photoClass: "schedule-profile__photo--ignacio",
    modality: "Presencial",
    duration: "50 minutos",
    price: "$28.000 CLP"
  },
  {
    id: "isidora",
    name: "Isidora Martínez",
    role: "Suelo pélvico y maternidad",
    service: "Sesión de cuidado perinatal",
    photoClass: "schedule-profile__photo--isidora",
    modality: "Presencial",
    duration: "50 minutos",
    price: "$30.000 CLP"
  }
];

const scheduleProfessionalMap = scheduleProfessionals.reduce((acc, professional) => {
  acc[professional.id] = professional;
  return acc;
}, {});

// Ajusta el porcentaje de días que se bloquean dinámicamente cuando no hay información explícita.
// Usa valores entre 0 y 1. Ejemplo: 0.25 equivale a un 25% de días bloqueados.
const RANDOM_BLOCK_RATE = 0;
// Ajusta el rango de variación del porcentaje anterior por cada profesional y semana.
const RANDOM_BLOCK_VARIANCE = 0.05;

// Define los tiempos de animación principales del carrusel y los desplegables.
const SLIDE_DURATION = 240; // ms
const ACCORDION_DURATION = 200; // ms
const BOUNCE_DURATION = 220; // ms

// Define la distancia máxima del efecto de rebote al intentar retroceder la semana bloqueada.
const BOUNCE_DISTANCE_PX = 14;

// Controla la sensibilidad del gesto de swipe en dispositivos táctiles.
const SWIPE_THRESHOLD_PX = 50;

// Ajusta este valor para definir hasta qué hora se considera "mañana" en la separación de bloques.
const MORNING_END_HOUR = 12;

// Configura los bloques base por día de la semana (1 = lunes, 7 = domingo).
// Ajusta estos arreglos para modificar los horarios recurrentes de cada kinesiólogo.
const weeklyAvailabilityTemplate = {
  1: {
    lissette: ["09:00", "10:30", "11:30", "16:30"],
    javier: ["08:30", "09:30", "15:30"],
    martin: ["10:00", "12:00"],
    ignacio: ["09:30", "18:00"],
    isidora: ["11:00", "12:00", "17:30"]
  },
  2: {
    lissette: ["09:30", "11:00", "17:00"],
    javier: ["10:00", "11:30", "16:00"],
    martin: ["09:00", "10:30", "18:00"],
    ignacio: ["08:30", "09:30", "11:30"],
    isidora: ["12:00", "13:00", "19:00"]
  },
  3: {
    lissette: ["09:00", "10:00", "11:30", "19:00"],
    javier: ["09:30", "11:00", "17:30"],
    martin: ["08:30", "09:30", "11:30"],
    ignacio: ["10:00", "12:30", "18:30"],
    isidora: ["10:30", "11:30", "17:00"]
  },
  4: {
    lissette: ["09:30", "10:30", "15:30"],
    javier: ["08:00", "09:00", "12:30", "16:30"],
    martin: ["09:30", "11:30", "16:30"],
    ignacio: ["09:00", "10:00", "11:00", "19:00"],
    isidora: ["11:00", "12:30", "18:00"]
  },
  5: {
    lissette: ["09:00", "11:30", "12:30"],
    javier: ["09:30", "10:30", "11:30"],
    martin: ["09:30", "10:30", "12:30"],
    ignacio: ["09:00", "10:00", "14:00"],
    isidora: ["09:30", "11:00", "16:30"]
  },
  6: {
    lissette: ["09:30", "10:30"],
    javier: ["09:00", "10:00"],
    martin: [],
    ignacio: ["09:00", "11:00"],
    isidora: []
  },
  7: {
    lissette: [],
    javier: [],
    martin: [],
    ignacio: [],
    isidora: []
  }
};

// Usa este objeto para definir feriados, sobrecargas o bloqueos puntuales (formato AAAA-MM-DD).
const scheduleAvailabilityOverrides = {
  "2025-10-21": {
    lissette: ["09:00", "10:30", "11:30"],
    javier: ["15:00", "16:30"],
    martin: [],
    ignacio: ["09:30", "11:30", "17:30"],
    isidora: ["11:00", "12:00"]
  },
  "2025-10-22": {
    lissette: ["09:30", "11:30", "18:30"],
    javier: [],
    martin: ["09:00", "10:30"],
    ignacio: ["10:00", "12:00"],
    isidora: []
  },
  "2025-10-23": {
    lissette: ["10:00", "11:30", "19:00"],
    javier: ["09:00", "11:00", "16:30"],
    martin: ["08:30", "09:30"],
    ignacio: [],
    isidora: ["11:00", "13:00"]
  },
  "2025-10-24": {
    lissette: ["09:30", "10:30"],
    javier: ["09:30", "10:30"],
    martin: ["09:30", "10:30"],
    ignacio: ["09:00", "11:00"],
    isidora: ["09:30", "11:30", "16:30"]
  },
  "2025-10-25": {
    lissette: [],
    javier: [],
    martin: [],
    ignacio: ["09:00"],
    isidora: []
  }
  // Añade más fechas específicas según tu planificación o conecta aquí la API del backend.
};


const weekAvailabilityCache = new Map();

function seededRandom(seed) {
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) | 0;
  }
  const result = Math.abs(Math.sin(hash) * 10000);
  return result - Math.floor(result);
}

function getDynamicBlockRate(weekStart, professionalId) {
  const weekKey = formatDateKey(weekStart);
  const variation = (seededRandom(`${professionalId}:${weekKey}`) * 2 - 1) * RANDOM_BLOCK_VARIANCE;
  const rate = RANDOM_BLOCK_RATE + variation;
  return Math.min(1, Math.max(0, rate));
}

function shouldBlockByAssumption(weekStart, dateKey, professionalId) {
  const threshold = getDynamicBlockRate(weekStart, professionalId);
  return seededRandom(`${professionalId}:${dateKey}`) < threshold;
}

function applyDynamicAvailability(availability, weekStart) {
  Object.entries(availability).forEach(([dateKey, dayAvailability]) => {
    scheduleProfessionals.forEach((professional) => {
      const override = scheduleAvailabilityOverrides[dateKey]?.[professional.id];
      if (override !== undefined) return;

      const slots = dayAvailability[professional.id];
      if (!Array.isArray(slots) || !slots.length) return;

      if (shouldBlockByAssumption(weekStart, dateKey, professional.id)) {
        dayAvailability[professional.id] = [];
      }
    });
  });
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDateKey(key) {
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function capitalize(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function getWeekStart(date) {
  const base = new Date(date);
  base.setHours(0, 0, 0, 0);
  const weekday = (base.getDay() + 6) % 7; // Lunes = 0
  base.setDate(base.getDate() - weekday);
  return base;
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function getWeekAvailability(weekStart) {
  const cacheKey = formatDateKey(weekStart);
  if (weekAvailabilityCache.has(cacheKey)) {
    return weekAvailabilityCache.get(cacheKey);
  }

  const availability = {};

  for (let offset = 0; offset < 7; offset += 1) {
    const currentDate = addDays(weekStart, offset);
    const dateKey = formatDateKey(currentDate);
    const weekday = ((currentDate.getDay() + 6) % 7) + 1;
    const template = weeklyAvailabilityTemplate[weekday] ?? {};

    availability[dateKey] = {};
    scheduleProfessionals.forEach((professional) => {
      const baseSlots = template[professional.id];
      availability[dateKey][professional.id] = Array.isArray(baseSlots) ? [...baseSlots] : [];
    });

    const overrides = scheduleAvailabilityOverrides[dateKey];
    if (overrides) {
      scheduleProfessionals.forEach((professional) => {
        const customSlots = overrides[professional.id];
        if (Array.isArray(customSlots)) {
          availability[dateKey][professional.id] = [...customSlots];
        } else if (customSlots === null) {
          availability[dateKey][professional.id] = [];
        }
      });
    }
  }

  applyDynamicAvailability(availability, weekStart);

  weekAvailabilityCache.set(cacheKey, availability);
  return availability;
}

function formatWeekLabel(weekStart) {
  const weekEnd = addDays(weekStart, 6);
  const sameMonth = weekStart.getMonth() === weekEnd.getMonth();
  const sameYear = weekStart.getFullYear() === weekEnd.getFullYear();

  if (sameMonth && sameYear) {
    const monthLabel = capitalize(
      weekEnd.toLocaleDateString("es-CL", { month: "long", year: "numeric" })
    );
    return `${weekStart.getDate()} - ${weekEnd.getDate()} de ${monthLabel}`;
  }

  const startLabel = capitalize(
    weekStart.toLocaleDateString("es-CL", {
      day: "numeric",
      month: "long",
      year: sameYear ? undefined : "numeric"
    })
  );

  const endLabel = capitalize(
    weekEnd.toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" })
  );

  return `${startLabel} - ${endLabel}`;
}

function formatDayLabel(dateKey) {
  const date = parseDateKey(dateKey);
  return capitalize(
    date.toLocaleDateString("es-CL", { weekday: "long", day: "numeric", month: "long" })
  );
}

// Separa los bloques según el umbral definido en MORNING_END_HOUR.
function splitSlotsByPeriod(slots) {
  const buckets = {
    morning: [],
    afternoon: []
  };

  slots.forEach((slot) => {
    const [hours] = slot.split(":");
    const numericHour = Number.parseInt(hours, 10);
    if (Number.isNaN(numericHour)) return;

    if (numericHour < MORNING_END_HOUR) {
      buckets.morning.push(slot);
    } else {
      buckets.afternoon.push(slot);
    }
  });

  return buckets;
}

function formatSelectionLabel(dateKey, time) {
  if (!dateKey || !time) return "Ninguna hora seleccionada";

  const date = parseDateKey(dateKey);
  const formattedDate = date.toLocaleDateString("es-CL", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
  return `${capitalize(formattedDate)} • ${time} hrs`;
}


function initSchedulePage() {
  const scheduleRoot = document.querySelector(".schedule");
  if (!scheduleRoot) return;

   scheduleRoot.style.setProperty("--schedule-slide-duration", `${SLIDE_DURATION}ms`);
  scheduleRoot.style.setProperty("--schedule-accordion-duration", `${ACCORDION_DURATION}ms`);
  scheduleRoot.style.setProperty("--schedule-bounce-duration", `${BOUNCE_DURATION}ms`);
  scheduleRoot.style.setProperty("--schedule-bounce-distance", `${BOUNCE_DISTANCE_PX}px`);

  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  
  const professionalSelect = scheduleRoot.querySelector("[data-schedule-professional]");
  const weekLabel = scheduleRoot.querySelector("[data-schedule-week-label]");
  const weekContainer = scheduleRoot.querySelector("[data-schedule-week]");
  const slotsPanel = scheduleRoot.querySelector("[data-schedule-slots]");
  const slotDayLabel = scheduleRoot.querySelector("[data-schedule-day-label]");
  const selectionLabel = scheduleRoot.querySelector("[data-schedule-selection-label]");
  const confirmButton = scheduleRoot.querySelector("[data-schedule-confirm]");
  const photo = scheduleRoot.querySelector("[data-schedule-photo]");
  const nameElement = scheduleRoot.querySelector("[data-schedule-name]");
  const roleElement = scheduleRoot.querySelector("[data-schedule-role]");
  const modalityElement = scheduleRoot.querySelector("[data-schedule-modality]");
  const durationElement = scheduleRoot.querySelector("[data-schedule-duration]");
  const priceElement = scheduleRoot.querySelector("[data-schedule-price]");
  const serviceElement = scheduleRoot.querySelector("[data-schedule-service]");
  const selectionContainer = scheduleRoot.querySelector("[data-schedule-selection]");
  const checkoutSection = scheduleRoot.querySelector("[data-schedule-checkout]");
  const checkoutSelectionLabel = scheduleRoot.querySelector("[data-checkout-selection]");
  const checkoutService = scheduleRoot.querySelector("[data-checkout-service]");
  const checkoutModality = scheduleRoot.querySelector("[data-checkout-modality]");
  const checkoutDuration = scheduleRoot.querySelector("[data-checkout-duration]");
  const checkoutPrice = scheduleRoot.querySelector("[data-checkout-price]");
  const checkoutProfessionalName = scheduleRoot.querySelector("[data-checkout-name]");
  const checkoutProfessionalRole = scheduleRoot.querySelector("[data-checkout-role]");
  const checkoutBackButton = scheduleRoot.querySelector("[data-checkout-back]");
  const checkoutPhoto = scheduleRoot.querySelector("[data-checkout-photo]");
  const prevButton = scheduleRoot.querySelector("[data-schedule-prev]");
  const nextButton = scheduleRoot.querySelector("[data-schedule-next]");
  const emptyMessage = scheduleRoot.querySelector("[data-schedule-empty]");

  const slotGroups = Array.from(scheduleRoot.querySelectorAll("[data-slot-group]"));
  const slotContainers = slotGroups.reduce((acc, group) => {
    const period = group.dataset.slotGroup;
    const list = group.querySelector("[data-slot-period]");
    if (period && list) {
      acc[period] = { group, list };
    }
    return acc;
  }, {});

  if (slotsPanel) {
    slotsPanel.hidden = false;
    slotsPanel.dataset.state = "closed";
    slotsPanel.style.setProperty("--schedule-slots-height", "0px");
    slotsPanel.setAttribute("aria-hidden", "true");
  }

  if (weekContainer) {
    weekContainer.setAttribute("aria-live", "polite");
    weekContainer.setAttribute("aria-atomic", "true");
    weekContainer.dataset.dragging = "false";
    weekContainer.style.setProperty("--schedule-drag-offset", "0px");
  }

  if (weekLabel) {
    weekLabel.setAttribute("aria-live", "polite");
    weekLabel.setAttribute("aria-atomic", "true");
  }

  const params = new URLSearchParams(window.location.search);
  const requestedProfessional = params.get("professional");
  const requestedService = params.get("service");
  const requestedDuration = params.get("duration");
  const requestedPrice = params.get("price");

  const initialProfessional = scheduleProfessionalMap[requestedProfessional]
    ? requestedProfessional
    : scheduleProfessionals[0]?.id ?? "";

  const initialSession = {
    title: requestedService ?? null,
    duration: requestedDuration ?? null,
    price: requestedPrice ?? null
  };
  const hasSessionInfo = Boolean(
    initialSession.title || initialSession.duration || initialSession.price
  );

  const now = new Date();
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);
  const todayKey = formatDateKey(now);

  const state = {
    weekStart: getWeekStart(now),
    minWeekStart: getWeekStart(now),
    professionalId: initialProfessional,
    dateKey: null,
    time: null,
    availability: {},
    session: hasSessionInfo ? initialSession : null,
    todayKey,
    todayStart,
    transitionDirection: 0,
    motionDisabled: reduceMotionQuery.matches
  };

  const handleMotionPreferenceChange = (event) => {
    state.motionDisabled = event.matches;
    scheduleRoot.classList.toggle("schedule--reduce-motion", state.motionDisabled);
  };

  scheduleRoot.classList.toggle("schedule--reduce-motion", state.motionDisabled);

  if (typeof reduceMotionQuery.addEventListener === "function") {
    reduceMotionQuery.addEventListener("change", handleMotionPreferenceChange);
  } else if (typeof reduceMotionQuery.addListener === "function") {
    reduceMotionQuery.addListener(handleMotionPreferenceChange);
  }

  const pointerState = {
    active: false,
    startX: 0,
    lastX: 0,
    pointerId: null
  };

  function getVisibleSlots(dateKey, slots) {
    if (!Array.isArray(slots)) return [];
    const date = parseDateKey(dateKey);
    if (!date) return [];

    if (dateKey === state.todayKey) {
      const current = new Date();
      const currentMinutes = current.getHours() * 60 + current.getMinutes();
      return slots.filter((slot) => {
        const [hours, minutes = "0"] = slot.split(":");
        const slotMinutes = Number.parseInt(hours, 10) * 60 + Number.parseInt(minutes, 10);
        return slotMinutes > currentMinutes;
      });
    }

    if (date.getTime() < state.todayStart.getTime()) {
      return [];
    }

    return [...slots];
  }

  function updateWeekNavState() {
    if (prevButton) {
      const atMinimum = state.weekStart.getTime() <= state.minWeekStart.getTime();
      prevButton.disabled = atMinimum;
      prevButton.setAttribute("aria-disabled", atMinimum ? "true" : "false");
    }
  }

  function applyWeekTransition(direction) {
    if (!weekContainer || state.motionDisabled || !direction) return;
    delete weekContainer.dataset.transition;
    void weekContainer.offsetHeight;
    weekContainer.dataset.transition = direction > 0 ? "forward" : "backward";
  }

  function triggerWeekBounce(direction) {
    if (!weekContainer || state.motionDisabled) return;
    delete weekContainer.dataset.bounce;
    void weekContainer.offsetHeight;
    weekContainer.dataset.bounce = direction < 0 ? "left" : "right";
  }

  if (weekContainer) {
    weekContainer.addEventListener("animationend", (event) => {
      if (
        event.animationName === "schedule-week-slide-forward" ||
        event.animationName === "schedule-week-slide-backward"
      ) {
        delete weekContainer.dataset.transition;
      }

      if (
        event.animationName === "schedule-week-bounce-left" ||
        event.animationName === "schedule-week-bounce-right"
      ) {
        delete weekContainer.dataset.bounce;
      }
    });
  }

  if (professionalSelect) {
    professionalSelect.innerHTML = "";
    scheduleProfessionals.forEach((professional) => {
      const option = document.createElement("option");
      option.value = professional.id;
      option.textContent = professional.name;
      professionalSelect.appendChild(option);
    });

    if (state.professionalId) {
      professionalSelect.value = state.professionalId;
    }

    professionalSelect.addEventListener("change", () => {
      state.professionalId = professionalSelect.value;
      state.dateKey = null;
      state.time = null;
      renderWeek();
      renderSlots();
      updateProfessionalInfo();
      updateSelection();
    });
  }

  function updateProfessionalInfo() {
    const professional = scheduleProfessionalMap[state.professionalId];
    if (!professional) return;

    
    if (roleElement) roleElement.textContent = professional.role;
    if (nameElement) nameElement.textContent = professional.name;
    if (modalityElement) modalityElement.textContent = professional.modality;
    if (durationElement) {
      durationElement.textContent = state.session?.duration || professional.duration;
    }
    if (priceElement) {
      priceElement.textContent = state.session?.price || professional.price;
    }
    if (serviceElement) {
      const serviceName = state.session?.title || professional.service || "Servicio seleccionado";
      serviceElement.textContent = serviceName;
    }

    if (photo) {
      scheduleProfessionals.forEach((item) => {
        photo.classList.remove(item.photoClass);
      });
      photo.classList.add(professional.photoClass);
    }

     updateCheckoutSummary();
  }

  function updateSelection() {
    if (selectionLabel) {
      selectionLabel.textContent = formatSelectionLabel(state.dateKey, state.time);
    }

    if (selectionContainer) {
      selectionContainer.setAttribute(
        "aria-live",
        state.dateKey && state.time ? "polite" : "off"
      );
    }

    updateCheckoutSummary();

    if (!state.dateKey || !state.time) {
      closeCheckout();
    }

    if (confirmButton) {
      const isReady = Boolean(state.dateKey && state.time);
      confirmButton.disabled = !isReady;
      confirmButton.setAttribute("aria-disabled", isReady ? "false" : "true");
    }
  }

  function updateCheckoutSummary() {
    if (!checkoutSection) return;

    const professional = scheduleProfessionalMap[state.professionalId];
    if (checkoutProfessionalName) {
      checkoutProfessionalName.textContent = professional?.name ?? "";
    }
    if (checkoutProfessionalRole) {
      checkoutProfessionalRole.textContent = professional?.role ?? "";
    }
    if (checkoutService) {
      checkoutService.textContent = state.session?.title || professional?.service || "";
    }
    if (checkoutModality) {
      checkoutModality.textContent = state.session?.modality || professional?.modality || "";
    }
    if (checkoutDuration) {
      checkoutDuration.textContent = state.session?.duration || professional?.duration || "";
    }
    if (checkoutPrice) {
      checkoutPrice.textContent = state.session?.price || professional?.price || "";
    }
    if (checkoutSelectionLabel) {
      checkoutSelectionLabel.textContent = formatSelectionLabel(state.dateKey, state.time);
    }
    if (checkoutPhoto && professional?.photoClass) {
      scheduleProfessionals.forEach((item) => checkoutPhoto.classList.remove(item.photoClass));
      checkoutPhoto.classList.add(professional.photoClass);
    }
  }
  function openCheckout() {
    if (!checkoutSection || !state.dateKey || !state.time) return;
    checkoutSection.hidden = false;
    scheduleRoot.classList.add("schedule--checkout");
    updateCheckoutSummary();
    checkoutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function closeCheckout() {
    if (!checkoutSection) return;
    checkoutSection.hidden = true;
    scheduleRoot.classList.remove("schedule--checkout");
  }

  function setSlotsPanelState(isOpen) {
    if (!slotsPanel) return;

    if (!isOpen) {
      if (slotsPanel.dataset.state === "closed") {
        slotsPanel.style.setProperty("--schedule-slots-height", "0px");
        slotsPanel.setAttribute("aria-hidden", "true");
        return;
        slotsPanel.hidden = true;
      }

      const measuredHeight = slotsPanel.scrollHeight;
      slotsPanel.style.setProperty("--schedule-slots-height", `${measuredHeight}px`);
      slotsPanel.dataset.state = "closing";
      slotsPanel.setAttribute("aria-hidden", "true");

      window.requestAnimationFrame(() => {
        if (slotsPanel.dataset.state !== "closing") return;
        slotsPanel.dataset.state = "closed";
        slotsPanel.style.setProperty("--schedule-slots-height", "0px");
        slotsPanel.hidden = true;
      });
      
      return;
    }
    slotsPanel.hidden = false;
    slotsPanel.dataset.state = "open";
    slotsPanel.setAttribute("aria-hidden", "false");

    window.requestAnimationFrame(() => {
      const measuredHeight = slotsPanel.scrollHeight;
      slotsPanel.style.setProperty("--schedule-slots-height", `${measuredHeight}px`);
    });
  }

  function renderWeek() {
    state.availability = getWeekAvailability(state.weekStart);
    if (weekLabel) {
      weekLabel.textContent = formatWeekLabel(state.weekStart);
    }

    if (!weekContainer) return;
    const direction = state.transitionDirection;
    state.transitionDirection = 0;

    weekContainer.innerHTML = "";

    for (let offset = 0; offset < 7; offset += 1) {
      const currentDate = addDays(state.weekStart, offset);
      const dateKey = formatDateKey(currentDate);
      const weekdayLabel = currentDate
        .toLocaleDateString("es-CL", { weekday: "short" })
        .replace(/\.$/, "");
      const monthLabel = currentDate.toLocaleDateString("es-CL", { month: "long" });

      const button = document.createElement("button");
      button.type = "button";
      button.className = "schedule-day";
      button.dataset.dateKey = dateKey;

      const name = document.createElement("span");
      name.className = "schedule-day__name";
      name.textContent = capitalize(weekdayLabel);

      const dayNumber = document.createElement("strong");
      dayNumber.className = "schedule-day__date";
      dayNumber.textContent = `${currentDate.getDate()}`.padStart(2, "0");

      button.append(name, dayNumber);

      const rawSlots = state.availability[dateKey]?.[state.professionalId] ?? [];
      const visibleSlots = getVisibleSlots(dateKey, rawSlots);
      const isToday = dateKey === state.todayKey;
      const isPastDay = currentDate.getTime() < state.todayStart.getTime();
      const hasAvailability = !isPastDay && visibleSlots.length > 0;
      const isSelected = hasAvailability && state.dateKey === dateKey;

      button.classList.toggle("schedule-day--today", isToday);
      button.classList.toggle("schedule-day--selected", isSelected);
      button.setAttribute("aria-current", isToday ? "date" : "false");
      button.setAttribute("aria-pressed", isSelected ? "true" : "false");

      if (!hasAvailability) {
        const tooltip = isPastDay ? "Agenda finalizada" : "Sin disponibilidad";
        button.dataset.state = isPastDay ? "past" : "blocked";
        button.dataset.tooltip = tooltip;
        button.setAttribute("aria-disabled", "true");
        button.tabIndex = -1;
        button.setAttribute(
          "aria-label",
          `${capitalize(weekdayLabel)} ${currentDate.getDate()} de ${capitalize(monthLabel)}. ${tooltip}`
        );
        button.title = tooltip;
        weekContainer.appendChild(button);
        continue;
      }

      const info = document.createElement("span");
      info.className = "schedule-day__info";
      info.textContent = `${visibleSlots.length} ${
        visibleSlots.length === 1 ? "hora" : "horas"
      }`;
      button.append(info);


      button.setAttribute(
        "aria-label",
        `${capitalize(weekdayLabel)} ${currentDate.getDate()} de ${capitalize(monthLabel)}. ${
           visibleSlots.length
        } ${visibleSlots.length === 1 ? "hora disponible" : "horas disponibles"}`
      );
      button.title = "Ver horarios disponibles";

      button.addEventListener("click", () => {
        state.dateKey = dateKey;
        state.time = null;
        renderWeek();
        renderSlots();
        updateSelection();
      });

      weekContainer.appendChild(button);
    }

    applyWeekTransition(direction);
    updateWeekNavState();
  }

  function renderSlots() {
    const hasSelection = Boolean(state.dateKey);
    const rawSlots = hasSelection
      ? state.availability[state.dateKey]?.[state.professionalId] ?? []
      : [];
     const visibleSlots = hasSelection ? getVisibleSlots(state.dateKey, rawSlots) : [];

    if (state.time && !visibleSlots.includes(state.time)) {
      state.time = null;
    }

    const shouldShowSlots = hasSelection && visibleSlots.length > 0;
    const shouldOpenPanel = hasSelection;
    const periods = splitSlotsByPeriod(visibleSlots);

    if (slotDayLabel) {
      if (!hasSelection) {
        slotDayLabel.textContent = "";
      } else if (shouldShowSlots) {
        slotDayLabel.textContent = formatDayLabel(state.dateKey);
      } else {
        slotDayLabel.textContent = `${formatDayLabel(state.dateKey)} • Sin horarios disponibles`;
      }
    }

    Object.entries(slotContainers).forEach(([period, { group, list }]) => {
      list.innerHTML = "";
      if (!shouldShowSlots) {
        group.hidden = true;
        return;
      }

      const periodSlots = periods[period] ?? [];
      if (!periodSlots.length) {
        group.hidden = true;
        return;
      }

      group.hidden = false;

      periodSlots.forEach((slot) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "schedule-slot";
        button.textContent = slot;
        const isSelected = state.time === slot;
        if (isSelected) {
          button.classList.add("is-selected");
        }
        button.setAttribute("aria-pressed", isSelected ? "true" : "false");
        button.addEventListener("click", () => {
          state.time = slot;
          renderSlots();
          updateSelection();
        });
        list.appendChild(button);
      });
    });

    if (emptyMessage) {
      emptyMessage.hidden = !(hasSelection && !visibleSlots.length);
    }

    setSlotsPanelState(shouldOpenPanel);
  }

  if (confirmButton) {
    confirmButton.addEventListener("click", () => {
      if (!state.dateKey || !state.time) return;
      openCheckout();
      confirmButton.classList.add("is-confirmed");
      setTimeout(() => {
        confirmButton.classList.remove("is-confirmed");
        }, 900);
    });
  }

  if (checkoutBackButton) {
    checkoutBackButton.addEventListener("click", () => {
      closeCheckout();
      confirmButton?.focus();
    
    });
  }

  function changeWeek(dayOffset) {
    if (!dayOffset) return;

    const direction = dayOffset > 0 ? 1 : -1;
    const target = addDays(state.weekStart, dayOffset);

    if (direction < 0 && target.getTime() < state.minWeekStart.getTime()) {
      triggerWeekBounce(-1);
      updateWeekNavState();
      return;
    }

    state.weekStart = target;
    state.dateKey = null;
    state.time = null;
    state.transitionDirection = direction;
    renderWeek();
    renderSlots();
    updateSelection();
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      changeWeek(-7);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      changeWeek(7);
    });
  }

  function onPointerDown(event) {
    if (!weekContainer) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;

    pointerState.active = true;
    pointerState.startX = event.clientX;
    pointerState.lastX = event.clientX;
    pointerState.pointerId = event.pointerId;
    weekContainer.dataset.dragging = "true";

    if (!state.motionDisabled) {
      weekContainer.style.setProperty("--schedule-drag-offset", "0px");
    }

    try {
      weekContainer.setPointerCapture(event.pointerId);
    } catch (error) {
      // Ignora navegadores que no soportan setPointerCapture.
    }
  }

  function onPointerMove(event) {
    if (!pointerState.active || !weekContainer) return;
    pointerState.lastX = event.clientX;
    if (state.motionDisabled) return;
    const delta = pointerState.lastX - pointerState.startX;
    weekContainer.style.setProperty("--schedule-drag-offset", `${delta}px`);
  }

  function onPointerEnd() {
    if (!pointerState.active || !weekContainer) return;

    if (pointerState.pointerId !== null) {
      try {
        weekContainer.releasePointerCapture(pointerState.pointerId);
      } catch (error) {
        // Ignora navegadores que no soportan releasePointerCapture.
      }
    }

    pointerState.active = false;
    pointerState.pointerId = null;
    weekContainer.dataset.dragging = "false";

    if (!state.motionDisabled) {
      weekContainer.style.setProperty("--schedule-drag-offset", "0px");
    }

    const delta = pointerState.lastX - pointerState.startX;
    pointerState.startX = 0;
    pointerState.lastX = 0;

    if (Math.abs(delta) >= SWIPE_THRESHOLD_PX) {
      changeWeek(delta < 0 ? 7 : -7);
    }
  }

  if (weekContainer) {
    weekContainer.addEventListener("pointerdown", onPointerDown);
    weekContainer.addEventListener("pointermove", onPointerMove);
    weekContainer.addEventListener("pointerup", onPointerEnd);
    weekContainer.addEventListener("pointercancel", onPointerEnd);
    weekContainer.addEventListener("pointerleave", onPointerEnd);
  }


  updateProfessionalInfo();
  renderWeek();
  renderSlots();
  updateSelection();
  updateWeekNavState();
}
function getCurrentPage() {
  const { page } = document.body?.dataset ?? {};
  return page ?? "";
}

function initNavigationHighlight() {
  const currentPage = getCurrentPage();
  const highlightPage = currentPage === "horarios" ? "agendar" : currentPage;
  const navLinks = document.querySelectorAll(".site-nav [data-nav-target]");

  navLinks.forEach((link) => {
    const { navTarget } = link.dataset;
    if (!navTarget) return;

    const isActive = navTarget === highlightPage;
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

function createSessionCard(session, ownerKey) {
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
    const params = new URLSearchParams({
      professional: ownerKey,
      service: session.title,
      duration: session.subtitle,
      price: session.price
    });
    window.location.href = `./horarios.html?${params.toString()}`;
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
      sessionGrid.appendChild(createSessionCard(session, key));
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
  agendar: initBookingPage,
  horarios: initSchedulePage
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