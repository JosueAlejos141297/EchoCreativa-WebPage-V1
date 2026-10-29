/* ==========================================================================
   ECHOCREATIVA — INTERACTIVE DIAGNOSTIC ENGINE ("EMPIEZA POR TU RETO")
   Inspirado en el prototipo Lovable y la propuesta comercial oficial
   ========================================================================== */

const DIAGNOSTIC_DATA = [
  {
    id: 'clientes',
    tabIndex: '01 · Adquisición',
    tabLabel: 'Necesito más clientes',
    badge: '01 · Crecimiento Comercial & Visibilidad',
    headline: '“Tengo un buen servicio o producto, pero nos cuesta atraer clientes calificados constantemente”',
    description: 'Transformamos tu presencia digital en un motor de captación activo: estructuramos tu sitio web para conversión, posicionamos tu negocio en búsquedas locales y activamos campañas con contenido que genera confianza inmediata.',
    solutions: [
      'Sitio web o tienda en línea optimizada para conversión y celular (One Page o Multipágina)',
      'Alta y optimización en Google Business Profile para búsquedas locales cercanas',
      'Estrategia de redes sociales (Facebook + LinkedIn / Instagram) con copies consultivos',
      'Campañas de anuncios pagados en Google y Meta enfocadas en captar prospectos listos'
    ],
    recommendedPackage: 'Páginas Web / Redes Impulso',
    whatsappMessage: 'Hola EchoCreativa, realicé el diagnóstico en su sitio web. Mi reto principal es que necesito más clientes calificados y mejorar mi presencia digital. ¿Podemos platicarlo?'
  },
  {
    id: 'datos',
    tabIndex: '02 · Inteligencia',
    tabLabel: 'Aprovechar mis datos',
    badge: '02 · Business Intelligence & Control',
    headline: '“Tengo años de información en bases de datos (SQL, ERP, Excel), pero no puedo ver tendencias ni margen real”',
    description: 'Conectamos y normalizamos tus fuentes de datos operativas existentes para crear tableros ejecutivos en tiempo real. Obtén visibilidad inmediata de tus números clave sin esperar cierres mensuales manuales.',
    solutions: [
      'Extracción y limpieza directa sobre bases de datos SQL Server, Firebird y archivos operativos',
      'Tableros ejecutivos de ventas, compras, cobranza, márgenes y rendimiento por vendedor',
      'Alertas automáticas ante desviaciones de inventario, bajas en ventas o cuentas vencidas',
      'Acceso móvil y seguro para directores y gerentes desde cualquier dispositivo'
    ],
    recommendedPackage: 'Business Intelligence & Dashboards',
    whatsappMessage: 'Hola EchoCreativa, en el diagnóstico elegí el reto de "Aprovechar mis datos". Me interesa conectar mis bases de datos actuales a tableros ejecutivos claros. ¿Cómo es el proceso?'
  },
  {
    id: 'automatizacion',
    tabIndex: '03 · Eficiencia',
    tabLabel: 'Automatizar un proceso',
    badge: '03 · Flujos Ágiles & Cero Errores',
    headline: '“Mi equipo pierde horas capturando datos repetitivos, pasando notas de papel o respondiendo lo mismo por WhatsApp”',
    description: 'Eliminamos la fricción manual en los puntos más críticos de tu operación: integramos captura móvil en almacén, automatizamos layouts bancarios para dispersión y habilitamos respuestas instantáneas con asistentes inteligentes.',
    solutions: [
      'Chatbot con IA en WhatsApp para resolver dudas, cotizar y filtrar prospectos 24/7 (Planes desde $1,900/mes con activación inmediata)',
      'Toma y conteo de inventario móvil directo desde celular o tableta a almacén',
      'Generación y validación automática de layouts de dispersión bancaria y nómina',
      'Conexión de formularios web directamente con tu equipo comercial o administrativo'
    ],
    recommendedPackage: 'Chatbots IA Todo Incluido / App Móvil',
    whatsappMessage: 'Hola EchoCreativa, mi empresa tiene procesos manuales repetitivos (inventario / atención en WhatsApp / dispersión) que necesitamos automatizar. ¿Podemos revisar nuestro caso?'
  },
  {
    id: 'decision',
    tabIndex: '04 · Dirección',
    tabLabel: 'Información para decidir',
    badge: '04 · Indicadores & Toma de Decisiones',
    headline: '“Las decisiones estratégicas las tomamos por intuición porque los reportes tardan semanas en consolidarse”',
    description: 'Diseñamos paneles directivos con indicadores clave de rendimiento (KPIs). Sabrás exactamente qué producto es el más rentable, qué cliente está en riesgo de pérdida y cómo va el flujo de caja hoy mismo.',
    solutions: [
      'Definición de KPIs prioritarios para dirección general y gerencias operativas',
      'Monitoreo en vivo de cumplimiento de metas y métricas de desempeño comercial',
      'Informes ejecutivos automáticos enviados periódicamente a tu correo o WhatsApp',
      'Comparativas históricas para proyectar inventarios, compras y flujo financiero'
    ],
    recommendedPackage: 'Ecosistema de Datos & Dashboards',
    whatsappMessage: 'Hola EchoCreativa, quiero implementar un tablero con indicadores clave para tomar decisiones directivas con datos certeros. ¿Podrían orientarme?'
  },
  {
    id: 'sistemas',
    tabIndex: '05 · Conectividad',
    tabLabel: 'Conectar mis sistemas',
    badge: '05 · Ecosistema Aspel, SQL & WhatsApp',
    headline: '“Usamos Aspel (SAE, COI, NOI) o un sistema interno, pero trabaja aislado de nuestras ventas y clientes”',
    description: 'No necesitas cambiar de ERP ni tirar tu inversión previa a la basura. En EchoCreativa construimos puentes y extensiones a medida que potencian lo que ya dominas, conectando tus sistemas con WhatsApp, celulares y la nube.',
    solutions: [
      'Puentes entre bases de datos de Aspel SAE / COI / NOI y aplicaciones web o móviles',
      'Cotizadores web que respetan el orden de partidas exacto y existencias en tiempo real',
      'Módulos de consulta de pedidos y facturación automatizada para clientes',
      'Sincronización bidireccional segura sin alterar la integridad de tus catálogos'
    ],
    recommendedPackage: 'Desarrollo de Integración a Medida',
    whatsappMessage: 'Hola EchoCreativa, en mi negocio ya usamos Aspel / SQL y queremos conectar nuestra operación con herramientas móviles y WhatsApp sin cambiar de sistema. ¿Podemos agendar una llamada?'
  }
];

