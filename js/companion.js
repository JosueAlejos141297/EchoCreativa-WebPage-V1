/* ==========================================================================
   ECHOCREATIVA — ALEBRIJE DIGITAL GUARDIAN (COMPANION WIDGET)
   Espíritu protector y guía de los retos digitales de la empresa
   ========================================================================== */

const COMPANION_TIPS = [
  {
    title: '✦ Guardián Echo · Inicio',
    text: '¡Hola! Soy tu alebrije guía. En EchoCreativa fusionamos instinto creativo y rigor técnico para proteger y multiplicar el valor de tu negocio.'
  },
  {
    title: '✦ Guardián Echo · Tríada Híbrida',
    text: '¿Sabías que el software sin estrategia es un gasto frío, y el marketing sin sistemas operativos no escala? Por eso integramos Desarrollo + Marketing + IA.'
  },
  {
    title: '✦ Guardián Echo · Diagnóstico',
    text: 'No necesitas saber qué tecnología pedir de antemano. Elige tu cuello de botella en las pestañas y te diremos la combinación exacta.'
  },
  {
    title: '✦ Guardián Echo · Ecosistema Aspel & SQL',
    text: 'No tires a la basura tus sistemas actuales. Conectamos Aspel SAE, COI, NOI y bases SQL directamente con WhatsApp y dispositivos móviles.'
  },
  {
    title: '✦ Guardián Echo · Inversión Clara',
    text: 'Cero sorpresas: todos nuestros paquetes cuentan con precios públicos transparentes desde $3,990 MXN para páginas web y chatbots inteligentes.'
  }
];

let currentTipIndex = 0;
let isCompanionOpen = false;

function nextCompanionTip() {
  currentTipIndex = (currentTipIndex + 1) % COMPANION_TIPS.length;
  updateCompanionDisplay();
}

function updateCompanionDisplay() {
  const titleEl = document.getElementById('companionTitle');
  const textEl = document.getElementById('companionText');
  const tip = COMPANION_TIPS[currentTipIndex];

  if (titleEl) titleEl.textContent = tip.title;
  if (textEl) textEl.textContent = tip.text;
}

function closeCompanionBubble(e) {
  if (e) e.stopPropagation();
  const bubble = document.getElementById('companionBubble');
  if (!bubble) return;
  isCompanionOpen = false;
  bubble.style.display = 'none';
}

function toggleCompanionBubble(e) {
  if (e) e.stopPropagation();
  const bubble = document.getElementById('companionBubble');
  if (!bubble) return;

  isCompanionOpen = !isCompanionOpen;
  bubble.style.display = isCompanionOpen ? 'block' : 'none';
}

function triggerCompanionAction() {
  const bubble = document.getElementById('companionBubble');
  if (!bubble) return;
  if (!isCompanionOpen || bubble.style.display === 'none') {
    bubble.style.display = 'block';
    isCompanionOpen = true;
  } else {
    nextCompanionTip();
  }
}

// Contextual section triggers
function initCompanionScrollObserver() {
  const sections = [
    { id: 'inicio', tipIdx: 0 },
    { id: 'proposito', tipIdx: 1 },
    { id: 'soluciones', tipIdx: 1 },
    { id: 'diagnostico', tipIdx: 2 },
    { id: 'casos', tipIdx: 3 },
    { id: 'precios', tipIdx: 4 }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const found = sections.find(s => s.id === entry.target.id);
        if (found && found.tipIdx !== currentTipIndex) {
          currentTipIndex = found.tipIdx;
          updateCompanionDisplay();
        }
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => {
    const el = document.getElementById(s.id);
    if (el) observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateCompanionDisplay();
  initCompanionScrollObserver();
});
