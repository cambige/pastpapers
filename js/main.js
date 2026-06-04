let currentSubject = null;
let filteredPapers = [];

// === Render Subject Cards ===
function renderSubjects() {
  const container = document.getElementById('subjectsContainer');
  container.innerHTML = '';
  document.getElementById('paperView').style.display = 'none';
  document.querySelector('.subjects-grid').style.display = 'grid';

  SUBJECTS.forEach(s => {
    const count = s.papers.length;
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.innerHTML = `
      <div class="icon">${s.icon}</div>
      <h2>${s.name}</h2>
      <div class="desc">${s.desc}</div>
      <div><span class="code">${s.code}</span> <span style="font-size:0.8rem;color:#999;margin-left:0.5rem;">${count} papers</span></div>
    `;
    card.addEventListener('click', () => showPapers(s.id));
    container.appendChild(card);
  });
}

// === Show Papers for a Subject ===
function showPapers(subjectId) {
  const subject = SUBJECTS.find(s => s.id === subjectId);
  if (!subject) return;
  currentSubject = subject;

  document.querySelector('.subjects-grid').style.display = 'none';
  const view = document.getElementById('paperView');
  view.style.display = 'block';
  view.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Header
  document.getElementById('paperHeader').innerHTML = `
    <h2>${subject.icon} ${subject.name} <span style="font-size:0.85rem;color:#999;font-weight:400;">(${subject.code})</span></h2>
    <div class="stats">${subject.papers.length} papers available</div>
  `;

  document.getElementById('searchInput').value = '';
  renderPaperList(subject.papers);
}

// === Render Paper List ===
function renderPaperList(papers) {
  const container = document.getElementById('papersContainer');
  filteredPapers = papers;

  if (papers.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="big-icon">📭</div><p>No papers yet — check back soon!</p></div>`;
    return;
  }

  // Group by year+paper+variant
  const groups = {};
  papers.forEach(p => {
    const key = `${p.year}|${p.paper}|${p.variant}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(p);
  });

  // Sort: newest first, then paper number, then variant
  const sortedKeys = Object.keys(groups).sort().reverse();

  container.innerHTML = '';
  sortedKeys.forEach(key => {
    const items = groups[key];
    const first = items[0];
    const qp = items.find(i => i.type === 'QP');
    const ms = items.find(i => i.type === 'MS');

    const div = document.createElement('div');
    div.className = 'paper-item';

    let tagsHTML = '';
    if (qp) tagsHTML += `<span class="tag tag-qp">QP</span>`;
    if (ms) tagsHTML += `<span class="tag tag-ms">MS</span>`;

    let downloadsHTML = '';
    if (qp) downloadsHTML += `<a class="download-btn" href="${qp.file}" download><svg viewBox="0 0 24 24"><path d="M5 20h14v-2H5v2zm7-18L5.33 9h3.17v4h5.33V9h3.17L12 2z"/></svg> QP</a>`;
    if (ms) downloadsHTML += `<a class="download-btn" href="${ms.file}" download style="background:#2e7d32;"><svg viewBox="0 0 24 24"><path d="M5 20h14v-2H5v2zm7-18L5.33 9h3.17v4h5.33V9h3.17L12 2z"/></svg> MS</a>`;

    const variantLabel = first.variant ? ` (v${first.variant})` : '';

    div.innerHTML = `
      <div class="info">
        <div class="title">${first.year} — Paper ${first.paper}${variantLabel}</div>
        <div class="meta">${first.subjectName} (${first.subjectId.split('-')[1]})</div>
        <div class="tags">${tagsHTML}</div>
      </div>
      <div style="display:flex;gap:0.4rem;">${downloadsHTML}</div>
    `;
    container.appendChild(div);
  });
}

// === Search / Filter ===
function filterPapers() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  if (!query) {
    renderPaperList(currentSubject.papers);
    return;
  }
  const filtered = currentSubject.papers.filter(p => {
    const text = `${p.year} ${p.paper} ${p.variant} ${p.type}`.toLowerCase();
    return text.includes(query);
  });
  renderPaperList(filtered);
}

// === Back to Subjects ===
function showSubjects() {
  renderSubjects();
}

// === Init ===
document.addEventListener('DOMContentLoaded', renderSubjects);
