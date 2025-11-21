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
     // No se marca ningún día por defecto: el paciente debe hacer clic en la tarjeta del día.
    // Cambia este valor si en el futuro quieres preseleccionar (p.ej. siempre el lunes actual).
    dateKey: null,
    time: null,
    availability: {},
    session: hasSessionInfo ? initialSession : null,
    todayKey,
    todayStart,
    transitionDirection: 0,
    motionDisabled: reduceMotionQuery.matches
  };
     // Punto único para alterar el cálculo de la semana inicial y el “día por defecto”.
  // Si necesitas mostrar otra semana o reactivar un día auto-seleccionado, ajusta weekStart/dateKey aquí.
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

    if (confirmButton) {
      const isReady = Boolean(state.dateKey && state.time);
      confirmButton.disabled = !isReady;
      confirmButton.setAttribute("aria-disabled", isReady ? "false" : "true");
    }
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

  function selectDay(dateKey) {
    if (!dateKey) return;
    const date = parseDateKey(dateKey);
    if (!date || date.getTime() < state.todayStart.getTime()) return;

    state.dateKey = dateKey;
    state.time = null;
    setSlotsPanelState(true);
    renderWeek();
    renderSlots();
    updateSelection();
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
// Bloquea navegación por teclado; el día se activa solo con clic de mouse.
      // Elimina el tabindex negativo si necesitas reactivar foco/Enter/Espacio en el futuro.
      button.tabIndex = -1;
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
      const hasSlots = visibleSlots.length > 0;
      const isSelected = state.dateKey === dateKey;

      button.classList.toggle("schedule-day--today", isToday);
      button.classList.toggle("schedule-day--selected", isSelected);
      button.setAttribute("aria-current", isToday ? "date" : "false");
      button.setAttribute("aria-pressed", isSelected ? "true" : "false");

       if (isPastDay) {
        const tooltip = "Agenda finalizada";
        button.dataset.state = "past";
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

       if (!hasSlots) {
        button.dataset.state = "blocked";
        button.dataset.tooltip = "Sin horarios disponibles";
        button.setAttribute(
          "aria-label",
          `${capitalize(weekdayLabel)} ${currentDate.getDate()} de ${capitalize(
            monthLabel
          )}. Sin horarios disponibles`
        );
        button.title = "Ver horarios";
      } else {
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
      }

      // Maneja la selección solo con click para evitar activaciones por teclado.
      // Si más adelante quieres reactivar navegación por Enter/Espacio, agrega aquí el listener de teclado.
      button.addEventListener("click", () => selectDay(dateKey));

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
        // Mantén interacción solo por clic; retira tabIndex si vuelves a habilitar teclado.
        button.tabIndex = -1; // Este inicializador pinta la semana completa apenas carga la página y fija el día activo por defecto.
    // Ajusta aquí si quieres variar la lógica del arranque (p.ej. cargar siempre la próxima semana).
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
      const showEmpty = hasSelection && !visibleSlots.length;
      emptyMessage.hidden = !showEmpty;
      if (showEmpty) {
        emptyMessage.textContent = "Sin horarios disponibles para este día.";
      }
    }

    setSlotsPanelState(shouldOpenPanel);
  }

  if (confirmButton) {
    confirmButton.addEventListener("click", () => {
      if (!state.dateKey || !state.time) return;

      const professional = scheduleProfessionalMap[state.professionalId];
      const params = new URLSearchParams({
        professional: state.professionalId,
        date: state.dateKey,
        time: state.time
      });

      if (state.session?.title) params.set("service", state.session.title);
      if (state.session?.duration) params.set("duration", state.session.duration);
      if (state.session?.price) params.set("price", state.session.price);
      if (professional?.modality) params.set("modality", professional.modality);

      window.location.href = `./datos.html?${params.toString()}`;
    
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


const initializeScheduleView = () => {
// Este inicializador pinta la semana completa apenas carga la página.
    // Ajusta aquí si quieres modificar cómo se arma la primera vista del calendario
    // (p.ej. cargar otra semana o volver a activar un día preseleccionado por defecto).
    updateProfessionalInfo();
    renderWeek();
    renderSlots();
    updateSelection();
    updateWeekNavState();
  };

  initializeScheduleView();
}

function initPatientDataPage() {
  const root = document.querySelector(".patient-data");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const professionalId = params.get("professional") ?? "";
  const professional = scheduleProfessionalMap[professionalId];

  const photo = root.querySelector("[data-patient-photo]");
  const nameElement = root.querySelector("[data-patient-name]");
  const roleElement = root.querySelector("[data-patient-role]");
  const serviceElement = root.querySelector("[data-patient-service]");
  const modalityElement = root.querySelector("[data-patient-modality]");
  const durationElement = root.querySelector("[data-patient-duration]");
  const priceElement = root.querySelector("[data-patient-price]");
  const selectionElement = root.querySelector("[data-patient-selection]");
  const backLink = root.querySelector("[data-patient-back]");
  const fullNameInput = root.querySelector("[data-patient-fullname]");
  const emailInput = root.querySelector("[data-patient-email]");
  const service = params.get("service") ?? professional?.service ?? "";
  const modality = params.get("modality") ?? professional?.modality ?? "";
  const duration = params.get("duration") ?? professional?.duration ?? "";
  const price = params.get("price") ?? professional?.price ?? "";
  const dateKey = params.get("date");
  const time = params.get("time");

  if (nameElement) nameElement.textContent = professional?.name ?? "";
  if (roleElement) roleElement.textContent = professional?.role ?? "";
  if (serviceElement) serviceElement.textContent = service;
  if (modalityElement) modalityElement.textContent = modality;
  if (durationElement) durationElement.textContent = duration;
  if (priceElement) priceElement.textContent = price;

  if (selectionElement) {
    selectionElement.textContent = formatSelectionLabel(dateKey, time);
  }

  if (photo && professional?.photoClass) {
    scheduleProfessionals.forEach((item) => photo.classList.remove(item.photoClass));
    photo.classList.add(professional.photoClass);
  }

  if (backLink) {
    const backParams = new URLSearchParams();
    if (professionalId) backParams.set("professional", professionalId);
    if (service) backParams.set("service", service);
    if (duration) backParams.set("duration", duration);
    if (price) backParams.set("price", price);
    backLink.href = `./horarios.html?${backParams.toString()}`;
  }

  const rutInput = root.querySelector("[data-patient-rut]");
  const rutError = root.querySelector("[data-rut-error]");
  const nameError = root.querySelector("[data-name-error]");
  const emailError = root.querySelector("[data-email-error]");
  const countrySelect = root.querySelector("[data-phone-country]");
  const phoneDial = root.querySelector("[data-phone-dial]");
  const phoneInput = root.querySelector("[data-patient-phone]");
  const phoneError = root.querySelector("[data-phone-error]");
  const sendButton = root.querySelector("[data-send-code]");
  const sendFeedback = root.querySelector("[data-send-feedback]");
  const codeInput = root.querySelector("[data-patient-code]");
  const codeError = root.querySelector("[data-code-error]");
  const confirmCodeButton = root.querySelector("[data-confirm-code]");
  const confirmAppointmentButton = root.querySelector("[data-patient-submit]");

  const verificationState = {
    sending: false,
    verifying: false,
    codeSent: false,
    codeValidated: false,
    phoneDigits: "",
    lastSentPhone: "",
    lastDialCode: ""
  };

  const appointmentState = {
    rut: "",
    fullName: "",
    email: "",
    code: "",
    selectionValid: Boolean(dateKey && time)
  };

  const phoneCountries = [
    { code: "CL", name: "Chile", dialCode: "+56", flag: "🇨🇱", minLength: 9, maxLength: 9, example: "9XXXXXXXX" },
    { code: "AR", name: "Argentina", dialCode: "+54", flag: "🇦🇷", minLength: 10, maxLength: 10, example: "11XXXXXXXX" }
    // Añade más países aquí si necesitas ampliar la lista de prefijos.
  ];

  const getCountryByCode = (code) => phoneCountries.find((item) => item.code === code);
  const getSelectedCountry = () => {
    const current = getCountryByCode(countrySelect?.value ?? "");
    return current ?? phoneCountries.find((item) => item.code === "CL") ?? phoneCountries[0];
  };

  const clampDigits = (value = "", maxLength = 0) => value.replace(/\D/g, "").slice(0, maxLength || undefined);

  const formatRutValue = (digits) => {
    if (!digits) return "";
    const clean = clampDigits(digits, 9);
    const body = clean.slice(0, -1);
    const verifier = clean.slice(-1);

    if (!body) return verifier;

    const reversed = body.split("").reverse();
    const groups = [];
    for (let i = 0; i < reversed.length; i += 3) {
      groups.push(reversed.slice(i, i + 3).reverse().join(""));
    }

    return `${groups.reverse().join(".")}-${verifier}`;
  };

  const calculateVerifierDigit = (body) => {
    let sum = 0;
    let multiplier = 2;

    for (let i = body.length - 1; i >= 0; i -= 1) {
      sum += Number.parseInt(body[i], 10) * multiplier;
      multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }

    const remainder = 11 - (sum % 11);
    if (remainder === 11) return "0";
    if (remainder === 10) return "k";
    return String(remainder);
  };

  const validateRut = (digits) => {
    const clean = clampDigits(digits, 9);
    if (clean.length < 7) return { valid: false, message: "Ingresa un RUT válido." };

    const body = clean.slice(0, -1);
    const verifier = clean.slice(-1);
    const expectedVerifier = calculateVerifierDigit(body);
    const isValid = verifier === expectedVerifier;
    return {
      valid: isValid,
      message: isValid ? "" : "El dígito verificador no es correcto."
    };
  };

  const validateName = (value) => {
    if (!value) return { valid: false, message: "Ingresa el nombre del paciente." };
    if (value.trim().length < 4) {
      return { valid: false, message: "El nombre debe tener al menos 4 caracteres." };
    }
    return { valid: true, message: "" };
  };

  const validateEmail = (value) => {
    if (!value) return { valid: false, message: "Ingresa un correo electrónico." };
    const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    const isValid = emailRegex.test(value.trim());
    return { valid: isValid, message: isValid ? "" : "Correo inválido." };
  };


  if (rutInput) {
    rutInput.addEventListener("input", () => {
      const selectionStart = rutInput.selectionStart || 0;
      const cleanValue = clampDigits(rutInput.value, 9);
      const digitsBeforeCaret = clampDigits(rutInput.value.slice(0, selectionStart), 9);

      rutInput.value = formatRutValue(cleanValue);

      const nextCaretDigits = digitsBeforeCaret.length;
      let caretIndex = rutInput.value.length;
      let digitCount = 0;
      for (let i = 0; i < rutInput.value.length; i += 1) {
        if (/\d/.test(rutInput.value[i])) {
          digitCount += 1;
        }
        if (digitCount >= nextCaretDigits) {
          caretIndex = i + 1;
          break;
        }
      }
      rutInput.setSelectionRange(caretIndex, caretIndex);

      if (rutError) {
        const result = validateRut(cleanValue);
        rutError.textContent = result.valid ? "" : result.message;
      }
      appointmentState.rut = cleanValue;
      updateSubmitState();
    });
  }

  if (fullNameInput) {
    fullNameInput.addEventListener("input", () => {
      appointmentState.fullName = fullNameInput.value;
      const result = validateName(appointmentState.fullName);
      if (nameError) nameError.textContent = result.valid ? "" : result.message;
      updateSubmitState();
    });
  }

  if (emailInput) {
    emailInput.addEventListener("input", () => {
      appointmentState.email = emailInput.value;
      const result = validateEmail(appointmentState.email);
      if (emailError) emailError.textContent = result.valid ? "" : result.message;
      updateSubmitState();
    });
  }

  const maskPhone = (digits) => {
    if (!digits) return "";
    return digits.replace(/(\d{3})(?=\d)/g, "$1 ").trim();
  };

  const getExpectedLength = (country) => country.maxLength ?? country.minLength ?? 9;

  const validatePhoneDigits = (digits, country) => {
    const expected = getExpectedLength(country);
    if (!digits.length) return { valid: false, message: "" };
    if (digits.length < expected) {
      return { valid: false, message: `Ingresa ${expected} dígitos para ${country.name}.` };
    }
    return { valid: true, message: "" };
  };

  const clampPhoneDigits = (value, country) => clampDigits(value, country.maxLength ?? 12);

  const updateConfirmButtonState = () => {
    if (!confirmCodeButton) return;
    const code = clampDigits(codeInput?.value ?? "", 6);
    const country = getSelectedCountry();
    const phoneValid = validatePhoneDigits(verificationState.phoneDigits, country).valid;
    const canConfirm = verificationState.codeSent && code.length === 6 && phoneValid;
    confirmCodeButton.disabled = !canConfirm || verificationState.verifying;
  };

  const updateSubmitState = () => {
    if (!confirmAppointmentButton) return;
    const country = getSelectedCountry();
    const rutValid = validateRut(appointmentState.rut).valid;
    const nameValid = validateName(appointmentState.fullName).valid;
    const emailValid = validateEmail(appointmentState.email).valid;
    const phoneValid = validatePhoneDigits(verificationState.phoneDigits, country).valid;
    const codeValid = verificationState.codeValidated && appointmentState.code.length === 6;
    const ready =
      rutValid && nameValid && emailValid && phoneValid && codeValid && appointmentState.selectionValid;
    confirmAppointmentButton.disabled = !ready;
  };

  const updatePhoneDial = () => {
    const country = getSelectedCountry();
    if (phoneDial) {
      phoneDial.textContent = `${country.flag} ${country.dialCode}`;
    }
    if (phoneInput) {
      phoneInput.placeholder = country.example ?? "";
    }
    verificationState.lastDialCode = country.dialCode;
     // Si quieres cambiar el país por defecto, modifica phoneCountries o setea countrySelect.value aquí.
  };
  
  const updatePhoneState = () => {
    if (!phoneInput) return;
    const country = getSelectedCountry();
    const digits = clampPhoneDigits(phoneInput.value, country);
    phoneInput.value = digits;
    verificationState.phoneDigits = digits;
    if (phoneError) {
    const result = validatePhoneDigits(digits, country);
      phoneError.textContent = result.valid ? "" : result.message;
    }
    updateConfirmButtonState();
    updateSubmitState();
  };

  const sendVerificationCode = async () => {
    if (!sendButton) return;
    const country = getSelectedCountry();
    const digits = verificationState.phoneDigits;
    const validation = validatePhoneDigits(digits, country);
    if (!validation.valid) {
      if (phoneError) phoneError.textContent = validation.message;
      return;
    }

    verificationState.sending = true;
    sendButton.disabled = true;
    if (sendFeedback) {
      sendFeedback.textContent = "Enviando código...";
    }

    try {
     // TODO: conectar con backend real para enviar SMS (Twilio u otro proveedor).
      await fetch("/api/enviar-codigo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: `${country.dialCode}${digits}` })
      });

      verificationState.codeSent = true;
      verificationState.lastSentPhone = digits;
      verificationState.lastDialCode = country.dialCode;
      if (sendFeedback) {
      sendFeedback.textContent = `Código enviado al ${country.dialCode} ${maskPhone(digits)}`;
      }
      if (codeError) codeError.textContent = "";
      updateConfirmButtonState();
      updateSubmitState();
    } catch (error) {
      if (sendFeedback) {
        sendFeedback.textContent = "No se pudo enviar el código. Inténtalo nuevamente.";
      }
    } finally {
      verificationState.sending = false;
      sendButton.disabled = false;
    }
  };

  const verifyCode = async () => {
    if (!codeInput) return;
    const code = clampDigits(codeInput.value, 6);
    if (code.length < 6) {
      if (codeError) codeError.textContent = "El código debe tener 6 dígitos.";
      return;
    }
    if (!verificationState.codeSent) {
      if (codeError) codeError.textContent = "Primero envía el código a tu celular.";
      return;
    }

    verificationState.verifying = true;
    updateConfirmButtonState();
    if (codeError) codeError.textContent = "";

    try {
      // TODO: conectar con backend real para verificar el SMS.
      const response = await fetch("/api/verificar-codigo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: `${verificationState.lastDialCode}${verificationState.phoneDigits}`,
          code
        })
      });
      const result = await response.json();
      const isValid = Boolean(result?.valid);
      verificationState.codeValidated = isValid;
      if (codeError) {
        codeError.textContent = isValid ? "Código confirmado." : "El código no es correcto.";
      }
    } catch (error) {
      if (codeError) codeError.textContent = "No pudimos validar el código. Intenta nuevamente.";
    } finally {
      verificationState.verifying = false;
      updateConfirmButtonState();
      updateSubmitState();
    }
  };

   if (countrySelect) {
    // Aquí puedes fijar el prefijo por defecto o habilitar/deshabilitar el cambio de país.
    countrySelect.value = getSelectedCountry().code;
    countrySelect.addEventListener("change", () => {
      updatePhoneDial();
      verificationState.phoneDigits = "";
      verificationState.codeSent = false;
      verificationState.codeValidated = false;
      if (phoneInput) phoneInput.value = "";
      if (sendFeedback) sendFeedback.textContent = "";
      if (codeError) codeError.textContent = "";
      updatePhoneState();
      updateSubmitState();
    });
  }

  updatePhoneDial();
  updatePhoneState();

  if (phoneInput) {
    phoneInput.addEventListener("input", updatePhoneState);
  }

  if (sendButton) {
    sendButton.addEventListener("click", sendVerificationCode);
  }

  if (codeInput) {
    codeInput.addEventListener("input", () => {
      codeInput.value = clampDigits(codeInput.value, 6);
      if (codeError) codeError.textContent = "";
      appointmentState.code = codeInput.value;
      updateConfirmButtonState();
      updateSubmitState();
    });
  }

  if (confirmCodeButton) {
    confirmCodeButton.addEventListener("click", verifyCode);
  }

  const ensureFieldValidity = () => {
    if (rutError) {
      const rutResult = validateRut(appointmentState.rut);
      rutError.textContent = rutResult.valid ? "" : rutResult.message;
    }
    if (nameError) {
      const result = validateName(appointmentState.fullName);
      nameError.textContent = result.valid ? "" : result.message;
    }
    if (emailError) {
      const result = validateEmail(appointmentState.email);
      emailError.textContent = result.valid ? "" : result.message;
    }
  };

  const buildAppointmentPayload = () => {
    // Aquí se arma el objeto de cita que se envía a Confirmación y al backend.
    return {
      patient: {
        rut: appointmentState.rut,
        name: appointmentState.fullName,
        email: appointmentState.email,
        phone: `${verificationState.lastDialCode || getSelectedCountry().dialCode}${verificationState.phoneDigits}`
      },
      schedule: {
        dateKey,
        time,
        professionalId,
        professionalName: professional?.name ?? "",
        modality,
        duration,
        price,
        service
      }
    };
  };

  const sendConfirmationEmail = async (payload) => {
    // TODO: conectar con backend real para enviar email de confirmación.
    await fetch("/api/enviar-confirmacion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  };

  const handleSubmit = async () => {
    appointmentState.selectionValid = Boolean(dateKey && time);
    ensureFieldValidity();

    if (!appointmentState.selectionValid) {
      if (selectionElement) selectionElement.textContent = "Selecciona una fecha y hora para continuar.";
      return;
    }

    const rutValid = validateRut(appointmentState.rut).valid;
    const nameValid = validateName(appointmentState.fullName).valid;
    const emailValid = validateEmail(appointmentState.email).valid;
    const country = getSelectedCountry();
    const phoneValid = validatePhoneDigits(verificationState.phoneDigits, country).valid;
    const codeValid = verificationState.codeValidated && appointmentState.code.length === 6;

    if (!rutValid || !nameValid || !emailValid || !phoneValid || !codeValid) {
      if (!verificationState.codeValidated && codeError) {
        codeError.textContent = "Confirma el código SMS para continuar.";
      }
      updateSubmitState();
      return;
    }

    const payload = buildAppointmentPayload();
    try {
      await sendConfirmationEmail(payload);
    } catch (error) {
      // Conservamos la navegación aunque el mock falle para fines de flujo.
    }

    sessionStorage.setItem("appointmentConfirmation", JSON.stringify(payload));
    window.location.href = "./confirmacion.html";
  };

  if (confirmAppointmentButton) {
    confirmAppointmentButton.addEventListener("click", handleSubmit);
  }

  updateSubmitState();
}

function initConfirmationPage() {
  const root = document.querySelector(".appointment-confirmation");
  if (!root) return;

  const dateElement = root.querySelector("[data-confirmation-date]");
  const timeElement = root.querySelector("[data-confirmation-time]");
  const professionalElement = root.querySelector("[data-confirmation-professional]");
  const modalityElement = root.querySelector("[data-confirmation-modality]");
  const venueElement = root.querySelector("[data-confirmation-venue]");

  let payload = null;
  try {
    const stored = sessionStorage.getItem("appointmentConfirmation");
    payload = stored ? JSON.parse(stored) : null;
  } catch (error) {
    payload = null;
  }

  if (payload?.schedule?.dateKey && dateElement) {
    dateElement.textContent = formatDayLabel(payload.schedule.dateKey);
  }
  if (payload?.schedule?.time && timeElement) {
    timeElement.textContent = payload.schedule.time;
  }
  if (payload?.schedule?.professionalName && professionalElement) {
    professionalElement.textContent = payload.schedule.professionalName;
  }
  if (payload?.schedule?.modality && modalityElement) {
    modalityElement.textContent = payload.schedule.modality;
  }
  if (!payload?.schedule?.venue && venueElement) {
    venueElement.textContent = venueElement.textContent || "Sede Chillán";
  }

  const triggerEmailConfirmation = async () => {
    if (!payload) return;
    // TODO: conectar con backend real para enviar email de confirmación al llegar a esta vista.
    try {
      await fetch("/api/enviar-confirmacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      // Mantén este bloque por si el endpoint mock falla en ambiente local.
    }
  };

  triggerEmailConfirmation();
}

function getCurrentPage() {
  const { page } = document.body?.dataset ?? {};
  return page ?? "";
}

function initNavigationHighlight() {
  const currentPage = getCurrentPage();
  const highlightPage = ["horarios", "datos", "confirmacion"].includes(currentPage)
    ? "agendar"
    : currentPage;
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
  horarios: initSchedulePage,
  datos: initPatientDataPage,
  confirmacion: initConfirmationPage
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