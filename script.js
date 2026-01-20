// Navigation active link (works on index and projects pages)
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

if (navLinks.length && sections.length) {
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href') || '';
      if (href.includes('#') && href === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

// Contact button (guarded)
const contactBtn = document.getElementById('contactBtn');
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    alert('You can contact me via email or LinkedIn.');
  });
}

// Projects gallery modal
const projectCards = document.querySelectorAll('.project-card');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-content img');

if (projectCards.length && modal && modalImg) {
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const full = img.dataset.full || img.src;
      modalImg.src = full;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  // Close modal when clicking overlay
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      modalImg.src = '';
    }
  });

  // Close modal on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      modalImg.src = '';
    }
  });
}
