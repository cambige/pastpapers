// === Show subjects ===
function showSubjects() {
  const div = document.getElementById('subjects');
  div.innerHTML = '';
  document.getElementById('paperView').style.display = 'none';
  div.style.display = 'flex';

  for (let s of SUBJECTS) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="icon">${s.icon}</div>
      <div class="info">
        <h2>${s.name}</h2>
        <div class="desc">${s.desc} — ${s.papers.length} papers</div>
        <div><span class="badge">${s.code}</span></div>
      </div>
    `;
    card.onclick = () => openSubject(s.id);
    div.appendChild(card);
  }
}

// === Open a subject ===
function openSubject(id) {
  const sub = SUBJECTS.find(s => s.id === id);
  if (!sub) return;

  document.getElementById('subjects').style.display = 'none';
  document.getElementById('paperView').style.display = 'block';
  document.getElementById('paperTitle').textContent = sub.icon + ' ' + sub.name + ' (' + sub.code + ')';
  document.getElementById('search').value = '';
  renderPapers(sub.papers);
  currentPapers = sub.papers;
}

let currentPapers = [];

// === Render papers ===
function renderPapers(list) {
  const container = document.getElementById('paperList');
  if (!list || list.length === 0) {
    container.innerHTML = '<div class="empty">📭 No papers yet</div>';
    return;
  }

  // Group
  const groups = {};
  for (let p of list) {
    const key = p.year + '|' + p.paper + '|' + p.variant;
    if (!groups[key]) groups[key] = [];
    groups[key].push(p);
  }

  const keys = Object.keys(groups).sort().reverse();

  let html = '';
  for (let key of keys) {
    const items = groups[key];
    const first = items[0];
    const qp = items.find(i => i.type === 'QP');
    const ms = items.find(i => i.type === 'MS');

    let btns = '';
    if (qp) btns += `<a class="dl-btn" href="${qp.file}" download>📄 QP</a>`;
    if (ms) btns += `<a class="dl-btn green" href="${ms.file}" download>✅ MS</a>`;

    const v = first.variant ? ' (v' + first.variant + ')' : '';

    html += `
      <div class="paper-row">
        <div class="info">
          <div class="title">${first.year} — Paper ${first.paper}${v}</div>
          <div class="meta">${first.subjectName || sub.name} (${first.subjectId || sub.code})</div>
        </div>
        <div class="dls">${btns}</div>
      </div>
    `;
  }

  container.innerHTML = html;
}

// === Search ===
function doSearch() {
  const q = document.getElementById('search').value.toLowerCase().trim();
  if (!q) {
    renderPapers(currentPapers);
    return;
  }
  const filtered = currentPapers.filter(p => {
    return (p.year + ' ' + p.paper + ' ' + p.variant + ' ' + p.type).toLowerCase().includes(q);
  });
  renderPapers(filtered);
}

// === Back ===
function backToSubjects() { showSubjects(); }

// === Start ===
window.onload = showSubjects;
