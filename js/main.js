/* =========================================================================
   main.js — interactions for the Sartaz Ainan portfolio
   - Dark-mode toggle (persisted in localStorage)
   - Mobile hamburger menu
   - Navbar shadow on scroll
   - Scroll-spy (highlight active nav link)
   - Scroll-reveal (IntersectionObserver)
   - YouTube thumbnails from data-video-id
   - Formspree contact form (AJAX, graceful fallback)
   - Current year in footer
   ========================================================================= */
(function () {
  'use strict';

  /* ---- Footer year --------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Dark-mode toggle ---------------------------------------------- */
  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.theme = isDark ? 'dark' : 'light';
  }
  ['theme-toggle', 'theme-toggle-mobile'].forEach(function (id) {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', toggleTheme);
  });
  // The sun/moon icon visibility is handled purely by the `.dark` class:
  syncThemeIcons();
  function syncThemeIcons() {
    const dark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.icon-sun').forEach(function (el) { el.classList.toggle('hidden', dark); });
    document.querySelectorAll('.icon-moon').forEach(function (el) { el.classList.toggle('hidden', !dark); });
  }
  // Re-sync icons whenever the class changes.
  new MutationObserver(syncThemeIcons).observe(document.documentElement, {
    attributes: true, attributeFilter: ['class'],
  });

  /* ---- Mobile menu --------------------------------------------------- */
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      const open = mobileMenu.classList.toggle('hidden') === false;
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    // Close the menu after tapping a link.
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Navbar shadow on scroll --------------------------------------- */
  const navbar = document.getElementById('navbar');
  function onScroll() {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Scroll-spy: highlight the active section's nav link ----------- */
  const sections = ['about', 'research', 'media', 'contact']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length && 'IntersectionObserver' in window) {
    const spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.toggle('is-active', link.dataset.nav === entry.target.id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---- Scroll-reveal animations -------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { revealer.observe(el); });
  } else {
    // Fallback: just show everything.
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- Contact form (Formspree, AJAX) -------------------------------- */
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      // If the endpoint is still the placeholder, let the user know instead
      // of POSTing to a broken URL.
      if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
        e.preventDefault();
        setStatus('⚠ Contact form not configured yet (set your Formspree endpoint).', 'text-amber-600');
        return;
      }
      e.preventDefault();
      setStatus('Sending…', 'text-zinc-500');
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            setStatus('✓ Thanks! Your message has been sent.', 'text-green-600');
          } else {
            setStatus('✗ Something went wrong. Please email me directly.', 'text-red-600');
          }
        })
        .catch(function () {
          setStatus('✗ Network error. Please email me directly.', 'text-red-600');
        });
    });
  }
  function setStatus(msg, cls) {
    if (!status) return;
    status.textContent = msg;
    status.className = 'mt-3 text-center text-sm ' + cls;
  }
})();
