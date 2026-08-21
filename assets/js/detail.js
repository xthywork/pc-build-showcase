const id = document.body.dataset.build;
const b = BUILDS.find(x => x.id === id) || BUILDS[0];
document.title = `${b.name} — MY BUILDS`;

const q = selector => document.querySelector(selector);
const fill = (selector, value) => {
  document.querySelectorAll(selector).forEach(element => {
    element.textContent = value || '';
  });
};

fill('[data-name]', b.name);
fill('[data-code]', b.code);
fill('[data-purpose]', b.purpose);

if (!b.purpose) q('[data-purpose]')?.remove();

const heroFacts = [
  ['YEAR', b.year],
  ['CPU', b.cpu],
  ['GPU', b.gpu],
  ['RAM', b.ram],
  ...(b.drives || []).map(drive => [drive.type, drive.model]),
  ['主機板', b.motherboard],
  ['作業系統', b.os]
].filter(([, value]) => value);

q('#hero-facts').innerHTML = heroFacts
  .map(([label, value]) => `<div class="hero-fact"><dt>${label}</dt><dd>${value}</dd></div>`)
  .join('');

const componentSection = q('#components-section');
if (b.parts?.length) {
  const carousel = q('#parts');
  carousel.innerHTML = b.parts
    .map((part, index) => `<article class="part-card"><span class="placeholder">${part[0]}</span><footer><span>${part[1]}</span><span>PHOTO ${String(index + 1).padStart(2, '0')}</span></footer></article>`)
    .join('');

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
} else {
  componentSection?.remove();
  if (q('#specs-label')) q('#specs-label').textContent = '01 / FULL SPECIFICATIONS';
}

q('#specs').innerHTML = Object.entries(b.specs || {})
  .filter(([, rows]) => rows?.length)
  .map(([group, rows]) => `<section class="spec-group"><h3>${group.toUpperCase().replace('_', ' ')}</h3><dl class="spec-rows">${rows.map(row => `<div class="spec-row"><dt>${row[0]}</dt><dd>${row[1]}</dd></div>`).join('')}</dl></section>`)
  .join('');
