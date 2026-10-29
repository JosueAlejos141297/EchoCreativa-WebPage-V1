/* ==========================================================================
   ECHOCREATIVA — MAIN APPLICATION CONTROLLER
   Theme Manager, ScrollSpy, Animations, Mobile Menu, Contact Form Handler
   ========================================================================== */

// 1. THEME MANAGEMENT (PERSISTED IN LOCALSTORAGE)
const THEME_STORAGE_KEY = 'echocreativa_theme_pref';

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'dark';
  applyTheme(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);

  const themeIcon = document.getElementById('themeIcon');
  const themeBtn = document.getElementById('themeToggleBtn');

  if (theme === 'light') {
    if (themeIcon) themeIcon.textContent = '🌙';
    if (themeBtn) themeBtn.setAttribute('title', 'Cambiar a modo oscuro');
  } else {
    if (themeIcon) themeIcon.textContent = '☀️';
    if (themeBtn) themeBtn.setAttribute('title', 'Cambiar a modo claro');
  }
}

// 2. STICKY HEADER & SCROLLSPY
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header shadow/blur on scroll
    if (header) {
      if (scrollPos > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Scrollspy highlight
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

// 3. REVEAL ON SCROLL OBSERVER
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// 4. MOBILE DRAWER NAVIGATION
function toggleMobileMenu() {
  const drawer = document.getElementById('mobileNavDrawer');
  if (!drawer) return;
  drawer.classList.toggle('open');
  document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobileNavDrawer');
  if (!drawer) return;
  drawer.classList.remove('open');
  document.body.style.overflow = '';
}

// 5. OPERABLE CONTACT FORM HANDLER
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('cf_name')?.value.trim() || '';
    const company = document.getElementById('cf_company')?.value.trim() || '';
    const whatsapp = document.getElementById('cf_whatsapp')?.value.trim() || '';
    const email = document.getElementById('cf_email')?.value.trim() || '';
    const service = document.getElementById('cf_service')?.value || 'General';
    const message = document.getElementById('cf_message')?.value.trim() || '';

    if (!name || !whatsapp) {
      alert('Por favor proporciona al menos tu nombre y número de WhatsApp para contactarte.');
      return;
    }

    const feedback = document.getElementById('formFeedbackAlert');
    if (feedback) {
      feedback.style.display = 'block';
      feedback.className = 'form-feedback-alert success';
      feedback.innerHTML = `<strong>¡Mensaje preparado con éxito!</strong><br>Te estamos redirigiendo a WhatsApp para iniciar la conversación con un consultor de EchoCreativa...`;
    }

    // Format WhatsApp prefilled message
    const formattedMsg = `Hola EchoCreativa, mi nombre es ${name}${company ? ' de ' + company : ''}.\n• Tel/WhatsApp: ${whatsapp}\n• Correo: ${email || 'No proporcionado'}\n• Interés principal: ${service}\n• Detalle de mi reto: ${message || 'Deseo conocer sus soluciones.'}\n\n¿Podemos platicarlo?`;

    const encoded = encodeURIComponent(formattedMsg);
    const waUrl = `https://wa.me/525670069062?text=${encoded}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  });
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeaderScroll();
  initScrollAnimations();
  initContactForm();
});
