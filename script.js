const START_DATE = new Date("2026-09-25T08:08:55-07:00");

const checkpoints = [
  {
    number: "001",
    title: "Where It Began.",
    date: "15 SEP 2026 · 20:32 PDT",
    description: "After so long, I would never regret it.",
    caption: "FIG. 01 — T₀ / ORIGIN OF THE RECORD",
    summary: "The day I finally decided to confess",
    figure: "orbit"
  },
  {
    number: "002",
    title: "Where It Continued",
    date: "25 SEP 2026 · 08:08:55 PDT",
    description: "I can never ever EVER ask for anything more than this!",
    caption: "FIG. 02 — LOVE AT LAST",
    summary: "The day the relationship officially began.",
    figure: "signal"
  },
  {
    number: "003",
    title: "First Date",
    date: "11 OCT 2026",
    description: "A really simple yet fun first date and better than any performative date could've ever been :)",
    caption: "FIG. 03 — PERIODICITY / SHARED RHYTHM",
    summary: "Finally went on a one-on-one date and went better than I could've thought so yipeeee",
    figure: "resonance"
  },
  {
    number: "004",
    title: "First Kiss",
    date: "20 OCT 2026, 16:24 PDT",
    description: "WE KISSED IN MY FUCKASS GARAGE HUHHHHH ILYSMMM ",
    caption: "FIG. 04 — MUTUAL INFLUENCE",
    summary: "A moment that changed A LOT.",
    figure: "gravity"
  },
  {
    number: "005",
    title: "Spooky Scary Skeletons",
    date: "31 OCT 2026",
    description: "ILYSM BEST HALLOWEEN I EVER HAD",
    caption: "FIG. 05 — hey it's me it's verity! (scary halloween version)",
    summary: "Happy Halloween! Out first Halloween yayy!",
    figure: "phase"
  },
  {
    number: "006",
    title: "TO BE CONTINUED",
    date: "ONGOING",
    description: "when smth cool happens i will put here (wait for xmas)",
    caption: "FIG. 06 — figure 6...? 67676767 HAHAHHHA",
    summary: "A future that has not been written yet!",
    figure: "future"
  }
];

const $ = (id) => document.getElementById(id);
const pad = (value, length = 2) => String(value).padStart(length, "0");

