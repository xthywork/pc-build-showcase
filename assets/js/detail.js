const id = document.body.dataset.build;
const build = BUILDS.find(item => item.id === id) || BUILDS[0];
const orderedVersions = window.getBuildVersions(build);
const versions = orderedVersions.filter(version => version.status !== 'planned').reverse()
  .concat(orderedVersions.filter(version => version.status === 'planned'));
const selector = document.querySelector('#version-select');
const query = new URLSearchParams(location.search);
const requestedVersion = query.get('version');
const initialVersion = versions.find(version => version.id === requestedVersion)
  || window.getLatestBuildVersion(build);

document.title = `${build.name} — MY BUILDS`;

const q = selectorText => document.querySelector(selectorText);
const fill = (selectorText, value) => {
  document.querySelectorAll(selectorText).forEach(element => {
    element.textContent = value || '';
  });
};

const formatVersion = version => {
  if (!version.date) return `${version.label || '目前配置'}${version.status === 'planned' ? '（預計）' : ''}`;
  const [year, month] = version.date.split('-');
  const changeLabel = version.changeLabel || version.label;
  const plannedLabel = version.status === 'planned' ? '（預計）' : '';
  return `${year} 年 ${Number(month)} 月${changeLabel ? ` · ${changeLabel}` : ''}${plannedLabel}`;
};

versions.forEach(version => {
  selector.add(new Option(formatVersion(version), version.id));
});
selector.value = initialVersion.id;

const carousel = q('#parts');
const componentSection = q('#components-section');

document.querySelectorAll('.carousel-btn').forEach(button => {
  button.addEventListener('click', () => carousel.scrollBy({
    left: (button.dataset.dir === 'next' ? 1 : -1) * carousel.clientWidth * 0.72,
    behavior: 'smooth'
  }));
});

let startX = 0;
carousel.addEventListener('pointerdown', event => {
  startX = event.clientX;
  carousel.setPointerCapture(event.pointerId);
});
carousel.addEventListener('pointerup', event => {
  const distance = startX - event.clientX;
  if (Math.abs(distance) > 45) {
    carousel.scrollBy({
      left: Math.sign(distance) * carousel.clientWidth * 0.72,
      behavior: 'smooth'
    });
  }
});

function renderVersion(version) {
  const config = version.configuration;
  const heroFacts = [
    ['YEAR', config.year],
    ['CPU', config.cpu],
    ['GPU', config.gpu],
    ['PSU', config.psu],
    ['RAM', config.ram],
    ...(config.drives || []).map(drive => [drive.type, drive.model]),
    ['主機板', config.motherboard],
    ['作業系統', config.os],
    ['螢幕', config.display],
    ['I/O', config.io]
  ].filter(([, value]) => value);

  fill('[data-name]', build.name);
  fill('[data-code]', build.code);
  fill('[data-purpose]', config.purpose || build.purpose);
  q('[data-purpose]').hidden = !(config.purpose || build.purpose);
  q('#version-note').textContent = version.summary || formatVersion(version);
  q('#hero-facts').innerHTML = heroFacts
    .map(([label, value]) => `<div class="hero-fact"><dt>${label}</dt><dd>${value}</dd></div>`)
    .join('');

  const parts = config.parts || [];
  componentSection.hidden = !parts.length;
  carousel.innerHTML = parts
    .map((part, index) => `<article class="part-card"><span class="placeholder">${part[0]}</span><footer><span>${part[1]}</span><span>PHOTO ${String(index + 1).padStart(2, '0')}</span></footer></article>`)
    .join('');

  q('#specs-label').textContent = `${parts.length ? '02' : '01'} / FULL SPECIFICATIONS`;
  q('#specs').innerHTML = Object.entries(config.specs || {})
    .filter(([, rows]) => rows?.length)
    .map(([group, rows]) => `<section class="spec-group"><h3>${group.toUpperCase().replace('_', ' ')}</h3><dl class="spec-rows">${rows.map(row => `<div class="spec-row"><dt>${row[0]}</dt><dd>${row[1]}</dd></div>`).join('')}</dl></section>`)
    .join('');
}

renderVersion(initialVersion);
selector.addEventListener('change', () => {
  const selected = versions.find(version => version.id === selector.value);
  if (!selected) return;
  renderVersion(selected);
  query.set('version', selected.id);
  history.replaceState(null, '', `${location.pathname}?${query.toString()}`);
});
