// =============================================
//  Frontend Mastery - dashboard dyal l progress
// =============================================

const STORAGE_KEY = "fm-status";
const STATUS_ORDER = ["todo", "doing", "done"];
const STATUS_LABEL = { todo: "Mazal", doing: "Kankhdem", done: "Sali ✓", late: "Fatek" };
const TOTAL_DAYS = 12 * 7;

const course = window.COURSE;

// Date dyal lyoum b format YYYY-MM-DD (local)
function todayStr() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
const TODAY = todayStr();

// ---------- localStorage (try/catch 7it momkin ykoun bloqué) ----------
function loadOverrides() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function saveOverrides(obj) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)); } catch {}
}
let overrides = loadOverrides();

// Kol l iyam f liste wa7da
function allDays() {
  return course.weeks.flatMap((w) => w.days.map((d) => ({ ...d, week: w.id })));
}
function statusOf(day) {
  return overrides[day.id] || day.status;
}
function displayStatus(day) {
  const s = statusOf(day);
  if (s !== "done" && day.date < TODAY) return "late";
  return s;
}

// ---------- Stats ----------
function computeStats() {
  const days = allDays();
  const done = days.filter((d) => statusOf(d) === "done").length;
  const late = days.filter((d) => displayStatus(d) === "late").length;

  // Semana daba 3la 7sab startDate
  const diff = Math.floor((new Date(TODAY) - new Date(course.startDate)) / 86400000);
  const currentWeek = Math.min(12, Math.max(1, Math.floor(diff / 7) + 1));

  // Streak : iyam mtab3in salin, mn lyoum (wla l bare7) l lor
  const past = days.filter((d) => d.date <= TODAY).sort((a, b) => b.date.localeCompare(a.date));
  let streak = 0;
  for (let i = 0; i < past.length; i++) {
    const s = statusOf(past[i]);
    if (s === "done") streak++;
    else if (i === 0 && past[i].date === TODAY) continue; // lyoum mazal ma sala, 3adi
    else break;
  }

  return { done, late, currentWeek, streak, pct: Math.round((done / TOTAL_DAYS) * 100) };
}

// ---------- Render ----------
function render() {
  const stats = computeStats();

  document.getElementById("student").textContent = course.student;
  document.getElementById("pct").textContent = stats.pct + "%";
  document.getElementById("statDone").textContent = `${stats.done}/${TOTAL_DAYS}`;
  document.getElementById("statWeek").textContent = stats.currentWeek;
  document.getElementById("statStreak").textContent = stats.streak;
  document.getElementById("statLate").textContent = stats.late;

  const circumference = 2 * Math.PI * 52;
  document.getElementById("ringFg").style.strokeDashoffset =
    circumference * (1 - stats.pct / 100);

  renderToday();
  renderWeeks(stats.currentWeek);
}

function renderToday() {
  const days = allDays();
  const today =
    days.find((d) => d.date === TODAY) ||
    days.find((d) => statusOf(d) !== "done");
  const box = document.getElementById("today");

  if (!today) {
    box.innerHTML = `<p class="today__tag">// lyoum</p><h3>Ma kayn 7ta task mfssla 🎉</h3>
      <p>Goul l Claude yfssel lik semana jdida.</p>`;
    return;
  }
  const isToday = today.date === TODAY;
  box.innerHTML = `
    <p class="today__tag">// ${isToday ? "task dyal lyoum" : "task jaya"} · ${today.id} · ${today.type}</p>
    <h3>${today.title}</h3>
    <p>${today.details}</p>`;
}

function renderWeeks(currentWeek) {
  const container = document.getElementById("weeks");
  container.innerHTML = "";

  course.weeks.forEach((week) => {
    const done = week.days.filter((d) => statusOf(d) === "done").length;
    const pct = Math.round((done / 7) * 100);

    const el = document.createElement("article");
    el.className = "week" + (week.id === currentWeek ? " is-current is-open" : "");
    el.innerHTML = `
      <button class="week__head">
        <span class="week__num">S${week.id}</span>
        <span>
          <span class="week__title">${week.title}</span><br>
          <span class="week__project">Projet : ${week.project}</span>
          <span class="bar"><span class="bar__fill" style="width:${pct}%"></span></span>
        </span>
        <span class="week__pct">${done}/7</span>
      </button>
      <div class="week__days"></div>`;

    el.querySelector(".week__head").addEventListener("click", () => el.classList.toggle("is-open"));

    const list = el.querySelector(".week__days");
    if (week.days.length === 0) {
      list.innerHTML = `<p class="week__empty">Ghadi ytfssel mli nwslo lhna 🔒</p>`;
    }
    week.days.forEach((day) => {
      const s = displayStatus(day);
      const row = document.createElement("div");
      row.className = "day" + (day.date === TODAY ? " is-today" : "");
      row.innerHTML = `
        <span class="day__id">${day.id}</span>
        <span>
          <span class="day__title">${day.title}</span><br>
          <span class="day__meta">${day.date} · ${day.type}</span>
        </span>
        <button class="badge badge--${s}" title="Clique bach tbeddel">${STATUS_LABEL[s]}</button>`;
      row.querySelector(".badge").addEventListener("click", () => cycleStatus(day));
      list.appendChild(row);
    });

    container.appendChild(el);
  });
}

function cycleStatus(day) {
  const current = statusOf(day);
  const next = STATUS_ORDER[(STATUS_ORDER.indexOf(current) + 1) % STATUS_ORDER.length];
  overrides[day.id] = next;
  saveOverrides(overrides);
  render();
}

// ---------- Export : ycopier data.js jdid b les status ----------
document.getElementById("exportBtn").addEventListener("click", async () => {
  const updated = structuredClone(course);
  updated.weeks.forEach((w) => w.days.forEach((d) => (d.status = statusOf(d))));
  const text =
    "// Data dyal l course. Beddel status: todo | doing | done\n" +
    "window.COURSE = " + JSON.stringify(updated, null, 2) + ";\n";
  try {
    await navigator.clipboard.writeText(text);
    alert("Tcopia! Lsse9 f data.js w dir commit + push.");
  } catch {
    alert("Ma9dertch ncopi. 7awel f navigateur akhor.");
  }
});

document.getElementById("resetBtn").addEventListener("click", () => {
  if (!confirm("Tms7 l changements li f had navigateur w trja3 l data.js ?")) return;
  overrides = {};
  saveOverrides(overrides);
  render();
});

render();
