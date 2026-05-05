(function () {
  'use strict';

  const root = document.getElementById('lightbox');
  if (!root) return;

  const imgEl     = root.querySelector('.lb-img');
  const capEl     = root.querySelector('.lb-caption');
  const counterEl = root.querySelector('.lb-counter');
  const closeBtn  = root.querySelector('.lb-close');
  const prevBtn   = root.querySelector('.lb-prev');
  const nextBtn   = root.querySelector('.lb-next');

  // Build gallery from any .ss-grid (or [data-lightbox-gallery]) anchors
  const gallery = Array.from(
    document.querySelectorAll('[data-lightbox-gallery] a, .ss-grid a')
  ).map(a => ({
    src:     a.getAttribute('href'),
    caption: a.getAttribute('data-caption') || a.querySelector('img')?.getAttribute('alt') || '',
    el:      a,
  }));

  if (!gallery.length) return;

  let current = -1;
  let lastFocus = null;

  function open(i) {
    if (i < 0 || i >= gallery.length) return;
    current = i;
    lastFocus = document.activeElement;
    render();
    root.classList.add('lb-open');
    root.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function close() {
    root.classList.remove('lb-open');
    root.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    imgEl.src = '';
    if (lastFocus && typeof lastFocus.focus === 'function') {
      lastFocus.focus();
    }
    current = -1;
  }

  function render() {
    const item = gallery[current];
    imgEl.src = item.src;
    imgEl.alt = item.caption.replace(/<[^>]+>/g, '');
    // caption may contain entities like &mdash; — write as innerHTML so it renders
    capEl.innerHTML = item.caption;
    counterEl.textContent = (current + 1) + ' / ' + gallery.length;
    // Hide prev/next arrows if only one image
    if (gallery.length <= 1) {
      prevBtn.hidden = true;
      nextBtn.hidden = true;
    }
  }

  function next() { open((current + 1) % gallery.length); }
  function prev() { open((current - 1 + gallery.length) % gallery.length); }

  // Wire click handlers on each gallery anchor
  gallery.forEach((item, i) => {
    item.el.addEventListener('click', e => {
      e.preventDefault();
      open(i);
    });
  });

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  // Click on backdrop (root) closes; click on image / buttons / figure does not
  root.addEventListener('click', e => {
    if (e.target === root) close();
  });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (current < 0) return;
    switch (e.key) {
      case 'Escape':     e.preventDefault(); close(); break;
      case 'ArrowRight': e.preventDefault(); next();  break;
      case 'ArrowLeft':  e.preventDefault(); prev();  break;
    }
  });
})();