function updateCounter() {
  const now = Date.now();
  const elapsed = Math.max(0, now - START_DATE.getTime());
  const totalSeconds = Math.floor(elapsed / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  $("days").textContent = pad(days, 3);
  $("hours").textContent = pad(hours);
  $("minutes").textContent = pad(minutes);
  $("seconds").textContent = pad(seconds);
  $("total-hours").textContent = `${(elapsed / 3600000).toFixed(2)} TOTAL HOURS`;
}

function figureMarkup(type) {
  const figures = {
    orbit: `<svg viewBox="0 0 420 220"><g class="faint"><circle cx="210" cy="110" r="78"/><path d="M20 110H400M210 8V212"/></g><ellipse cx="210" cy="110" rx="175" ry="55" transform="rotate(-18 210 110)"/><ellipse cx="210" cy="110" rx="150" ry="72" transform="rotate(28 210 110)"/><circle class="filled" cx="210" cy="110" r="3"/><circle class="bright" cx="93" cy="78" r="4"/><circle class="bright" cx="322" cy="150" r="4"/></svg>`,
    signal: `<svg viewBox="0 0 420 220"><g class="faint"><path d="M20 110H400M30 25V195M100 25V195M170 25V195M240 25V195M310 25V195M380 25V195"/></g><path class="bright" d="M20 110 C45 110 45 48 70 48 S95 172 120 172 S145 65 170 65 S195 145 220 145 S245 84 270 84 S295 125 320 125 S345 100 370 100 L400 100"/><path d="M20 110H400" class="faint"/></svg>`,
    resonance: `<svg viewBox="0 0 420 220"><g class="faint"><circle cx="210" cy="110" r="90"/><circle cx="210" cy="110" r="58"/><circle cx="210" cy="110" r="25"/></g><path d="M35 110 C80 12 125 12 170 110 S260 208 305 110 S350 12 395 110"/><path class="bright" d="M35 110 C80 50 125 50 170 110 S260 170 305 110 S350 50 395 110"/><circle class="filled" cx="210" cy="110" r="3"/></svg>`,
    gravity: `<svg viewBox="0 0 420 220"><g class="faint"><circle cx="210" cy="110" r="95"/><circle cx="210" cy="110" r="70"/><circle cx="210" cy="110" r="45"/></g><path d="M35 45 Q210 230 385 45"/><path class="bright" d="M35 175 Q210 -10 385 175"/><circle class="filled" cx="210" cy="110" r="6"/><circle cx="85" cy="110" r="4"/><circle cx="335" cy="110" r="4"/></svg>`,
    phase: `<svg viewBox="0 0 420 220"><g class="faint"><path d="M20 110H400M210 15V205"/></g><path d="M20 110 C65 20 110 20 155 110 S245 200 290 110 S380 20 400 70"/><path class="bright" d="M20 110 C65 65 110 65 155 110 S245 155 290 110 S380 65 400 110"/><path d="M20 55H400M20 165H400" class="faint"/></svg>`,
    future: `<svg viewBox="0 0 420 220"><g class="faint"><path d="M20 110H400M210 12V208"/></g><ellipse cx="210" cy="110" rx="180" ry="60" transform="rotate(-12 210 110)"/><ellipse cx="210" cy="110" rx="155" ry="83" transform="rotate(24 210 110)"/><path class="bright" stroke-dasharray="3 7" d="M210 110 Q310 5 420 15"/><circle class="filled" cx="210" cy="110" r="3"/><path d="M390 8l18 7-8 17" class="bright"/></svg>`
  };
  return figures[type] || figures.orbit;
}

function renderCheckpoints() {
  const grid = $("checkpoint-grid");
  grid.innerHTML = checkpoints.map((item, index) => `
    <button class="checkpoint-card" type="button" data-checkpoint="${index}" aria-label="Open checkpoint ${item.number}: ${item.title}">
      <div class="card-figure">
        <span class="figure-label">PLATE ${item.number} / ${item.figure.toUpperCase()}</span>
        ${figureMarkup(item.figure)}
        <span class="figure-number">FIG. ${item.number}</span>
      </div>
      <div class="card-info">
        <span class="card-index">${item.number}</span>
        <div>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-description">${item.summary}</p>
          <p class="card-date">${item.date}</p>
          <span class="card-open">OPEN OBSERVATION ↗</span>
        </div>
      </div>
    </button>
  `).join("");

  grid.querySelectorAll("[data-checkpoint]").forEach((card) => {
    card.addEventListener("click", () => openCheckpoint(Number(card.dataset.checkpoint)));
  });
}

function openCheckpoint(index) {
  const item = checkpoints[index];
  $("modal-kicker").textContent = `OBSERVATION / ${item.number}`;
  $("modal-title").textContent = item.title;
  $("modal-date").textContent = item.date;
  $("modal-description").textContent = item.description;
  $("modal-caption").textContent = item.caption;
  $("modal-backdrop").hidden = false;
  $("modal-close").focus();
  document.body.style.overflow = "hidden";
}

function closeCheckpoint() {
  $("modal-backdrop").hidden = true;
  document.body.style.overflow = "";
}

$("modal-close").addEventListener("click", closeCheckpoint);
$("modal-backdrop").addEventListener("click", (event) => {
  if (event.target === $("modal-backdrop")) closeCheckpoint();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !$("modal-backdrop").hidden) closeCheckpoint();
});

const tooltip = $("tooltip");
document.querySelectorAll("[data-tip]").forEach((button) => {
  const show = () => {
    tooltip.textContent = button.dataset.tip;
    const rect = button.getBoundingClientRect();
    tooltip.style.left = `${Math.min(window.innerWidth - 280, Math.max(12, rect.left - 110))}px`;
    tooltip.style.top = `${Math.min(window.innerHeight - 100, rect.bottom + 10)}px`;
    tooltip.classList.add("visible");
  };
  button.addEventListener("mouseenter", show);
  button.addEventListener("focus", show);
  button.addEventListener("mouseleave", () => tooltip.classList.remove("visible"));
  button.addEventListener("blur", () => tooltip.classList.remove("visible"));
});

renderCheckpoints();
updateCounter();
setInterval(updateCounter, 1000);