let activeDiagnosticIndex = 0;

function renderDiagnostic(index) {
  activeDiagnosticIndex = index;
  const data = DIAGNOSTIC_DATA[index];

  // Update tabs
  const tabButtons = document.querySelectorAll('.btn-d-tab');
  tabButtons.forEach((btn, idx) => {
    if (idx === index) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Target elements
  const badgeEl = document.getElementById('diagBadge');
  const headlineEl = document.getElementById('diagHeadline');
  const descEl = document.getElementById('diagDesc');
  const solutionsEl = document.getElementById('diagSolutions');
  const pkgEl = document.getElementById('diagPkg');
  const ctaBtn = document.getElementById('diagCtaBtn');

  if (badgeEl) badgeEl.textContent = data.badge;
  if (headlineEl) headlineEl.textContent = data.headline;
  if (descEl) descEl.textContent = data.description;
  if (pkgEl) pkgEl.textContent = data.recommendedPackage;

  if (solutionsEl) {
    solutionsEl.innerHTML = data.solutions.map(sol => `<li>${sol}</li>`).join('');
  }

  if (ctaBtn) {
    const encoded = encodeURIComponent(data.whatsappMessage);
    ctaBtn.href = `https://wa.me/525670069062?text=${encoded}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const tabsContainer = document.getElementById('diagnosticTabsContainer');
  if (tabsContainer) {
    tabsContainer.innerHTML = DIAGNOSTIC_DATA.map((item, idx) => `
      <button type="button" class="btn-d-tab ${idx === 0 ? 'active' : ''}" onclick="renderDiagnostic(${idx})">
        <span class="tab-idx">${item.tabIndex}</span>
        <span class="tab-text">${item.tabLabel}</span>
      </button>
    `).join('');
  }

  renderDiagnostic(0);
});
