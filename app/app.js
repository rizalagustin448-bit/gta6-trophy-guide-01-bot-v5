const DATA_URL = 'data/trophies.json';
const STORE_KEY = 'vice-city-trophy-tracker-v5';
let trophies = [];
let earned = new Set(JSON.parse(localStorage.getItem(STORE_KEY) || '[]'));
let tierFilter = 'all';
let kindFilter = 'all';
let query = '';
let missableOnly = false;
let earnedOnly = false;
let spoilersShown = false;

const grid = document.getElementById('trophy-grid');
const fill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');

function tierLabel(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}

function saveEarned() {
  localStorage.setItem(STORE_KEY, JSON.stringify([...earned]));
}

function updateProgress() {
  const total = trophies.length || 55;
  const n = earned.size;
  const pct = Math.round((n / total) * 100);
  fill.style.width = pct + '%';
  progressText.textContent = n + ' of ' + total + ' earned \u00b7 ' + pct + '%';
  const counts = { platinum: 0, gold: 0, silver: 0, bronze: 0 };
  trophies.forEach(t => { if (earned.has(t.id)) counts[t.tier]++; });
  document.getElementById('stat-platinum').textContent = counts.platinum;
  document.getElementById('stat-gold').textContent = counts.gold;
  document.getElementById('stat-silver').textContent = counts.silver;
  document.getElementById('stat-bronze').textContent = counts.bronze;
}

function visible(t) {
  if (tierFilter !== 'all' && t.tier !== tierFilter) return false;
  if (kindFilter !== 'all' && t.kind !== kindFilter) return false;
  if (missableOnly && !t.missable) return false;
  if (earnedOnly && !earned.has(t.id)) return false;
  if (query) {
    const hay = (t.name + ' ' + t.desc + ' ' + t.guide).toLowerCase();
    if (!hay.includes(query)) return false;
  }
  return true;
}

function cardHtml(t) {
  const isEarned = earned.has(t.id);
  const hidden = !spoilersShown && t.kind === 'story';
  const name = hidden ? 'Hidden story trophy' : t.name;
  const desc = hidden ? 'Finish the story to reveal this one.' : t.desc;
  const guide = hidden ? 'Story spoiler hidden. Use the spoiler button above to reveal it.' : t.guide;
  const badges = '<span class="badge tier-' + t.tier + '">' + tierLabel(t.tier) + '</span>'
    + '<span class="badge kind">' + t.kind + '</span>'
    + (t.missable ? '<span class="badge missable">Possibly missable</span>' : '');
  return '<article class="card' + (isEarned ? ' earned' : '') + '" data-id="' + t.id + '">'
    + '<label class="earn"><input type="checkbox" class="trophy-check" data-id="' + t.id + '"' + (isEarned ? ' checked' : '') + '> Earned</label>'
    + '<div class="badges">' + badges + '</div>'
    + '<h3>#' + t.id + ' ' + name + '</h3>'
    + '<p class="desc">' + desc + '</p>'
    + '<p class="guide">' + guide + '</p>'
    + '</article>';
}

function render() {
  const list = trophies.filter(visible);
  grid.innerHTML = list.length
    ? list.map(cardHtml).join('')
    : '<p class="empty">No trophies match these filters. Clear the search or pick another tier.</p>';
  updateProgress();
}

grid.addEventListener('change', (e) => {
  const box = e.target.closest('.trophy-check');
  if (!box) return;
  const id = Number(box.dataset.id);
  if (box.checked) earned.add(id); else earned.delete(id);
  saveEarned();
  render();
});

document.getElementById('search-input').addEventListener('input', (e) => {
  query = e.target.value.trim().toLowerCase();
  render();
});

document.getElementById('tier-filter').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-tier]');
  if (!btn) return;
  document.querySelectorAll('#tier-filter button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  tierFilter = btn.dataset.tier;
  render();
});

document.getElementById('kind-filter').addEventListener('change', (e) => {
  kindFilter = e.target.value;
  render();
});

document.getElementById('missable-only').addEventListener('change', (e) => {
  missableOnly = e.target.checked;
  render();
});

document.getElementById('earned-only').addEventListener('change', (e) => {
  earnedOnly = e.target.checked;
  render();
});

document.getElementById('spoiler-toggle').addEventListener('click', (e) => {
  spoilersShown = !spoilersShown;
  e.target.textContent = spoilersShown ? 'Hide story spoilers' : 'Show story spoilers';
  render();
});

fetch(DATA_URL)
  .then(r => r.json())
  .then(data => {
    trophies = data.trophies || [];
    render();
  })
  .catch(() => {
    grid.innerHTML = '<p class="empty">Could not load the trophy list. Please reload the page.</p>';
  });
