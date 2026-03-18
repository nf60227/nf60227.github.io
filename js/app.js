// ============================================
// Impressionism website — App logic
// ============================================

(function () {
  'use strict';

  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const container = document.getElementById('content-container');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  // Create overlay for mobile
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);

  // ─── Sidebar toggle (mobile) ───
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  });
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  });

  // ─── Nav group expand/collapse ───
  document.querySelectorAll('.nav-group-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.classList.toggle('open');
    });
  });

  // ─── Navigation ───
  function navigate(section) {
    // Update active link
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const activeLink = document.querySelector(`[data-section="${section}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
      // Open parent group
      const group = activeLink.closest('.nav-group');
      if (group) group.classList.add('open');
    }

    // Close mobile sidebar
    sidebar.classList.remove('open');
    overlay.classList.remove('active');

    // Render content
    renderSection(section);

    // Scroll to top
    window.scrollTo(0, 0);

    // Update hash
    history.pushState(null, '', '#' + section);
  }

  // Attach click handlers to nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigate(link.dataset.section);
    });
  });

  // ─── Render ───
  function renderSection(section) {
    const data = CONTENT[section];
    if (!data) {
      container.innerHTML = '<p>Section not found.</p>';
      return;
    }

    // Check if it's an artist page (has works array)
    if (data.works) {
      renderArtist(data);
    } else if (section === 'home') {
      renderHome(data);
    } else {
      renderArticle(data);
    }
  }

  // ─── Home page ───
  function renderHome(data) {
    let html = '';

    // Hero
    html += `
      <div class="home-hero">
        <img src="${data.heroImg}" alt="${data.heroTitle}" loading="lazy">
        <div class="home-hero-overlay">
          <h2>${data.heroTitle}</h2>
          <p>${data.heroSub}</p>
        </div>
      </div>
    `;

    html += `<h1 class="page-title">${data.title}</h1>`;
    html += `<p class="page-meta">${data.meta}</p>`;
    html += data.body;

    // Region cards
    if (data.cards) {
      html += '<div class="artist-grid">';
      data.cards.forEach(card => {
        html += `
          <div class="artist-card" data-nav="${card.section}">
            <img class="artist-card-img" src="${card.img}" alt="${card.name}" loading="lazy">
            <div class="artist-card-body">
              <div class="artist-card-name">${card.name}</div>
              <div class="artist-card-info">${card.info}</div>
            </div>
          </div>
        `;
      });
      html += '</div>';
    }

    // Quick links to history sections
    html += `
      <hr class="divider">
      <h2 class="section-title">Background</h2>
      <p>
        <a href="#" class="btn" data-nav="origins">Origins</a>
        <a href="#" class="btn" data-nav="techniques" style="margin-left:0.5rem;">Techniques & Style</a>
        <a href="#" class="btn" data-nav="legacy" style="margin-left:0.5rem;">Legacy & Influence</a>
      </p>
    `;

    container.innerHTML = html;
    attachCardLinks();
  }

  // ─── Article page (history sections) ───
  function renderArticle(data) {
    let html = `
      <h1 class="page-title">${data.title}</h1>
      <p class="page-meta">${data.meta}</p>
      ${data.body}
    `;
    container.innerHTML = html;
  }

  // ─── Artist page ───
  function renderArtist(data) {
    let html = '';

    // Header with portrait
    html += `
      <div class="artist-header">
        <img class="artist-portrait" src="${data.portrait}" alt="${data.title}" loading="lazy">
        <div class="artist-bio">
          <p class="artist-nationality">${data.nationality}</p>
          <h1>${data.title}</h1>
          <p class="artist-dates">${data.dates}</p>
          <p>${data.bio}</p>
        </div>
      </div>
    `;

    // Works gallery
    html += `<h2 class="section-title">Selected Works</h2>`;
    html += '<div class="gallery-grid">';
    data.works.forEach(work => {
      html += `
        <div class="gallery-item" data-img="${work.img}" data-caption="${work.title}, ${work.date}">
          <img class="gallery-img" src="${work.img}" alt="${work.title}" loading="lazy">
          <div class="gallery-caption">
            <div class="gallery-title">${work.title}</div>
            <div class="gallery-date">${work.date}</div>
          </div>
        </div>
      `;
    });
    html += '</div>';

    container.innerHTML = html;
    attachGalleryListeners();
  }

  // ─── Card / button navigation links ───
  function attachCardLinks() {
    container.querySelectorAll('[data-nav]').forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        navigate(el.dataset.nav);
      });
      el.style.cursor = 'pointer';
    });
  }

  // ─── Gallery lightbox ───
  function attachGalleryListeners() {
    container.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const img = item.dataset.img;
        const caption = item.dataset.caption;
        openLightbox(img, caption);
      });
    });
  }

  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxImg.alt = caption;
    lightboxCaption.textContent = caption;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });

  // ─── Broken image handler ───
  document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG' && !e.target.dataset.failed) {
      e.target.dataset.failed = '1';
      e.target.style.background = '#e8e5de';
      e.target.style.display = 'flex';
      e.target.alt = e.target.alt || 'Image unavailable';
    }
  }, true);

  // ─── Init ───
  // Open all nav groups by default
  document.querySelectorAll('.nav-group').forEach(g => g.classList.add('open'));

  // Load from hash or default to home
  const initialSection = location.hash ? location.hash.slice(1) : 'home';
  navigate(initialSection);

  // Handle back/forward
  window.addEventListener('popstate', () => {
    const section = location.hash ? location.hash.slice(1) : 'home';
    navigate(section);
  });
})();
